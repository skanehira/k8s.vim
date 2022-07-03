// deno-lint-ignore no-explicit-any
export const nodes: any[] = [
  {
    "apiVersion": "v1",
    "kind": "Node",
    "metadata": {
      "annotations": {
        "kubeadm.alpha.kubernetes.io/cri-socket":
          "unix:///run/containerd/containerd.sock",
        "node.alpha.kubernetes.io/ttl": "0",
        "volumes.kubernetes.io/controller-managed-attach-detach": "true",
      },
      "creationTimestamp": "2022-06-25T20:44:33Z",
      "labels": {
        "beta.kubernetes.io/arch": "arm64",
        "beta.kubernetes.io/os": "linux",
        "kubernetes.io/arch": "arm64",
        "kubernetes.io/hostname": "test-control-plane",
        "kubernetes.io/os": "linux",
        "node-role.kubernetes.io/control-plane": "",
        "node.kubernetes.io/exclude-from-external-load-balancers": "",
      },
      "name": "test-control-plane",
    },
    "spec": {
      "unschedulable": true,
    },
    "status": {
      "addresses": [
        {
          "address": "172.20.0.4",
          "type": "InternalIP",
        },
      ],
      "conditions": [],
      "nodeInfo": {
        "containerRuntimeVersion": "containerd://1.6.4",
        "kernelVersion": "5.10.104-linuxkit",
        "kubeletVersion": "v1.24.0",
        "osImage": "Ubuntu 21.10",
      },
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Node",
    "metadata": {
      "annotations": {
        "kubeadm.alpha.kubernetes.io/cri-socket":
          "unix:///run/containerd/containerd.sock",
        "node.alpha.kubernetes.io/ttl": "0",
        "volumes.kubernetes.io/controller-managed-attach-detach": "true",
      },
      "creationTimestamp": "2022-06-25T20:44:54Z",
      "labels": {
        "beta.kubernetes.io/arch": "arm64",
        "beta.kubernetes.io/os": "linux",
        "kubernetes.io/arch": "arm64",
        "kubernetes.io/hostname": "test-worker1",
        "kubernetes.io/os": "linux",
        "node-role.kubernetes.io/worker1": "",
      },
      "name": "test-worker",
    },
    "spec": {},
    "status": {
      "addresses": [
        {
          "address": "172.20.0.3",
          "type": "InternalIP",
        },
        {
          "address": "test-worker",
          "type": "Hostname",
        },
      ],
      "conditions": [
        {
          "lastHeartbeatTime": "2022-07-03T02:11:28Z",
          "lastTransitionTime": "2022-06-25T20:45:04Z",
          "message": "kubelet is posting ready status",
          "reason": "KubeletReady",
          "status": "False",
          "type": "Ready",
        },
      ],
      "nodeInfo": {
        "containerRuntimeVersion": "containerd://1.6.4",
        "kernelVersion": "5.10.104-linuxkit",
        "kubeletVersion": "v1.24.0",
        "osImage": "Ubuntu 21.10",
      },
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Node",
    "metadata": {
      "annotations": {
        "kubeadm.alpha.kubernetes.io/cri-socket":
          "unix:///run/containerd/containerd.sock",
        "node.alpha.kubernetes.io/ttl": "0",
        "volumes.kubernetes.io/controller-managed-attach-detach": "true",
      },
      "creationTimestamp": "2022-06-25T20:44:54Z",
      "labels": {
        "beta.kubernetes.io/arch": "arm64",
        "beta.kubernetes.io/os": "linux",
        "kubernetes.io/arch": "arm64",
        "kubernetes.io/hostname": "test-worker2",
        "kubernetes.io/os": "linux",
        "kubernetes.io/role": "worker2",
      },
      "name": "test-worker2",
    },
    "spec": {},
    "status": {
      "addresses": [
        {
          "address": "172.20.0.2",
          "type": "ExternalIP",
        },
      ],
      "conditions": [
        {
          "lastHeartbeatTime": "2022-07-03T02:11:50Z",
          "lastTransitionTime": "2022-06-30T12:05:10Z",
          "message": "kubelet is posting ready status",
          "reason": "KubeletReady",
          "status": "True",
          "type": "Ready",
        },
      ],
      "nodeInfo": {
        "containerRuntimeVersion": "containerd://1.6.4",
        "kernelVersion": "5.10.104-linuxkit",
        "kubeletVersion": "v1.24.0",
        "osImage": "Ubuntu 21.10",
      },
    },
  },
];
