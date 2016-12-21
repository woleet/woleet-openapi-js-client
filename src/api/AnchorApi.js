/**
 * Woleet API
 * # Basics The Woleet API is an **HTTP REST API**: it has predictable, resource-oriented URLs and uses HTTP response codes to indicate API errors. It uses built-in HTTP features, like **Basic authentication** and HTTP verbs, for an easy integration with off-the-shelf HTTP clients. It supports **CORS** and provides **JWT authentication** allowing an easy and secure interaction with both web clients and backend applications.  The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.  The API base URL is **https://api.woleet.io/v1**. # Authentication The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.  The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using basic authentication) and then pass this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme. # Purpose The Woleet API provides an easy way to create **timestamped proofs of existence** for your files. Proofs created are **stored in the Bitcoin blockchain** and so are public, durable and unfalsifiable. The Woleet API provides you with an easy and cheap way to proove that your files existed in a given state at a given date.  The Woleet API creates proofs of existence conform to the open source standard [ChainPoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, and will stay **valid forever** even if Woleet stops it operations. # Creating proofs of existence To create a proof of existence for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you simply need to compute the file's SHA256 hash and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or the type of the file.  Newly created anchors are automatically collected by the platform and recorded in the Bitcoin blockchain: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate an URL to the anchor that the platform will call whenever the anchor's status change.  Once an anchor is recorded in the Bitcoin blockchain, you can retreive its associated **proof receipt** using the Wollet API. Proof receipts **conform to the [ChainPoint](https://www.chainpoint.org/) standard receipt format**. The proof receipt is the only piece of data required to prove the existence of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt whenever you want to verify a file. # Verifying files using proofs of existence Verifying a file is straighforward using the Woleet API: the API takes care of verifying that the proof receipt is valid and correctly recorded in a Bitcoin transaction, so you just have to check that the file's SHA256 hash match the one recorded in the proof receipt.  The Woleet API can also be used to verify any ChainPoint standard receipts, including the ones created by other providers.  Woleet also provides some sample open source code for various languages implementing the full verification process without the help of the Woleet API. # About public and private anchors An anchor can be public (which is the default) or private.  A private anchor is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the anchored data to anyone wanting to verify the data timestamp.  A public anchor is discoverable by anyone knowing the hash of the anchored data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to verify the timestamp of the anchored data using only the data hash as input: the proof receipt is no longer required, as it can be retreived from the anchor identifier and then verified. The process is the following: - use the `/anchorids` endpoint to retreive the anchor identifier by its hash - use the `receipt/{anchorid}` endpoint to retreive the proof receipt (which includes the anchor's metadata). - use the `receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the anchored data timestamp.  # About the verification process For your understanding, here is a description of the verification process: - compute the SHA256 hash of the file - check that the `target_hash` property of the receipt match the hash of the file - check that the `target_proof` property of the receipt is a valid Merkle proof (see the [ChainPoint](https://www.chainpoint.org/) standard for this step) - retreive the Bitcoin transaction matching the `tx_id` property of the receipt - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkle_root` property of the receipt 
 *
 * OpenAPI spec version: 1.0.1
 * Contact: contact@woleet.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Anchor', 'model/AnchorIds', 'model/Anchors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Anchor'), require('../model/AnchorIds'), require('../model/Anchors'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.AnchorApi = factory(root.WoleetApi.ApiClient, root.WoleetApi.Anchor, root.WoleetApi.AnchorIds, root.WoleetApi.Anchors);
  }
}(this, function(ApiClient, Anchor, AnchorIds, Anchors) {
  'use strict';

  /**
   * Anchor service.
   * @module api/AnchorApi
   * @version 1.0.1
   */

  /**
   * Constructs a new AnchorApi. 
   * @alias module:api/AnchorApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createAnchor operation.
     * @callback module:api/AnchorApi~createAnchorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Anchor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new anchor.
     * Use this operation to create a new anchor.&lt;br&gt; The properties &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastModified&#x60;, &#x60;status&#x60;, &#x60;timestamp&#x60; and &#x60;confirmations&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned anchor.&lt;br&gt; Only the properties &#x60;name&#x60; and &#x60;hash&#x60; are required. 
     * @param {module:model/Anchor} anchor Anchor object to create. 
     * @param {module:api/AnchorApi~createAnchorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Anchor}
     */
    this.createAnchor = function(anchor, callback) {
      var postBody = anchor;

      // verify the required parameter 'anchor' is set
      if (anchor == undefined || anchor == null) {
        throw "Missing the required parameter 'anchor' when calling createAnchor";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Anchor;

      return this.apiClient.callApi(
        '/anchor', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAnchor operation.
     * @callback module:api/AnchorApi~deleteAnchorCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing anchor.
     * Use this operation to delete a given anchor.&lt;br&gt; *WARNING*: You should never delete an anchor, overwise you will no longer be able to download its proof receipt.&lt;br&gt; Use this for test purpose only. 
     * @param {String} anchorid Identifier of the anchor to delete.
     * @param {module:api/AnchorApi~deleteAnchorCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAnchor = function(anchorid, callback) {
      var postBody = null;

      // verify the required parameter 'anchorid' is set
      if (anchorid == undefined || anchorid == null) {
        throw "Missing the required parameter 'anchorid' when calling deleteAnchor";
      }


      var pathParams = {
        'anchorid': anchorid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/anchor/{anchorid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAnchor operation.
     * @callback module:api/AnchorApi~getAnchorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Anchor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an anchor by its identifier.
     * Use this operation to retrieve an anchor by its identifier. 
     * @param {String} anchorid Identifier of the anchor to retrieve.
     * @param {module:api/AnchorApi~getAnchorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Anchor}
     */
    this.getAnchor = function(anchorid, callback) {
      var postBody = null;

      // verify the required parameter 'anchorid' is set
      if (anchorid == undefined || anchorid == null) {
        throw "Missing the required parameter 'anchorid' when calling getAnchor";
      }


      var pathParams = {
        'anchorid': anchorid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Anchor;

      return this.apiClient.callApi(
        '/anchor/{anchorid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAnchorIds operation.
     * @callback module:api/AnchorApi~searchAnchorIdsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AnchorIds} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for public anchors&#39; identifiers.
     * Use this operation to retreive the identifiers of all public anchors having a given hash.&lt;br&gt; Only public anchors&#39; identifiers are returned.&lt;br&gt; Paging is supported. 
     * @param {String} hash Hash to search for: all anchors whose hash is exactly the same are returned. 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Index of the page to retreive (from 0).  (default to 0)
     * @param {Integer} opts.size Number of anchors per page.  (default to 20)
     * @param {module:api/AnchorApi~searchAnchorIdsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AnchorIds}
     */
    this.searchAnchorIds = function(hash, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'hash' is set
      if (hash == undefined || hash == null) {
        throw "Missing the required parameter 'hash' when calling searchAnchorIds";
      }


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'hash': hash
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AnchorIds;

      return this.apiClient.callApi(
        '/anchorids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchAnchors operation.
     * @callback module:api/AnchorApi~searchAnchorsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Anchors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for anchors.
     * Use this operation to retreive all anchors having a given name, hash and/or tags.&lt;br&gt; Only anchors belonging to the authenticated user are returned.&lt;br&gt; Paging and sorting is supported. 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.page Index of the page to retreive (from 0).  (default to 0)
     * @param {Integer} opts.size Number of anchors per page.  (default to 20)
     * @param {module:model/String} opts.direction Sorting direction: ASC for ascending DESC for descending.  (default to ASC)
     * @param {module:model/String} opts.sort Sorting property: possbile values are &#x60;created&#x60;, &#x60;lastModified&#x60;, &#x60;name&#x60;, &#x60;hash&#x60;.  (default to created)
     * @param {String} opts.name Name to search for: a sub-string like &#x60;My file&#x60; or a regex like &#x60;/[mM]y.*file/&#x60; can be used. All anchors whose name contains the sub-string or match the regex are returned. 
     * @param {String} opts.hash Hash to search for: all anchors whose hash is exactly the same are returned. 
     * @param {Array.<String>} opts.tags List of tags to search for. Only anchors having all these tags sets are returned. 
     * @param {module:api/AnchorApi~searchAnchorsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Anchors}
     */
    this.searchAnchors = function(opts, callback) {
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
        'hash': opts['hash'],
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Anchors;

      return this.apiClient.callApi(
        '/anchors', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAnchor operation.
     * @callback module:api/AnchorApi~updateAnchorCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Anchor} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing anchor.
     * Use this operation to update a given anchor.&lt;br&gt; Only the properties &#x60;name&#x60;, &#x60;public&#x60;, &#x60;tags&#x60;, &#x60;metadata&#x60; &#x60;targetURI&#x60; and &#x60;callbackURL&#x60; can be modified. 
     * @param {String} anchorid Identifier of anchor to update. 
     * @param {module:model/Anchor} anchor Anchor object to update. 
     * @param {module:api/AnchorApi~updateAnchorCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Anchor}
     */
    this.updateAnchor = function(anchorid, anchor, callback) {
      var postBody = anchor;

      // verify the required parameter 'anchorid' is set
      if (anchorid == undefined || anchorid == null) {
        throw "Missing the required parameter 'anchorid' when calling updateAnchor";
      }

      // verify the required parameter 'anchor' is set
      if (anchor == undefined || anchor == null) {
        throw "Missing the required parameter 'anchor' when calling updateAnchor";
      }


      var pathParams = {
        'anchorid': anchorid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BasicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Anchor;

      return this.apiClient.callApi(
        '/anchor/{anchorid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
