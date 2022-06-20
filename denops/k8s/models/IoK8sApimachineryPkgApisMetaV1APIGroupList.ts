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

import { IoK8sApimachineryPkgApisMetaV1APIGroup } from './IoK8sApimachineryPkgApisMetaV1APIGroup.ts';
import { HttpFile } from '../http/http.ts';

/**
* APIGroupList is a list of APIGroup, to allow clients to discover the API at /apis.
*/
export class IoK8sApimachineryPkgApisMetaV1APIGroupList {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * groups is a list of APIGroup.
    */
    'groups': Array<IoK8sApimachineryPkgApisMetaV1APIGroup>;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<IoK8sApimachineryPkgApisMetaV1APIGroup>",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApimachineryPkgApisMetaV1APIGroupList.attributeTypeMap;
    }

    public constructor() {
    }
}

