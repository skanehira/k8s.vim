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
* CustomResourceDefinitionNames indicates the names to serve this CustomResourceDefinition
*/
export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames {
    /**
    * categories is a list of grouped resources this custom resource belongs to (e.g. 'all'). This is published in API discovery documents, and used by clients to support invocations like `kubectl get all`.
    */
    'categories'?: Array<string>;
    /**
    * kind is the serialized kind of the resource. It is normally CamelCase and singular. Custom resource instances will use this value as the `kind` attribute in API calls.
    */
    'kind': string;
    /**
    * listKind is the serialized kind of the list for this resource. Defaults to \"`kind`List\".
    */
    'listKind'?: string;
    /**
    * plural is the plural name of the resource to serve. The custom resources are served under `/apis/<group>/<version>/.../<plural>`. Must match the name of the CustomResourceDefinition (in the form `<names.plural>.<group>`). Must be all lowercase.
    */
    'plural': string;
    /**
    * shortNames are short names for the resource, exposed in API discovery documents, and used by clients to support invocations like `kubectl get <shortname>`. It must be all lowercase.
    */
    'shortNames'?: Array<string>;
    /**
    * singular is the singular name of the resource. It must be all lowercase. Defaults to lowercased `kind`.
    */
    'singular'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "listKind",
            "baseName": "listKind",
            "type": "string",
            "format": ""
        },
        {
            "name": "plural",
            "baseName": "plural",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortNames",
            "baseName": "shortNames",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "singular",
            "baseName": "singular",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames.attributeTypeMap;
    }

    public constructor() {
    }
}

