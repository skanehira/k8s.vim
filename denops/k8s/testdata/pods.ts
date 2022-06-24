import { IoK8sApiCoreV1Pod } from "../models/IoK8sApiCoreV1Pod.ts";

export const pods: IoK8sApiCoreV1Pod[] = [
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test8",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "initContainers": [
        {
          name: "init container",
        },
      ],
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": new Date("2022-06-24T06:30:01Z"),
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
      ],
      "initContainerStatuses": [
        {
          name: "",
          image: "",
          imageID: "",
          ready: false,
          restartCount: 3,
          state: {
            running: {
              "startedAt": new Date("2022-06-24T06:29:59Z"),
            },
          },
          lastState: {
            terminated: {
              exitCode: 0,
              finishedAt: new Date("2022-06-24T06:29:59Z"),
            },
          },
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": false,
          "restartCount": 0,
          "started": true,
          "state": {
            "waiting": {},
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test7",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": new Date("2022-06-24T06:30:01Z"),
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "terminated": {
              "reason": "Completed",
              "exitCode": 0,
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:29:59Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "reason": "",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test6",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "terminated": {
              "reason": "Completed",
              "exitCode": 0,
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:29:59Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "reason": "",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test5",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:29:59Z"),
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Failed",
      "reason": "pod reason",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test4",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:29:59Z"),
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Failed",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test3",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "waiting": {
              "reason": "ContainerWaitingReason",
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": false,
          "restartCount": 3,
          "started": true,
          "state": {
            "terminated": {
              "exitCode": 0,
              "reason": "ContainerTerminatedReason",
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Succeeded",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test2",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": false,
          "restartCount": 3,
          "started": true,
          "state": {
            "waiting": {
              "reason": "ContainerWaitingReason",
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Succeeded",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test1",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": false,
          "restartCount": 3,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Pending",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },

  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "sample-deployment-76f47c6756-7976d",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324195",
      "uid": "d89fae03-da19-4451-aedc-c679a92ba084",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-87btj",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-87btj",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2267d32ea99ea8982cd74529a5d40a6be32b988da704b760a80cbb02e059322a",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 0,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "podIP": "10.244.0.86",
      "podIPs": [
        {
          "ip": "10.244.0.86",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "sample-deployment-76f47c6756-8rj2d",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324201",
      "uid": "99373099-d787-427c-9ac7-615ab9b31786",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-7x9sf",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-7x9sf",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://2a56af34cb3b402da7d05f509b0247abc2d9cb2a82baf5fe60b34ea1ba875c21",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 0,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "podIP": "10.244.0.88",
      "podIPs": [
        {
          "ip": "10.244.0.88",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "generateName": "sample-deployment-76f47c6756-",
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "sample-deployment-76f47c6756-jggq9",
      "namespace": "default",
      "ownerReferences": [
        {
          "apiVersion": "apps/v1",
          "blockOwnerDeletion": true,
          "controller": true,
          "kind": "ReplicaSet",
          "name": "sample-deployment-76f47c6756",
          "uid": "f81f03ca-0abb-473c-a457-fda5e1186bb0",
        },
      ],
      "resourceVersion": "324209",
      "uid": "9babfe60-0cdf-4149-99ec-ab9ea3375f8d",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "imagePullPolicy": "IfNotPresent",
          "name": "nginx-container",
          "resources": {},
          "terminationMessagePath": "/dev/termination-log",
          "terminationMessagePolicy": "File",
          "volumeMounts": [
            {
              "mountPath": "/var/run/secrets/kubernetes.io/serviceaccount",
              "name": "kube-api-access-9g57n",
              "readOnly": true,
            },
          ],
        },
      ],
      "dnsPolicy": "ClusterFirst",
      "enableServiceLinks": true,
      "nodeName": "kind-control-plane",
      "preemptionPolicy": "PreemptLowerPriority",
      "priority": 0,
      "restartPolicy": "Always",
      "schedulerName": "default-scheduler",
      "securityContext": {},
      "serviceAccount": "default",
      "serviceAccountName": "default",
      "terminationGracePeriodSeconds": 30,
      "tolerations": [
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/not-ready",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
        {
          "effect": "NoExecute",
          "key": "node.kubernetes.io/unreachable",
          "operator": "Exists",
          "tolerationSeconds": 300,
        },
      ],
      "volumes": [
        {
          "name": "kube-api-access-9g57n",
          "projected": {
            "defaultMode": 420,
            "sources": [
              {
                "serviceAccountToken": {
                  "expirationSeconds": 3607,
                  "path": "token",
                },
              },
              {
                "configMap": {
                  "items": [
                    {
                      "key": "ca.crt",
                      "path": "ca.crt",
                    },
                  ],
                  "name": "kube-root-ca.crt",
                },
              },
              {
                "downwardAPI": {
                  "items": [
                    {
                      "fieldRef": {
                        "apiVersion": "v1",
                        "fieldPath": "metadata.namespace",
                      },
                      "path": "namespace",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
    "status": {
      "conditions": [
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "Initialized",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "Ready",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:30:01Z"),
          "status": "True",
          "type": "ContainersReady",
        },
        {
          "lastProbeTime": undefined,
          "lastTransitionTime": new Date("2022-06-24T06:29:59Z"),
          "status": "True",
          "type": "PodScheduled",
        },
      ],
      "containerStatuses": [
        {
          "containerID":
            "containerd://84010d1c1546698b717e316af2eb681acd949d7808a2d6db8e7f4d5dd67cc30b",
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "imageID":
            "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
          "lastState": {},
          "name": "nginx-container",
          "ready": true,
          "restartCount": 0,
          "started": true,
          "state": {
            "running": {
              "startedAt": new Date("2022-06-24T06:30:00Z"),
            },
          },
        },
      ],
      "hostIP": "172.20.0.2",
      "phase": "Running",
      "podIP": "10.244.0.87",
      "podIPs": [
        {
          "ip": "10.244.0.87",
        },
      ],
      "qosClass": "BestEffort",
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
];
