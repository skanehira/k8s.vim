import { Denops, Table } from "./deps.ts";
import { IoK8sApiCoreV1Node } from "./models/IoK8sApiCoreV1Node.ts";
import { IoK8sApiCoreV1NodeList } from "./models/IoK8sApiCoreV1NodeList.ts";
import { IoK8sApiCoreV1NodeCondition } from "./models/IoK8sApiCoreV1NodeCondition.ts";
import { Resource } from "./resource.ts";
import { getResourceAsObject } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";
import { orUnknown } from "./_util/unknown.ts";

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
      orUnknown(node.metadata?.name),
      renderNodeStatus(node),
      getRole(node),
      orUnknown(node.metadata?.creationTimestamp?.toLocaleString()),
      orUnknown(node.status?.nodeInfo?.kubeletVersion),
      getNodeInternalIP(node),
      getNodeExternalIP(node),
      orUnknown(node.status?.nodeInfo?.osImage),
      orUnknown(node.status?.nodeInfo?.kernelVersion),
      orUnknown(node.status?.nodeInfo?.containerRuntimeVersion),
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

export async function list(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  // NOTE: list action only support json format, so we have to override format
  resource.opts = { ...resource.opts, ...{ format: "json" } };
  const result = await getResourceAsObject<IoK8sApiCoreV1NodeList>(resource);
  const nodes = result.items;
  const rows = renderNodeList(nodes);
  await drawRows(denops, rows, "k8s-nodes", {
    data: { key: "k8s_nodes", value: nodes },
  });
}
