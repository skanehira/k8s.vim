import { assertEquals, fs } from "../deps.ts";

export const textEncoder = new TextEncoder();
export const textDecoder = new TextDecoder();

export async function assertEqualTextFile(
  actual: string,
  file: string,
) {
  if (Deno.env.get("UPDATE_GOLDEN")) {
    await fs.ensureFile(file);
    await Deno.writeFile(file, textEncoder.encode(actual));
    return;
  }
  const expected = textDecoder.decode(await Deno.readFile(file));
  assertEquals(actual, expected);
}
