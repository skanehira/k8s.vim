import {
  describeResource,
  getResourceAsObject,
  getResourceAsText,
  ResourceOptions,
} from "./cli.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";

export async function list(opts: {
  namespace: string;
}): Promise<IoK8sApiCoreV1Pod[]> {
  const newOpts = {} as ResourceOptions;
  if (opts.namespace === "all") {
    newOpts.all = true;
  } else {
    newOpts.namespace = opts.namespace;
  }

  const pods = await getResourceAsObject<{ items: IoK8sApiCoreV1Pod[] }>(
    "pods",
    newOpts,
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
