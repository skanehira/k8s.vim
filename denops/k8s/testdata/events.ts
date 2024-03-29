// deno-lint-ignore no-explicit-any
export const events: any[] = [
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:54Z",
    "involvedObject": {
      "apiVersion": "v1",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-hb666",
      "namespace": "default",
      "resourceVersion": "512285",
      "uid": "cb6ffda0-cb22-4b97-92c1-9f984d1acdf7",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:54Z",
    "message":
      "Successfully assigned default/sample-deployment-76cd5587b7-hb666 to test-worker2",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:54Z",
      "name": "sample-deployment-76cd5587b7-hb666.16fe2e87fe9099d5",
      "namespace": "default",
      "resourceVersion": "512291",
      "uid": "c95cb40f-4da1-437d-99f4-b1bf77a8fb1d",
    },
    "reason": "Scheduled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "default-scheduler",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:54Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-hb666",
      "namespace": "default",
      "resourceVersion": "512290",
      "uid": "cb6ffda0-cb22-4b97-92c1-9f984d1acdf7",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:54Z",
    "message": 'Container image "redis:3.2" already present on machine',
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:54Z",
      "name": "sample-deployment-76cd5587b7-hb666.16fe2e8816954e31",
      "namespace": "default",
      "resourceVersion": "512296",
      "uid": "f15d6026-2cdd-4356-a32e-e047177d0808",
    },
    "reason": "Pulled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker2",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:54Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-hb666",
      "namespace": "default",
      "resourceVersion": "512290",
      "uid": "cb6ffda0-cb22-4b97-92c1-9f984d1acdf7",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:54Z",
    "message": "Created container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:54Z",
      "name": "sample-deployment-76cd5587b7-hb666.16fe2e881781a7e4",
      "namespace": "default",
      "resourceVersion": "512297",
      "uid": "f6c99cf2-dd48-45f5-902a-0b1d6fc2f546",
    },
    "reason": "Created",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker2",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:55Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-hb666",
      "namespace": "default",
      "resourceVersion": "512290",
      "uid": "cb6ffda0-cb22-4b97-92c1-9f984d1acdf7",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:55Z",
    "message": "Started container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:55Z",
      "name": "sample-deployment-76cd5587b7-hb666.16fe2e881cd40872",
      "namespace": "default",
      "resourceVersion": "512298",
      "uid": "ddf92ffe-b72f-42b1-a28d-37fb874c2e21",
    },
    "reason": "Started",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker2",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 2,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:58Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-hb666",
      "namespace": "default",
      "resourceVersion": "512290",
      "uid": "cb6ffda0-cb22-4b97-92c1-9f984d1acdf7",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:48:00Z",
    "message": "Stopping container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:58Z",
      "name": "sample-deployment-76cd5587b7-hb666.16fe2e88d1d5b0e1",
      "namespace": "default",
      "resourceVersion": "512348",
      "uid": "d34adbf0-d19c-4dff-86e4-c69ffa975bf7",
    },
    "reason": "Killing",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker2",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-zgr7k",
      "namespace": "default",
      "resourceVersion": "512202",
      "uid": "68e7c621-19b2-497a-8ffc-ac7ad18ff5d3",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message":
      "Successfully assigned default/sample-deployment-76cd5587b7-zgr7k to test-worker",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-deployment-76cd5587b7-zgr7k.16fe2e86209714aa",
      "namespace": "default",
      "resourceVersion": "512206",
      "uid": "b232e787-8b07-4a6b-97ce-80dbf74e865c",
    },
    "reason": "Scheduled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "default-scheduler",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-zgr7k",
      "namespace": "default",
      "resourceVersion": "512203",
      "uid": "68e7c621-19b2-497a-8ffc-ac7ad18ff5d3",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": 'Container image "redis:3.2" already present on machine',
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-deployment-76cd5587b7-zgr7k.16fe2e8638fc2193",
      "namespace": "default",
      "resourceVersion": "512210",
      "uid": "a28f7909-7f3b-4317-88d8-ae87374bcb46",
    },
    "reason": "Pulled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-zgr7k",
      "namespace": "default",
      "resourceVersion": "512203",
      "uid": "68e7c621-19b2-497a-8ffc-ac7ad18ff5d3",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": "Created container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-deployment-76cd5587b7-zgr7k.16fe2e8639cac815",
      "namespace": "default",
      "resourceVersion": "512211",
      "uid": "b6379e74-e479-4736-80ae-c4df2c6c65fb",
    },
    "reason": "Created",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:47Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-zgr7k",
      "namespace": "default",
      "resourceVersion": "512203",
      "uid": "68e7c621-19b2-497a-8ffc-ac7ad18ff5d3",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:47Z",
    "message": "Started container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:47Z",
      "name": "sample-deployment-76cd5587b7-zgr7k.16fe2e863f178905",
      "namespace": "default",
      "resourceVersion": "512212",
      "uid": "ed40053e-64ac-45ea-b325-9f431e3720bf",
    },
    "reason": "Started",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:50Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-deployment-76cd5587b7-zgr7k",
      "namespace": "default",
      "resourceVersion": "512203",
      "uid": "68e7c621-19b2-497a-8ffc-ac7ad18ff5d3",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:50Z",
    "message": "Stopping container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:50Z",
      "name": "sample-deployment-76cd5587b7-zgr7k.16fe2e86ffc7f5da",
      "namespace": "default",
      "resourceVersion": "512250",
      "uid": "53165e83-a30b-4af7-ac81-8a92821ed872",
    },
    "reason": "Killing",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "apps/v1",
      "kind": "ReplicaSet",
      "name": "sample-deployment-76cd5587b7",
      "namespace": "default",
      "resourceVersion": "512198",
      "uid": "3753044f-4f6f-4f08-bfd5-36c3f063d171",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": "Created pod: sample-deployment-76cd5587b7-zgr7k",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-deployment-76cd5587b7.16fe2e86206cb338",
      "namespace": "default",
      "resourceVersion": "512204",
      "uid": "83c4b85c-e7bf-4d88-8784-e7085a1a667b",
    },
    "reason": "SuccessfulCreate",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "replicaset-controller",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:54Z",
    "involvedObject": {
      "apiVersion": "apps/v1",
      "kind": "ReplicaSet",
      "name": "sample-deployment-76cd5587b7",
      "namespace": "default",
      "resourceVersion": "512284",
      "uid": "9748827d-fe17-4cfe-888a-9c3c515a6119",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:54Z",
    "message": "Created pod: sample-deployment-76cd5587b7-hb666",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:54Z",
      "name": "sample-deployment-76cd5587b7.16fe2e87fe3bc96e",
      "namespace": "default",
      "resourceVersion": "512289",
      "uid": "cc8077f9-04c8-4dda-b181-6bec89b96027",
    },
    "reason": "SuccessfulCreate",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "replicaset-controller",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "apps/v1",
      "kind": "Deployment",
      "name": "sample-deployment",
      "namespace": "default",
      "resourceVersion": "512197",
      "uid": "0cf5501c-3320-4a02-ad69-29829e0ae40e",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": "Scaled up replica set sample-deployment-76cd5587b7 to 1",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-deployment.16fe2e861fd182dd",
      "namespace": "default",
      "resourceVersion": "512200",
      "uid": "58e080ab-17e9-413e-8928-02a4d437a966",
    },
    "reason": "ScalingReplicaSet",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "deployment-controller",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:54Z",
    "involvedObject": {
      "apiVersion": "apps/v1",
      "kind": "Deployment",
      "name": "sample-deployment",
      "namespace": "default",
      "resourceVersion": "512283",
      "uid": "d8a223b8-7555-44dc-98f5-cb6cabadcb0f",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:54Z",
    "message": "Scaled up replica set sample-deployment-76cd5587b7 to 1",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:54Z",
      "name": "sample-deployment.16fe2e87fe180ef2",
      "namespace": "default",
      "resourceVersion": "512287",
      "uid": "45eb090b-3b0e-488c-8982-bdcba12584eb",
    },
    "reason": "ScalingReplicaSet",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "deployment-controller",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:45Z",
    "involvedObject": {
      "apiVersion": "v1",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512179",
      "uid": "1676864a-3428-48bc-862d-8b28ad4409d0",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:45Z",
    "message": "Successfully assigned default/sample-pod to test-worker",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:45Z",
      "name": "sample-pod.16fe2e85ec688bab",
      "namespace": "default",
      "resourceVersion": "512181",
      "uid": "f6bce31d-6a71-40ae-8d4c-ecefbe68009c",
    },
    "reason": "Scheduled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "default-scheduler",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512180",
      "uid": "1676864a-3428-48bc-862d-8b28ad4409d0",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": 'Container image "redis:3.2" already present on machine',
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-pod.16fe2e8605a36196",
      "namespace": "default",
      "resourceVersion": "512183",
      "uid": "f927ef90-4e60-414b-8ed2-b3f12e679d8e",
    },
    "reason": "Pulled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512180",
      "uid": "1676864a-3428-48bc-862d-8b28ad4409d0",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": "Created container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-pod.16fe2e8606d7bce0",
      "namespace": "default",
      "resourceVersion": "512184",
      "uid": "3c1c8a88-be21-4cb1-b9d3-fb2815f9a6c2",
    },
    "reason": "Created",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:46Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512180",
      "uid": "1676864a-3428-48bc-862d-8b28ad4409d0",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:46Z",
    "message": "Started container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:46Z",
      "name": "sample-pod.16fe2e860c2da53d",
      "namespace": "default",
      "resourceVersion": "512185",
      "uid": "95edb2d3-3341-4a41-81ba-7d8141f3a47c",
    },
    "reason": "Started",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 2,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:48Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512180",
      "uid": "1676864a-3428-48bc-862d-8b28ad4409d0",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:50Z",
    "message": "Stopping container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:48Z",
      "name": "sample-pod.16fe2e86a8c61685",
      "namespace": "default",
      "resourceVersion": "512253",
      "uid": "d5c89efd-091a-481b-99f3-7c7099a2e415",
    },
    "reason": "Killing",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:52Z",
    "involvedObject": {
      "apiVersion": "v1",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512265",
      "uid": "42377f8d-04da-495b-9744-01bec3c0a60d",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:52Z",
    "message": "Successfully assigned default/sample-pod to test-worker",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:52Z",
      "name": "sample-pod.16fe2e87a1430679",
      "namespace": "default",
      "resourceVersion": "512267",
      "uid": "69ab1421-9b15-4b8a-b503-33a8ec47555f",
    },
    "reason": "Scheduled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "default-scheduler",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:53Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512266",
      "uid": "42377f8d-04da-495b-9744-01bec3c0a60d",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:53Z",
    "message": 'Container image "redis:3.2" already present on machine',
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:53Z",
      "name": "sample-pod.16fe2e87baab16ad",
      "namespace": "default",
      "resourceVersion": "512269",
      "uid": "52bffaf7-d662-4dad-a540-b3f39a157a00",
    },
    "reason": "Pulled",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:53Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512266",
      "uid": "42377f8d-04da-495b-9744-01bec3c0a60d",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:53Z",
    "message": "Created container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:53Z",
      "name": "sample-pod.16fe2e87bb7b860d",
      "namespace": "default",
      "resourceVersion": "512270",
      "uid": "d765a754-58bf-481c-a56b-4d2c791cff42",
    },
    "reason": "Created",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:53Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512266",
      "uid": "42377f8d-04da-495b-9744-01bec3c0a60d",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:53Z",
    "message": "Started container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:53Z",
      "name": "sample-pod.16fe2e87c07de86a",
      "namespace": "default",
      "resourceVersion": "512271",
      "uid": "54ab247f-bf8a-483f-879c-ee1a8b71967c",
    },
    "reason": "Started",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
  {
    "apiVersion": "v1",
    "count": 1,
    "eventTime": null,
    "firstTimestamp": "2022-07-03T01:47:56Z",
    "involvedObject": {
      "apiVersion": "v1",
      "fieldPath": "spec.containers{redis}",
      "kind": "Pod",
      "name": "sample-pod",
      "namespace": "default",
      "resourceVersion": "512266",
      "uid": "42377f8d-04da-495b-9744-01bec3c0a60d",
    },
    "kind": "Event",
    "lastTimestamp": "2022-07-03T01:47:56Z",
    "message": "Stopping container redis",
    "metadata": {
      "creationTimestamp": "2022-07-03T01:47:56Z",
      "name": "sample-pod.16fe2e8879e6349c",
      "namespace": "default",
      "resourceVersion": "512311",
      "uid": "775a03be-5e06-4b27-94d2-85cb7dee7fa0",
    },
    "reason": "Killing",
    "reportingComponent": "",
    "reportingInstance": "",
    "source": {
      "component": "kubelet",
      "host": "test-worker",
    },
    "type": "Normal",
  },
];
