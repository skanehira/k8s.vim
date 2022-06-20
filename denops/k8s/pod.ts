import { getResource } from "./cli.ts";
import { IoK8sApiCoreV1Pod } from "./models/IoK8sApiCoreV1Pod.ts";

export async function list(opts: {
  namespace: string;
}): Promise<IoK8sApiCoreV1Pod[]> {
  const newOpts = {} as Record<string, unknown>;
  if (opts.namespace === "all") {
    newOpts.all = true;
  } else {
    newOpts.namespace = opts.namespace;
  }
  const pods = await getResource<{ items: IoK8sApiCoreV1Pod[] }>(
    "pods",
    newOpts,
  );
  return pods.items;
}

export async function get(name: string, opts: {
  namespace: string;
}): Promise<IoK8sApiCoreV1Pod> {
  const pod = await getResource<IoK8sApiCoreV1Pod>(`pods/${name}`, opts);
  return pod;
}
