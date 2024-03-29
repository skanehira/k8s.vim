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

import { IoK8sApiPolicyV1beta1IDRange } from './IoK8sApiPolicyV1beta1IDRange.ts';
import { HttpFile } from '../http/http.ts';

/**
* RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
*/
export class IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions {
    /**
    * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
    */
    'ranges'?: Array<IoK8sApiPolicyV1beta1IDRange>;
    /**
    * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
    */
    'rule': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ranges",
            "baseName": "ranges",
            "type": "Array<IoK8sApiPolicyV1beta1IDRange>",
            "format": ""
        },
        {
            "name": "rule",
            "baseName": "rule",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

