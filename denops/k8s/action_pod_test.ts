import { renderContainerList, renderPodList } from "./action_pod.ts";
import { pods } from "./testdata/pods.ts";
import { containers } from "./testdata/containers.ts";
import { path } from "./deps.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render post list", async () => {
  const actual = renderPodList(pods).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "podList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});

Deno.test("render container list", async () => {
  const actual = renderContainerList(containers).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "containerList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
