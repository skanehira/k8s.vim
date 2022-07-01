import { Denops, Table } from "./deps.ts";
import { Resource } from "./resource.ts";
import { getResourceAsObject } from "./cli.ts";
import { IoK8sApiCoreV1Secret } from "./models/IoK8sApiCoreV1Secret.ts";
import { IoK8sApiCoreV1SecretList } from "./models/IoK8sApiCoreV1SecretList.ts";
import { drawRows } from "./_util/drawer.ts";

export function renderSecretList(secrets: IoK8sApiCoreV1Secret[]): string[] {
  const body = secrets.map((secret) => {
    return [
      secret.metadata?.namespace ?? "<unknown>",
      secret.metadata?.name ?? "<unknown>",
      secret.type ?? "<unknown>",
      Object.values(secret.data ?? {}).length.toString(),
      secret.metadata?.creationTimestamp?.toLocaleString() ?? "",
    ];
  });

  const header = [
    "NAMESPACE",
    "NAME",
    "TYPE",
    "DATA",
    "CREATED TIME",
  ];
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function list(denops: Denops, resource: Resource): Promise<void> {
  // NOTE: list action only support json format, so we have to override format
  resource.opts = { ...resource.opts, ...{ format: "json" } };
  delete resource.opts?.name;

  const result = await getResourceAsObject<IoK8sApiCoreV1SecretList>(
    resource,
  );
  const secrets = result.items;
  const rows = renderSecretList(secrets);

  await drawRows(denops, rows, "k8s-secrets", {
    data: { key: "k8s_secrets", value: secrets },
  });
}
