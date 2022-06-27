import { getResourceAsObject, ResourceOptions } from "./cli.ts";
import { IoK8sApiCoreV1Service } from "./models/IoK8sApiCoreV1Service.ts";
import { IoK8sApiCoreV1ServiceList } from "./models/IoK8sApiCoreV1ServiceList.ts";

export async function list(
  opts: ResourceOptions,
): Promise<IoK8sApiCoreV1Service[]> {
  const svcs = await getResourceAsObject<IoK8sApiCoreV1ServiceList>(
    "svc",
    opts,
  );
  return svcs.items;
}
