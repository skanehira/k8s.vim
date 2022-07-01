import { Denops, Table } from "./deps.ts";
import { Resource } from "./resource.ts";
import { IoK8sApiAppsV1DeploymentList } from "./models/IoK8sApiAppsV1DeploymentList.ts";
import { IoK8sApiAppsV1Deployment } from "./models/IoK8sApiAppsV1Deployment.ts";
import { deleteResource, getResourceAsObject } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";

export function renderDeploymentList(
  deployments: IoK8sApiAppsV1Deployment[],
): string[] {
  const body = deployments.map((dep) => {
    return [
      dep.metadata?.namespace ?? "<unknown>",
      dep.metadata?.name ?? "<unknown>",
      `${dep.status?.readyReplicas ?? 0}/${dep.spec?.replicas ?? 0}`,
      dep.status?.updatedReplicas ?? "0",
      dep.status?.availableReplicas ?? "0",
      dep.metadata?.creationTimestamp
        ? dep.metadata.creationTimestamp.toLocaleString()
        : "<unknown>",
    ];
  });
  const header = [
    "NAMESPACE",
    "NAME",
    "READY",
    "UP-TO-DATE",
    "AVAILABLE",
    "CREATED TIME",
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
  const result = await getResourceAsObject<IoK8sApiAppsV1DeploymentList>(
    resource,
  );
  const deployments = result.items;
  const rows = renderDeploymentList(deployments);

  await drawRows(denops, rows, "k8s-deployments", {
    data: { key: "k8s_deployments", value: deployments },
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
  await deleteResource("deployment", resource.opts.name, { namespace });
}
