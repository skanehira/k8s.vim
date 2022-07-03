import { Resource } from "../resource.ts";

export function isResource(arg: unknown): arg is Resource {
  if (typeof arg !== "object" || arg === null || arg === undefined) {
    return false;
  }
  const obj = arg as Record<string, string>;
  if (!obj["type"] || !obj["action"]) {
    return false;
  }
  return true;
}

export function orUnknown(value: string | undefined): string {
  return value ?? "<unknown>";
}
