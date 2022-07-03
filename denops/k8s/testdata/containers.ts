// deno-lint-ignore no-explicit-any
export const containers: any[] = [
  {
    "containerID":
      "containerd://f1b5a6162364c197d9f2cd0e7f94639c7712087819fb5761cebd60ed92119862",
    "image": "docker.io/amsy810/echo-nginx:v2.0",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container1",
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
    "image": "docker.io/amsy810/echo-nginx:v2.1",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container2",
    "ready": false,
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
  {
    "containerID":
      "containerd://af3cde9d66ebb8917560b3433adbe51aac0ce79a849218126c0b7039b839d7ee",
    "image": "docker.io/amsy813/echo-nginx:v2.1",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container3",
    "ready": false,
    "restartCount": 0,
    "started": true,
    "state": {
      "waiting": {
        "reason": "waiting reason",
      },
    },
  },
  {
    "containerID":
      "containerd://af3cde9d66ebb8917560b3433adbe51aac0ce79a849218126c0b7039b839d7ee",
    "image": "docker.io/amsy816/echo-nginx:v4.1",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container4",
    "ready": false,
    "restartCount": 0,
    "started": true,
    "state": {
      "terminated": {
        "signal": 9,
      },
    },
  },
  {
    "containerID":
      "containerd://af3cde9d66ebb8917560b3433adbe51aac0ce79a849218126c0b7039b839d7ee",
    "image": "docker.io/amsy816/echo-nginx:v4.1",
    "imageID":
      "docker.io/amsy810/echo-nginx@sha256:1be6c018563babd1425bdcf50b5d0978eec37b11cd00718be7e3e3f5302c238b",
    "lastState": {},
    "name": "nginx-container5",
    "ready": false,
    "restartCount": 0,
    "started": true,
    "state": {
      "terminated": {
        "exitCode": 1,
      },
    },
  },
];
