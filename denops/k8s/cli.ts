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
  fields?: string;
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
  if (opts.namespace) {
    if (opts.namespace === "all") {
      cmd.push("-A");
    } else {
      cmd.push("-n", opts.namespace);
    }
  }
  if (opts.format) {
    cmd.push("-o", opts.format);
  }
  if (opts.fields) {
    cmd.push("--field-selector", opts.fields);
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

export async function deleteResource(resource: string, name: string, opts?: {
  namespace?: string;
}): Promise<void> {
  const cmd = [
    "kubectl",
    "delete",
    resource,
    name,
  ];
  if (opts?.namespace) {
    cmd.push("-n", opts.namespace);
  }
  await run(cmd);
}
