import * as pod from "./pod.ts";
import { Denops, Table, vars } from "./deps.ts";

export async function actionGetPodList(
  denops: Denops,
  namespace: string,
): Promise<void> {
  const pods = await pod.list({
    namespace: namespace,
  });
  await vars.b.set(denops, "k8s_pods", pods);
  const body = pods.map((pod) => {
    const podIPs = pod.status?.podIPs?.map((podip) => podip.ip ?? "");
    return [
      pod.metadata?.namespace ?? "<unknown>",
      pod.metadata?.name ?? "<unknown>",
      pod.status?.phase ?? "<unknown>",
      podIPs?.join(" ") ?? "<unknown>",
      pod.status?.startTime?.toLocaleString() ?? "<unknown>",
    ];
  });
  const header = ["NAMESPACE", "NAME", "STATUS", "IP", "START TIME"];
  const table = new Table();
  table.header(header)
    .body(body);

  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, table.toString().split("\n"));
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-pods",
  );
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
  const header = ["NAME", "IMAGE", "READY", "STATE", "START TIME"];
  if (!p.status?.containerStatuses) {
    console.warn("no containers");
    return;
  }
  const body = p.status.containerStatuses.map((con) => {
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

  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, table.toString().split("\n"));
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-containers",
  );
}
