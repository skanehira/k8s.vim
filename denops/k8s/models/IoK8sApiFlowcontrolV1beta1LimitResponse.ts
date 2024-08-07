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

import { IoK8sApiFlowcontrolV1beta1QueuingConfiguration } from './IoK8sApiFlowcontrolV1beta1QueuingConfiguration.ts';
import { HttpFile } from '../http/http.ts';

/**
* LimitResponse defines how to handle requests that can not be executed right now.
*/
export class IoK8sApiFlowcontrolV1beta1LimitResponse {
    'queuing'?: IoK8sApiFlowcontrolV1beta1QueuingConfiguration;
    /**
    * `type` is \"Queue\" or \"Reject\". \"Queue\" means that requests that can not be executed upon arrival are held in a queue until they can be executed or a queuing limit is reached. \"Reject\" means that requests that can not be executed upon arrival are rejected. Required.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "queuing",
            "baseName": "queuing",
            "type": "IoK8sApiFlowcontrolV1beta1QueuingConfiguration",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1LimitResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

