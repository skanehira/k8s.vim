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

import { IoK8sApiAppsV1DaemonSetUpdateStrategy } from './IoK8sApiAppsV1DaemonSetUpdateStrategy.ts';
import { IoK8sApiCoreV1PodTemplateSpec } from './IoK8sApiCoreV1PodTemplateSpec.ts';
import { IoK8sApimachineryPkgApisMetaV1LabelSelector } from './IoK8sApimachineryPkgApisMetaV1LabelSelector.ts';
import { HttpFile } from '../http/http.ts';

/**
* DaemonSetSpec is the specification of a daemon set.
*/
export class IoK8sApiAppsV1DaemonSetSpec {
    /**
    * The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready).
    */
    'minReadySeconds'?: number;
    /**
    * The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10.
    */
    'revisionHistoryLimit'?: number;
    'selector': IoK8sApimachineryPkgApisMetaV1LabelSelector;
    'template': IoK8sApiCoreV1PodTemplateSpec;
    'updateStrategy'?: IoK8sApiAppsV1DaemonSetUpdateStrategy;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minReadySeconds",
            "baseName": "minReadySeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "revisionHistoryLimit",
            "baseName": "revisionHistoryLimit",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "selector",
            "baseName": "selector",
            "type": "IoK8sApimachineryPkgApisMetaV1LabelSelector",
            "format": ""
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "IoK8sApiCoreV1PodTemplateSpec",
            "format": ""
        },
        {
            "name": "updateStrategy",
            "baseName": "updateStrategy",
            "type": "IoK8sApiAppsV1DaemonSetUpdateStrategy",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAppsV1DaemonSetSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

