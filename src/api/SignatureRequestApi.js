/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.1
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SignatureRequest', 'model/SignatureRequestSign', 'model/SignatureRequestSignResult', 'model/SignatureRequests'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SignatureRequest'), require('../model/SignatureRequestSign'), require('../model/SignatureRequestSignResult'), require('../model/SignatureRequests'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.SignatureRequestApi = factory(root.WoleetApi.ApiClient, root.WoleetApi.SignatureRequest, root.WoleetApi.SignatureRequestSign, root.WoleetApi.SignatureRequestSignResult, root.WoleetApi.SignatureRequests);
  }
}(this, function(ApiClient, SignatureRequest, SignatureRequestSign, SignatureRequestSignResult, SignatureRequests) {
  'use strict';

  /**
   * SignatureRequest service.
   * @module api/SignatureRequestApi
   * @version 1.6.1
   */

  /**
   * Constructs a new SignatureRequestApi. 
   * @alias module:api/SignatureRequestApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~createSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new signature request.
     * Use this operation to create a new signature request.&lt;br&gt; The properties &#x60;id&#x60;, &#x60;created&#x60; and &#x60;lastModified&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned request.&lt;br&gt; Only the properties &#x60;name&#x60; and &#x60;hashToSign&#x60; are required: the &#x60;hashToSign&#x60; property must be the SHA256 hash of the data to sign. This allows not to leak the original data and to keep the actual signed data small (signing the digest is equivalent to signing the original data).&lt;br&gt; Be sure to have enough signature and anchoring credits on your account to fulfill the signature request (each registered signature will cost you 1 signature and 1 anchoring credit).&lt;br&gt; 
     * @param {module:model/SignatureRequest} signatureRequest SignatureRequest object to create.
     * @param {module:api/SignatureRequestApi~createSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    this.createSignatureRequest = function(signatureRequest, callback) {
      var postBody = signatureRequest;

      // verify the required parameter 'signatureRequest' is set
      if (signatureRequest === undefined || signatureRequest === null) {
        throw new Error("Missing the required parameter 'signatureRequest' when calling createSignatureRequest");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignatureRequest;

      return this.apiClient.callApi(
        '/signatureRequest', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~deleteSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a signature request.
     * Use this operation to delete a signature request.&lt;br&gt; 
     * @param {String} requestId Identifier of the signature request to delete.
     * @param {module:api/SignatureRequestApi~deleteSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSignatureRequest = function(requestId, callback) {
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling deleteSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~getSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a signature request by its identifier.
     * Use this operation to retrieve a signature request by its identifier.&lt;br&gt; When accessed with no authentication, only public attributes of the signature request are returned. 
     * @param {String} requestId Identifier of the signature request to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.signeeId Secret identifier of the signee wanting to retrieve the signature request.&lt;br&gt; If set, information related to the signee is added to the response.&lt;br&gt; **This secret identifier is generated by the platform and included in the email sent to the signee, allowing the platform to authenticate the signee.** 
     * @param {module:api/SignatureRequestApi~getSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    this.getSignatureRequest = function(requestId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
        'signeeId': opts['signeeId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SignatureRequest;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchSignatureRequests operation.
     * @callback module:api/SignatureRequestApi~searchSignatureRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequests} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for signature requests.
     * Use this operation to retrieve all signature requests having a given &#x60;name&#x60; and/or &#x60;hashToSign&#x60; property.&lt;br&gt; Only requests belonging to the authenticated user are returned.&lt;br&gt; Paging and sorting is supported. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Index of the page to retrieve (from 0). (default to 0)
     * @param {Number} opts.size Number of anchors per page. (default to 20)
     * @param {module:model/String} opts.direction Sorting direction: ASC for ascending DESC for descending.  (default to &#39;ASC&#39;)
     * @param {module:model/String} opts.sort Sorting property: possible values are limited to &#x60;id&#x60;, &#x60;created&#x60; and &#x60;hashToSign&#x60;.  (default to &#39;created&#39;)
     * @param {String} opts.name &#x60;name&#x60; to search for: all signature requests whose &#x60;name&#x60; property contains this sub-string are returned.&lt;br&gt; **WARNING: Searching by name can timeout on a large signature request set.** 
     * @param {String} opts.hashToSign &#x60;hashToSign&#x60; to search for: all signature requests whose &#x60;hashToSign&#x60; property is equal are returned. 
     * @param {module:api/SignatureRequestApi~searchSignatureRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequests}
     */
    this.searchSignatureRequests = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'direction': opts['direction'],
        'sort': opts['sort'],
        'name': opts['name'],
        'hashToSign': opts['hashToSign'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = SignatureRequests;

      return this.apiClient.callApi(
        '/signatureRequests', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendSignatureRequestOTP operation.
     * @callback module:api/SignatureRequestApi~sendSignatureRequestOTPCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate and send a One Time Password to a signee of a signature request.
     * Use this operation to generate and send a One Time Password by SMS to a signee of a signature request.&lt;br&gt; 
     * @param {String} requestId Identifier of the signature request.
     * @param {String} signeeId Secret identifier of the signee wanting to retrieve his One Time Password.&lt;br&gt; **This secret identifier is generated by the platform and included in the email sent to the signee, allowing the platform to authenticate the signee.** 
     * @param {module:model/SignatureRequestSign} signatureRequestSign Signature to register.
     * @param {module:api/SignatureRequestApi~sendSignatureRequestOTPCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendSignatureRequestOTP = function(requestId, signeeId, signatureRequestSign, callback) {
      var postBody = signatureRequestSign;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling sendSignatureRequestOTP");
      }

      // verify the required parameter 'signeeId' is set
      if (signeeId === undefined || signeeId === null) {
        throw new Error("Missing the required parameter 'signeeId' when calling sendSignatureRequestOTP");
      }

      // verify the required parameter 'signatureRequestSign' is set
      if (signatureRequestSign === undefined || signatureRequestSign === null) {
        throw new Error("Missing the required parameter 'signatureRequestSign' when calling sendSignatureRequestOTP");
      }


      var pathParams = {
        'requestId': requestId,
        'signeeId': signeeId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/otp/{signeeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the signSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~signSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequestSignResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign a signature request.
     * Use this operation to register a signature in a signature request.&lt;br&gt; The signature is automatically anchored (on behalf of the owner of the signature request).&lt;br&gt; The signature anchor created is added to the list of signature anchors of the signature request.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to register a signature. 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:model/SignatureRequestSign} signatureRequestSign Signature to register.
     * @param {module:api/SignatureRequestApi~signSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequestSignResult}
     */
    this.signSignatureRequest = function(requestId, signatureRequestSign, callback) {
      var postBody = signatureRequestSign;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling signSignatureRequest");
      }

      // verify the required parameter 'signatureRequestSign' is set
      if (signatureRequestSign === undefined || signatureRequestSign === null) {
        throw new Error("Missing the required parameter 'signatureRequestSign' when calling signSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignatureRequestSignResult;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/sign', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~updateSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a signature request.
     * Use this operation to update a signature request.&lt;br&gt; Only the properties &#x60;name&#x60;, &#x60;suspended&#x60;, &#x60;deadline&#x60;, &#x60;maxSignatures&#x60; and &#x60;authorizedSignees&#x60; can be modified.&lt;br&gt; 
     * @param {String} requestId Identifier of signature request to update.
     * @param {module:model/SignatureRequest} signatureRequest SignatureRequest object to update.
     * @param {module:api/SignatureRequestApi~updateSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    this.updateSignatureRequest = function(requestId, signatureRequest, callback) {
      var postBody = signatureRequest;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling updateSignatureRequest");
      }

      // verify the required parameter 'signatureRequest' is set
      if (signatureRequest === undefined || signatureRequest === null) {
        throw new Error("Missing the required parameter 'signatureRequest' when calling updateSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignatureRequest;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
