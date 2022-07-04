import { Denops } from "./deps.ts";
import * as node from "./action_node.ts";
import * as pod from "./action_pod.ts";
import * as deployment from "./action_deployment.ts";
import * as svc from "./action_svc.ts";
import * as event from "./action_event.ts";
import * as secret from "./action_secret.ts";
import { Resource } from "./resource.ts";
import { deleteResource, describeResource, getResourceAsText } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";

type fn = (denops: Denops, resource: Resource) => Promise<void>;

export const actions = new Map<
  string,
  fn
>(
  [
    [
      "nodes:describe",
      describe,
    ],
    [
      "nodes:yaml",
      yaml,
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
      remove,
    ],
    [
      "pods:describe",
      describe,
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
      describe,
    ],
    [
      "deployments:yaml",
      yaml,
    ],
    [
      "deployments:delete",
      remove,
    ],
    [
      "services:list",
      svc.list,
    ],
    [
      "services:describe",
      describe,
    ],
    [
      "services:delete",
      remove,
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
      describe,
    ],
    [
      "secrets:yaml",
      yaml,
    ],
    [
      "secrets:delete",
      remove,
    ],
  ],
);

export async function yaml(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.opts?.name) {
    throw new Error(
      `require resource name: ${JSON.stringify(resource)}`,
    );
  }
  resource.opts = { ...resource.opts, ...{ format: "yaml" } };

  const output = await getResourceAsText(resource);
  const rows = output.split("\n");
  await drawRows(denops, rows, `k8s-${resource.type}-yaml`);
  await denops.cmd("source $VIMRUNTIME/syntax/yaml.vim");
}

export async function describe(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource?.opts?.name) {
    throw new Error(
      `require resource name: ${JSON.stringify(resource)}`,
    );
  }

  const namespace = resource.opts.namespace;
  const output = await describeResource(resource.type, resource.opts.name, {
    namespace,
  });
  const rows = output.split("\n");

  await drawRows(
    denops,
    rows,
    `k8s-${resource.type}-describe`,
  );
}

export async function remove(
  _denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.opts?.namespace || !resource.opts?.name) {
    throw new Error(
      `require resource name and namespace: ${JSON.stringify(resource)}`,
    );
  }

  const namespace = resource.opts.namespace;
  const force = resource.opts?.force;
  await deleteResource(resource.type, resource.opts.name, { namespace, force });
}
