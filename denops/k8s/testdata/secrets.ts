// deno-lint-ignore no-explicit-any
export const secrets: any[] = [
  {
    "apiVersion": "v1",
    "data": {
      "password": "cm9vdHBhc3N3b3Jk",
      "username": "cm9vdA==",
    },
    "kind": "Secret",
    "metadata": {
      "creationTimestamp": "2022-07-01T05:32:43Z",
      "name": "sample-db-auth",
      "namespace": "default",
    },
    "type": "Opaque",
  },
  {
    "apiVersion": "v1",
    "data": {},
    "kind": "Secret",
    "metadata": {
      "creationTimestamp": "2022-06-30T06:56:03Z",
      "name": "sample-ssh-auth",
      "namespace": "default",
    },
    "type": "kubernetes.io/ssh-auth",
  },
  {
    "apiVersion": "v1",
    "data": {
      "tls.crt": "crt",
      "tls.key": "key",
    },
    "kind": "Secret",
    "metadata": {
      "creationTimestamp": "2022-06-30T03:19:27Z",
      "name": "tls-sample",
      "namespace": "default",
    },
    "type": "kubernetes.io/tls",
  },
];
