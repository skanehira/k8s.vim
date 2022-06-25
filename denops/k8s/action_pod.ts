import * as pod from "./pod.ts";
import { batch, Denops, Table, vars } from "./deps.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";
import { IoK8sApiCoreV1ContainerStatus } from "./models/IoK8sApiCoreV1ContainerStatus.ts";
import { IoK8sApiCoreV1PodCondition } from "./models/IoK8sApiCoreV1PodCondition.ts";

export function renderPodStatus(pod: IoK8sApiCoreV1Pod): string {
  let status = pod.status?.phase as string ?? "Unknown";
  if (pod.status?.reason) {
    status = pod.status.reason;
  }
  let initializing = false;

  if (pod.status?.initContainerStatuses) {
    for (const [i, container] of pod.status.initContainerStatuses.entries()) {
      if (
        container.state?.terminated && container.state.terminated.exitCode === 0
      ) {
        continue;
      }
      if (container.state?.terminated) {
        initializing = true;
        if (container.state.terminated.reason) {
          status = container.state.terminated.reason;
        } else {
          if (container.state.terminated.signal !== 0) {
            status = `Init:Signal:${container.state.terminated.signal}`;
          } else {
            status = `Init:Signal:${container.state.terminated.exitCode}`;
          }
        }
      } else if (container.state?.waiting) {
        initializing = true;
        const reason = container.state.waiting?.reason;
        if (reason && reason !== "PodInitializing") {
          status = "Init:${reason}";
        }
      } else {
        initializing = true;
        status = `Init:${i}/${pod.spec?.initContainers?.length}`;
      }
      break;
    }
  }

  if (!initializing && pod.status?.containerStatuses) {
    let hasRunning = false;
    const containers = pod.status.containerStatuses;

    for (let i = containers.length - 1; i >= 0; i--) {
      const container = containers[i];
      if (!container.state) {
        continue;
      }
      const state = container.state;
      if (state.waiting && state.waiting.reason) {
        status = state.waiting.reason;
      } else if (state.terminated && state.terminated.reason) {
        status = state.terminated.reason;
      } else if (state.terminated && state.terminated.reason !== "") {
        if (state.terminated.signal != 0) {
          status = `Signal:${state.terminated.signal}`;
        } else {
          status = `ExitCode:${state.terminated.exitCode}`;
        }
      } else if (container.ready && state.running) {
        hasRunning = true;
      }
    }

    if (status === "Completed" && hasRunning && pod.status?.conditions) {
      if (hasPodReadyCondition(pod.status.conditions)) {
        status = "Running";
      } else {
        status = "NotReady";
      }
    }
  }

  if (pod.metadata?.deletionTimestamp) {
    if (pod.status?.reason === "NodeLost") {
      status = "Unknown";
    } else {
      status = "Terminating";
    }
  }

  return status;
}

function hasPodReadyCondition(
  conditions: IoK8sApiCoreV1PodCondition[],
): boolean {
  for (const condition of conditions) {
    if (condition.type === "Ready" && condition.status === "True") {
      return true;
    }
  }
  return false;
}

export function renderPodList(pods: IoK8sApiCoreV1Pod[]): string[] {
  const body = pods.map((pod) => {
    const podIPs = pod.status?.podIPs?.map((podip) => podip.ip ?? "");
    return [
      pod.metadata?.namespace ?? "<unknown>",
      pod.metadata?.name ?? "<unknown>",
      renderPodStatus(pod),
      podIPs?.join(" ") ?? "<unknown>",
      pod.spec?.nodeName ?? "<unknown>",
      pod.status?.startTime?.toLocaleString() ?? "<unknown>",
    ];
  });
  const header = ["NAMESPACE", "NAME", "STATUS", "IP", "NODE", "START TIME"];
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function actionGetPodList(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(/k8s:\/\/(.*)\/pods/);
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const namespace = result[1];
  if (!namespace) {
    throw new Error("invalid namespace");
  }

  const pods = await pod.list({
    namespace: namespace,
  });
  const rows = renderPodList(pods);

  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_pods", pods);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pods",
    );
  });
}

export function renderContainerStatus(
  container: IoK8sApiCoreV1ContainerStatus,
): [string, string] {
  const state = container.state;
  if (!state) {
    return ["<unknown>", ""];
  }

  if (state.waiting && state.waiting.reason) {
    return [state.waiting.reason, ""];
  }
  if (state.terminated && state.terminated.reason) {
    const started = state.terminated.startedAt;
    return [state.terminated.reason, started ? started.toLocaleString() : ""];
  }
  if (state.terminated && state.terminated.reason !== "") {
    const started = state.terminated.startedAt;
    const startTime = started ? started.toLocaleString() : "";
    if (state.terminated.signal != 0) {
      return [`Signal:${state.terminated.signal}`, startTime];
    } else {
      return [`ExitCode:${state.terminated.exitCode}`, startTime];
    }
  }
  if (container.ready && state.running) {
    const started = state.running.startedAt;
    const startTime = started ? started.toLocaleString() : "";
    return ["Running", startTime];
  }
  return ["<unknown>", ""];
}

export function renderContainerList(
  containers: IoK8sApiCoreV1ContainerStatus[],
): string[] {
  const header = ["NAME", "IMAGE", "READY", "STATE", "START TIME"];
  const body = containers.map((con) => {
    const [status, startTime] = renderContainerStatus(con);
    const line = [
      con.name,
      con.image,
      con.ready.toString(),
      status,
      startTime,
    ];
    return line;
  });
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function actionGetPodContainers(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/containers/);
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const [namespace, podName] = result.slice(1);
  if (!namespace || !podName) {
    throw new Error("invalid pod name");
  }

  const p = await pod.get(podName, {
    namespace: namespace,
  });

  if (!p.status?.containerStatuses) {
    console.warn("no containers");
    return;
  }

  const rows = renderContainerList(p.status.containerStatuses);
  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_pod", p);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-containers",
    );
  });
}

export async function actionDescribePod(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/describe/);
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const [namespace, podName] = result.slice(1);
  if (!namespace || !podName) {
    throw new Error("invalid pod name");
  }

  const output = await pod.describe(podName, { namespace });
  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pod-describe",
    );
  });
}

export async function actionGetResourceAsYaml(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/yaml/);
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const [namespace, podName] = result.slice(1);
  if (!namespace || !podName) {
    throw new Error("invalid pod name");
  }

  const output = await pod.getAsYaml(podName, { namespace });
  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=yaml | nnoremap <buffer> q :bw!<CR>",
    );
  });
}

export async function actionDelete(
  _denops: Denops,
  ...params: string[]
): Promise<void> {
  const [name, namespace] = params;
  await pod.remove(name, { namespace });
}
