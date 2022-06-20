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

import { HttpFile } from '../http/http.ts';

/**
* Represents a vSphere volume resource.
*/
export class IoK8sApiCoreV1VsphereVirtualDiskVolumeSource {
    /**
    * fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified.
    */
    'fsType'?: string;
    /**
    * storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
    */
    'storagePolicyID'?: string;
    /**
    * storagePolicyName is the storage Policy Based Management (SPBM) profile name.
    */
    'storagePolicyName'?: string;
    /**
    * volumePath is the path that identifies vSphere volume vmdk
    */
    'volumePath': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fsType",
            "baseName": "fsType",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePolicyID",
            "baseName": "storagePolicyID",
            "type": "string",
            "format": ""
        },
        {
            "name": "storagePolicyName",
            "baseName": "storagePolicyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumePath",
            "baseName": "volumePath",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.attributeTypeMap;
    }

    public constructor() {
    }
}

