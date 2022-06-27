import { getResourceAsObject, ResourceOptions } from "./cli.ts";
import { IoK8sApiCoreV1Service } from "./models/IoK8sApiCoreV1Service.ts";
import { IoK8sApiCoreV1ServiceList } from "./models/IoK8sApiCoreV1ServiceList.ts";
import { describeResource } from "./cli.ts";

export async function list(
  opts: ResourceOptions,
): Promise<IoK8sApiCoreV1Service[]> {
  const svcs = await getResourceAsObject<IoK8sApiCoreV1ServiceList>(
    "svc",
    opts,
  );
  return svcs.items;
}

export async function describe(name: string, opts: {
  namespace: string;
}): Promise<string> {
  const output = await describeResource("svc", name, opts);
  return output;
}
