import {
  deleteResource,
  describeResource,
  getResourceAsObject,
  getResourceAsText,
  ResourceOptions,
} from "./cli.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";

export async function list(
  opts: ResourceOptions,
): Promise<IoK8sApiCoreV1Pod[]> {
  const pods = await getResourceAsObject<{ items: IoK8sApiCoreV1Pod[] }>(
    "pods",
    opts,
  );
  return pods.items;
}

export async function get(name: string, opts: {
  namespace: string;
}): Promise<IoK8sApiCoreV1Pod> {
  const pod = await getResourceAsObject<IoK8sApiCoreV1Pod>(
    `pods/${name}`,
    opts,
  );
  return pod;
}

export async function getAsYaml(
  name: string,
  opts: ResourceOptions,
): Promise<string> {
  opts.format = "yaml";
  const output = await getResourceAsText(
    `pods/${name}`,
    opts,
  );
  return output;
}

export async function describe(name: string, opts: {
  namespace: string;
}): Promise<string> {
  const output = await describeResource("pods", name, opts);
  return output;
}

// NOTE: cannot use 'delete' for function name
export async function remove(name: string, opts: {
  namespace: string;
}): Promise<void> {
  await deleteResource("pod", name, opts);
}
