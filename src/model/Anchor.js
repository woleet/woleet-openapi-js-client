/**
 * Woleet API
 * # Basics The Woleet API is an **HTTP REST API**. It supports **CORS** and provides **Basic authentication** and **JWT authentication**, allowing an easy and secure interaction with both web clients and backend applications.  The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and, from it, **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.  Ready to use versions of the client code are provided as open source code for [JavaScript/NodeJS](https://github.com/woleet/woleet-openapi-js-client) and [Java](https://github.com/woleet/woleet-openapi-java-client).  The API base URL is **https://api.woleet.io/v1**. # Authentication The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.  The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using basic authentication) and then provide this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme. # Purpose The Woleet API provides an easy and cheap way to create **timestamped proofs of existence** and **timestamped proofs of signature** for your data (which can be of any type). Proofs created are **stored in the Bitcoin blockchain** and so are independent from Woleet (an access to the Bitcoin blockchain and some client side open source code is enough to verify proofs). Using the Woleet API, you can create durable and unfalsifiable cryptographic proofs usable to prove your data existed in a given state at a given date, and optionally was signed by a given signee.  The Woleet API creates **proofs of existence** conform to the open source standard [ChainPoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, without any interaction with Woleet, and so remain **verifiable forever** even if Woleet stops its operations.  The Woleet API creates **proofs of signature** that are an extension of the same standard proposed by Woleet (we are actively involved in the standardization process). Thus, the existence and timestamp of a signature is verifiable using the same tools used to verify proofs of existence. When it comes to verifying the validity of the signature and the identity of the signee, some additional processing is performed: since this processing can be fully performed client side with no additional data, proofs of signature remain **verifiable forever** even if Woleet stops its operations. # Creating proofs To create a **proof of existence** for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you only need to compute the SHA256 hash of the file client side and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or on the type of the file, and the file is not even leaked to Woleet.  To create a **proof of signature** for a file, you also need to create an anchor, and so to compute the SHA256 hash of the file and choose a name for the anchor, but some additional data is required: your public key (the one associated with the private key used to sign the SHA256 hash of the file) and your signature itself. Optionally, you can provide a URL allowing to verify your identity by ensuring you own the public key and the TLS certificate of the URL.  Newly created **anchors are automatically collected** by the platform and **recorded in the Bitcoin blockchain**: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate a URL to an anchor that the platform will call whenever the anchor status changes.  Once an anchor is recorded in the Bitcoin blockchain, you can retrieve its associated **proof receipt** using the Woleet API. Proof receipts **conform to the [ChainPoint](https://www.chainpoint.org/) standard receipt format** (with some extension when it comes to proofs of signature). The proof receipt is the only piece of data required to prove the existence/signature of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt on-demand whenever you want to verify a file. # Verifying proofs Verifying a **proof of existence** using the Woleet API is straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, so you just need to check that the SHA256 hash of the file matches the proof receipt's `hash` property.  Verifying a **proof of signature** using the Woleet API is also straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, then verifies the signature, and optionally verifies that the signee owns the public key and the TLS certificate, so you just need to check that the SHA256 hash of the file matches the proof receipt's `signedHash` property.  The Woleet API can also be used to verify any ChainPoint standard receipts, including the ones created by other providers.  Woleet also provides an open source [JavaScript library for web clients](https://github.com/woleet/woleet-weblibs) implementing the full verification process without the help of the Woleet API. # About public and private anchors An anchor can be public (which is the default) or private.  A **private anchor** is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the data to anyone wanting to verify the proof.  A **public anchor** is discoverable by anyone knowing the hash of the data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to retrieve the proof receipt using only the data hash as input, and then to verify it using the Woleet API or any other mean: - use the `/anchorids` endpoint to retrieve the anchor identifier by its hash - use the `receipt/{anchorid}` endpoint to retrieve the proof receipt (which includes the anchor's metadata). - use the `receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the data or signature timestamp.  # About the verification process For your understanding, here is a formal description of the verification process of a **proof of existence**: - compute the SHA256 hash of the file - check that the `target_hash` property of the proof receipt matches the hash of the file - check that the `target_proof` property of the proof receipt is a valid Merkle proof (see the [ChainPoint](https://www.chainpoint.org/) standard for this step) - retrieve the Bitcoin transaction matching the `tx_id` property of the proof receipt - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkle_root` property of the proof receipt  For **proof of signature**, an additional verification process is performed: - check that the SHA256 hash of the `signature` property matches its `target_hash` property - check that the `signature` property is a valid signature of the `signedHash` property for the public key stored in the `pubKey` property - additionally, if an `identityURL` property is available:   - call `identityURL` to make the callee sign some random data using the public key `pubKey`    - check that the returned signature is valid    - get the TLS certificates of the URL (it must be an HTTPS URL) to get insight about the signee identity 
 *
 * OpenAPI spec version: 1.2.2
 * Contact: contact@woleet.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
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
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>Anchor</code>.
   * @alias module:model/Anchor
   * @class
   * @param name {String} Anchor name (don't need to be unique).
   * @param hash {String} SHA256 hash (ie. the fingerprint) of the original data to anchor.<br> **This property must not be provided when creating a signature anchor: it is set at creation time to the SHA256 hash of the `signature` property provided (so the signature is what is actually anchored in this case).** 
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
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('hash')) {
        obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
      }
      if (data.hasOwnProperty('signedHash')) {
        obj['signedHash'] = ApiClient.convertToType(data['signedHash'], 'String');
      }
      if (data.hasOwnProperty('pubKey')) {
        obj['pubKey'] = ApiClient.convertToType(data['pubKey'], 'String');
      }
      if (data.hasOwnProperty('signature')) {
        obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
      }
      if (data.hasOwnProperty('identityURL')) {
        obj['identityURL'] = ApiClient.convertToType(data['identityURL'], 'String');
      }
      if (data.hasOwnProperty('public')) {
        obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
      }
      if (data.hasOwnProperty('notifyByEmail')) {
        obj['notifyByEmail'] = ApiClient.convertToType(data['notifyByEmail'], 'Boolean');
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('confirmations')) {
        obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
      }
      if (data.hasOwnProperty('txId')) {
        obj['txId'] = ApiClient.convertToType(data['txId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Anchor identifier.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date of creation (in milliseconds since Unix epoch).<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Date of last modification (in milliseconds since Unix epoch).<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {Number} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * Anchor name (don't need to be unique).
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * SHA256 hash (ie. the fingerprint) of the original data to anchor.<br> **This property must not be provided when creating a signature anchor: it is set at creation time to the SHA256 hash of the `signature` property provided (so the signature is what is actually anchored in this case).** 
   * @member {String} hash
   */
  exports.prototype['hash'] = undefined;
  /**
   * SHA256 hash (ie. the fingerprint) of the original data to sign.<br> **This property must not be provided when creating a data anchor.** 
   * @member {String} signedHash
   */
  exports.prototype['signedHash'] = undefined;
  /**
   * Public key of the signee.<br> **Currently only Bitcoin addresses are supported.**<br> **This property must not be provided when creating a data anchor.** 
   * @member {String} pubKey
   */
  exports.prototype['pubKey'] = undefined;
  /**
   * Signature of the `signedHash` property content using the public key stored in the `pubKey` property.<br> **Only Bitcoin signatures are currently supported.** **This property must not be provided when creating a data anchor.** 
   * @member {String} signature
   */
  exports.prototype['signature'] = undefined;
  /**
   * Web hook to be called whenever the signee identity has to be verified.<br> Calling this URL allows to verify that the owner of the URL (identified by the associated TLS certificate) also owns the public key used to produce the signature, by asking the URL to sign some random data.<br> This URL must use an HTTPS scheme with a valid and non expired TLS certificate.<br> This URL must implement the following GET operation:<br> input:<br> - `pubKey`: the public key of the signee (that is to be verified)<br> - `leftData`: a random SHA256 hash generated by the caller<br> output:<br> - `signature`: a valid signature of the string (`leftData` + `rightData`) produced using the public key `pubKey`<br> - `rightData`: a random SHA256 hash generated by the callee 
   * @member {String} identityURL
   */
  exports.prototype['identityURL'] = undefined;
  /**
   * `true` (or unset) if the anchor is public. `false` if the anchor is private.<br> If this field is not set at creation time, the anchor is public by default. 
   * @member {Boolean} public
   * @default true
   */
  exports.prototype['public'] = true;
  /**
   * `true` if the receipt must be sent by email once available. 
   * @member {Boolean} notifyByEmail
   * @default false
   */
  exports.prototype['notifyByEmail'] = false;
  /**
   * Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.<br> Tags are aimed at classifying and searching anchors. 
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * A JSON object containing a set of key/values to store with the anchor and giving additional information about the anchored data.<br> Values must be of type null, boolean, string or number: nested JSON objects are not allowed.<br> ex: { title: 'Ubik', author: 'Philip K. Dick', read: true, rank: 10.0, coauthor: null } 
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * Web hook to be called by the platform whenever the anchor status change: the platform does a POST request on this URL with the anchor as a JSON object in the request body. 
   * @member {String} callbackURL
   */
  exports.prototype['callbackURL'] = undefined;
  /**
   * The status of the anchor:<br> - WAIT: waiting to be processed. The receipt is not yet available for download.<br> - NEW: to be sent to the blockchain. The receipt is not yet available for download.<br> - SENT: sent to the blockchain. The receipt is available for download.<br> - CONFIRMED: confirmed at least 6 times by the blockchain. The receipt is available for download.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {module:model/Anchor.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Proven timestamp of the data.<br> This is actually the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).<br> Any data whose SHA256 hash equals this anchor's hash is proven to be existent at that time and unmodified.<br> This field is set when the first confirmation of the Bitcoin block occurs.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Number of confirmations of the Bitcoin block into which the anchoring happened.<br> This field is set when the first confirmation of the Bitcoin block occurs, and removed when the block is confirmed.<br> **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.** 
   * @member {Number} confirmations
   */
  exports.prototype['confirmations'] = undefined;
  /**
   * Identifier of the Bitcoin transaction where the anchoring occurred.
   * @member {String} txId
   */
  exports.prototype['txId'] = undefined;


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


