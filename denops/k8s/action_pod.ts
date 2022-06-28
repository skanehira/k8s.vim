import { batch, Denops, Table, vars } from "./deps.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";
import { IoK8sApiCoreV1PodList } from "./models/IoK8sApiCoreV1PodList.ts";
import { IoK8sApiCoreV1ContainerStatus } from "./models/IoK8sApiCoreV1ContainerStatus.ts";
import { IoK8sApiCoreV1PodCondition } from "./models/IoK8sApiCoreV1PodCondition.ts";
import { Resource } from "./resource.ts";
import {
  deleteResource,
  describeResource,
  getResourceAsObject,
  getResourceAsText,
} from "./cli.ts";

export function renderPodStatusAndReady(
  pod: IoK8sApiCoreV1Pod,
): [string, string] {
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

  const totalContainers = pod.spec?.containers?.length ?? 0;
  let readyContainers = 0;

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
        readyContainers++;
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

  const ready = `${readyContainers}/${totalContainers}`;
  return [status, ready];
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
    const [status, ready] = renderPodStatusAndReady(pod);
    return [
      pod.metadata?.namespace ?? "<unknown>",
      pod.metadata?.name ?? "<unknown>",
      ready,
      status,
      podIPs?.join(" ") ?? "<unknown>",
      pod.spec?.nodeName ?? "<unknown>",
      pod.status?.startTime?.toLocaleString() ?? "<unknown>",
    ];
  });
  const header = [
    "NAMESPACE",
    "NAME",
    "READY",
    "STATUS",
    "IP",
    "NODE",
    "START TIME",
  ];
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function list(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  // NOTE: list action only support json format, so we have to override format
  resource.opts = { ...resource.opts, ...{ format: "json" } };
  delete resource.opts?.name;

  const result = await getResourceAsObject<IoK8sApiCoreV1PodList>(
    resource,
  );
  const pods = result.items;
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

export async function containers(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource?.opts?.name || !resource?.opts?.namespace) {
    throw new Error(
      `require resource name and namespace: ${JSON.stringify(resource)}`,
    );
  }

  resource.opts = { ...resource.opts, ...{ format: "json" } };
  const pod = await getResourceAsObject<IoK8sApiCoreV1Pod>(resource);

  if (!pod.status?.containerStatuses) {
    throw new Error("no containers");
  }

  const rows = renderContainerList(pod.status.containerStatuses);
  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_pod", pod);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-containers",
    );
  });
}

export async function describe(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource?.opts?.name) {
    throw new Error(
      `require resource name: ${JSON.stringify(resource)}`,
    );
  }

  const namespace = resource.opts.namespace;
  const output = await describeResource("pods", resource.opts.name, {
    namespace,
  });

  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pod-describe",
    );
  });
}

export async function yaml(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.opts?.namespace || !resource.opts?.name) {
    throw new Error(
      `require resource name and namespace: ${JSON.stringify(resource)}`,
    );
  }
  resource.opts = { ...resource.opts, ...{ format: "yaml" } };

  const output = await getResourceAsText(resource);

  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=yaml | nnoremap <buffer> q :bw!<CR>",
    );
  });
}

export async function remove(
  _denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.opts?.namespace || !resource.opts?.name) {
    throw new Error(
      `require resource name and namespace: ${JSON.stringify(resource)}`,
    );
  }

  const namespace = resource.opts.namespace;
  await deleteResource("pods", resource.opts.name, { namespace });
}
