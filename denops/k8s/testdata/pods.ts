// deno-lint-ignore no-explicit-any
export const pods: any[] = [
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test8",
      "namespace": "default",
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
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
        {
          "ip": "12.244.0.86",
        },
      ],
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test7",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test6",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test5",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test4",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test3",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test2",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "creationTimestamp": new Date("2022-06-24T06:29:59Z"),
      "labels": {
        "app": "sample-app",
        "pod-template-hash": "76f47c6756",
      },
      "name": "test1",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
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
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test9",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
      "initContainerStatuses": [
        {
          restartCount: 1,
          state: {
            terminated: {
              "reason": "terminated reason",
            },
          },
        },
      ],
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test10",
      "namespace": "sample",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
      "initContainerStatuses": [
        {
          restartCount: 1,
          state: {
            terminated: {
              "exitCode": 1,
            },
          },
        },
      ],
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test11",
      "namespace": "sample",
    },
    "spec": {
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "sample-node",
    },
    "status": {
      "initContainerStatuses": [
        {
          restartCount: 1,
          state: {
            waiting: {
              "reason": "waiting reason",
            },
          },
        },
      ],
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test12",
      "namespace": "sample",
    },
    "spec": {
      "initContainers": [
        { name: "test" },
      ],
      "containers": [
        {
          "image": "amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
        },
      ],
      "nodeName": "sample-node",
    },
    "status": {
      "initContainerStatuses": [
        {
          restartCount: 1,
        },
      ],
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test13",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
      "containerStatuses": [
        {
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
          restartCount: 1,
          "state": {
            "terminated": {
              "signal": 9,
            },
          },
        },
      ],
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test14",
      "namespace": "default",
    },
    "spec": {
      "containers": [
        {
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
      "containerStatuses": [
        {
          restartCount: 1,
          "image": "docker.io/amsy810/echo-nginx:v2.0",
          "name": "nginx-container",
          "state": {
            "terminated": {
              "exitCode": 1,
            },
          },
        },
      ],
      "startTime": new Date("2022-06-24T06:29:59Z"),
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test15",
      "namespace": "default",
      "deletionTimestamp": new Date("2022-06-24T06:29:59Z"),
    },
    "spec": {
      "containers": [
        {
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
    "status": {
      "reason": "NodeLost",
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Pod",
    "metadata": {
      "name": "test16",
      "namespace": "default",
      "deletionTimestamp": new Date("2022-06-24T06:29:59Z"),
    },
    "spec": {
      "containers": [
        {
          "name": "nginx-container",
        },
      ],
      "nodeName": "kind-control-plane",
    },
  },
];
