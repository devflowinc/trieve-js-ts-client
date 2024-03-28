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
import ApiKeyDTO from '../model/ApiKeyDTO';
import DeleteUserApiKeyRequest from '../model/DeleteUserApiKeyRequest';
import ErrorResponseBody from '../model/ErrorResponseBody';
import SetUserApiKeyRequest from '../model/SetUserApiKeyRequest';
import SetUserApiKeyResponse from '../model/SetUserApiKeyResponse';
import SlimUser from '../model/SlimUser';
import UpdateUserData from '../model/UpdateUserData';

/**
* User service.
* @module api/UserApi
* @version 0.5.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteUserApiKey operation.
     * @callback module:api/UserApi~deleteUserApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApiKeyDTO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete User Api Key
     * Delete User Api Key  Delete an api key for the auth'ed user.
     * @param {module:model/DeleteUserApiKeyRequest} deleteUserApiKeyRequest JSON request payload to delete a user api key
     * @param {module:api/UserApi~deleteUserApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApiKeyDTO>}
     */
    deleteUserApiKey(deleteUserApiKeyRequest, callback) {
      let postBody = deleteUserApiKeyRequest;
      // verify the required parameter 'deleteUserApiKeyRequest' is set
      if (deleteUserApiKeyRequest === undefined || deleteUserApiKeyRequest === null) {
        throw new Error("Missing the required parameter 'deleteUserApiKeyRequest' when calling deleteUserApiKey");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [ApiKeyDTO];
      return this.apiClient.callApi(
        '/api/user/delete_api_key', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setUserApiKey operation.
     * @callback module:api/UserApi~setUserApiKeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SetUserApiKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set User Api Key
     * Set User Api Key  Create a new api key for the auth'ed user. Successful response will contain the newly created api key. If a write role is assigned the api key will have permission level of the auth'ed user who calls this endpoint.
     * @param {module:model/SetUserApiKeyRequest} setUserApiKeyRequest JSON request payload to create a new user api key
     * @param {module:api/UserApi~setUserApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SetUserApiKeyResponse}
     */
    setUserApiKey(setUserApiKeyRequest, callback) {
      let postBody = setUserApiKeyRequest;
      // verify the required parameter 'setUserApiKeyRequest' is set
      if (setUserApiKeyRequest === undefined || setUserApiKeyRequest === null) {
        throw new Error("Missing the required parameter 'setUserApiKeyRequest' when calling setUserApiKey");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SetUserApiKeyResponse;
      return this.apiClient.callApi(
        '/api/user/set_api_key', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SlimUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User
     * Update User  Update a user's information. If the user_id is not provided, the auth'ed user will be updated. If the user_id is provided, the auth'ed user must be an admin (1) or owner (2) of the organization.
     * @param {module:model/UpdateUserData} updateUserData JSON request payload to update user information for the auth'ed user
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SlimUser}
     */
    updateUser(updateUserData, callback) {
      let postBody = updateUserData;
      // verify the required parameter 'updateUserData' is set
      if (updateUserData === undefined || updateUserData === null) {
        throw new Error("Missing the required parameter 'updateUserData' when calling updateUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SlimUser;
      return this.apiClient.callApi(
        '/api/user', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
