import { getResourceAsObject, ResourceOptions } from "./cli.ts";
import { IoK8sApiAppsV1DeploymentList } from "./models/IoK8sApiAppsV1DeploymentList.ts";
import { IoK8sApiAppsV1Deployment } from "./models/IoK8sApiAppsV1Deployment.ts";

export async function list(
  namespace: string,
): Promise<IoK8sApiAppsV1Deployment[]> {
  const opts: ResourceOptions = {
    format: "json",
  };
  if (namespace === "all") {
    opts.all = true;
  } else {
    opts.namespace = namespace;
  }
  const deployments = await getResourceAsObject<IoK8sApiAppsV1DeploymentList>(
    "deployment",
    opts,
  );
  return deployments.items;
}
