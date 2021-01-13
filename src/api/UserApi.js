/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.7.7
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CallbackSecret from '../model/CallbackSecret';
import Credits from '../model/Credits';
import InlineObject from '../model/InlineObject';

/**
* User service.
* @module api/UserApi
* @version 1.7.7
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
     * Callback function to receive the result of the getCallbackSecret operation.
     * @callback module:api/UserApi~getCallbackSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallbackSecret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current callback secret (null if not set).
     * Use this operation to get the API callback secret.
     * @param {module:api/UserApi~getCallbackSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallbackSecret}
     */
    getCallbackSecret(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CallbackSecret;
      return this.apiClient.callApi(
        '/user/callbackSecret', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCredits operation.
     * @callback module:api/UserApi~getCreditsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Credits} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user's credits.
     * Use this operation to get the remaining signature and anchoring credits of the authenticated user.
     * @param {module:api/UserApi~getCreditsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Credits}
     */
    getCredits(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Credits;
      return this.apiClient.callApi(
        '/user/credits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTokens operation.
     * @callback module:api/UserApi~getTokensCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user's registered JWT tokens.
     * Use this operation to list all JWT tokens registered for the authenticated user.
     * @param {module:api/UserApi~getTokensCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    getTokens(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ['String'];
      return this.apiClient.callApi(
        '/user/tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putTokens operation.
     * @callback module:api/UserApi~putTokensCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user's registered JWT tokens.
     * Use this operation to update the list of JWT tokens registered for the authenticated user.
     * @param {module:model/InlineObject} tokens 
     * @param {module:api/UserApi~putTokensCallback} callback The callback function, accepting three arguments: error, data, response
     */
    putTokens(tokens, callback) {
      let postBody = tokens;
      // verify the required parameter 'tokens' is set
      if (tokens === undefined || tokens === null) {
        throw new Error("Missing the required parameter 'tokens' when calling putTokens");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/user/tokens', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCallbackSecret operation.
     * @callback module:api/UserApi~updateCallbackSecretCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CallbackSecret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generates a new callback secret.
     * Use this operation to generate the API callback secret.
     * @param {module:api/UserApi~updateCallbackSecretCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CallbackSecret}
     */
    updateCallbackSecret(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CallbackSecret;
      return this.apiClient.callApi(
        '/user/callbackSecret', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
