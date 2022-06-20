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

import { IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus } from './IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus.ts';
import { IoK8sApiAutoscalingV2beta2ExternalMetricStatus } from './IoK8sApiAutoscalingV2beta2ExternalMetricStatus.ts';
import { IoK8sApiAutoscalingV2beta2ObjectMetricStatus } from './IoK8sApiAutoscalingV2beta2ObjectMetricStatus.ts';
import { IoK8sApiAutoscalingV2beta2PodsMetricStatus } from './IoK8sApiAutoscalingV2beta2PodsMetricStatus.ts';
import { IoK8sApiAutoscalingV2beta2ResourceMetricStatus } from './IoK8sApiAutoscalingV2beta2ResourceMetricStatus.ts';
import { HttpFile } from '../http/http.ts';

/**
* MetricStatus describes the last-read state of a single metric.
*/
export class IoK8sApiAutoscalingV2beta2MetricStatus {
    'containerResource'?: IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus;
    'external'?: IoK8sApiAutoscalingV2beta2ExternalMetricStatus;
    'object'?: IoK8sApiAutoscalingV2beta2ObjectMetricStatus;
    'pods'?: IoK8sApiAutoscalingV2beta2PodsMetricStatus;
    'resource'?: IoK8sApiAutoscalingV2beta2ResourceMetricStatus;
    /**
    * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "IoK8sApiAutoscalingV2beta2ContainerResourceMetricStatus",
            "format": ""
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "IoK8sApiAutoscalingV2beta2ExternalMetricStatus",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "IoK8sApiAutoscalingV2beta2ObjectMetricStatus",
            "format": ""
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "IoK8sApiAutoscalingV2beta2PodsMetricStatus",
            "format": ""
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "IoK8sApiAutoscalingV2beta2ResourceMetricStatus",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2beta2MetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

