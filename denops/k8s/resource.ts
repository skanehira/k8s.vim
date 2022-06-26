export type ResourceType = "deployments" | "nodes" | "pods" | "";

export type Resource = {
  type: ResourceType;
  action: string;
  namespace?: string;
  fields?: string;
  name?: string;
};

export function loadBuffer(bufname: string): Resource {
  const resource: Resource = {
    type: "",
    action: "",
  };

  const url = new URL(bufname);

  // NOTE: node resource don't have namespace
  if (url.hostname === "nodes") {
    resource.type = "nodes";
    if (url.pathname === "") {
      resource.action = "list";
      if (url.search) {
        const params = new URLSearchParams(url.search);
        resource.fields = params.get("field") ?? "";
      }
    } else {
      const cols = url.pathname.split("/").slice(1);
      if (cols.length > 1) {
        resource.name = cols[0];
        resource.action = cols[1];
      }
    }
  } else {
    resource.namespace = url.hostname;
    const cols = url.pathname.split("/").slice(1);
    resource.type = cols[0] as ResourceType;

    if (cols.length === 1) {
      resource.action = "list";
      if (url.search) {
        const params = new URLSearchParams(url.search);
        resource.fields = params.get("field") ?? "";
      }
    }
    if (cols.length > 2) {
      resource.name = cols[1];
      resource.action = cols[2];
    }
  }

  return resource;
}
