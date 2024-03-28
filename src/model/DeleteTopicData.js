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
 * The DeleteTopicData model module.
 * @module model/DeleteTopicData
 * @version 0.5.0
 */
class DeleteTopicData {
    /**
     * Constructs a new <code>DeleteTopicData</code>.
     * @alias module:model/DeleteTopicData
     * @param topicId {String} The id of the topic to target.
     */
    constructor(topicId) { 
        
        DeleteTopicData.initialize(this, topicId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, topicId) { 
        obj['topic_id'] = topicId;
    }

    /**
     * Constructs a <code>DeleteTopicData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteTopicData} obj Optional instance to populate.
     * @return {module:model/DeleteTopicData} The populated <code>DeleteTopicData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteTopicData();

            if (data.hasOwnProperty('topic_id')) {
                obj['topic_id'] = ApiClient.convertToType(data['topic_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteTopicData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteTopicData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteTopicData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['topic_id'] && !(typeof data['topic_id'] === 'string' || data['topic_id'] instanceof String)) {
            throw new Error("Expected the field `topic_id` to be a primitive type in the JSON string but got " + data['topic_id']);
        }

        return true;
    }


}

DeleteTopicData.RequiredProperties = ["topic_id"];

/**
 * The id of the topic to target.
 * @member {String} topic_id
 */
DeleteTopicData.prototype['topic_id'] = undefined;






export default DeleteTopicData;

