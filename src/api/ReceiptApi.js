/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.2
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OtsReceipt', 'model/Receipt', 'model/ReceiptVerificationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/OtsReceipt'), require('../model/Receipt'), require('../model/ReceiptVerificationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.ReceiptApi = factory(root.WoleetApi.ApiClient, root.WoleetApi.OtsReceipt, root.WoleetApi.Receipt, root.WoleetApi.ReceiptVerificationStatus);
  }
}(this, function(ApiClient, OtsReceipt, Receipt, ReceiptVerificationStatus) {
  'use strict';

  /**
   * Receipt service.
   * @module api/ReceiptApi
   * @version 1.5.2
   */

  /**
   * Constructs a new ReceiptApi. 
   * @alias module:api/ReceiptApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getOTSReceipt operation.
     * @callback module:api/ReceiptApi~getOTSReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OtsReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the proof receipt of an anchor (OpenTimestamps proof format).
     * Use this operation to retrieve the OpenTimestamps proof receipt associated to a given anchor. This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 
     * @param {String} anchorid Identifier of the anchor for which to build the proof receipt.
     * @param {module:api/ReceiptApi~getOTSReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OtsReceipt}
     */
    this.getOTSReceipt = function(anchorid, callback) {
      var postBody = null;

      // verify the required parameter 'anchorid' is set
      if (anchorid === undefined || anchorid === null) {
        throw new Error("Missing the required parameter 'anchorid' when calling getOTSReceipt");
      }


      var pathParams = {
        'anchorid': anchorid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OtsReceipt;

      return this.apiClient.callApi(
        '/receipt/{anchorid}/ots', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getReceipt operation.
     * @callback module:api/ReceiptApi~getReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Receipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the proof receipt of an anchor (Chainpoint proof format).
     * Use this operation to retrieve the Chainpoint proof receipt associated to a given anchor. This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 
     * @param {String} anchorid Identifier of the anchor for which to build the proof receipt.
     * @param {module:api/ReceiptApi~getReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Receipt}
     */
    this.getReceipt = function(anchorid, callback) {
      var postBody = null;

      // verify the required parameter 'anchorid' is set
      if (anchorid === undefined || anchorid === null) {
        throw new Error("Missing the required parameter 'anchorid' when calling getReceipt");
      }


      var pathParams = {
        'anchorid': anchorid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Receipt;

      return this.apiClient.callApi(
        '/receipt/{anchorid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyReceipt operation.
     * @callback module:api/ReceiptApi~verifyReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReceiptVerificationStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify a proof receipt.
     * Use this operation to verify a Chainpoint proof receipt and get the timestamp of the proof.&lt;br&gt; For proof of signature receipts including an identity URL, this operation also verify and returns information about the signee&#39;s identity.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to verify a proof receipt. 
     * @param {module:model/Receipt} receipt Chainpoint proof receipt to verify.
     * @param {module:api/ReceiptApi~verifyReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReceiptVerificationStatus}
     */
    this.verifyReceipt = function(receipt, callback) {
      var postBody = receipt;

      // verify the required parameter 'receipt' is set
      if (receipt === undefined || receipt === null) {
        throw new Error("Missing the required parameter 'receipt' when calling verifyReceipt");
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

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ReceiptVerificationStatus;

      return this.apiClient.callApi(
        '/receipt/verify', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
