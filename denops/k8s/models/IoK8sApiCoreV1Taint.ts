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
* The node this Taint is attached to has the \"effect\" on any pod that does not tolerate the Taint.
*/
export class IoK8sApiCoreV1Taint {
    /**
    * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.  Possible enum values:  - `\"NoExecute\"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.  - `\"NoSchedule\"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.  - `\"PreferNoSchedule\"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.
    */
    'effect': IoK8sApiCoreV1TaintEffectEnum;
    /**
    * Required. The taint key to be applied to a node.
    */
    'key': string;
    /**
    * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
    */
    'timeAdded'?: Date;
    /**
    * The taint value corresponding to the taint key.
    */
    'value'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "effect",
            "baseName": "effect",
            "type": "IoK8sApiCoreV1TaintEffectEnum",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeAdded",
            "baseName": "timeAdded",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1Taint.attributeTypeMap;
    }

    public constructor() {
    }
}


export type IoK8sApiCoreV1TaintEffectEnum = "NoExecute" | "NoSchedule" | "PreferNoSchedule" ;

