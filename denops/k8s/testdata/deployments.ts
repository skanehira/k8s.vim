// deno-lint-ignore no-explicit-any
export const deployments: any[] = [
  {
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "annotations": {
        "deployment.kubernetes.io/revision": "1",
      },
      "creationTimestamp": "2022-06-25T20:44:36Z",
      "generation": 1,
      "labels": {
        "k8s-app": "kube-dns",
      },
      "name": "coredns",
      "namespace": "kube-system",
      "resourceVersion": "551",
      "uid": "fe68483b-a782-490a-a53f-57808ad53adb",
    },
    "spec": {
      "progressDeadlineSeconds": 600,
      "replicas": 2,
      "revisionHistoryLimit": 10,
      "selector": {
        "matchLabels": {
          "k8s-app": "kube-dns",
        },
      },
      "strategy": {
        "rollingUpdate": {
          "maxSurge": "25%",
          "maxUnavailable": 1,
        },
        "type": "RollingUpdate",
      },
      "template": {
        "metadata": {
          "creationTimestamp": null,
          "labels": {
            "k8s-app": "kube-dns",
          },
        },
        "spec": {
          "containers": [
            {
              "args": [
                "-conf",
                "/etc/coredns/Corefile",
              ],
              "image": "k8s.gcr.io/coredns/coredns:v1.8.6",
              "imagePullPolicy": "IfNotPresent",
              "livenessProbe": {
                "failureThreshold": 5,
                "httpGet": {
                  "path": "/health",
                  "port": 8080,
                  "scheme": "HTTP",
                },
                "initialDelaySeconds": 60,
                "periodSeconds": 10,
                "successThreshold": 1,
                "timeoutSeconds": 5,
              },
              "name": "coredns",
              "ports": [
                {
                  "containerPort": 53,
                  "name": "dns",
                  "protocol": "UDP",
                },
                {
                  "containerPort": 53,
                  "name": "dns-tcp",
                  "protocol": "TCP",
                },
                {
                  "containerPort": 9153,
                  "name": "metrics",
                  "protocol": "TCP",
                },
              ],
              "readinessProbe": {
                "failureThreshold": 3,
                "httpGet": {
                  "path": "/ready",
                  "port": 8181,
                  "scheme": "HTTP",
                },
                "periodSeconds": 10,
                "successThreshold": 1,
                "timeoutSeconds": 1,
              },
              "resources": {
                "limits": {
                  "memory": "170Mi",
                },
                "requests": {
                  "cpu": "100m",
                  "memory": "70Mi",
                },
              },
              "securityContext": {
                "allowPrivilegeEscalation": false,
                "capabilities": {
                  "add": [
                    "NET_BIND_SERVICE",
                  ],
                  "drop": [
                    "all",
                  ],
                },
                "readOnlyRootFilesystem": true,
              },
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File",
              "volumeMounts": [
                {
                  "mountPath": "/etc/coredns",
                  "name": "config-volume",
                  "readOnly": true,
                },
              ],
            },
          ],
          "dnsPolicy": "Default",
          "nodeSelector": {
            "kubernetes.io/os": "linux",
          },
          "priorityClassName": "system-cluster-critical",
          "restartPolicy": "Always",
          "schedulerName": "default-scheduler",
          "securityContext": {},
          "serviceAccount": "coredns",
          "serviceAccountName": "coredns",
          "terminationGracePeriodSeconds": 30,
          "tolerations": [
            {
              "key": "CriticalAddonsOnly",
              "operator": "Exists",
            },
            {
              "effect": "NoSchedule",
              "key": "node-role.kubernetes.io/master",
            },
            {
              "effect": "NoSchedule",
              "key": "node-role.kubernetes.io/control-plane",
            },
          ],
          "volumes": [
            {
              "configMap": {
                "defaultMode": 420,
                "items": [
                  {
                    "key": "Corefile",
                    "path": "Corefile",
                  },
                ],
                "name": "coredns",
              },
              "name": "config-volume",
            },
          ],
        },
      },
    },
    "status": {
      "availableReplicas": 2,
      "conditions": [
        {
          "lastTransitionTime": "2022-06-25T20:44:59Z",
          "lastUpdateTime": "2022-06-25T20:44:59Z",
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available",
        },
        {
          "lastTransitionTime": "2022-06-25T20:44:49Z",
          "lastUpdateTime": "2022-06-25T20:45:00Z",
          "message":
            'ReplicaSet "coredns-6d4b75cb6d" has successfully progressed.',
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing",
        },
      ],
      "observedGeneration": 1,
      "readyReplicas": 2,
      "replicas": 2,
      "updatedReplicas": 2,
    },
  },
  {
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "annotations": {
        "deployment.kubernetes.io/revision": "2",
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"k8s-app":"metrics-server"},"name":"metrics-server","namespace":"kube-system"},"spec":{"selector":{"matchLabels":{"k8s-app":"metrics-server"}},"strategy":{"rollingUpdate":{"maxUnavailable":0}},"template":{"metadata":{"labels":{"k8s-app":"metrics-server"}},"spec":{"containers":[{"args":["--cert-dir=/tmp","--secure-port=4443","--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname","--kubelet-use-node-status-port","--metric-resolution=15s"],"image":"k8s.gcr.io/metrics-server/metrics-server:v0.6.1","imagePullPolicy":"IfNotPresent","livenessProbe":{"failureThreshold":3,"httpGet":{"path":"/livez","port":"https","scheme":"HTTPS"},"periodSeconds":10},"name":"metrics-server","ports":[{"containerPort":4443,"name":"https","protocol":"TCP"}],"readinessProbe":{"failureThreshold":3,"httpGet":{"path":"/readyz","port":"https","scheme":"HTTPS"},"initialDelaySeconds":20,"periodSeconds":10},"resources":{"requests":{"cpu":"100m","memory":"200Mi"}},"securityContext":{"allowPrivilegeEscalation":false,"readOnlyRootFilesystem":true,"runAsNonRoot":true,"runAsUser":1000},"volumeMounts":[{"mountPath":"/tmp","name":"tmp-dir"}]}],"nodeSelector":{"kubernetes.io/os":"linux"},"priorityClassName":"system-cluster-critical","serviceAccountName":"metrics-server","volumes":[{"emptyDir":{},"name":"tmp-dir"}]}}}}\n',
      },
      "creationTimestamp": "2022-06-27T10:36:57Z",
      "generation": 4,
      "labels": {
        "k8s-app": "metrics-server",
      },
      "name": "metrics-server",
      "namespace": "kube-system",
      "resourceVersion": "341762",
      "uid": "7e8bc251-1928-45ed-b10e-62b06efa6d14",
    },
    "spec": {
      "progressDeadlineSeconds": 600,
      "replicas": 1,
      "revisionHistoryLimit": 10,
      "selector": {
        "matchLabels": {
          "k8s-app": "metrics-server",
        },
      },
      "strategy": {
        "rollingUpdate": {
          "maxSurge": "25%",
          "maxUnavailable": 0,
        },
        "type": "RollingUpdate",
      },
      "template": {
        "metadata": {
          "creationTimestamp": null,
          "labels": {
            "k8s-app": "metrics-server",
          },
        },
        "spec": {
          "containers": [
            {
              "args": [
                "--cert-dir=/tmp",
                "--secure-port=4443",
                "--kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname",
                "--kubelet-use-node-status-port",
                "--metric-resolution=15s",
                "--kubelet-insecure-tls",
              ],
              "image": "k8s.gcr.io/metrics-server/metrics-server:v0.6.1",
              "imagePullPolicy": "IfNotPresent",
              "livenessProbe": {
                "failureThreshold": 3,
                "httpGet": {
                  "path": "/livez",
                  "port": "https",
                  "scheme": "HTTPS",
                },
                "periodSeconds": 10,
                "successThreshold": 1,
                "timeoutSeconds": 1,
              },
              "name": "metrics-server",
              "ports": [
                {
                  "containerPort": 4443,
                  "name": "https",
                  "protocol": "TCP",
                },
              ],
              "readinessProbe": {
                "failureThreshold": 3,
                "httpGet": {
                  "path": "/readyz",
                  "port": "https",
                  "scheme": "HTTPS",
                },
                "initialDelaySeconds": 20,
                "periodSeconds": 10,
                "successThreshold": 1,
                "timeoutSeconds": 1,
              },
              "resources": {
                "requests": {
                  "cpu": "100m",
                  "memory": "200Mi",
                },
              },
              "securityContext": {
                "allowPrivilegeEscalation": false,
                "readOnlyRootFilesystem": true,
                "runAsNonRoot": true,
                "runAsUser": 1000,
              },
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File",
              "volumeMounts": [
                {
                  "mountPath": "/tmp",
                  "name": "tmp-dir",
                },
              ],
            },
          ],
          "dnsPolicy": "ClusterFirst",
          "nodeSelector": {
            "kubernetes.io/os": "linux",
          },
          "priorityClassName": "system-cluster-critical",
          "restartPolicy": "Always",
          "schedulerName": "default-scheduler",
          "securityContext": {},
          "serviceAccount": "metrics-server",
          "serviceAccountName": "metrics-server",
          "terminationGracePeriodSeconds": 30,
          "volumes": [
            {
              "emptyDir": {},
              "name": "tmp-dir",
            },
          ],
        },
      },
    },
    "status": {
      "availableReplicas": 1,
      "conditions": [
        {
          "lastTransitionTime": "2022-06-27T10:47:11Z",
          "lastUpdateTime": "2022-06-27T11:00:01Z",
          "message":
            'ReplicaSet "metrics-server-658867cdb7" has successfully progressed.',
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing",
        },
        {
          "lastTransitionTime": "2022-06-30T12:06:03Z",
          "lastUpdateTime": "2022-06-30T12:06:03Z",
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available",
        },
      ],
      "observedGeneration": 4,
      "readyReplicas": 1,
      "replicas": 1,
      "updatedReplicas": 1,
    },
  },
  {
    "apiVersion": "apps/v1",
    "kind": "Deployment",
    "metadata": {
      "annotations": {
        "deployment.kubernetes.io/revision": "1",
        "kubectl.kubernetes.io/last-applied-configuration":
          '{"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"name":"local-path-provisioner","namespace":"local-path-storage"},"spec":{"replicas":1,"selector":{"matchLabels":{"app":"local-path-provisioner"}},"template":{"metadata":{"labels":{"app":"local-path-provisioner"}},"spec":{"containers":[{"command":["local-path-provisioner","--debug","start","--helper-image","docker.io/kindest/local-path-helper:v20220512-507ff70b","--config","/etc/config/config.json"],"env":[{"name":"POD_NAMESPACE","valueFrom":{"fieldRef":{"fieldPath":"metadata.namespace"}}}],"image":"docker.io/kindest/local-path-provisioner:v0.0.22-kind.0","imagePullPolicy":"IfNotPresent","name":"local-path-provisioner","volumeMounts":[{"mountPath":"/etc/config/","name":"config-volume"}]}],"nodeSelector":{"kubernetes.io/os":"linux"},"serviceAccountName":"local-path-provisioner-service-account","tolerations":[{"effect":"NoSchedule","key":"node-role.kubernetes.io/control-plane","operator":"Equal"},{"effect":"NoSchedule","key":"node-role.kubernetes.io/master","operator":"Equal"}],"volumes":[{"configMap":{"name":"local-path-config"},"name":"config-volume"}]}}}}\n',
      },
      "creationTimestamp": "2022-06-25T20:44:39Z",
      "generation": 1,
      "name": "local-path-provisioner",
      "namespace": "local-path-storage",
      "resourceVersion": "255628",
      "uid": "95fe8c7d-5307-4003-91fc-9af46f3eac78",
    },
    "spec": {
      "progressDeadlineSeconds": 600,
      "replicas": 1,
      "revisionHistoryLimit": 10,
      "selector": {
        "matchLabels": {
          "app": "local-path-provisioner",
        },
      },
      "strategy": {
        "rollingUpdate": {
          "maxSurge": "25%",
          "maxUnavailable": "25%",
        },
        "type": "RollingUpdate",
      },
      "template": {
        "metadata": {
          "creationTimestamp": null,
          "labels": {
            "app": "local-path-provisioner",
          },
        },
        "spec": {
          "containers": [
            {
              "command": [
                "local-path-provisioner",
                "--debug",
                "start",
                "--helper-image",
                "docker.io/kindest/local-path-helper:v20220512-507ff70b",
                "--config",
                "/etc/config/config.json",
              ],
              "env": [
                {
                  "name": "POD_NAMESPACE",
                  "valueFrom": {
                    "fieldRef": {
                      "apiVersion": "v1",
                      "fieldPath": "metadata.namespace",
                    },
                  },
                },
              ],
              "image":
                "docker.io/kindest/local-path-provisioner:v0.0.22-kind.0",
              "imagePullPolicy": "IfNotPresent",
              "name": "local-path-provisioner",
              "resources": {},
              "terminationMessagePath": "/dev/termination-log",
              "terminationMessagePolicy": "File",
              "volumeMounts": [
                {
                  "mountPath": "/etc/config/",
                  "name": "config-volume",
                },
              ],
            },
          ],
          "dnsPolicy": "ClusterFirst",
          "nodeSelector": {
            "kubernetes.io/os": "linux",
          },
          "restartPolicy": "Always",
          "schedulerName": "default-scheduler",
          "securityContext": {},
          "serviceAccount": "local-path-provisioner-service-account",
          "serviceAccountName": "local-path-provisioner-service-account",
          "terminationGracePeriodSeconds": 30,
          "tolerations": [
            {
              "effect": "NoSchedule",
              "key": "node-role.kubernetes.io/control-plane",
              "operator": "Equal",
            },
            {
              "effect": "NoSchedule",
              "key": "node-role.kubernetes.io/master",
              "operator": "Equal",
            },
          ],
          "volumes": [
            {
              "configMap": {
                "defaultMode": 420,
                "name": "local-path-config",
              },
              "name": "config-volume",
            },
          ],
        },
      },
    },
    "status": {
      "availableReplicas": 1,
      "conditions": [
        {
          "lastTransitionTime": "2022-06-25T20:44:49Z",
          "lastUpdateTime": "2022-06-25T20:44:59Z",
          "message":
            'ReplicaSet "local-path-provisioner-9cd9bd544" has successfully progressed.',
          "reason": "NewReplicaSetAvailable",
          "status": "True",
          "type": "Progressing",
        },
        {
          "lastTransitionTime": "2022-06-29T13:20:40Z",
          "lastUpdateTime": "2022-06-29T13:20:40Z",
          "message": "Deployment has minimum availability.",
          "reason": "MinimumReplicasAvailable",
          "status": "True",
          "type": "Available",
        },
      ],
      "observedGeneration": 1,
      "readyReplicas": 1,
      "replicas": 1,
      "updatedReplicas": 1,
    },
  },
];
