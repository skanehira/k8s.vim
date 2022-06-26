import { autocmd, batch, Denops } from "./deps.ts";
import { actions } from "./action.ts";
import { ensureResource } from "./_util/ensure.ts";
import { loadBuffer } from "./resource.ts";

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
        pat: "k8s://?*",
        cmd: `call denops#request("${denops.name}", "loadBuffer", [])`,
      },
    ];
    for (const cmd of autocmds) {
      helper.define(cmd.event, cmd.pat, cmd.cmd);
    }
  });

  denops.dispatcher = {
    async loadBuffer(): Promise<void> {
      const bufname = await denops.call("bufname") as string;
      const resource = loadBuffer(bufname);
      await denops.dispatch(denops.name, "action", resource);
    },

    async action(resource: unknown): Promise<void> {
      if (!ensureResource(resource)) {
        console.error(`${Deno.inspect(resource)} is not Resource`);
        return;
      }
      const kind = `${resource.type}:${resource.action}`;
      const action = actions.get(kind);
      if (!action) {
        console.error(`${kind} is not found`);
        return;
      }
      try {
        await action(denops, resource);
        await denops.cmd("redraw!");
      } catch (e) {
        console.error(e.message);
      }
    },
  };
}
