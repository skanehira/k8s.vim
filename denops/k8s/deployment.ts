import {
  describeResource,
  getResourceAsObject,
  ResourceOptions,
} from "./cli.ts";
import { IoK8sApiAppsV1DeploymentList } from "./models/IoK8sApiAppsV1DeploymentList.ts";
import { IoK8sApiAppsV1Deployment } from "./models/IoK8sApiAppsV1Deployment.ts";

export async function list(
  namespace: string,
): Promise<IoK8sApiAppsV1Deployment[]> {
  const opts: ResourceOptions = {
    format: "json",
    namespace: namespace,
  };
  const deployments = await getResourceAsObject<IoK8sApiAppsV1DeploymentList>(
    "deployment",
    opts,
  );
  return deployments.items;
}

export async function describe(
  name: string,
  namespace: string,
): Promise<string> {
  const output = await describeResource("deployment", name, {
    namespace,
  });
  return output;
}
