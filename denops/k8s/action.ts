import { Denops } from "./deps.ts";
import * as node from "./action_node.ts";
import * as pod from "./action_pod.ts";
import * as deployment from "./action_deployment.ts";
//
// deno-lint-ignore no-explicit-any
type fn = (denops: Denops, ...params: any[]) => Promise<void>;

export const actions = new Map<
  string,
  fn
>(
  [
    [
      "nodeDescribe",
      node.actionDescribeNode,
    ],
    [
      "nodeList",
      node.actionGetNodeList,
    ],
    [
      "podList",
      pod.actionGetPodList,
    ],
    [
      "podListWithField",
      pod.actionGetPodListWithField,
    ],
    [
      "podDelete",
      pod.actionDelete,
    ],
    [
      "podContainerList",
      pod.actionGetPodContainers,
    ],
    [
      "podDescribe",
      pod.actionDescribePod,
    ],
    [
      "podYaml",
      pod.actionGetResourceAsYaml,
    ],
    [
      "deploymentList",
      deployment.actionGetList,
    ],
    [
      "deploymentDescribe",
      deployment.actionDescribe,
    ],
  ],
);
