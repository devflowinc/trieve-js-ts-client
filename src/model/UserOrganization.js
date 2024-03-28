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
 * The UserOrganization model module.
 * @module model/UserOrganization
 * @version 0.5.0
 */
class UserOrganization {
    /**
     * Constructs a new <code>UserOrganization</code>.
     * @alias module:model/UserOrganization
     * @param createdAt {Date} 
     * @param id {String} 
     * @param organizationId {String} 
     * @param role {Number} 
     * @param updatedAt {Date} 
     * @param userId {String} 
     */
    constructor(createdAt, id, organizationId, role, updatedAt, userId) { 
        
        UserOrganization.initialize(this, createdAt, id, organizationId, role, updatedAt, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, createdAt, id, organizationId, role, updatedAt, userId) { 
        obj['created_at'] = createdAt;
        obj['id'] = id;
        obj['organization_id'] = organizationId;
        obj['role'] = role;
        obj['updated_at'] = updatedAt;
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>UserOrganization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserOrganization} obj Optional instance to populate.
     * @return {module:model/UserOrganization} The populated <code>UserOrganization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserOrganization();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserOrganization</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserOrganization</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserOrganization.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['organization_id'] && !(typeof data['organization_id'] === 'string' || data['organization_id'] instanceof String)) {
            throw new Error("Expected the field `organization_id` to be a primitive type in the JSON string but got " + data['organization_id']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

UserOrganization.RequiredProperties = ["created_at", "id", "organization_id", "role", "updated_at", "user_id"];

/**
 * @member {Date} created_at
 */
UserOrganization.prototype['created_at'] = undefined;

/**
 * @member {String} id
 */
UserOrganization.prototype['id'] = undefined;

/**
 * @member {String} organization_id
 */
UserOrganization.prototype['organization_id'] = undefined;

/**
 * @member {Number} role
 */
UserOrganization.prototype['role'] = undefined;

/**
 * @member {Date} updated_at
 */
UserOrganization.prototype['updated_at'] = undefined;

/**
 * @member {String} user_id
 */
UserOrganization.prototype['user_id'] = undefined;






export default UserOrganization;

