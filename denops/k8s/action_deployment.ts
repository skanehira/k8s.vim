import { batch, Denops, Table, vars } from "./deps.ts";
import { Resource } from "./resource.ts";
import { IoK8sApiAppsV1DeploymentList } from "./models/IoK8sApiAppsV1DeploymentList.ts";
import { IoK8sApiAppsV1Deployment } from "./models/IoK8sApiAppsV1Deployment.ts";
import { describeResource, getResourceAsObject } from "./cli.ts";

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

  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_deployments", deployments);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-deployments",
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
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-deployment-describe",
    );
  });
}
