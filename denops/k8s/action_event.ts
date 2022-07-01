import { Denops, Table } from "./deps.ts";
import { IoK8sApiCoreV1Event } from "./models/IoK8sApiCoreV1Event.ts";
import { Resource } from "./resource.ts";
import { getEvents } from "./cli.ts";
import { drawRows } from "./_util/drawer.ts";

export function renderEvents(events: IoK8sApiCoreV1Event[]): string[] {
  const header = [
    "NAMESPACE",
    "LAST TIME",
    "TYPE",
    "REASON",
    "OBJECT",
    "SOURCE",
    "MESSAGE",
    "COUNT",
  ];

  const body = events.sort((a, b) => {
    const atime = a.lastTimestamp ? new Date(a.lastTimestamp).getTime() : 0;
    const btime = b.lastTimestamp ? new Date(b.lastTimestamp).getTime() : 0;
    if (atime > btime) {
      return 1;
    }
    return -1;
  }).map((event) => {
    const source = event.source ? Object.values(event.source).join(", ") : "";
    const kind = event.involvedObject.kind?.toLowerCase() ?? "";
    const name = event.involvedObject?.name ?? "";
    const line = [
      event.involvedObject.namespace ?? "<unknown>",
      event.lastTimestamp?.toLocaleString() ?? "<unknown>",
      event.type ?? "<unknown>",
      event.reason ?? "<unknown>",
      `${kind}/${name}`,
      source,
      event.message ?? "",
      event.count ?? "",
    ];
    return line;
  });
  const table = new Table();
  table.header(header)
    .body(body);

  return table.toString().split("\n");
}

export async function list(
  denops: Denops,
  resource: Resource,
): Promise<void> {
  const events = await getEvents(resource);
  const rows = renderEvents(events);

  await drawRows(denops, rows, "k8s-events");
}
