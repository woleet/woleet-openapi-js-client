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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.Anchor = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Anchor model module.
   * @module model/Anchor
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Anchor</code>.
   * @alias module:model/Anchor
   * @class
   * @param name {String} Anchor name (don't need to be unique). 
   * @param hash {String} SHA256 hash of the anchored data. This is the fingerprint of the anchored data. 
   */
  var exports = function(name, hash) {
    var _this = this;




    _this['name'] = name;
    _this['hash'] = hash;








  };

  /**
   * Constructs a <code>Anchor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Anchor} obj Optional instance to populate.
   * @return {module:model/Anchor} The populated <code>Anchor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Integer');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('hash')) {
        obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('callbackURL')) {
        obj['callbackURL'] = ApiClient.convertToType(data['callbackURL'], 'String');
      }
      if (data.hasOwnProperty('targetURI')) {
        obj['targetURI'] = ApiClient.convertToType(data['targetURI'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Integer');
      }
      if (data.hasOwnProperty('confirmations')) {
        obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * Anchor identifier.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date of creation (in milliseconds since Unix epoch).<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {Integer} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Date of last modification (in milliseconds since Unix epoch).<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {Integer} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * Anchor name (don't need to be unique). 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * SHA256 hash of the anchored data. This is the fingerprint of the anchored data. 
   * @member {String} hash
   */
  exports.prototype['hash'] = undefined;
  /**
   * `true` (or unset) if the anchor is public. `false` is the anchor is private.<br> If this field is not set at creation time, the anchor is public by default.<br> 
   * @member {Boolean} public
   * @default true
   */
  exports.prototype['public'] = true;
  /**
   * Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.<br> Tags are aimed at classifying and searching anchors. 
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A JavaScript object containing any set of key/values to store with the anchor and giving additional information about the anchored data.<br> ex: { title: 'Ubik', author: 'Philip K. Dick' } 
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * URL to be called by the platform whenever the anchor status change: the platform performs a POST operation with the anchor as a JSON object in the body. 
   * @member {String} callbackURL
   */
  exports.prototype['callbackURL'] = undefined;
  /**
   * URI of the anchored data (this URI is not used by the platform). 
   * @member {String} targetURI
   */
  exports.prototype['targetURI'] = undefined;
  /**
   * The status of the anchor:<br> - WAIT: waiting to be processed.<br> - NEW: waiting to be sent to the blockchain.<br> - SENT: waiting to be confirmed 6 times by the blockchain.<br> - CONFIRMED: confirmed at least 6 times by the blockchain.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {module:model/Anchor.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Proven timestamp of the data.<br> This is actually the time of the Bitcoin block into which the anchoring process occured (in milliseconds since Unix epoch).<br> Any data whose SHA256 hash equals this anchor's hash is prooven to be existant at that time and unmodified.<br> This field is set when the first confirmation of the Bitcoin block occurs.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {Integer} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Number of confirmations of the Bitcoin block into which the anchoring hapenned.<br> This field is set when the first confirmation of the Bitcoin block occurs, and removed when the block is confirmed.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**. 
   * @member {Integer} confirmations
   */
  exports.prototype['confirmations'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "WAIT"
     * @const
     */
    "WAIT": "WAIT",
    /**
     * value: "NEW"
     * @const
     */
    "NEW": "NEW",
    /**
     * value: "SENT"
     * @const
     */
    "SENT": "SENT",
    /**
     * value: "CONFIRMED"
     * @const
     */
    "CONFIRMED": "CONFIRMED"  };


  return exports;
}));


