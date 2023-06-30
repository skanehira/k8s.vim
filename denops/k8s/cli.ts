import { IoK8sApiCoreV1Event } from "./models/IoK8sApiCoreV1Event.ts";
import { IoK8sApiCoreV1EventList } from "./models/IoK8sApiCoreV1EventList.ts";
import { Resource } from "./resource.ts";
const dec = new TextDecoder();

export async function run(args: string[]): Promise<string> {
  const cmd = new Deno.Command("kubectl", {
    args,
  });

  const { code, stdout, stderr } = await cmd.output();

  if (code !== 0) {
    const error = dec.decode(stderr);
    throw new Error(
      `failed to execute command: '${
        "kubectl " + args.join(" ")
      }', detail: '${error.trim()}'`,
    );
  }

  return dec.decode(stdout);
}

export async function getResourceAsText(
  resource: Resource,
): Promise<string> {
  const args = [
    "get",
    resource.type,
  ];

  if (resource.opts?.name) {
    args.push(resource.opts.name);
  }
  if (resource.opts?.namespace) {
    if (resource.opts.namespace === "all") {
      args.push("-A");
    } else {
      args.push("-n", resource.opts.namespace);
    }
  }
  if (resource.opts?.format) {
    args.push("-o", resource.opts.format);
  }
  if (resource.opts?.fields) {
    args.push("--field-selector", resource.opts.fields);
  }
  if (resource.opts?.labels) {
    args.push("-l", resource.opts.labels);
  }
  const output = await run(args);
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
  const args = [
    "describe",
    resource,
    name,
  ];
  if (opts?.all) {
    args.push("-A");
  }
  if (opts?.namespace) {
    args.push("-n", opts.namespace);
  }
  const output = await run(args);
  return output;
}

export async function deleteResource(resource: string, name: string, opts?: {
  namespace?: string;
  force?: boolean;
}): Promise<void> {
  const args = [
    "delete",
    resource,
    name,
  ];
  if (opts?.namespace) {
    args.push("-n", opts.namespace);
  }
  if (opts?.force) {
    args.push("--force");
  }
  await run(args);
}

export async function getEvents(
  resource: Resource,
): Promise<IoK8sApiCoreV1Event[]> {
  const args = [
    "get",
    "events",
    "-A",
  ];
  if (resource.opts) {
    const opts = resource.opts;
    if (opts.namespace) {
      args.push(
        "--field-selector",
        "involvedObject.namespace=" + opts.namespace,
      );
    }
    if (opts.name) {
      args.push("--field-selector", "involvedObject.name=" + opts.name);
    }
    if (opts.kind) {
      args.push("--field-selector", "involvedObject.kind=" + opts.kind);
    }
  }
  args.push("-o", "json");
  const output = await run(args);
  const result = JSON.parse(output) as IoK8sApiCoreV1EventList;
  return result.items;
}
