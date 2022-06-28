import { loadBuffer, Resource } from "./resource.ts";
import { assertEquals, assertThrows } from "./deps.ts";

Deno.test("load buffer", async (t) => {
  const tests: { bufname: string; expect: Resource }[] = [
    {
      bufname: "ks8://nodes/list",
      expect: {
        type: "nodes",
        action: "list",
      },
    },
    {
      bufname: "ks8://nodes/list?labels=app=sample&fields=metadata.name=sample",
      expect: {
        type: "nodes",
        action: "list",
        opts: {
          labels: "app=sample",
          fields: "metadata.name=sample",
        },
      },
    },
    {
      bufname: "ks8://nodes/list?name=sample",
      expect: {
        type: "nodes",
        action: "list",
        opts: {
          name: "sample",
        },
      },
    },
    {
      bufname: "ks8://pods/describe?name=sample",
      expect: {
        type: "pods",
        action: "describe",
        opts: {
          name: "sample",
        },
      },
    },
    {
      bufname: "ks8://pods/containers?name=sample&namespace=test",
      expect: {
        type: "pods",
        action: "containers",
        opts: {
          name: "sample",
          namespace: "test",
        },
      },
    },
    {
      bufname: "ks8://pods/yaml?name=sample&namespace=test",
      expect: {
        type: "pods",
        action: "yaml",
        opts: {
          name: "sample",
          namespace: "test",
        },
      },
    },
    {
      bufname:
        "ks8://services/list?fields=metadata.name=hello,spec.nodeName=sample",
      expect: {
        type: "services",
        action: "list",
        opts: {
          fields: "metadata.name=hello,spec.nodeName=sample",
        },
      },
    },
    {
      bufname: "ks8://deployments/describe?name=sample&format=yaml",
      expect: {
        type: "deployments",
        action: "describe",
        opts: {
          name: "sample",
          format: "yaml",
        },
      },
    },
    {
      bufname: "ks8://services/describe?format=json&labels=app=sample-app",
      expect: {
        type: "services",
        action: "describe",
        opts: {
          labels: "app=sample-app",
          format: "json",
        },
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

Deno.test("load invalid buffer", async (t) => {
  const tests: { bufname: string; msg: string }[] = [
    {
      bufname: "k8s://a/list",
      msg: "invalid resource: a",
    },
    {
      bufname: "k8s://nodes/hoge",
      msg: "invalid action: hoge",
    },
  ];

  for (const test of tests) {
    await t.step(`load ${test.bufname}`, () => {
      assertThrows(() => {
        loadBuffer(test.bufname);
      }, test.msg);
    });
  }
});
