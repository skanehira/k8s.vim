import { renderSVCList } from "./action_svc.ts";
import { svcs } from "./testdata/svcs.ts";
import { path } from "./deps.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render service list", async () => {
  const actual = renderSVCList(svcs).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "serviceList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
