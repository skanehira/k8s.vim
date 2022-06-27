import * as svc from "./svc.ts";
import { batch, Denops, Table, vars } from "./deps.ts";
import { Resource } from "./resource.ts";
import { IoK8sApiCoreV1Service } from "./models/IoK8sApiCoreV1Service.ts";
import { IoK8sApiCoreV1LoadBalancerStatus } from "./models/IoK8sApiCoreV1LoadBalancerStatus.ts";

function getLBIPs(lb: IoK8sApiCoreV1LoadBalancerStatus): string[] {
  if (!lb.ingress) return [];

  const status = [];
  for (const ing of lb.ingress) {
    if (ing.ip) {
      status.push(ing.ip);
    } else if (ing.hostname) {
      status.push(ing.hostname);
    }
  }
  return status;
}

function getExternalIP(svc: IoK8sApiCoreV1Service): string {
  if (!svc.spec?.type) {
    return "<unknown>";
  }
  switch (svc.spec.type) {
    case "ClusterIP": {
      const ips = svc.spec.externalIPs;
      if (ips) return ips.join(",");
      return "<none>";
    }
    case "NodePort": {
      const ips = svc.spec.externalIPs;
      if (ips) return ips.join(",");
      return "<none>";
    }
    case "LoadBalancer": {
      if (!svc.status?.loadBalancer) return "<pending>";
      const lbIPs = getLBIPs(svc.status?.loadBalancer);
      if (svc.spec?.externalIPs?.length) {
        lbIPs.concat(svc.spec.externalIPs);
        return lbIPs.join(",");
      }
      if (lbIPs.length) return lbIPs.join(",");
      return "<pending>";
    }
    case "ExternalName":
      return svc.spec.externalName!;
  }
}

function getPorts(svc: IoK8sApiCoreV1Service): string {
  if (!svc.spec?.ports?.length) {
    return "<none>";
  }
  const ports = svc.spec.ports.map((port) => {
    return `${port.name}:${port.port}->${port.protocol}/${port.targetPort}`;
  });
  return ports.join(" ");
}

function getSelector(svc: IoK8sApiCoreV1Service): string {
  if (!svc.spec?.selector) {
    return "";
  }
  return Object.entries(svc.spec.selector).map((v) => {
    return `${v[0]}=${v[1]}`;
  }).join(",");
}

export function renderSVCList(svcs: IoK8sApiCoreV1Service[]): string[] {
  const header = [
    "NAMESPACE",
    "NAME",
    "TYPE",
    "CLUSTER IP",
    "EXTERNAL IP",
    "SELECTOR",
    "PORT(S)",
    "START TIME",
  ];
  const body = svcs.map((svc) => {
    const line = [
      svc.metadata?.namespace ?? "<unknown>",
      svc.metadata?.name ?? "<unknown>",
      svc.spec?.type ?? "<unknown>",
      svc.spec?.clusterIPs?.at(0) ?? "<none>",
      getExternalIP(svc),
      getSelector(svc),
      getPorts(svc),
      svc.metadata?.creationTimestamp?.toLocaleString() ?? "<unknown>",
    ];
    return line;
  });
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function list(denops: Denops, resource: Resource): Promise<void> {
  if (!resource.namespace) {
    throw new Error(`invalid resource: ${JSON.stringify(resource)}`);
  }

  const opts = {
    namespace: resource.namespace,
    fields: resource.fields,
    labels: resource.labels,
  };

  const svcs = await svc.list(opts);
  const rows = renderSVCList(svcs);

  await batch(denops, async (denops) => {
    await vars.b.set(denops, "k8s_svcs", svcs);
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, rows);
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-services",
    );
  });
}

export async function describe(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  if (!resource.namespace || !resource.name) {
    throw new Error(`invalid resource: ${JSON.stringify(resource)}`);
  }

  const opts = {
    namespace: resource.namespace,
  };

  const output = await svc.describe(resource.name, opts);

  await batch(denops, async (denops) => {
    await denops.cmd("setlocal modifiable");
    await denops.call("setline", 1, output.split("\n"));
    await denops.cmd(
      "setlocal nomodified nomodifiable buftype=nofile nowrap ft=k8s-service-describe",
    );
  });
}
