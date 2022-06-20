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

import { IoK8sApiCoreV1LocalObjectReference } from './IoK8sApiCoreV1LocalObjectReference.ts';
import { HttpFile } from '../http/http.ts';

/**
* Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.
*/
export class IoK8sApiCoreV1ISCSIVolumeSource {
    /**
    * chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
    */
    'chapAuthDiscovery'?: boolean;
    /**
    * chapAuthSession defines whether support iSCSI Session CHAP authentication
    */
    'chapAuthSession'?: boolean;
    /**
    * fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
    */
    'fsType'?: string;
    /**
    * initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
    */
    'initiatorName'?: string;
    /**
    * iqn is the target iSCSI Qualified Name.
    */
    'iqn': string;
    /**
    * iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
    */
    'iscsiInterface'?: string;
    /**
    * lun represents iSCSI Target Lun number.
    */
    'lun': number;
    /**
    * portals is the iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    */
    'portals'?: Array<string>;
    /**
    * readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
    */
    'readOnly'?: boolean;
    'secretRef'?: IoK8sApiCoreV1LocalObjectReference;
    /**
    * targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
    */
    'targetPortal': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chapAuthDiscovery",
            "baseName": "chapAuthDiscovery",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "chapAuthSession",
            "baseName": "chapAuthSession",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "initiatorName",
            "baseName": "initiatorName",
            "type": "string",
            "format": ""
        },
        {
            "name": "iqn",
            "baseName": "iqn",
            "type": "string",
            "format": ""
        },
        {
            "name": "iscsiInterface",
            "baseName": "iscsiInterface",
            "type": "string",
            "format": ""
        },
        {
            "name": "lun",
            "baseName": "lun",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "portals",
            "baseName": "portals",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "secretRef",
            "baseName": "secretRef",
            "type": "IoK8sApiCoreV1LocalObjectReference",
            "format": ""
        },
        {
            "name": "targetPortal",
            "baseName": "targetPortal",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ISCSIVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

