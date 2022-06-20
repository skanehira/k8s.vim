const dec = new TextDecoder();

export async function run(cmd: string[]): Promise<string> {
  const opt: Deno.RunOptions = {
    cmd: cmd,
    stdin: "null",
    stdout: "piped",
    stderr: "piped",
  };

  const p = Deno.run(opt);
  const result = dec.decode(await p.output());

  const status = await p.status();
  if (!status.success) {
    const error = dec.decode(await p.stderrOutput());
    throw new Error(
      `failed to execute command: ${cmd.join(" ")}, error: ${error}`,
    );
  }

  p.stderr?.close();
  p.close();
  return result;
}

export async function getResource<T>(resource: string, opts?: {
  all?: boolean;
  namespace?: string;
}): Promise<T> {
  const cmd = [
    "kubectl",
    "get",
    resource,
    "-o",
    "json",
  ];
  if (opts?.all) {
    cmd.push("-A");
  }
  if (opts?.namespace) {
    cmd.push("-n", opts.namespace);
  }
  const output = await run(cmd);
  return JSON.parse(output);
}
