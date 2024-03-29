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

import { IoK8sApiCoreV1ConfigMapKeySelector } from './IoK8sApiCoreV1ConfigMapKeySelector.ts';
import { IoK8sApiCoreV1ObjectFieldSelector } from './IoK8sApiCoreV1ObjectFieldSelector.ts';
import { IoK8sApiCoreV1ResourceFieldSelector } from './IoK8sApiCoreV1ResourceFieldSelector.ts';
import { IoK8sApiCoreV1SecretKeySelector } from './IoK8sApiCoreV1SecretKeySelector.ts';
import { HttpFile } from '../http/http.ts';

/**
* EnvVarSource represents a source for the value of an EnvVar.
*/
export class IoK8sApiCoreV1EnvVarSource {
    'configMapKeyRef'?: IoK8sApiCoreV1ConfigMapKeySelector;
    'fieldRef'?: IoK8sApiCoreV1ObjectFieldSelector;
    'resourceFieldRef'?: IoK8sApiCoreV1ResourceFieldSelector;
    'secretKeyRef'?: IoK8sApiCoreV1SecretKeySelector;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configMapKeyRef",
            "baseName": "configMapKeyRef",
            "type": "IoK8sApiCoreV1ConfigMapKeySelector",
            "format": ""
        },
        {
            "name": "fieldRef",
            "baseName": "fieldRef",
            "type": "IoK8sApiCoreV1ObjectFieldSelector",
            "format": ""
        },
        {
            "name": "resourceFieldRef",
            "baseName": "resourceFieldRef",
            "type": "IoK8sApiCoreV1ResourceFieldSelector",
            "format": ""
        },
        {
            "name": "secretKeyRef",
            "baseName": "secretKeyRef",
            "type": "IoK8sApiCoreV1SecretKeySelector",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1EnvVarSource.attributeTypeMap;
    }

    public constructor() {
    }
}

