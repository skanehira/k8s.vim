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

  p.stderr!.close();
  p.close();
  return result;
}

export interface ResourceOptions {
  all?: boolean;
  namespace?: string;
  node?: string;
  format?: "json" | "yaml";
}

export async function getResourceAsText(
  resource: string,
  opts: ResourceOptions,
): Promise<string> {
  const cmd = [
    "kubectl",
    "get",
    resource,
  ];
  if (opts.all) {
    cmd.push("-A");
  }
  if (opts.namespace) {
    cmd.push("-n", opts.namespace);
  }
  if (opts.format) {
    cmd.push("-o", opts.format);
  }
  const output = await run(cmd);
  return output;
}

export async function getResourceAsObject<T>(
  resource: string,
  opts: ResourceOptions,
): Promise<T> {
  opts.format = "json";
  const output = await getResourceAsText(resource, opts);
  return JSON.parse(output);
}

export async function describeResource(resource: string, name: string, opts?: {
  all?: boolean;
  namespace?: string;
}): Promise<string> {
  const cmd = [
    "kubectl",
    "describe",
    resource,
    name,
  ];
  if (opts?.all) {
    cmd.push("-A");
  }
  if (opts?.namespace) {
    cmd.push("-n", opts.namespace);
  }
  const output = await run(cmd);
  return output;
}
