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


import ApiClient from "../ApiClient";
import ErrorResponseBody from '../model/ErrorResponseBody';
import EventReturn from '../model/EventReturn';
import GetEventsData from '../model/GetEventsData';

/**
* Events service.
* @module api/EventsApi
* @version 0.5.0
*/
export default class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/EventsApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventReturn} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events for the dataset
     * Get events for the dataset  Get events for the auth'ed user. Currently, this is only for events belonging to the auth'ed user. Soon, we plan to associate events to datasets instead of users.
     * @param {String} tRDataset The dataset id to use for the request
     * @param {module:model/GetEventsData} getEventsData JSON request payload to get events for a dataset
     * @param {module:api/EventsApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventReturn}
     */
    getEvents(tRDataset, getEventsData, callback) {
      let postBody = getEventsData;
      // verify the required parameter 'tRDataset' is set
      if (tRDataset === undefined || tRDataset === null) {
        throw new Error("Missing the required parameter 'tRDataset' when calling getEvents");
      }
      // verify the required parameter 'getEventsData' is set
      if (getEventsData === undefined || getEventsData === null) {
        throw new Error("Missing the required parameter 'getEventsData' when calling getEvents");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'TR-Dataset': tRDataset
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = EventReturn;
      return this.apiClient.callApi(
        '/api/events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
