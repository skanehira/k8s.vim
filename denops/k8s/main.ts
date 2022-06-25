import { autocmd, batch, Denops } from "./deps.ts";
import { actions } from "./action.ts";

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

  await denops.call("k8s#util#highlight#define");

  await autocmd.group(denops, "k8s_buffer", (helper) => {
    const autocmds: {
      event: autocmd.AutocmdEvent;
      pat: string;
      cmd: string;
    }[] = [
      {
        event: "ColorScheme",
        pat: "*",
        cmd: "call k8s#util#highlight#define()",
      },
      {
        event: "BufReadCmd",
        pat: "k8s://nodes",
        cmd: `call denops#request("${denops.name}", "action", ["nodeList"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://nodes/*/describe",
        cmd:
          `call denops#request("${denops.name}", "action", ["nodeDescribe"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/pods",
        cmd: `call denops#request("${denops.name}", "action", ["podList"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/pods/*/containers",
        cmd:
          `call denops#request("${denops.name}", "action", ["podContainerList"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/pods/*/containers",
        cmd:
          `call denops#request("${denops.name}", "action", ["podContainerList"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/pods/*/describe",
        cmd: `call denops#request("${denops.name}", "action", ["podDescribe"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/pods/*/yaml",
        cmd: `call denops#request("${denops.name}", "action", ["podYaml"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/deployments",
        cmd:
          `call denops#request("${denops.name}", "action", ["deploymentList"])`,
      },
      {
        event: "BufReadCmd",
        pat: "k8s://*/deployments/*/describe",
        cmd:
          `call denops#request("${denops.name}", "action", ["deploymentDescribe"])`,
      },
    ];

    for (const cmd of autocmds) {
      helper.define(cmd.event, cmd.pat, cmd.cmd);
    }
  });

  denops.dispatcher = {
    async action(...args: unknown[]): Promise<void> {
      if (args.length === 0) {
        console.error("require argument");
        return;
      }
      const kind = args[0] as string;
      const action = actions.get(kind);
      if (action) {
        try {
          await action(denops, ...args.slice(1));
          await denops.cmd("redraw!");
        } catch (e) {
          console.error(e.message);
        }
      }
    },
  };
}
