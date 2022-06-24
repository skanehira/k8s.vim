import { renderPodList } from "./action_pod.ts";
import { pods } from "./testdata/pods.ts";
import { path } from "./deps.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("test render post list", async () => {
  const actual = renderPodList(pods).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "podlist.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
