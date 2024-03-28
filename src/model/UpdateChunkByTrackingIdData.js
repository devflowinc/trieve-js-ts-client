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
 * The UpdateChunkByTrackingIdData model module.
 * @module model/UpdateChunkByTrackingIdData
 * @version 0.5.0
 */
class UpdateChunkByTrackingIdData {
    /**
     * Constructs a new <code>UpdateChunkByTrackingIdData</code>.
     * @alias module:model/UpdateChunkByTrackingIdData
     * @param trackingId {String} Tracking_id of the chunk you want to update. This is required to match an existing chunk.
     */
    constructor(trackingId) { 
        
        UpdateChunkByTrackingIdData.initialize(this, trackingId);
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
     * Constructs a <code>UpdateChunkByTrackingIdData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateChunkByTrackingIdData} obj Optional instance to populate.
     * @return {module:model/UpdateChunkByTrackingIdData} The populated <code>UpdateChunkByTrackingIdData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateChunkByTrackingIdData();

            if (data.hasOwnProperty('chunk_html')) {
                obj['chunk_html'] = ApiClient.convertToType(data['chunk_html'], 'String');
            }
            if (data.hasOwnProperty('group_ids')) {
                obj['group_ids'] = ApiClient.convertToType(data['group_ids'], ['String']);
            }
            if (data.hasOwnProperty('group_tracking_ids')) {
                obj['group_tracking_ids'] = ApiClient.convertToType(data['group_tracking_ids'], ['String']);
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('time_stamp')) {
                obj['time_stamp'] = ApiClient.convertToType(data['time_stamp'], 'String');
            }
            if (data.hasOwnProperty('tracking_id')) {
                obj['tracking_id'] = ApiClient.convertToType(data['tracking_id'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateChunkByTrackingIdData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateChunkByTrackingIdData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateChunkByTrackingIdData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['chunk_html'] && !(typeof data['chunk_html'] === 'string' || data['chunk_html'] instanceof String)) {
            throw new Error("Expected the field `chunk_html` to be a primitive type in the JSON string but got " + data['chunk_html']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['group_ids'])) {
            throw new Error("Expected the field `group_ids` to be an array in the JSON data but got " + data['group_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['group_tracking_ids'])) {
            throw new Error("Expected the field `group_tracking_ids` to be an array in the JSON data but got " + data['group_tracking_ids']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['time_stamp'] && !(typeof data['time_stamp'] === 'string' || data['time_stamp'] instanceof String)) {
            throw new Error("Expected the field `time_stamp` to be a primitive type in the JSON string but got " + data['time_stamp']);
        }
        // ensure the json data is a string
        if (data['tracking_id'] && !(typeof data['tracking_id'] === 'string' || data['tracking_id'] instanceof String)) {
            throw new Error("Expected the field `tracking_id` to be a primitive type in the JSON string but got " + data['tracking_id']);
        }

        return true;
    }


}

UpdateChunkByTrackingIdData.RequiredProperties = ["tracking_id"];

/**
 * HTML content of the chunk you want to update. This can also be plaintext. The innerText of the HTML will be used to create the embedding vector. The point of using HTML is for convienience, as some users have applications where users submit HTML content. If no chunk_html is provided, the existing chunk_html will be used.
 * @member {String} chunk_html
 */
UpdateChunkByTrackingIdData.prototype['chunk_html'] = undefined;

/**
 * Group ids are the ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request.
 * @member {Array.<String>} group_ids
 */
UpdateChunkByTrackingIdData.prototype['group_ids'] = undefined;

/**
 * Group tracking_ids are the tracking_ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request.
 * @member {Array.<String>} group_tracking_ids
 */
UpdateChunkByTrackingIdData.prototype['group_tracking_ids'] = undefined;

/**
 * Link of the chunk you want to update. This can also be any string. Frequently, this is a link to the source of the chunk. The link value will not affect the embedding creation. If no link is provided, the existing link will be used.
 * @member {String} link
 */
UpdateChunkByTrackingIdData.prototype['link'] = undefined;

/**
 * The metadata is a JSON object which can be used to filter chunks. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata. If no metadata is provided, the existing metadata will be used.
 * @member {Object} metadata
 */
UpdateChunkByTrackingIdData.prototype['metadata'] = undefined;

/**
 * Time_stamp should be an ISO 8601 combined date and time without timezone. It is used for time window filtering and recency-biasing search results. If no time_stamp is provided, the existing time_stamp will be used.
 * @member {String} time_stamp
 */
UpdateChunkByTrackingIdData.prototype['time_stamp'] = undefined;

/**
 * Tracking_id of the chunk you want to update. This is required to match an existing chunk.
 * @member {String} tracking_id
 */
UpdateChunkByTrackingIdData.prototype['tracking_id'] = undefined;

/**
 * Weight is a float which can be used to bias search results. This is useful for when you want to bias search results for a chunk. The magnitude only matters relative to other chunks in the chunk's dataset dataset. If no weight is provided, the existing weight will be used.
 * @member {Number} weight
 */
UpdateChunkByTrackingIdData.prototype['weight'] = undefined;






export default UpdateChunkByTrackingIdData;

