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
import ChunkFilter from './ChunkFilter';

/**
 * The SearchWithinGroupData model module.
 * @module model/SearchWithinGroupData
 * @version 0.5.0
 */
class SearchWithinGroupData {
    /**
     * Constructs a new <code>SearchWithinGroupData</code>.
     * @alias module:model/SearchWithinGroupData
     * @param query {String} The query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
     * @param searchType {String} Search_type can be either \"semantic\", \"fulltext\", or \"hybrid\". \"hybrid\" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \"semantic\" will pull in one page (10 chunks) of the nearest cosine distant vectors. \"fulltext\" will pull in one page (10 chunks) of full-text results based on SPLADE.
     */
    constructor(query, searchType) { 
        
        SearchWithinGroupData.initialize(this, query, searchType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, query, searchType) { 
        obj['query'] = query;
        obj['search_type'] = searchType;
    }

    /**
     * Constructs a <code>SearchWithinGroupData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchWithinGroupData} obj Optional instance to populate.
     * @return {module:model/SearchWithinGroupData} The populated <code>SearchWithinGroupData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchWithinGroupData();

            if (data.hasOwnProperty('date_bias')) {
                obj['date_bias'] = ApiClient.convertToType(data['date_bias'], 'Boolean');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], ChunkFilter);
            }
            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('group_tracking_id')) {
                obj['group_tracking_id'] = ApiClient.convertToType(data['group_tracking_id'], 'String');
            }
            if (data.hasOwnProperty('highlight_delimiters')) {
                obj['highlight_delimiters'] = ApiClient.convertToType(data['highlight_delimiters'], ['String']);
            }
            if (data.hasOwnProperty('highlight_results')) {
                obj['highlight_results'] = ApiClient.convertToType(data['highlight_results'], 'Boolean');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('score_threshold')) {
                obj['score_threshold'] = ApiClient.convertToType(data['score_threshold'], 'Number');
            }
            if (data.hasOwnProperty('search_type')) {
                obj['search_type'] = ApiClient.convertToType(data['search_type'], 'String');
            }
            if (data.hasOwnProperty('use_weights')) {
                obj['use_weights'] = ApiClient.convertToType(data['use_weights'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchWithinGroupData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchWithinGroupData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchWithinGroupData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `filters`
        if (data['filters']) { // data not null
          ChunkFilter.validateJSON(data['filters']);
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['group_tracking_id'] && !(typeof data['group_tracking_id'] === 'string' || data['group_tracking_id'] instanceof String)) {
            throw new Error("Expected the field `group_tracking_id` to be a primitive type in the JSON string but got " + data['group_tracking_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['highlight_delimiters'])) {
            throw new Error("Expected the field `highlight_delimiters` to be an array in the JSON data but got " + data['highlight_delimiters']);
        }
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }
        // ensure the json data is a string
        if (data['search_type'] && !(typeof data['search_type'] === 'string' || data['search_type'] instanceof String)) {
            throw new Error("Expected the field `search_type` to be a primitive type in the JSON string but got " + data['search_type']);
        }

        return true;
    }


}

SearchWithinGroupData.RequiredProperties = ["query", "search_type"];

/**
 * Set date_bias to true to bias search results towards more recent chunks. This will work best in hybrid search mode.
 * @member {Boolean} date_bias
 */
SearchWithinGroupData.prototype['date_bias'] = undefined;

/**
 * @member {module:model/ChunkFilter} filters
 */
SearchWithinGroupData.prototype['filters'] = undefined;

/**
 * Group specifies the group to search within. Results will only consist of chunks which are bookmarks within the specified group.
 * @member {String} group_id
 */
SearchWithinGroupData.prototype['group_id'] = undefined;

/**
 * Group_tracking_id specifies the group to search within by tracking id. Results will only consist of chunks which are bookmarks within the specified group. If both group_id and group_tracking_id are provided, group_id will be used.
 * @member {String} group_tracking_id
 */
SearchWithinGroupData.prototype['group_tracking_id'] = undefined;

/**
 * Set highlight_delimiters to a list of strings to use as delimiters for highlighting. If not specified, this defaults to [\"?\", \",\", \".\", \"!\"].
 * @member {Array.<String>} highlight_delimiters
 */
SearchWithinGroupData.prototype['highlight_delimiters'] = undefined;

/**
 * Set highlight_results to true to highlight the results. If not specified, this defaults to true.
 * @member {Boolean} highlight_results
 */
SearchWithinGroupData.prototype['highlight_results'] = undefined;

/**
 * The page of chunks to fetch. Each page is 10 chunks. Support for custom page size is coming soon.
 * @member {Number} page
 */
SearchWithinGroupData.prototype['page'] = undefined;

/**
 * The page size is the number of chunks to fetch. This can be used to fetch more than 10 chunks at a time.
 * @member {Number} page_size
 */
SearchWithinGroupData.prototype['page_size'] = undefined;

/**
 * The query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
 * @member {String} query
 */
SearchWithinGroupData.prototype['query'] = undefined;

/**
 * Set score_threshold to a float to filter out chunks with a score below the threshold.
 * @member {Number} score_threshold
 */
SearchWithinGroupData.prototype['score_threshold'] = undefined;

/**
 * Search_type can be either \"semantic\", \"fulltext\", or \"hybrid\". \"hybrid\" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \"semantic\" will pull in one page (10 chunks) of the nearest cosine distant vectors. \"fulltext\" will pull in one page (10 chunks) of full-text results based on SPLADE.
 * @member {String} search_type
 */
SearchWithinGroupData.prototype['search_type'] = undefined;

/**
 * Set use_weights to true to use the weights of the chunks in the result set in order to sort them. If not specified, this defaults to true.
 * @member {Boolean} use_weights
 */
SearchWithinGroupData.prototype['use_weights'] = undefined;






export default SearchWithinGroupData;

