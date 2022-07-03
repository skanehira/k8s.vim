// deno-lint-ignore no-explicit-any
export const svcs: any[] = [
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "creationTimestamp": "2022-06-25T20:44:34Z",
      "labels": {
        "component": "apiserver",
        "provider": "kubernetes",
      },
      "name": "kubernetes",
      "namespace": "default",
      "resourceVersion": "198",
      "uid": "3a57d1fb-f2e3-489a-bb59-cd7091cb9c5c",
    },
    "spec": {
      "clusterIP": "10.96.0.1",
      "clusterIPs": [
        "10.96.0.1",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "https",
          "port": 443,
          "protocol": "TCP",
          "targetPort": 6443,
        },
      ],
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-externalip","namespace":"default"},"spec":{"externalIPs":["172.20.0.2","172.20.0.3"],"ports":[{"name":"http-port","port":8080,"protocol":"TCP","targetPort":80}],"selector":{"app":"sample-app"},"type":"ClusterIP"}}\n',
      },
      "creationTimestamp": "2022-06-29T15:52:36Z",
      "name": "sample-externalip",
      "namespace": "default",
      "resourceVersion": "268606",
      "uid": "c5839492-c5be-4523-a110-b839e6bb61d9",
    },
    "spec": {
      "clusterIP": "10.96.62.146",
      "clusterIPs": [
        "10.96.62.146",
      ],
      "externalIPs": [
        "172.20.0.2",
        "172.20.0.3",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "http-port",
          "port": 8080,
          "protocol": "TCP",
          "targetPort": 80,
        },
      ],
      "selector": {
        "app": "sample-app",
      },
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-externalname","namespace":"default"},"spec":{"externalName":"external.example.com","type":"ExternalName"}}\n',
      },
      "creationTimestamp": "2022-06-29T16:45:11Z",
      "name": "sample-externalname",
      "namespace": "default",
      "resourceVersion": "273097",
      "uid": "0942b1c3-c75e-4a8d-92bd-fc13a9cf47e9",
    },
    "spec": {
      "externalName": "external.example.com",
      "sessionAffinity": "None",
      "type": "ExternalName",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-headless","namespace":"default"},"spec":{"clusterIP":"None","ports":[{"name":"http-port","port":80,"protocol":"TCP","targetPort":80}],"selector":{"app":"sample-app"},"type":"ClusterIP"}}\n',
      },
      "creationTimestamp": "2022-06-29T16:15:22Z",
      "name": "sample-headless",
      "namespace": "default",
      "resourceVersion": "270563",
      "uid": "ad4941c4-a648-423b-852f-1c0f8ef8c73a",
    },
    "spec": {
      "clusterIP": "None",
      "clusterIPs": [
        "None",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "http-port",
          "port": 80,
          "protocol": "TCP",
          "targetPort": 80,
        },
      ],
      "selector": {
        "app": "sample-app",
      },
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-nodeport","namespace":"default"},"spec":{"ports":[{"name":"http-port","nodePort":30080,"port":8080,"protocol":"TCP","targetPort":80}],"selector":{"app":"sample-app"},"type":"NodePort"}}\n',
      },
      "creationTimestamp": "2022-06-29T15:21:26Z",
      "name": "sample-nodeport",
      "namespace": "default",
      "resourceVersion": "265935",
      "uid": "44c89ac5-604d-4394-a764-15253dd8b009",
    },
    "spec": {
      "clusterIP": "10.96.27.68",
      "clusterIPs": [
        "10.96.27.68",
      ],
      "externalTrafficPolicy": "Cluster",
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "http-port",
          "nodePort": 30080,
          "port": 8080,
          "protocol": "TCP",
          "targetPort": 80,
        },
      ],
      "selector": {
        "app": "sample-app",
      },
      "sessionAffinity": "None",
      "type": "NodePort",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-none-selector","namespace":"default"},"spec":{"ports":[{"port":8080,"protocol":"TCP","targetPort":80}],"type":"ClusterIP"}}\n',
      },
      "creationTimestamp": "2022-06-29T17:01:58Z",
      "name": "sample-none-selector",
      "namespace": "default",
      "resourceVersion": "274512",
      "uid": "2bd4afb6-54c9-45fc-a0b7-ddb20bdc9601",
    },
    "spec": {
      "clusterIP": "10.96.246.177",
      "clusterIPs": [
        "10.96.246.177",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "port": 8080,
          "protocol": "TCP",
          "targetPort": 80,
        },
      ],
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-registry-nodeport","namespace":"default"},"spec":{"ports":[{"nodePort":30000,"port":5000,"protocol":"TCP","targetPort":5000}],"selector":{"app":"docker-registry"},"type":"NodePort"}}\n',
      },
      "creationTimestamp": "2022-06-30T05:30:23Z",
      "name": "sample-registry-nodeport",
      "namespace": "default",
      "resourceVersion": "309122",
      "uid": "70ca75b1-2cf2-4ef4-a9cc-9ce1815031fa",
    },
    "spec": {
      "clusterIP": "10.96.48.129",
      "clusterIPs": [
        "10.96.48.129",
      ],
      "externalTrafficPolicy": "Cluster",
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "nodePort": 30000,
          "port": 5000,
          "protocol": "TCP",
          "targetPort": 5000,
        },
      ],
      "selector": {
        "app": "docker-registry",
      },
      "sessionAffinity": "None",
      "type": "NodePort",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"name":"sample-subdomain","namespace":"default"},"spec":{"clusterIP":"None","ports":[],"selector":{"app":"sample-app"},"type":"ClusterIP"}}\n',
      },
      "creationTimestamp": "2022-06-29T16:36:01Z",
      "name": "sample-subdomain",
      "namespace": "default",
      "resourceVersion": "272306",
      "uid": "62525516-1ff2-4ffe-8e95-32bff02cee08",
    },
    "spec": {
      "clusterIP": "None",
      "clusterIPs": [
        "None",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "selector": {
        "app": "sample-app",
      },
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "prometheus.io/port": "9153",
        "prometheus.io/scrape": "true",
      },
      "creationTimestamp": "2022-06-25T20:44:36Z",
      "labels": {
        "k8s-app": "kube-dns",
        "kubernetes.io/cluster-service": "true",
        "kubernetes.io/name": "CoreDNS",
      },
      "name": "kube-dns",
      "namespace": "kube-system",
      "resourceVersion": "250",
      "uid": "ed884699-f7fb-4bf3-baf5-313135224ed1",
    },
    "spec": {
      "clusterIP": "10.96.0.10",
      "clusterIPs": [
        "10.96.0.10",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "dns",
          "port": 53,
          "protocol": "UDP",
          "targetPort": 53,
        },
        {
          "name": "dns-tcp",
          "port": 53,
          "protocol": "TCP",
          "targetPort": 53,
        },
        {
          "name": "metrics",
          "port": 9153,
          "protocol": "TCP",
          "targetPort": 9153,
        },
      ],
      "selector": {
        "k8s-app": "kube-dns",
      },
      "sessionAffinity": "None",
      "type": "LoadBalancer",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"k8s-app":"metrics-server"},"name":"metrics-server","namespace":"kube-system"},"spec":{"ports":[{"name":"https","port":443,"protocol":"TCP","targetPort":"https"}],"selector":{"k8s-app":"metrics-server"}}}\n',
      },
      "creationTimestamp": "2022-06-27T10:36:57Z",
      "labels": {
        "k8s-app": "metrics-server",
      },
      "name": "metrics-server",
      "namespace": "kube-system",
      "resourceVersion": "113126",
      "uid": "293568f6-1d58-4406-825e-d0332572a970",
    },
    "spec": {
      "clusterIP": "10.96.220.186",
      "clusterIPs": [
        "10.96.220.186",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "https",
          "port": 443,
          "protocol": "TCP",
          "targetPort": "https",
        },
      ],
      "selector": {
        "k8s-app": "metrics-server",
      },
      "sessionAffinity": "None",
      "type": "ClusterIP",
    },
    "status": {
      "loadBalancer": {},
    },
  },
  {
    "apiVersion": "v1",
    "kind": "Service",
    "metadata": {
      "annotations": {
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"v1","kind":"Service","metadata":{"annotations":{},"labels":{"k8s-app":"metrics-server"},"name":"metrics-server","namespace":"kube-system"},"spec":{"ports":[{"name":"https","port":443,"protocol":"TCP","targetPort":"https"}],"selector":{"k8s-app":"metrics-server"}}}\n',
      },
      "creationTimestamp": "2022-06-27T10:36:57Z",
      "labels": {
        "k8s-app": "metrics-server",
      },
      "name": "sample",
      "namespace": "test",
      "resourceVersion": "113126",
      "uid": "293568f6-1d58-4406-825e-d0332572a970",
    },
    "spec": {
      "clusterIP": "10.96.220.186",
      "clusterIPs": [
        "10.96.220.186",
      ],
      "internalTrafficPolicy": "Cluster",
      "ipFamilies": [
        "IPv4",
      ],
      "ipFamilyPolicy": "SingleStack",
      "ports": [
        {
          "name": "https",
          "port": 443,
          "protocol": "TCP",
          "targetPort": "https",
        },
      ],
      "selector": {
        "k8s-app": "metrics-server",
      },
      "sessionAffinity": "None",
      "type": "LoadBalancer",
    },
    "status": {
      "loadBalancer": {
        "ingress": [
          {
            "ip": "11.11.11.11",
          },
        ],
      },
    },
  },
];
