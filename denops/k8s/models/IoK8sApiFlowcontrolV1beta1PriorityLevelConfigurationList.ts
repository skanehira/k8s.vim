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

import { IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration } from './IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration.ts';
import { IoK8sApimachineryPkgApisMetaV1ListMeta } from './IoK8sApimachineryPkgApisMetaV1ListMeta.ts';
import { HttpFile } from '../http/http.ts';

/**
* PriorityLevelConfigurationList is a list of PriorityLevelConfiguration objects.
*/
export class IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * `items` is a list of request-priorities.
    */
    'items': Array<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration>;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: IoK8sApimachineryPkgApisMetaV1ListMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<IoK8sApiFlowcontrolV1beta1PriorityLevelConfiguration>",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ListMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationList.attributeTypeMap;
    }

    public constructor() {
    }
}

