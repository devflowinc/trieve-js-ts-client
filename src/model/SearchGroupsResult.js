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
import ChunkGroup from './ChunkGroup';
import ScoreChunkDTO from './ScoreChunkDTO';

/**
 * The SearchGroupsResult model module.
 * @module model/SearchGroupsResult
 * @version 0.5.0
 */
class SearchGroupsResult {
    /**
     * Constructs a new <code>SearchGroupsResult</code>.
     * @alias module:model/SearchGroupsResult
     * @param bookmarks {Array.<module:model/ScoreChunkDTO>} 
     * @param group {module:model/ChunkGroup} 
     * @param totalPages {Number} 
     */
    constructor(bookmarks, group, totalPages) { 
        
        SearchGroupsResult.initialize(this, bookmarks, group, totalPages);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bookmarks, group, totalPages) { 
        obj['bookmarks'] = bookmarks;
        obj['group'] = group;
        obj['total_pages'] = totalPages;
    }

    /**
     * Constructs a <code>SearchGroupsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchGroupsResult} obj Optional instance to populate.
     * @return {module:model/SearchGroupsResult} The populated <code>SearchGroupsResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchGroupsResult();

            if (data.hasOwnProperty('bookmarks')) {
                obj['bookmarks'] = ApiClient.convertToType(data['bookmarks'], [ScoreChunkDTO]);
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ChunkGroup.constructFromObject(data['group']);
            }
            if (data.hasOwnProperty('total_pages')) {
                obj['total_pages'] = ApiClient.convertToType(data['total_pages'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchGroupsResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchGroupsResult</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchGroupsResult.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['bookmarks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bookmarks'])) {
                throw new Error("Expected the field `bookmarks` to be an array in the JSON data but got " + data['bookmarks']);
            }
            // validate the optional field `bookmarks` (array)
            for (const item of data['bookmarks']) {
                ScoreChunkDTO.validateJSON(item);
            };
        }
        // validate the optional field `group`
        if (data['group']) { // data not null
          ChunkGroup.validateJSON(data['group']);
        }

        return true;
    }


}

SearchGroupsResult.RequiredProperties = ["bookmarks", "group", "total_pages"];

/**
 * @member {Array.<module:model/ScoreChunkDTO>} bookmarks
 */
SearchGroupsResult.prototype['bookmarks'] = undefined;

/**
 * @member {module:model/ChunkGroup} group
 */
SearchGroupsResult.prototype['group'] = undefined;

/**
 * @member {Number} total_pages
 */
SearchGroupsResult.prototype['total_pages'] = undefined;






export default SearchGroupsResult;

