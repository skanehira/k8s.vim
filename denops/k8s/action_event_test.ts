import { renderEvents } from "./action_event.ts";
import { path } from "./deps.ts";
import { events } from "./testdata/events.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render event list", async () => {
  const actual = renderEvents(events).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "eventList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
