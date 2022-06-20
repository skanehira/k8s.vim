/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1.24.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IoK8sApiCoreV1Capabilities } from './IoK8sApiCoreV1Capabilities.ts';
import { IoK8sApiCoreV1SELinuxOptions } from './IoK8sApiCoreV1SELinuxOptions.ts';
import { IoK8sApiCoreV1SeccompProfile } from './IoK8sApiCoreV1SeccompProfile.ts';
import { IoK8sApiCoreV1WindowsSecurityContextOptions } from './IoK8sApiCoreV1WindowsSecurityContextOptions.ts';
import { HttpFile } from '../http/http.ts';

/**
* SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.
*/
export class IoK8sApiCoreV1SecurityContext {
    /**
    * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
    */
    'allowPrivilegeEscalation'?: boolean;
    'capabilities'?: IoK8sApiCoreV1Capabilities;
    /**
    * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
    */
    'privileged'?: boolean;
    /**
    * procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
    */
    'procMount'?: string;
    /**
    * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
    */
    'readOnlyRootFilesystem'?: boolean;
    /**
    * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsGroup'?: number;
    /**
    * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
    */
    'runAsNonRoot'?: boolean;
    /**
    * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
    */
    'runAsUser'?: number;
    'seLinuxOptions'?: IoK8sApiCoreV1SELinuxOptions;
    'seccompProfile'?: IoK8sApiCoreV1SeccompProfile;
    'windowsOptions'?: IoK8sApiCoreV1WindowsSecurityContextOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowPrivilegeEscalation",
            "baseName": "allowPrivilegeEscalation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "IoK8sApiCoreV1Capabilities",
            "format": ""
        },
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "procMount",
            "baseName": "procMount",
            "type": "string",
            "format": ""
        },
        {
            "name": "readOnlyRootFilesystem",
            "baseName": "readOnlyRootFilesystem",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsGroup",
            "baseName": "runAsGroup",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "runAsNonRoot",
            "baseName": "runAsNonRoot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "runAsUser",
            "baseName": "runAsUser",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "seLinuxOptions",
            "baseName": "seLinuxOptions",
            "type": "IoK8sApiCoreV1SELinuxOptions",
            "format": ""
        },
        {
            "name": "seccompProfile",
            "baseName": "seccompProfile",
            "type": "IoK8sApiCoreV1SeccompProfile",
            "format": ""
        },
        {
            "name": "windowsOptions",
            "baseName": "windowsOptions",
            "type": "IoK8sApiCoreV1WindowsSecurityContextOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1SecurityContext.attributeTypeMap;
    }

    public constructor() {
    }
}

