import { Resource } from "../resource.ts";

export function ensureString(arg: unknown): arg is string {
  return typeof arg === "string";
}

export function ensureResource(arg: unknown): arg is Resource {
  if (typeof arg !== "object" || arg === null || arg === undefined) {
    return false;
  }
  return "type" in arg && "action" in arg;
}
