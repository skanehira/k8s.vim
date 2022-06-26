import { Denops } from "./deps.ts";
import * as node from "./action_node.ts";
import * as pod from "./action_pod.ts";
import * as deployment from "./action_deployment.ts";
import { Resource } from "./resource.ts";

type fn = (denops: Denops, resource: Resource) => Promise<void>;

export const actions = new Map<
  string,
  fn
>(
  [
    [
      "nodes:describe",
      node.actionDescribeNode,
    ],
    [
      "nodes:list",
      node.actionGetNodeList,
    ],
    [
      "pods:list",
      pod.actionGetPodList,
    ],
    [
      "pods:delete",
      pod.actionDelete,
    ],
    [
      "pods:containers",
      pod.actionGetPodContainers,
    ],
    [
      "pods:describe",
      pod.actionDescribePod,
    ],
    [
      "pods:yaml",
      pod.actionGetResourceAsYaml,
    ],
    [
      "deployments:list",
      deployment.actionGetList,
    ],
    [
      "deployments:describe",
      deployment.actionDescribe,
    ],
  ],
);
