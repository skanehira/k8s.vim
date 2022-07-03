import { renderSecretList } from "./action_secret.ts";
import { secrets } from "./testdata/secrets.ts";
import { path } from "./deps.ts";
import { assertEqualTextFile } from "./_util/assert.ts";

const testDir = path.join(
  "denops",
  "k8s",
  "testdata",
);

Deno.test("render secret list", async () => {
  const actual = renderSecretList(secrets).join("\n");
  const expectFile = path.join(
    testDir,
    "want",
    "secretList.txt",
  );
  await assertEqualTextFile(actual, expectFile);
});
