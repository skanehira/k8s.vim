import { batch, Denops, Table, vars } from "./deps.ts";
import * as node from "./node.ts";
import { IoK8sApiCoreV1Node } from "./models/IoK8sApiCoreV1Node.ts";

export function renderNodeList(
  nodes: IoK8sApiCoreV1Node[],
): string[] {
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
  return table.toString().split("\n");
}

export async function actionGetNodeList(denops: Denops): Promise<void> {
  const nodes = await node.list();
  const rows = renderNodeList(nodes);

  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_nodes", nodes);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-nodes",
    );
  });
}

export async function actionDescribeNode(
  denops: Denops,
  name: string,
): Promise<void> {
  const output = await node.describe(name);
  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-node-describe",
    );
  });
}
