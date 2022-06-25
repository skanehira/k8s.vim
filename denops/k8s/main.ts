import { autocmd, batch, Denops } from "./deps.ts";
import * as pod from "./action_pod.ts";
import * as node from "./action_node.ts";
import * as deployment from "./action_deployment.ts";

export async function main(denops: Denops): Promise<void> {
  const cmds = [
    "command! K8sPods :drop k8s://all/pods<CR>",
    "command! K8sNodes :drop k8s://nodes<CR>",
    "command! K8sDeployments :drop k8s://all/deployments<CR>",
  ];
  await batch(denops, async (denops) => {
    for (const cmd of cmds) {
      await denops.cmd(cmd);
    }
  });

  await autocmd.group(denops, "k8s_buffer", (helper) => {
    helper.define(
      "BufReadCmd",
      "k8s://nodes/*/describe",
      `call denops#request("${denops.name}", "describe", ["node"]) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://nodes",
      `call denops#request("${denops.name}", "nodes", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/pods",
      `call denops#request("${denops.name}", "pods", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/pods/*/containers",
      `call denops#request("${denops.name}", "containers", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/pods/*/describe",
      `call denops#request("${denops.name}", "describe", ["pod"]) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/pods/*/yaml",
      `call denops#request("${denops.name}", "getPodAsYaml", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/deployments",
      `call denops#request("${denops.name}", "deployments", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/deployments/*/describe",
      `call denops#request("${denops.name}", "describe", ["deployment"]) | redraw!`,
    );
  });

  denops.dispatcher = {
    async nodes(): Promise<void> {
      await node.actionGetNodeList(denops);
    },

    async pods(): Promise<void> {
      const bufname = await denops.call("bufname") as string;
      const result = bufname.match(/k8s:\/\/(.*)\/pods/);
      if (!result) {
        console.log("invalid buffer name");
        return;
      }
      const namespace = result[1];
      if (!namespace) {
        console.log("invalid namespace");
        return;
      }
      await pod.actionGetPodList(denops, namespace);
    },

    async deployments(): Promise<void> {
      const bufname = await denops.call("bufname") as string;
      const result = bufname.match(/k8s:\/\/(.*)\/deployments/);
      if (!result) {
        console.error("invalid buffer name");
        return;
      }
      const namespace = result[1];
      if (!namespace) {
        console.error("invalid namespace");
        return;
      }
      await deployment.actionGetList(denops, namespace);
    },

    async containers(): Promise<void> {
      const bufname = await denops.call("bufname") as string;
      const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/containers/);
      if (!result) {
        console.error("invalid buffer name");
        return;
      }
      const [namespace, podName] = result.slice(1);
      if (!namespace || !podName) {
        console.error("invalid pod name");
        return;
      }
      await pod.actionGetPodContainers(denops, {
        namespace: namespace,
        name: podName,
      });
    },

    async describe(resourceType: unknown): Promise<void> {
      if (resourceType === "pod") {
        const bufname = await denops.call("bufname") as string;
        const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/describe/);
        if (!result) {
          console.error("invalid buffer name");
          return;
        }
        const [namespace, podName] = result.slice(1);
        if (!namespace || !podName) {
          console.error("invalid pod name");
          return;
        }
        await pod.actionDescribePod(denops, podName, { namespace });
      } else if (resourceType === "node") {
        const bufname = await denops.call("bufname") as string;
        const result = bufname.match(/k8s:\/\/nodes\/(.*)\/describe/);
        if (!result) {
          console.error("invalid buffer name");
          return;
        }
        const nodeName = result[1];
        await node.actionDescribeNode(denops, nodeName);
      } else if (resourceType === "deployment") {
        const bufname = await denops.call("bufname") as string;
        const result = bufname.match(
          /k8s:\/\/(.*)\/deployments\/(.*)\/describe/,
        );
        if (!result) {
          console.error("invalid buffer name");
          return;
        }
        const [namespace, deploymentName] = result.slice(1);
        if (!namespace || !deploymentName) {
          console.error("invalid pod name");
          return;
        }
        await deployment.actionDescribe(denops, deploymentName, { namespace });
      }
    },

    async getPodAsYaml(): Promise<void> {
      const bufname = await denops.call("bufname") as string;
      const result = bufname.match(/k8s:\/\/(.*)\/pods\/(.*)\/yaml/);
      if (!result) {
        console.error("invalid buffer name");
        return;
      }
      const [namespace, podName] = result.slice(1);
      if (!namespace || !podName) {
        console.error("invalid pod name");
        return;
      }
      await pod.actionGetResourceAsYaml(denops, podName, { namespace });
    },

    async podDelete(name: unknown, namespace: unknown): Promise<void> {
      await pod.actionDelete(name as string, {
        namespace: namespace as string,
      });
    },
  };
}
