import { Denops, Table, vars } from "./deps.ts";
import * as node from "./node.ts";

export async function actionGetNodeList(denops: Denops): Promise<void> {
  const nodes = await node.list();
  await vars.b.set(denops, "k8s_nodes", nodes);
  const body = nodes.map((node) => {
    return [
      node.metadata?.name ?? "<unknown>",
      node.status?.conditions?.at(-1)?.type ?? "<unknown>",
      node.status?.nodeInfo?.kubeletVersion ?? "<unknown>",
      node.status?.nodeInfo?.operatingSystem ?? "<unknown>",
      node.status?.nodeInfo?.containerRuntimeVersion ?? "<unknown>",
    ];
  });
  const header = ["NAME", "STATUS", "VERSION", "OS", "RUNTIME"];
  const table = new Table();
  table.header(header)
    .body(body);

  await denops.cmd("setlocal modifiable");
  await denops.call("setline", 1, table.toString().split("\n"));
  await denops.cmd(
    "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-nodes",
  );
}
