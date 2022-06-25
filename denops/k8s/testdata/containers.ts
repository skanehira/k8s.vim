import { IoK8sApiCoreV1ContainerStatus } from "../models/IoK8sApiCoreV1ContainerStatus.ts";

export const containers: IoK8sApiCoreV1ContainerStatus[] = [
  {
    "containerID":
      "containerd://f1b5a6162364c197d9f2cd0e7f94639c7712087819fb5761cebd60ed92119862",
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
        "startedAt": new Date("2022-06-25T13:32:15Z"),
      },
    },
  },
  {
    "containerID":
      "containerd://af3cde9d66ebb8917560b3433adbe51aac0ce79a849218126c0b7039b839d7ee",
    "image": "docker.io/amsy810/echo-nginx:v2.0",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container",
    "ready": true,
    "restartCount": 0,
    "started": true,
    "state": {
      "terminated": {
        "exitCode": 0,
        "reason": "terminated reason",
        "startedAt": new Date("2022-06-25T13:32:07Z"),
      },
    },
  },
];
