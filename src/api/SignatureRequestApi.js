/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GetSignatureRequestProofBundle from '../model/GetSignatureRequestProofBundle';
import SignatureRequest from '../model/SignatureRequest';
import SignatureRequestDelegate from '../model/SignatureRequestDelegate';
import SignatureRequestFeedback from '../model/SignatureRequestFeedback';
import SignatureRequestIds from '../model/SignatureRequestIds';
import SignatureRequestSign from '../model/SignatureRequestSign';
import SignatureRequestSignResult from '../model/SignatureRequestSignResult';
import SignatureRequests from '../model/SignatureRequests';

/**
* SignatureRequest service.
* @module api/SignatureRequestApi
* @version 1.8.0
*/
export default class SignatureRequestApi {

    /**
    * Constructs a new SignatureRequestApi. 
    * @alias module:api/SignatureRequestApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~createSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new signature request.
     * Use this operation to create a new signature request.<br> The properties `id`, `created` and `lastModified` are read-only and so must not be provided: they are managed by the platform and added to the returned request.<br> Only the properties `name` and `hashToSign` are required: the `hashToSign` property must be the SHA256 hash of the file to sign.<br> Be sure to have enough signature and anchoring credits on your account to fulfill the signature request (each registered signature costs you 1 signature and 1 anchoring credit).<br> 
     * @param {module:model/SignatureRequest} signatureRequest SignatureRequest object to create.
     * @param {module:api/SignatureRequestApi~createSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    createSignatureRequest(signatureRequest, callback) {
      let postBody = signatureRequest;
      // verify the required parameter 'signatureRequest' is set
      if (signatureRequest === undefined || signatureRequest === null) {
        throw new Error("Missing the required parameter 'signatureRequest' when calling createSignatureRequest");
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
      let returnType = SignatureRequest;
      return this.apiClient.callApi(
        '/signatureRequest', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delegateSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~delegateSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequestSignResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign a signature request by delegating the signature.
     * A signer can use this operation to sign a signature request by delegating the signature to the platform.<br> This operation is only available when the email of the signer is set: since the secret identifier is sent by email to the signer, he/she can provide it back to authenticate.<br> When using this signature mode, the signer's identity and signature key is controled by the platform, which act as a trusted third party.<br> The signature is automatically anchored on behalf of the owner of the signature request.<br> The signature anchor created is added to the list of signature anchors of the signature request.<br> This is a publicly accessible endpoint: authentication is not required to delegate a signature (authentication of the signers, when required, rely on their knowledge of their secret identifier and OTP, or on their control of their public key). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:model/SignatureRequestDelegate} delegate Authentication information about the signer.
     * @param {module:api/SignatureRequestApi~delegateSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequestSignResult}
     */
    delegateSignatureRequest(requestId, delegate, callback) {
      let postBody = delegate;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling delegateSignatureRequest");
      }
      // verify the required parameter 'delegate' is set
      if (delegate === undefined || delegate === null) {
        throw new Error("Missing the required parameter 'delegate' when calling delegateSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
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
      let returnType = SignatureRequestSignResult;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/delegate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Use this operation to delete a signature request.
     * @param {String} requestId Identifier of the signature request to delete.
     * @param {module:api/SignatureRequestApi~deleteSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteSignatureRequest(requestId, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling deleteSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadSignatureRequestFile operation.
     * @callback module:api/SignatureRequestApi~downloadSignatureRequestFileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download the file to sign.
     * Use this operation to download the file to be signed for a signature request.<br> The name of the file is included in the `Content-Disposition` header (see https://www.ietf.org/rfc/rfc6266.txt). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:api/SignatureRequestApi~downloadSignatureRequestFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    downloadSignatureRequestFile(requestId, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling downloadSignatureRequestFile");
      }

      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = File;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Use this operation to retrieve a signature request by its identifier.
     * @param {String} requestId Identifier of the signature request to retrieve.
     * @param {Object} opts Optional parameters
     * @param {String} opts.signeeId Secret identifier of the signer wanting to retrieve the signature request.<br> If set, information related to this signer is guaranteed to be returned in `authorizedSignees[0]`.<br> **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.** 
     * @param {module:api/SignatureRequestApi~getSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    getSignatureRequest(requestId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
        'signeeId': opts['signeeId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SignatureRequest;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSignatureRequestAttestation operation.
     * @callback module:api/SignatureRequestApi~getSignatureRequestAttestationCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Download the Signature Attestation document of a signature request.
     * Use this operation to retrieve the Signature Attestation document of a signature request.<br> This PDF file summarizes the signature request and includes the proof bundle attached.<br> The proof bundle is a JSON file containing all the pieces of evidence:<br> - the audit trail<br> - the proof receipt of the signature of the audit trail by the platform<br> - the proof receipts of the signature of the file by the signers<br> Consequently, the signature attestation is only available once all the following conditions are met:<br> - the signature request is COMPLETED (by the platform) or CLOSED (by the requester)<br> - all the proofs receipts are available (ie. have been anchored)<br> - the audit trail is generated and signed by the platform and its proof receipt is available (ie. is anchored)<br> Once these conditions are met, the platform generates and signs the signature attestation and set the `attestationAnchorId` property.<br> This is a publicly accessible endpoint: authentication is not required to retrieve the signature attestation of a signature request (but its identifier need to be known). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:api/SignatureRequestApi~getSignatureRequestAttestationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getSignatureRequestAttestation(requestId, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getSignatureRequestAttestation");
      }

      let pathParams = {
        'requestId': requestId
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
        '/signatureRequest/{requestId}/attestation', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSignatureRequestProofBundle operation.
     * @callback module:api/SignatureRequestApi~getSignatureRequestProofBundleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSignatureRequestProofBundle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the proof bundle of a signature request.
     * Use this operation to retrieve the proof bundle of a signature request.<br> The proof bundle is a JSON file containing all the pieces of evidence:<br> - the audit trail<br> - the proof receipt of the signature of the audit trail by the platform<br> - the proof receipts of the signature of the file by the signers<br> Consequently, the proof bundle is only available once all the following conditions are met:<br> - the signature request is COMPLETED (by the platform) or CLOSED (by the requester)<br> - all the proofs receipts are available (ie. have been anchored)<br> - the audit trail is generated and signed by the platform and its proof receipt is available (ie. is anchored)<br> If this endpoint is called before all these conditions are met, it returns only the available proof receipts (with a 202 status).<br> This is a publicly accessible endpoint: authentication is not required to retrieve the proof receipts of a signature request (but its identifier need to be known). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:api/SignatureRequestApi~getSignatureRequestProofBundleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSignatureRequestProofBundle}
     */
    getSignatureRequestProofBundle(requestId, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getSignatureRequestProofBundle");
      }

      let pathParams = {
        'requestId': requestId
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
      let returnType = GetSignatureRequestProofBundle;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/proofbundle', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reportSignatureRequestFeedback operation.
     * @callback module:api/SignatureRequestApi~reportSignatureRequestFeedbackCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Report feedback about a signature request.
     * A signer can use this operation to report a feedback to the owner of a signature request.<br> This operation is only available when the email of the signer is set: since the secret identifier is sent by email to the signer, he/she can provide it back to authenticate.<br> This is a publicly accessible endpoint: authentication is not required to report feedback (authentication of the signers, when required, rely on their knowledge of their secret identifier). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:model/SignatureRequestFeedback} feedback Feedback to report.
     * @param {module:api/SignatureRequestApi~reportSignatureRequestFeedbackCallback} callback The callback function, accepting three arguments: error, data, response
     */
    reportSignatureRequestFeedback(requestId, feedback, callback) {
      let postBody = feedback;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling reportSignatureRequestFeedback");
      }
      // verify the required parameter 'feedback' is set
      if (feedback === undefined || feedback === null) {
        throw new Error("Missing the required parameter 'feedback' when calling reportSignatureRequestFeedback");
      }

      let pathParams = {
        'requestId': requestId
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
        '/signatureRequest/{requestId}/feedback', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchSignatureRequestIds operation.
     * @callback module:api/SignatureRequestApi~searchSignatureRequestIdsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequestIds} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for public signature request identifiers.
     * Use this operation to retrieve the identifiers of all public signature requests having a given `hashToSign` property.<br> Only public signature request identifiers are returned.<br> This is a publicly accessible endpoint: authentication is not required to retrieve public signature request identifiers.<br> Paging is supported. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Index of the page to retrieve (from 0). (default to 0)
     * @param {Number} opts.size Number of signature request identifiers per page. (default to 20)
     * @param {String} opts.hashToSign `hashToSign` to search for: all public signature requests whose `hashToSign` property is equal are returned. 
     * @param {module:api/SignatureRequestApi~searchSignatureRequestIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequestIds}
     */
    searchSignatureRequestIds(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'hashToSign': opts['hashToSign']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SignatureRequestIds;
      return this.apiClient.callApi(
        '/signatureRequestIds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Use this operation to retrieve all signature requests having a given `name` and/or `hashToSign` property.<br> Only requests belonging to the authenticated user are returned.<br> Paging and sorting is supported. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Index of the page to retrieve (from 0). (default to 0)
     * @param {Number} opts.size Number of anchors per page. (default to 20)
     * @param {module:model/String} opts.direction Sorting direction: ASC for ascending DESC for descending.  (default to 'ASC')
     * @param {module:model/String} opts.sort Sorting property: possible values are limited to `created` and `hashToSign`.  (default to 'created')
     * @param {String} opts.name `name` to search for: all signature requests whose `name` property contains this sub-string are returned.<br> **WARNING: Searching by name can timeout on a large signature request set.** 
     * @param {String} opts.hashToSign `hashToSign` to search for: all signature requests whose `hashToSign` property is equal are returned. 
     * @param {Array.<module:model/String>} opts.state `state` to search for: all signature requests having one of those state are returned. 
     * @param {module:api/SignatureRequestApi~searchSignatureRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequests}
     */
    searchSignatureRequests(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'direction': opts['direction'],
        'sort': opts['sort'],
        'name': opts['name'],
        'hashToSign': opts['hashToSign'],
        'state': this.apiClient.buildCollectionParam(opts['state'], 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SignatureRequests;
      return this.apiClient.callApi(
        '/signatureRequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Generate and send an OTP to a signer of a signature request.
     * Use this operation to generate and send a new OTP (One Time Password) by SMS to a signer of a signature request.<br> This OTP can be used to sign during a maximum period of 10 mn. 
     * @param {String} requestId Identifier of the signature request.
     * @param {String} signeeId Secret identifier of the signer wanting to retrieve his/her OTP.<br> **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.** 
     * @param {module:api/SignatureRequestApi~sendSignatureRequestOTPCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sendSignatureRequestOTP(requestId, signeeId, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling sendSignatureRequestOTP");
      }
      // verify the required parameter 'signeeId' is set
      if (signeeId === undefined || signeeId === null) {
        throw new Error("Missing the required parameter 'signeeId' when calling sendSignatureRequestOTP");
      }

      let pathParams = {
        'requestId': requestId,
        'signeeId': signeeId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/otp/{signeeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendSignatureRequestReminder operation.
     * @callback module:api/SignatureRequestApi~sendSignatureRequestReminderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send a reminder email to a set of signers of a signature request.
     * Use this operation to send a reminder email to a set of signers of a signature request.<br> This email reminds them that they have a document to sign. 
     * @param {String} requestId Identifier of the signature request.
     * @param {Array.<String>} signeeEmails The list of emails of the authorized signers who will receive the reminder email. 
     * @param {module:api/SignatureRequestApi~sendSignatureRequestReminderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    sendSignatureRequestReminder(requestId, signeeEmails, callback) {
      let postBody = signeeEmails;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling sendSignatureRequestReminder");
      }
      // verify the required parameter 'signeeEmails' is set
      if (signeeEmails === undefined || signeeEmails === null) {
        throw new Error("Missing the required parameter 'signeeEmails' when calling sendSignatureRequestReminder");
      }

      let pathParams = {
        'requestId': requestId
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
        '/signatureRequest/{requestId}/remind', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Sign a signature request by registering a signature.
     * A signer can use this operation to sign a signature request by registering a signature he/she procuded on his/her own.<br> The signature is automatically anchored on behalf of the owner of the signature request.<br> The signature anchor created is added to the list of signature anchors of the signature request.<br> This is a publicly accessible endpoint: authentication is not required to register a signature (authentication of the signers, when required, rely on their knowledge of their secret identifier and OTP, or on their control of their public key). 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:model/SignatureRequestSign} signature Signature to register.
     * @param {module:api/SignatureRequestApi~signSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequestSignResult}
     */
    signSignatureRequest(requestId, signature, callback) {
      let postBody = signature;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling signSignatureRequest");
      }
      // verify the required parameter 'signature' is set
      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling signSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
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
      let returnType = SignatureRequestSignResult;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/sign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the transitionSignatureRequest operation.
     * @callback module:api/SignatureRequestApi~transitionSignatureRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the state of a signature request.
     * Use this operation to transition a **stateful** signature request to a new state.<br> Possible transitions are:<br> - from DRAFT to PENDING: start the signature request: the platform wait for the activation date (if any) and transition to IN_PROGRESS<br> - from PENDING to DRAFT: suspend the signature request: allow it to be updated<br> - from PENDING to CANCELED: cancel the signature request without waiting for the  activation date<br> - from IN_PROGRESS to CLOSED: close the signature request without waiting for all signatures to be colleted<br> - from IN_PROGRESS to CANCELED: cancel the signature request before all signatures get colleted<br> Note that **stateless** signature requests can only be transitioned to CLOSED, allowing to trigger the generation of the audit trail and the signature attestation. 
     * @param {String} requestId Identifier of the signature request.
     * @param {String} state New state of the signature request.
     * @param {module:api/SignatureRequestApi~transitionSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    transitionSignatureRequest(requestId, state, callback) {
      let postBody = state;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling transitionSignatureRequest");
      }
      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling transitionSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
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
      let returnType = SignatureRequest;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/transition', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
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
     * Use this operation to update a signature request.<br> Only the properties `name`, `public`, `callbackURL`, `activation`, `deadline`, `identityURL`, `fileName`, `fileURL`, `lang`, `vars`, `maxSignatures` and `authorizedSignees` can be modified.<br> Only **stateless** signature requests or **stateful** signature request in 'DRAFT' state can be updated. 
     * @param {String} requestId Identifier of signature request to update.
     * @param {module:model/SignatureRequest} request SignatureRequest object to update.
     * @param {module:api/SignatureRequestApi~updateSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    updateSignatureRequest(requestId, request, callback) {
      let postBody = request;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling updateSignatureRequest");
      }
      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateSignatureRequest");
      }

      let pathParams = {
        'requestId': requestId
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
      let returnType = SignatureRequest;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadSignatureRequestFile operation.
     * @callback module:api/SignatureRequestApi~uploadSignatureRequestFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload the file to sign.
     * Use this operation to upload the file to be signed for a signature request.<br> The SHA256 hash of the uploaded file must be equal to the `hashToSign` property of the signature request or the upload fails.<br> Once uploaded, the file is stored and the `fileURL` property of the signature request is set, so that it can be used by a signature application to download and present the file to the signers.<br> Only **stateless** signature requests or **stateful** signature request in 'DRAFT' state can be updated. **WARNING: the storage of the file to be signed is provided for convenience only: it is not required, and you should never upload a file if you have any concern about its privacy.** 
     * @param {String} requestId Identifier of the signature request.
     * @param {File} file The file to sign.
     * @param {module:api/SignatureRequestApi~uploadSignatureRequestFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    uploadSignatureRequestFile(requestId, file, callback) {
      let postBody = null;
      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling uploadSignatureRequestFile");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling uploadSignatureRequestFile");
      }

      let pathParams = {
        'requestId': requestId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['BasicAuth', 'JWTAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = SignatureRequest;
      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
