import { Denops, Table } from "./deps.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";
import { IoK8sApiCoreV1PodList } from "./models/IoK8sApiCoreV1PodList.ts";
import { IoK8sApiCoreV1ContainerStatus } from "./models/IoK8sApiCoreV1ContainerStatus.ts";
import { IoK8sApiCoreV1PodCondition } from "./models/IoK8sApiCoreV1PodCondition.ts";
import { Resource } from "./resource.ts";
import { getResourceAsObject } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";
import { orUnknown } from "./_util/unknown.ts";

export function renderPodProperties(
  pod: IoK8sApiCoreV1Pod,
): [string, string, number] {
  let status = pod.status?.phase as string ?? "Unknown";
  if (pod.status?.reason) {
    status = pod.status.reason;
  }
  let initializing = false;
  let restarts = 0;

  if (pod.status?.initContainerStatuses) {
    for (const [i, container] of pod.status.initContainerStatuses.entries()) {
      restarts += container.restartCount;
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
          if (
            container.state.terminated.signal &&
            container.state.terminated.signal !== 0
          ) {
            status = `Init:Signal:${container.state.terminated.signal}`;
          } else {
            status = `Init:ExitCode:${container.state.terminated.exitCode}`;
          }
        }
      } else if (container.state?.waiting) {
        initializing = true;
        const reason = container.state.waiting?.reason;
        if (reason && reason !== "PodInitializing") {
          status = `Init:${reason}`;
        }
      } else {
        initializing = true;
        status = `Init:${i}/${pod.spec?.initContainers?.length ?? 0}`;
      }
      break;
    }
  }

  const totalContainers = pod.spec?.containers?.length ?? 0;
  let readyContainers = 0;

  if (!initializing && pod.status?.containerStatuses) {
    restarts = 0;
    let hasRunning = false;
    const containers = pod.status.containerStatuses;

    for (let i = containers.length - 1; i >= 0; i--) {
      const container = containers[i];
      restarts += container.restartCount;
      if (!container.state) {
        continue;
      }
      const state = container.state;
      if (state.waiting && state.waiting.reason) {
        status = state.waiting.reason;
      } else if (state.terminated && state.terminated.reason) {
        status = state.terminated.reason;
      } else if (state.terminated && !state.terminated.reason) {
        if (state.terminated.signal && state.terminated.signal != 0) {
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
  return [status, ready, restarts];
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
    const [status, ready, restarts] = renderPodProperties(pod);
    return [
      orUnknown(pod.metadata?.namespace),
      orUnknown(pod.metadata?.name),
      ready,
      status,
      restarts,
      orUnknown(podIPs?.join(" ")),
      orUnknown(pod.spec?.nodeName),
      orUnknown(pod.status?.startTime?.toLocaleString()),
    ];
  });
  const header = [
    "NAMESPACE",
    "NAME",
    "READY",
    "STATUS",
    "RESTARTS",
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

  await drawRows(denops, rows, "k8s-pods", {
    data: { key: "k8s_pods", value: pods },
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
  if (state.terminated && !state.terminated.reason) {
    const started = state.terminated.startedAt;
    const startTime = started ? started.toLocaleString() : "";
    if (state.terminated.signal && state.terminated.signal != 0) {
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
  await drawRows(
    denops,
    rows,
    "k8s-containers",
    {
      data: { key: "k8s_pod", value: pod },
    },
  );
}
