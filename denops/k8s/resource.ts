const resourceTypes = [
  "deployments",
  "nodes",
  "pods",
  "services",
  "events",
  "secrets",
] as const;
export type ResourceType = typeof resourceTypes[number];

const resourceActions = [
  "list",
  "describe",
  "containers",
  "yaml",
] as const;
export type ResourceAction = typeof resourceActions[number];

export type ResourceOptions = {
  name?: string;
  namespace?: string;
  fields?: string;
  labels?: string;
  format?: string;
  kind?: string;
  force?: boolean;
};

export type Resource = {
  type: ResourceType;
  action: ResourceAction;
  opts?: ResourceOptions;
};

function isValidResourceType(
  resourceType: string,
): resourceType is ResourceType {
  return resourceTypes.some((t) => t === resourceType);
}

function isValidResourceAction(
  action: string,
): action is ResourceAction {
  return resourceActions.some((a) => a === action);
}

export function loadBuffer(bufname: string): Resource {
  const url = new URL(bufname);

  const resourceType = url.hostname;
  const action = url.pathname.slice(1);

  if (!isValidResourceType(resourceType)) {
    throw new Error(`invalid resource: ${resourceType}`);
  }
  if (!isValidResourceAction(action)) {
    throw new Error(`invalid action: ${action}`);
  }

  const resource: Resource = {
    type: resourceType,
    action: action,
  };

  if (url.search) {
    const params = new URLSearchParams(url.search);
    const opts: ResourceOptions = Object.fromEntries(params.entries());
    resource.opts = opts;
  }

  return resource;
}
