import { batch, Denops, Table, vars } from "./deps.ts";
import * as node from "./node.ts";
import { IoK8sApiCoreV1Node } from "./models/IoK8sApiCoreV1Node.ts";
import { IoK8sApiCoreV1NodeCondition } from "./models/IoK8sApiCoreV1NodeCondition.ts";
import { Resource } from "./resource.ts";

export function renderNodeStatus(node: IoK8sApiCoreV1Node): string {
  const status: string[] = [];

  const conditions: Record<string, IoK8sApiCoreV1NodeCondition> = {};
  const nodeAllConditions = ["Ready"];
  for (const cond of node.status?.conditions!) {
    conditions[cond.type] = cond;
  }

  for (const validCondition of nodeAllConditions) {
    const condition = conditions[validCondition];
    if (!condition) {
      continue;
    }
    if (condition.status === "True") {
      status.push(condition.type);
    } else {
      status.push("Not" + condition.type);
    }
  }

  if (status.length === 0) {
    status.push("Unknown");
  }
  if (node.spec?.unschedulable) {
    status.push("SchedulingDisabled");
  }

  return status.join(",");
}

const labelNodeRolePrefix = "node-role.kubernetes.io/";
const nodeLabelRole = "kubernetes.io/role";

export function getRole(node: IoK8sApiCoreV1Node): string {
  const roles: string[] = [];
  if (node.metadata?.labels) {
    for (const [k, v] of Object.entries(node.metadata.labels)) {
      if (k.startsWith(labelNodeRolePrefix)) {
        const role = k.replace(labelNodeRolePrefix, "");
        if (role) roles.push(role);
      } else if (k.startsWith(nodeLabelRole)) {
        roles.push(v);
      }
    }
  }
  if (roles.length) return roles.join(",");
  return "<none>";
}

export function getNodeInternalIP(node: IoK8sApiCoreV1Node): string {
  if (node.status?.addresses) {
    for (const addr of node.status?.addresses) {
      if (addr.type === "InternalIP") {
        return addr.address;
      }
    }
  }
  return "<none>";
}

export function getNodeExternalIP(node: IoK8sApiCoreV1Node): string {
  if (node.status?.addresses) {
    for (const addr of node.status?.addresses) {
      if (addr.type === "ExternalIP") {
        return addr.address;
      }
    }
  }
  return "<none>";
}

export function renderNodeList(
  nodes: IoK8sApiCoreV1Node[],
): string[] {
  const body = nodes.map((node) => {
    return [
      node.metadata?.name ?? "<unknown>",
      renderNodeStatus(node),
      getRole(node),
      node.metadata?.creationTimestamp?.toLocaleString() ?? "<unknown>",
      node.status?.nodeInfo?.kubeletVersion ?? "<unknown>",
      getNodeInternalIP(node),
      getNodeExternalIP(node),
      node.status?.nodeInfo?.osImage ?? "<unknown>",
      node.status?.nodeInfo?.kernelVersion ?? "<unknown>",
      node.status?.nodeInfo?.containerRuntimeVersion ?? "<unknown>",
    ];
  });
  const header = [
    "NAME",
    "STATUS",
    "ROLES",
    "CREATED TIME",
    "VERSION",
    "INTERNAL IP",
    "EXTERNAL IP",
    "OS IMAGE",
    "KERNEL VERSION",
    "RUNTIME",
  ];
  const table = new Table();
  table.header(header)
    .body(body);
  return table.toString().split("\n");
}

export async function actionGetNodeList(
  denops: Denops,
  _resource: Resource,
): Promise<void> {
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
  resource: Resource,
): Promise<void> {
  if (!resource.name) {
    throw new Error(`invalid node name`);
  }
  const output = await node.describe(resource.name);
  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-node-describe",
    );
  });
}
