import { loadBuffer, Resource } from "./resource.ts";
import { assertEquals } from "./deps.ts";

Deno.test("load buffer", async (t) => {
  const tests: { bufname: string; expect: Resource }[] = [
    {
      bufname: "ks8://nodes",
      expect: {
        type: "nodes",
        action: "list",
      },
    },
    {
      bufname: "ks8://nodes?labels=app=sample",
      expect: {
        type: "nodes",
        action: "list",
        labels: "app=sample",
      },
    },
    {
      bufname: "ks8://nodes?fields=metadata.name=sample",
      expect: {
        type: "nodes",
        action: "list",
        fields: "metadata.name=sample",
      },
    },
    {
      bufname: "ks8://nodes/xxx/describe",
      expect: {
        type: "nodes",
        action: "describe",
        name: "xxx",
      },
    },
    {
      bufname: "ks8://all/pods",
      expect: {
        type: "pods",
        action: "list",
        namespace: "all",
      },
    },
    {
      bufname:
        "ks8://default/pods?fields=metadata.name=hello,spec.nodeName=sample",
      expect: {
        type: "pods",
        action: "list",
        namespace: "default",
        fields: "metadata.name=hello,spec.nodeName=sample",
      },
    },
    {
      bufname: "ks8://all/pods/xxx/containers",
      expect: {
        type: "pods",
        action: "containers",
        namespace: "all",
        name: "xxx",
      },
    },
    {
      bufname: "ks8://all/pods/xxx/describe",
      expect: {
        type: "pods",
        action: "describe",
        namespace: "all",
        name: "xxx",
      },
    },
    {
      bufname: "ks8://all/pods/xxx/yaml",
      expect: {
        type: "pods",
        action: "yaml",
        namespace: "all",
        name: "xxx",
      },
    },
    {
      bufname: "ks8://all/deployments",
      expect: {
        type: "deployments",
        action: "list",
        namespace: "all",
      },
    },
    {
      bufname: "ks8://all/deployments/xxx/describe",
      expect: {
        type: "deployments",
        action: "describe",
        namespace: "all",
        name: "xxx",
      },
    },
  ];

  for (const test of tests) {
    await t.step(`load ${test.bufname}`, () => {
      const actual = loadBuffer(test.bufname);
      assertEquals(actual, test.expect);
    });
  }
});
