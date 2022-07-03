import { IoK8sApiCoreV1Event } from "./models/IoK8sApiCoreV1Event.ts";
import { IoK8sApiCoreV1EventList } from "./models/IoK8sApiCoreV1EventList.ts";
import { Resource } from "./resource.ts";
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
      `failed to execute command: '${
        cmd.join(" ")
      }', detail: '${error.trim()}'`,
    );
  }

  p.stderr!.close();
  p.close();
  return result;
}

export async function getResourceAsText(
  resource: Resource,
): Promise<string> {
  const cmd = [
    "kubectl",
    "get",
    resource.type,
  ];

  if (resource.opts?.name) {
    cmd.push(resource.opts.name);
  }
  if (resource.opts?.namespace) {
    if (resource.opts.namespace === "all") {
      cmd.push("-A");
    } else {
      cmd.push("-n", resource.opts.namespace);
    }
  }
  if (resource.opts?.format) {
    cmd.push("-o", resource.opts.format);
  }
  if (resource.opts?.fields) {
    cmd.push("--field-selector", resource.opts.fields);
  }
  if (resource.opts?.labels) {
    cmd.push("-l", resource.opts.labels);
  }
  const output = await run(cmd);
  return output;
}

export async function getResourceAsObject<T>(
  resource: Resource,
): Promise<T> {
  const output = await getResourceAsText(resource);
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
  force?: boolean;
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
  if (opts?.force) {
    cmd.push("--force");
  }
  await run(cmd);
}

export async function getEvents(
  resource: Resource,
): Promise<IoK8sApiCoreV1Event[]> {
  const cmd = [
    "kubectl",
    "get",
    "events",
    "-A",
  ];
  if (resource.opts) {
    const opts = resource.opts;
    if (opts.namespace) {
      cmd.push(
        "--field-selector",
        "involvedObject.namespace=" + opts.namespace,
      );
    }
    if (opts.name) {
      cmd.push("--field-selector", "involvedObject.name=" + opts.name);
    }
    if (opts.kind) {
      cmd.push("--field-selector", "involvedObject.kind=" + opts.kind);
    }
  }
  cmd.push("-o", "json");
  const output = await run(cmd);
  const result = JSON.parse(output) as IoK8sApiCoreV1EventList;
  return result.items;
}
