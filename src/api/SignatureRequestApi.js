/**
 * Woleet API
 * # Basics The Woleet API is an **HTTP REST API**. It supports **CORS** and provides **Basic authentication** and **JWT authentication**, allowing an easy and secure interaction with both web clients and backend applications.  The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and, from it, **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.  Ready to use versions of the client code are provided as open source code for [JavaScript/NodeJS](https://github.com/woleet/woleet-openapi-js-client) and [Java](https://github.com/woleet/woleet-openapi-java-client).  The API base URL is **https://api.woleet.io/v1**. # Authentication The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.  The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using Basic authentication) and then provide this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme. # Purpose The Woleet API provides an easy and cheap way to create **timestamped proofs of existence** and **timestamped proofs of signature** for your data (which can be of any type). Proofs created are **stored in the Bitcoin blockchain** and so are independent from Woleet (an access to the Bitcoin blockchain and some client side open source code is enough to verify proofs). Using the Woleet API, you can create durable and unfalsifiable cryptographic proofs usable to prove your data existed in a given state at a given date, and optionally was signed by a given signee.  The Woleet API creates **proofs of existence** conform to the open source standard [Chainpoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, without any interaction with Woleet, and so remain **verifiable forever** even if Woleet stops its operations.  The Woleet API creates **proofs of signature** that are an extension of the same standard proposed by Woleet (we are actively involved in the standardization process). Thus, the existence and timestamp of a signature is verifiable using the same tools used to verify proofs of existence. When it comes to verifying the validity of the signature and the signee's identity, some additional processing is performed: since this processing can be fully performed client side with no additional data, proofs of signature remain **verifiable forever** even if Woleet stops its operations. # Creating proofs To create a **proof of existence** for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you only need to compute the SHA256 hash of the file client side and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or on the type of the file, and the file is not even leaked to Woleet.  To create a **proof of signature** for a file, you also need to create an anchor, and so to compute the SHA256 hash of the file and choose a name for the anchor, but some additional data is required: your public key (the one associated with the private key used to sign the SHA256 hash of the file) and your signature itself. Optionally, you can provide a URL allowing to verify your identity by ensuring you own the public key and the TLS certificate of the URL.  Newly created **anchors are automatically collected** by the platform and **recorded in the Bitcoin blockchain**: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate a URL to an anchor that the platform will call whenever the anchor status changes.  Once an anchor is recorded in the Bitcoin blockchain, you can retrieve its associated **proof receipt** using the Woleet API. Proof receipts **conform to the [Chainpoint 1 or 2](https://www.chainpoint.org/) proof receipt format** (with some Woleet extensions when it comes to proofs of signature). The proof receipt is the only piece of data required to prove the existence/signature of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt on-demand whenever you want to verify a file. # Verifying proofs Verifying a **proof of existence** using the Woleet API is straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, so you just need to check that the SHA256 hash of the file matches the proof receipt's `hash` property.  Verifying a **proof of signature** using the Woleet API is also straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, then verifies the signature, and optionally verifies that the signee owns the public key and the TLS certificate, so you just need to check that the SHA256 hash of the file matches the proof receipt's `signedHash` property.  The Woleet API can also be used to verify any Chainpoint 1 or 2 proof receipt, including those created by other providers.  Woleet also provides an open source [JavaScript library for web clients](https://github.com/woleet/woleet-weblibs) implementing the full verification process without the help of the Woleet API. # About public and private anchors An anchor can be public (which is the default) or private.  A **private anchor** is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the data to anyone wanting to verify the proof.  A **public anchor** is discoverable by anyone knowing the hash of the data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to retrieve the proof receipt using only the data hash as input, and then to verify it using the Woleet API or any other mean: - use the `/anchorids` endpoint to retrieve the anchor identifier by its hash - use the `receipt/{anchorid}` endpoint to retrieve the proof receipt. - use the `receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the data or signature timestamp.  # About the verification process For your understanding, here is a formal description of the verification process of a **proof of existence**: - compute the SHA256 hash of the file - check that the `targetHash` property of the proof receipt matches the hash of the file - check that the `proof` property of the proof receipt is a valid Merkle proof (see the [Chainpoint](https://www.chainpoint.org/) standard for this step) - retrieve the Bitcoin transaction from the `anchors` property of the proof receipt - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkleRoot` property of the proof receipt  For **proof of signature**, an additional verification process is performed: - check that the SHA256 hash of the `signature` property matches its `targetHash` property - check that the `signature` property is a valid signature of the `signedHash` property for the public key stored in the `pubKey` property - additionally, if an `identityURL` property is available:   - call `identityURL` to make the callee sign some random data using the public key `pubKey`    - check that the returned signature is valid    - get the TLS certificates of the URL (it must be an HTTPS URL) to get insight about the signee's identity 
 *
 * OpenAPI spec version: 1.3.1
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
   * @version 1.3.1
   */

  /**
   * Constructs a new SignatureRequestApi. 
   * @alias module:api/SignatureRequestApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
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
     * Use this operation to create a new signature request.&lt;br&gt; The properties &#x60;id&#x60;, &#x60;created&#x60; and &#x60;lastModified&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned request.&lt;br&gt; Only the properties &#x60;name&#x60; and &#x60;hashToSign&#x60; are required: the &#x60;hashToSign&#x60; property must be the SHA256 hash of the data to sign. This allows not to leak the original data and to keep the actual signed data small (signing the digest is equivalent to signing the original data).&lt;br&gt; Be sure to have enough anchoring credits on your account to fulfill the signature request (each signature registered will cost you 1 anchoring credit).&lt;br&gt; 
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
        pathParams, queryParams, headerParams, formParams, postBody,
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
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * Use this operation to retrieve a signature request by its identifier.
     * @param {String} requestId Identifier of the signature request to retrieve.
     * @param {module:api/SignatureRequestApi~getSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    this.getSignatureRequest = function(requestId, callback) {
      var postBody = null;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling getSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
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
        '/signatureRequest/{requestId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {module:model/String} opts.direction Sorting direction: ASC for ascending DESC for descending.  (default to ASC)
     * @param {module:model/String} opts.sort Sorting property: possible values are limited to &#x60;id&#x60;, &#x60;created&#x60; and &#x60;hashToSign&#x60;.  (default to created)
     * @param {String} opts.name &#x60;name&#x60; to search for: all signature requests whose &#x60;name&#x60; property contains this sub-string are returned.&lt;br&gt; **WARNING: searching by name is not optimized and so is not recommended on a large request set.** 
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
        'hashToSign': opts['hashToSign']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth', 'JWTAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignatureRequests;

      return this.apiClient.callApi(
        '/signatureRequests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * Use this operation to register a signature for a signature request.&lt;br&gt; The signature is automatically anchored (on behalf of the owner of the signature request). The signature anchor created is added to the list of signature anchors of the signature request. This is a publicly accessible endpoint: authentication is not required to register a signature. 
     * @param {String} requestId Identifier of the signature request.
     * @param {module:model/SignatureRequestSign} signature Signature to register.
     * @param {module:api/SignatureRequestApi~signSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequestSignResult}
     */
    this.signSignatureRequest = function(requestId, signature, callback) {
      var postBody = signature;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling signSignatureRequest");
      }

      // verify the required parameter 'signature' is set
      if (signature === undefined || signature === null) {
        throw new Error("Missing the required parameter 'signature' when calling signSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SignatureRequestSignResult;

      return this.apiClient.callApi(
        '/signatureRequest/{requestId}/sign', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
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
     * @param {module:model/SignatureRequest} request SignatureRequest object to update.
     * @param {module:api/SignatureRequestApi~updateSignatureRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SignatureRequest}
     */
    this.updateSignatureRequest = function(requestId, request, callback) {
      var postBody = request;

      // verify the required parameter 'requestId' is set
      if (requestId === undefined || requestId === null) {
        throw new Error("Missing the required parameter 'requestId' when calling updateSignatureRequest");
      }

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling updateSignatureRequest");
      }


      var pathParams = {
        'requestId': requestId
      };
      var queryParams = {
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
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
