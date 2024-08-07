import { Denops, Table } from "./deps.ts";
import { Resource } from "./resource.ts";
import { IoK8sApiCoreV1Service } from "./models/IoK8sApiCoreV1Service.ts";
import { IoK8sApiCoreV1ServiceList } from "./models/IoK8sApiCoreV1ServiceList.ts";
import { IoK8sApiCoreV1LoadBalancerStatus } from "./models/IoK8sApiCoreV1LoadBalancerStatus.ts";
import { getResourceAsObject } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";
import { orUnknown } from "./_util/unknown.ts";

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
    const p = [port.name ? `${port.name}:${port.port}` : `${port.port}`];
    if (port.nodePort) p.push(`${port.protocol}/${port.nodePort}`);
    p.push(`${port.protocol}/${port.targetPort}`);
    return p.join("->");
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
      orUnknown(svc.metadata?.namespace),
      orUnknown(svc.metadata?.name),
      orUnknown(svc.spec?.type),
      svc.spec?.clusterIPs?.at(0) ?? "<none>",
      getExternalIP(svc),
      getSelector(svc),
      getPorts(svc),
      orUnknown(svc.metadata?.creationTimestamp?.toLocaleString()),
    ];
    return line;
  });
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function list(denops: Denops, resource: Resource): Promise<void> {
  // NOTE: list action only support json format, so we have to override format
  resource.opts = { ...resource.opts, ...{ format: "json" } };
  const result = await getResourceAsObject<IoK8sApiCoreV1ServiceList>(
    resource,
  );

  const svcs = result.items;
  const rows = renderSVCList(svcs);

  await drawRows(denops, rows, "k8s-services", {
    data: { key: "k8s_svcs", value: svcs },
  });
}
