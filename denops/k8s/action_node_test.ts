import { renderNodeList } from "./action_node.ts";
import { path } from "./deps.ts";
import { nodes } from "./testdata/nodes.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render node list", async () => {
  const actual = renderNodeList(nodes).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "nodeList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
