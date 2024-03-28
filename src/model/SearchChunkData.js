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
 * The SearchChunkData model module.
 * @module model/SearchChunkData
 * @version 0.5.0
 */
class SearchChunkData {
    /**
     * Constructs a new <code>SearchChunkData</code>.
     * @alias module:model/SearchChunkData
     * @param query {String} Query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
     * @param searchType {String} Can be either \"semantic\", \"fulltext\", or \"hybrid\". \"hybrid\" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \"semantic\" will pull in one page (10 chunks) of the nearest cosine distant vectors. \"fulltext\" will pull in one page (10 chunks) of full-text results based on SPLADE.
     */
    constructor(query, searchType) { 
        
        SearchChunkData.initialize(this, query, searchType);
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
     * Constructs a <code>SearchChunkData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchChunkData} obj Optional instance to populate.
     * @return {module:model/SearchChunkData} The populated <code>SearchChunkData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchChunkData();

            if (data.hasOwnProperty('date_bias')) {
                obj['date_bias'] = ApiClient.convertToType(data['date_bias'], 'Boolean');
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], ChunkFilter);
            }
            if (data.hasOwnProperty('get_collisions')) {
                obj['get_collisions'] = ApiClient.convertToType(data['get_collisions'], 'Boolean');
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
     * Validates the JSON data with respect to <code>SearchChunkData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchChunkData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchChunkData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `filters`
        if (data['filters']) { // data not null
          ChunkFilter.validateJSON(data['filters']);
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

SearchChunkData.RequiredProperties = ["query", "search_type"];

/**
 * Set date_bias to true to bias search results towards more recent chunks. This will work best in hybrid search mode.
 * @member {Boolean} date_bias
 */
SearchChunkData.prototype['date_bias'] = undefined;

/**
 * @member {module:model/ChunkFilter} filters
 */
SearchChunkData.prototype['filters'] = undefined;

/**
 * Set get_collisions to true to get the collisions for each chunk. This will only apply if environment variable COLLISIONS_ENABLED is set to true.
 * @member {Boolean} get_collisions
 */
SearchChunkData.prototype['get_collisions'] = undefined;

/**
 * Set highlight_delimiters to a list of strings to use as delimiters for highlighting. If not specified, this defaults to [\"?\", \",\", \".\", \"!\"].
 * @member {Array.<String>} highlight_delimiters
 */
SearchChunkData.prototype['highlight_delimiters'] = undefined;

/**
 * Set highlight_results to true to highlight the results. If not specified, this defaults to true.
 * @member {Boolean} highlight_results
 */
SearchChunkData.prototype['highlight_results'] = undefined;

/**
 * Page of chunks to fetch. Each page is 10 chunks. Support for custom page size is coming soon.
 * @member {Number} page
 */
SearchChunkData.prototype['page'] = undefined;

/**
 * Page size is the number of chunks to fetch. This can be used to fetch more than 10 chunks at a time.
 * @member {Number} page_size
 */
SearchChunkData.prototype['page_size'] = undefined;

/**
 * Query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set.
 * @member {String} query
 */
SearchChunkData.prototype['query'] = undefined;

/**
 * Set score_threshold to a float to filter out chunks with a score below the threshold.
 * @member {Number} score_threshold
 */
SearchChunkData.prototype['score_threshold'] = undefined;

/**
 * Can be either \"semantic\", \"fulltext\", or \"hybrid\". \"hybrid\" will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \"semantic\" will pull in one page (10 chunks) of the nearest cosine distant vectors. \"fulltext\" will pull in one page (10 chunks) of full-text results based on SPLADE.
 * @member {String} search_type
 */
SearchChunkData.prototype['search_type'] = undefined;

/**
 * Set use_weights to true to use the weights of the chunks in the result set in order to sort them. If not specified, this defaults to true.
 * @member {Boolean} use_weights
 */
SearchChunkData.prototype['use_weights'] = undefined;






export default SearchChunkData;

