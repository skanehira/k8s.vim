import { Denops } from "./deps.ts";
import * as node from "./action_node.ts";
import * as pod from "./action_pod.ts";
import * as deployment from "./action_deployment.ts";
import * as svc from "./action_svc.ts";
import * as event from "./action_event.ts";
import { Resource } from "./resource.ts";

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
      pod.yaml,
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
      "events:list",
      event.list,
    ],
  ],
);
