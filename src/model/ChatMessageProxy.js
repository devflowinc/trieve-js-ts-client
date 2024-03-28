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
 * The ChatMessageProxy model module.
 * @module model/ChatMessageProxy
 * @version 0.5.0
 */
class ChatMessageProxy {
    /**
     * Constructs a new <code>ChatMessageProxy</code>.
     * @alias module:model/ChatMessageProxy
     * @param content {String} 
     * @param role {String} 
     */
    constructor(content, role) { 
        
        ChatMessageProxy.initialize(this, content, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, content, role) { 
        obj['content'] = content;
        obj['role'] = role;
    }

    /**
     * Constructs a <code>ChatMessageProxy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChatMessageProxy} obj Optional instance to populate.
     * @return {module:model/ChatMessageProxy} The populated <code>ChatMessageProxy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatMessageProxy();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChatMessageProxy</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChatMessageProxy</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChatMessageProxy.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['content'] && !(typeof data['content'] === 'string' || data['content'] instanceof String)) {
            throw new Error("Expected the field `content` to be a primitive type in the JSON string but got " + data['content']);
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }

        return true;
    }


}

ChatMessageProxy.RequiredProperties = ["content", "role"];

/**
 * @member {String} content
 */
ChatMessageProxy.prototype['content'] = undefined;

/**
 * @member {String} role
 */
ChatMessageProxy.prototype['role'] = undefined;






export default ChatMessageProxy;

