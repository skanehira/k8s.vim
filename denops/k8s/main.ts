import { autocmd, Denops } from "./deps.ts";
import {
  actionDescribePod,
  actionGetPodContainers,
  actionGetPodList,
  actionGetResourceAsYaml,
} from "./action_pod.ts";

export async function main(denops: Denops): Promise<void> {
  await denops.cmd(
    `command! K8sPods :drop k8s://all/pods<CR>`,
  );

  await autocmd.group(denops, "k8s_buffer", (helper) => {
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
      `call denops#request("${denops.name}", "describe", []) | redraw!`,
    );

    helper.define(
      "BufReadCmd",
      "k8s://*/pods/*/yaml",
      `call denops#request("${denops.name}", "getPodAsYaml", []) | redraw!`,
    );
  });

  denops.dispatcher = {
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
      await actionGetPodList(denops, namespace);
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
      await actionGetPodContainers(denops, {
        namespace: namespace,
        name: podName,
      });
    },

    async describe(): Promise<void> {
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
      await actionDescribePod(denops, podName, { namespace });
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
      await actionGetResourceAsYaml(denops, podName, { namespace });
    },
  };
}
