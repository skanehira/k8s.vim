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

import { IoK8sApiCoreV1SecretReference } from './IoK8sApiCoreV1SecretReference.ts';
import { HttpFile } from '../http/http.ts';

/**
* FlexPersistentVolumeSource represents a generic persistent volume resource that is provisioned/attached using an exec based plugin.
*/
export class IoK8sApiCoreV1FlexPersistentVolumeSource {
    /**
    * driver is the name of the driver to use for this volume.
    */
    'driver': string;
    /**
    * fsType is the Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". The default filesystem depends on FlexVolume script.
    */
    'fsType'?: string;
    /**
    * options is Optional: this field holds extra command options if any.
    */
    'options'?: { [key: string]: string; };
    /**
    * readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
    */
    'readOnly'?: boolean;
    'secretRef'?: IoK8sApiCoreV1SecretReference;

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
            "name": "options",
            "baseName": "options",
            "type": "{ [key: string]: string; }",
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
            "type": "IoK8sApiCoreV1SecretReference",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1FlexPersistentVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

