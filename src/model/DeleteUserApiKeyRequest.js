/**
 * Trieve API
 * Trieve OpenAPI Specification. This document describes all of the operations available through the Trieve API.
 *
 * The version of the OpenAPI document: 0.5.0
 * Contact: developers@trieve.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeleteUserApiKeyRequest model module.
 * @module model/DeleteUserApiKeyRequest
 * @version 0.5.0
 */
class DeleteUserApiKeyRequest {
    /**
     * Constructs a new <code>DeleteUserApiKeyRequest</code>.
     * @alias module:model/DeleteUserApiKeyRequest
     * @param apiKeyId {String} The id of the api key to delete.
     */
    constructor(apiKeyId) { 
        
        DeleteUserApiKeyRequest.initialize(this, apiKeyId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKeyId) { 
        obj['api_key_id'] = apiKeyId;
    }

    /**
     * Constructs a <code>DeleteUserApiKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteUserApiKeyRequest} obj Optional instance to populate.
     * @return {module:model/DeleteUserApiKeyRequest} The populated <code>DeleteUserApiKeyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteUserApiKeyRequest();

            if (data.hasOwnProperty('api_key_id')) {
                obj['api_key_id'] = ApiClient.convertToType(data['api_key_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteUserApiKeyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteUserApiKeyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteUserApiKeyRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['api_key_id'] && !(typeof data['api_key_id'] === 'string' || data['api_key_id'] instanceof String)) {
            throw new Error("Expected the field `api_key_id` to be a primitive type in the JSON string but got " + data['api_key_id']);
        }

        return true;
    }


}

DeleteUserApiKeyRequest.RequiredProperties = ["api_key_id"];

/**
 * The id of the api key to delete.
 * @member {String} api_key_id
 */
DeleteUserApiKeyRequest.prototype['api_key_id'] = undefined;






export default DeleteUserApiKeyRequest;

