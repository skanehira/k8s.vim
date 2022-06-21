import { describeResource, getResourceAsObject } from "./cli.ts";
import { IoK8sApiCoreV1NodeList } from "./models/IoK8sApiCoreV1NodeList.ts";
import { IoK8sApiCoreV1Node } from "./models/IoK8sApiCoreV1Node.ts";

export async function list(): Promise<IoK8sApiCoreV1Node[]> {
  const nodes = await getResourceAsObject<IoK8sApiCoreV1NodeList>("nodes", {
    format: "json",
  });
  return nodes.items;
}

export async function describe(name: string): Promise<string> {
  const output = await describeResource("nodes", name);
  return output;
}
