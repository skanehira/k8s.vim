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
* Represents a source location of a volume to mount, managed by an external CSI driver
*/
export class IoK8sApiCoreV1CSIVolumeSource {
    /**
    * driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
    */
    'driver': string;
    /**
    * fsType to mount. Ex. \"ext4\", \"xfs\", \"ntfs\". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
    */
    'fsType'?: string;
    'nodePublishSecretRef'?: IoK8sApiCoreV1LocalObjectReference;
    /**
    * readOnly specifies a read-only configuration for the volume. Defaults to false (read/write).
    */
    'readOnly'?: boolean;
    /**
    * volumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
    */
    'volumeAttributes'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "driver",
            "baseName": "driver",
            "type": "string",
            "format": ""
        },
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "nodePublishSecretRef",
            "baseName": "nodePublishSecretRef",
            "type": "IoK8sApiCoreV1LocalObjectReference",
            "format": ""
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "volumeAttributes",
            "baseName": "volumeAttributes",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1CSIVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

