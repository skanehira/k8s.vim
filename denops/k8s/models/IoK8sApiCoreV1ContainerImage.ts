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
* Describe a container image
*/
export class IoK8sApiCoreV1ContainerImage {
    /**
    * Names by which this image is known. e.g. [\"k8s.gcr.io/hyperkube:v1.0.7\", \"dockerhub.io/google_containers/hyperkube:v1.0.7\"]
    */
    'names'?: Array<string>;
    /**
    * The size of the image in bytes.
    */
    'sizeBytes'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "names",
            "baseName": "names",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sizeBytes",
            "baseName": "sizeBytes",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ContainerImage.attributeTypeMap;
    }

    public constructor() {
    }
}

