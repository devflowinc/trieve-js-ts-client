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
 * The UploadFileData model module.
 * @module model/UploadFileData
 * @version 0.5.0
 */
class UploadFileData {
    /**
     * Constructs a new <code>UploadFileData</code>.
     * @alias module:model/UploadFileData
     * @param base64File {String} Base64 encoded file. Convert + to -, / to _, and remove the ending = if present. This is the standard base64url encoding.
     * @param fileMimeType {String} MIME type of the file being uploaded.
     * @param fileName {String} Name of the file being uploaded, including the extension.
     */
    constructor(base64File, fileMimeType, fileName) { 
        
        UploadFileData.initialize(this, base64File, fileMimeType, fileName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, base64File, fileMimeType, fileName) { 
        obj['base64_file'] = base64File;
        obj['file_mime_type'] = fileMimeType;
        obj['file_name'] = fileName;
    }

    /**
     * Constructs a <code>UploadFileData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadFileData} obj Optional instance to populate.
     * @return {module:model/UploadFileData} The populated <code>UploadFileData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadFileData();

            if (data.hasOwnProperty('base64_file')) {
                obj['base64_file'] = ApiClient.convertToType(data['base64_file'], 'String');
            }
            if (data.hasOwnProperty('create_chunks')) {
                obj['create_chunks'] = ApiClient.convertToType(data['create_chunks'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file_mime_type')) {
                obj['file_mime_type'] = ApiClient.convertToType(data['file_mime_type'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('tag_set')) {
                obj['tag_set'] = ApiClient.convertToType(data['tag_set'], ['String']);
            }
            if (data.hasOwnProperty('time_stamp')) {
                obj['time_stamp'] = ApiClient.convertToType(data['time_stamp'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadFileData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadFileData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UploadFileData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['base64_file'] && !(typeof data['base64_file'] === 'string' || data['base64_file'] instanceof String)) {
            throw new Error("Expected the field `base64_file` to be a primitive type in the JSON string but got " + data['base64_file']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['file_mime_type'] && !(typeof data['file_mime_type'] === 'string' || data['file_mime_type'] instanceof String)) {
            throw new Error("Expected the field `file_mime_type` to be a primitive type in the JSON string but got " + data['file_mime_type']);
        }
        // ensure the json data is a string
        if (data['file_name'] && !(typeof data['file_name'] === 'string' || data['file_name'] instanceof String)) {
            throw new Error("Expected the field `file_name` to be a primitive type in the JSON string but got " + data['file_name']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tag_set'])) {
            throw new Error("Expected the field `tag_set` to be an array in the JSON data but got " + data['tag_set']);
        }
        // ensure the json data is a string
        if (data['time_stamp'] && !(typeof data['time_stamp'] === 'string' || data['time_stamp'] instanceof String)) {
            throw new Error("Expected the field `time_stamp` to be a primitive type in the JSON string but got " + data['time_stamp']);
        }

        return true;
    }


}

UploadFileData.RequiredProperties = ["base64_file", "file_mime_type", "file_name"];

/**
 * Base64 encoded file. Convert + to -, / to _, and remove the ending = if present. This is the standard base64url encoding.
 * @member {String} base64_file
 */
UploadFileData.prototype['base64_file'] = undefined;

/**
 * Create chunks is a boolean which determines whether or not to create chunks from the file. If false, you can manually chunk the file and send the chunks to the create_chunk endpoint with the file_id to associate chunks with the file. Meant mostly for advanced users.
 * @member {Boolean} create_chunks
 */
UploadFileData.prototype['create_chunks'] = undefined;

/**
 * Description is an optional convience field so you do not have to remember what the file contains or is about. It will be included on the group resulting from the file which will hold its chunk.
 * @member {String} description
 */
UploadFileData.prototype['description'] = undefined;

/**
 * MIME type of the file being uploaded.
 * @member {String} file_mime_type
 */
UploadFileData.prototype['file_mime_type'] = undefined;

/**
 * Name of the file being uploaded, including the extension.
 * @member {String} file_name
 */
UploadFileData.prototype['file_name'] = undefined;

/**
 * Link to the file. This can also be any string. This can be used to filter when searching for the file's resulting chunks. The link value will not affect embedding creation.
 * @member {String} link
 */
UploadFileData.prototype['link'] = undefined;

/**
 * Metadata is a JSON object which can be used to filter chunks. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata. Will be passed down to the file's chunks.
 * @member {Object} metadata
 */
UploadFileData.prototype['metadata'] = undefined;

/**
 * Tag set is a comma separated list of tags which will be passed down to the chunks made from the file. Tags are used to filter chunks when searching. HNSW indices are created for each tag such that there is no performance loss when filtering on them.
 * @member {Array.<String>} tag_set
 */
UploadFileData.prototype['tag_set'] = undefined;

/**
 * Time stamp should be an ISO 8601 combined date and time without timezone. Time_stamp is used for time window filtering and recency-biasing search results. Will be passed down to the file's chunks.
 * @member {String} time_stamp
 */
UploadFileData.prototype['time_stamp'] = undefined;






export default UploadFileData;

