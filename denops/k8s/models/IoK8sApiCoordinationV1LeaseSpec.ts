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
* LeaseSpec is a specification of a Lease.
*/
export class IoK8sApiCoordinationV1LeaseSpec {
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'acquireTime'?: Date;
    /**
    * holderIdentity contains the identity of the holder of a current lease.
    */
    'holderIdentity'?: string;
    /**
    * leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed RenewTime.
    */
    'leaseDurationSeconds'?: number;
    /**
    * leaseTransitions is the number of transitions of a lease between holders.
    */
    'leaseTransitions'?: number;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'renewTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acquireTime",
            "baseName": "acquireTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "holderIdentity",
            "baseName": "holderIdentity",
            "type": "string",
            "format": ""
        },
        {
            "name": "leaseDurationSeconds",
            "baseName": "leaseDurationSeconds",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "leaseTransitions",
            "baseName": "leaseTransitions",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "renewTime",
            "baseName": "renewTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoordinationV1LeaseSpec.attributeTypeMap;
    }

    public constructor() {
    }
}

