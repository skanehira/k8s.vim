import * as pod from "./pod.ts";
import { batch, Denops, Table, vars } from "./deps.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";
import { IoK8sApiCoreV1ContainerStatus } from "./models/IoK8sApiCoreV1ContainerStatus.ts";

export function renderPodList(pods: IoK8sApiCoreV1Pod[]): string[] {
  const body = pods.map((pod) => {
    const podIPs = pod.status?.podIPs?.map((podip) => podip.ip ?? "");
    return [
      pod.metadata?.namespace ?? "<unknown>",
      pod.metadata?.name ?? "<unknown>",
      pod.status?.phase ?? "<unknown>",
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
  namespace: string,
): Promise<void> {
  const pods = await pod.list({
    namespace: namespace,
  });
  await vars.b.set(denops, "k8s_pods", pods);
  const rows = renderPodList(pods);

  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pods",
    );
  });
}

export function renderContainerList(
  containers: IoK8sApiCoreV1ContainerStatus[],
): string[] {
  const header = ["NAME", "IMAGE", "READY", "STATE", "START TIME"];
  const body = containers.map((con) => {
    let state = "<unknown>";
    let startTime = "";
    if (con.state?.running) {
      state = "Running";
      startTime = con.state.running.startedAt?.toLocaleString() ?? "<unknown>";
    } else if (con.state?.waiting) {
      state = "Waiting";
      startTime = "";
    } else if (con.state?.terminated) {
      state = "Terminated";
      startTime = con.state.terminated.startedAt?.toLocaleString() ??
        "<unknown>";
    }

    const line = [
      con.name,
      con.image,
      con.ready.toString(),
      state,
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
  opts: {
    namespace: string;
    name: string;
  },
): Promise<void> {
  const p = await pod.get(opts.name, {
    namespace: opts.namespace,
  });
  await vars.b.set(denops, "k8s_pod", p);
  if (!p.status?.containerStatuses) {
    console.warn("no containers");
    return;
  }

  const rows = renderContainerList(p.status.containerStatuses);
  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, rows);
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-containers",
  );
}

export async function actionDescribePod(
  denops: Denops,
  name: string,
  opts: {
    namespace: string;
  },
): Promise<void> {
  const output = await pod.describe(name, opts);
  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, output.split("\n"));
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pod-describe",
  );
}

export async function actionGetResourceAsYaml(
  denops: Denops,
  name: string,
  opts: {
    namespace: string;
  },
): Promise<void> {
  const output = await pod.getAsYaml(name, opts);
  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, output.split("\n"));
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=yaml | nnoremap <buffer> q :bw!<CR>",
  );
}
