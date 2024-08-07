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

import { IoK8sApiAutoscalingV2beta2MetricIdentifier } from './IoK8sApiAutoscalingV2beta2MetricIdentifier.ts';
import { IoK8sApiAutoscalingV2beta2MetricValueStatus } from './IoK8sApiAutoscalingV2beta2MetricValueStatus.ts';
import { HttpFile } from '../http/http.ts';

/**
* PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
*/
export class IoK8sApiAutoscalingV2beta2PodsMetricStatus {
    'current': IoK8sApiAutoscalingV2beta2MetricValueStatus;
    'metric': IoK8sApiAutoscalingV2beta2MetricIdentifier;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "current",
            "baseName": "current",
            "type": "IoK8sApiAutoscalingV2beta2MetricValueStatus",
            "format": ""
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "IoK8sApiAutoscalingV2beta2MetricIdentifier",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiAutoscalingV2beta2PodsMetricStatus.attributeTypeMap;
    }

    public constructor() {
    }
}

