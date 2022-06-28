import { batch, Denops, vars } from "../deps.ts";

export async function drawRows(
  denops: Denops,
  rows: string[],
  ft: string,
  opts?: {
    // deno-lint-ignore no-explicit-any
    data?: { key: string; value: any };
  },
): Promise<void> {
  await batch(denops, async (denops) => {
    if (opts?.data) {
      await vars.b.set(denops, opts.data.key, opts.data.value);
    }
    await denops.cmd("setlocal modifiable | nnoremap <buffer> q :bw!<CR>");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=" + ft,
    );
  });
}
