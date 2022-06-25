import { batch, Denops, Table, vars } from "./deps.ts";
import { IoK8sApiAppsV1Deployment } from "./models/IoK8sApiAppsV1Deployment.ts";
import * as deployment from "./deployment.ts";

export function renderDeploymentList(
  deployments: IoK8sApiAppsV1Deployment[],
): string[] {
  const body = deployments.map((dep) => {
    return [
      dep.metadata?.namespace ?? "<unknown>",
      dep.metadata?.name ?? "<unknown>",
      `${dep.status?.readyReplicas}/${dep.spec?.replicas}`,
      dep.status?.updatedReplicas ?? "<unknown>",
      dep.status?.availableReplicas ?? "<unknown>",
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

export async function actionGetList(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(/k8s:\/\/(.*)\/deployments/);
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const namespace = result[1];
  if (!namespace) {
    throw new Error("invalid namespace");
  }

  const deployments = await deployment.list(namespace);
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

export async function actionDescribe(
  denops: Denops,
): Promise<void> {
  const bufname = await denops.call("bufname") as string;
  const result = bufname.match(
    /k8s:\/\/(.*)\/deployments\/(.*)\/describe/,
  );
  if (!result) {
    throw new Error("invalid buffer name");
  }
  const [namespace, deploymentName] = result.slice(1);
  if (!namespace || !deploymentName) {
    throw new Error("invalid pod name");
  }

  const output = await deployment.describe(deploymentName, namespace);
  batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-deployment-describe",
    );
  });
}
