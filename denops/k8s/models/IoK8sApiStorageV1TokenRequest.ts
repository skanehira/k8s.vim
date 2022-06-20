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
* TokenRequest contains parameters of a service account token.
*/
export class IoK8sApiStorageV1TokenRequest {
    /**
    * Audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
    */
    'audience': string;
    /**
    * ExpirationSeconds is the duration of validity of the token in \"TokenRequestSpec\". It has the same default value of \"ExpirationSeconds\" in \"TokenRequestSpec\".
    */
    'expirationSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "audience",
            "baseName": "audience",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationSeconds",
            "baseName": "expirationSeconds",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiStorageV1TokenRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

