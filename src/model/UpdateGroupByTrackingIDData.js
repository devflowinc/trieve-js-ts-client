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
 * The UpdateGroupByTrackingIDData model module.
 * @module model/UpdateGroupByTrackingIDData
 * @version 0.5.0
 */
class UpdateGroupByTrackingIDData {
    /**
     * Constructs a new <code>UpdateGroupByTrackingIDData</code>.
     * @alias module:model/UpdateGroupByTrackingIDData
     * @param trackingId {String} Tracking Id of the chunk_group to update.
     */
    constructor(trackingId) { 
        
        UpdateGroupByTrackingIDData.initialize(this, trackingId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, trackingId) { 
        obj['tracking_id'] = trackingId;
    }

    /**
     * Constructs a <code>UpdateGroupByTrackingIDData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGroupByTrackingIDData} obj Optional instance to populate.
     * @return {module:model/UpdateGroupByTrackingIDData} The populated <code>UpdateGroupByTrackingIDData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGroupByTrackingIDData();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tracking_id')) {
                obj['tracking_id'] = ApiClient.convertToType(data['tracking_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateGroupByTrackingIDData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateGroupByTrackingIDData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateGroupByTrackingIDData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['tracking_id'] && !(typeof data['tracking_id'] === 'string' || data['tracking_id'] instanceof String)) {
            throw new Error("Expected the field `tracking_id` to be a primitive type in the JSON string but got " + data['tracking_id']);
        }

        return true;
    }


}

UpdateGroupByTrackingIDData.RequiredProperties = ["tracking_id"];

/**
 * Description to assign to the chunk_group. Convenience field for you to avoid having to remember what the group is for. If not provided, the description will not be updated.
 * @member {String} description
 */
UpdateGroupByTrackingIDData.prototype['description'] = undefined;

/**
 * Name to assign to the chunk_group. Does not need to be unique. If not provided, the name will not be updated.
 * @member {String} name
 */
UpdateGroupByTrackingIDData.prototype['name'] = undefined;

/**
 * Tracking Id of the chunk_group to update.
 * @member {String} tracking_id
 */
UpdateGroupByTrackingIDData.prototype['tracking_id'] = undefined;






export default UpdateGroupByTrackingIDData;

