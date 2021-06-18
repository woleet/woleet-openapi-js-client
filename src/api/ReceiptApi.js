/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.10.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Receipt from '../model/Receipt';
import ReceiptVerificationStatus from '../model/ReceiptVerificationStatus';

/**
* Receipt service.
* @module api/ReceiptApi
* @version 1.10.0
*/
export default class ReceiptApi {

    /**
    * Constructs a new ReceiptApi. 
    * @alias module:api/ReceiptApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getOTSReceipt operation.
     * @callback module:api/ReceiptApi~getOTSReceiptCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the proof receipt of an anchor (OpenTimestamps proof format).
     * Use this operation to retrieve the OpenTimestamps proof receipt associated to a given data anchor (note that this operation is NOT available for signature anchors).<br> This binary file is only available once the anchor status is SENT.<br> This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 
     * @param {String} anchorId Identifier of the data anchor for which to build the proof receipt.
     * @param {module:api/ReceiptApi~getOTSReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getOTSReceipt(anchorId, callback) {
      let postBody = null;
      // verify the required parameter 'anchorId' is set
      if (anchorId === undefined || anchorId === null) {
        throw new Error("Missing the required parameter 'anchorId' when calling getOTSReceipt");
      }

      let pathParams = {
        'anchorId': anchorId
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
      let returnType = File;
      return this.apiClient.callApi(
        '/receipt/{anchorId}/ots', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Get the proof receipt of an anchor.
     * Use this operation to retrieve the proof receipt associated to a given anchor.<br> This JSON file is only available once the anchor status is SENT.<br> This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 
     * @param {String} anchorId Identifier of the anchor for which to build the proof receipt.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowPartial `true` if a partial proof receipt is to be returned when the proof of timestamp is not yet available (ie. the data or the signature has not yet been anchored).<br> If the proof of timestamp is availalble (anchor is SENT or CONFIRMED) a regular proof receipt is returned (with response code 200). Otherwise, a partial proof receipt not including the proof of timestamp is returned (response code 202).<br> The partial proof receipt of a signature anchor allows to verify the signature and the identity of the signer immediatly after signing, without having to wait for the anchoring process to complete. 
     * @param {module:api/ReceiptApi~getReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Receipt}
     */
    getReceipt(anchorId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'anchorId' is set
      if (anchorId === undefined || anchorId === null) {
        throw new Error("Missing the required parameter 'anchorId' when calling getReceipt");
      }

      let pathParams = {
        'anchorId': anchorId
      };
      let queryParams = {
        'allowPartial': opts['allowPartial']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Receipt;
      return this.apiClient.callApi(
        '/receipt/{anchorId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Use this operation to verify a proof receipt and get the timestamp of the proof.<br> For proof of signature receipts including an identity URL, this operation also verifies and returns information about the signer's identity.<br> This is a publicly accessible endpoint: authentication is not required to verify a proof receipt. 
     * @param {module:model/Receipt} receipt Proof receipt to verify.
     * @param {module:api/ReceiptApi~verifyReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReceiptVerificationStatus}
     */
    verifyReceipt(receipt, callback) {
      let postBody = receipt;
      // verify the required parameter 'receipt' is set
      if (receipt === undefined || receipt === null) {
        throw new Error("Missing the required parameter 'receipt' when calling verifyReceipt");
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
      let accepts = ['application/json'];
      let returnType = ReceiptVerificationStatus;
      return this.apiClient.callApi(
        '/receipt/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
