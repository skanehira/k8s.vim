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

import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig } from './IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig.ts';
import { HttpFile } from '../http/http.ts';

/**
* WebhookConversion describes how to call a conversion webhook
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion {
    'clientConfig'?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig;
    /**
    * conversionReviewVersions is an ordered list of preferred `ConversionReview` versions the Webhook expects. The API server will use the first version in the list which it supports. If none of the versions specified in this list are supported by API server, conversion will fail for the custom resource. If a persisted Webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail.
    */
    'conversionReviewVersions': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientConfig",
            "baseName": "clientConfig",
            "type": "IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookClientConfig",
            "format": ""
        },
        {
            "name": "conversionReviewVersions",
            "baseName": "conversionReviewVersions",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1WebhookConversion.attributeTypeMap;
    }

    public constructor() {
    }
}

