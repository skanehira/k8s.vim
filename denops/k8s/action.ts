import { Denops } from "./deps.ts";
import * as node from "./action_node.ts";
import * as pod from "./action_pod.ts";
import * as deployment from "./action_deployment.ts";
import * as svc from "./action_svc.ts";
import * as event from "./action_event.ts";
import * as secret from "./action_secret.ts";
import { Resource } from "./resource.ts";
import { getResourceAsText } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";

type fn = (denops: Denops, resource: Resource) => Promise<void>;

export const actions = new Map<
  string,
  fn
>(
  [
    [
      "nodes:describe",
      node.describe,
    ],
    [
      "nodes:list",
      node.list,
    ],
    [
      "pods:list",
      pod.list,
    ],
    [
      "pods:delete",
      pod.remove,
    ],
    [
      "pods:describe",
      pod.describe,
    ],
    [
      "pods:yaml",
      yaml,
    ],
    [
      "pods:containers",
      pod.containers,
    ],
    [
      "deployments:list",
      deployment.list,
    ],
    [
      "deployments:describe",
      deployment.describe,
    ],
    [
      "deployments:delete",
      deployment.remove,
    ],
    [
      "services:list",
      svc.list,
    ],
    [
      "services:describe",
      svc.describe,
    ],
    [
      "services:delete",
      svc.remove,
    ],
    [
      "services:yaml",
      yaml,
    ],
    [
      "events:list",
      event.list,
    ],
    [
      "secrets:list",
      secret.list,
    ],
    [
      "secrets:describe",
      secret.describe,
    ],
    [
      "secrets:yaml",
      yaml,
    ],
  ],
);

export async function yaml(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.opts?.namespace || !resource.opts?.name) {
    throw new Error(
      `require resource name and namespace: ${JSON.stringify(resource)}`,
    );
  }
  resource.opts = { ...resource.opts, ...{ format: "yaml" } };

  const output = await getResourceAsText(resource);
  const rows = output.split("\n");
  await drawRows(denops, rows, "yaml");
}
