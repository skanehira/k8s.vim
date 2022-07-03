import { renderDeploymentList } from "./action_deployment.ts";
import { deployments } from "./testdata/deployments.ts";
import { path } from "./deps.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render post list", async () => {
  const actual = renderDeploymentList(deployments).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "deploymentList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
