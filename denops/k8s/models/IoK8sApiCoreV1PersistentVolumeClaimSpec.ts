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

import { IoK8sApiCoreV1ResourceRequirements } from './IoK8sApiCoreV1ResourceRequirements.ts';
import { IoK8sApiCoreV1TypedLocalObjectReference } from './IoK8sApiCoreV1TypedLocalObjectReference.ts';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector.ts';
import { HttpFile } from '../http/http.ts';

/**
* PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes
*/
export class IoK8sApiCoreV1PersistentVolumeClaimSpec {
    /**
    * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
    */
    'accessModes'?: Array<string>;
    'dataSource'?: IoK8sApiCoreV1TypedLocalObjectReference;
    'dataSourceRef'?: IoK8sApiCoreV1TypedLocalObjectReference;
    'resources'?: IoK8sApiCoreV1ResourceRequirements;
    'selector'?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
    /**
    * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
    */
    'storageClassName'?: string;
    /**
    * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
    */
    'volumeMode'?: string;
    /**
    * volumeName is the binding reference to the PersistentVolume backing this claim.
    */
    'volumeName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessModes",
            "baseName": "accessModes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "IoK8sApiCoreV1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "dataSourceRef",
            "baseName": "dataSourceRef",
            "type": "IoK8sApiCoreV1TypedLocalObjectReference",
            "format": ""
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "IoK8sApiCoreV1ResourceRequirements",
            "format": ""
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "storageClassName",
            "baseName": "storageClassName",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeMode",
            "baseName": "volumeMode",
            "type": "string",
            "format": ""
        },
        {
            "name": "volumeName",
            "baseName": "volumeName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1PersistentVolumeClaimSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

