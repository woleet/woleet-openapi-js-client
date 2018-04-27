/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.1
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
    define(['ApiClient', 'model/IdentityVerificationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IdentityVerificationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.ReceiptVerificationStatus = factory(root.WoleetApi.ApiClient, root.WoleetApi.IdentityVerificationStatus);
  }
}(this, function(ApiClient, IdentityVerificationStatus) {
  'use strict';




  /**
   * The ReceiptVerificationStatus model module.
   * @module model/ReceiptVerificationStatus
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>ReceiptVerificationStatus</code>.
   * @alias module:model/ReceiptVerificationStatus
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ReceiptVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptVerificationStatus} obj Optional instance to populate.
   * @return {module:model/ReceiptVerificationStatus} The populated <code>ReceiptVerificationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('confirmations')) {
        obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
      }
      if (data.hasOwnProperty('identityVerificationStatus')) {
        obj['identityVerificationStatus'] = IdentityVerificationStatus.constructFromObject(data['identityVerificationStatus']);
      }
    }
    return obj;
  }

  /**
   * Proof receipt verification status code:<br> - VERIFIED: the proof receipt is verified: the receipt format is valid, the associated Bitcoin transaction is present in the blockchain, and the receipt contains a valid cryptographic proof that its `targetHash` property is anchored into the transaction's `OP_RETURN` field. The time of the Bitcoin block into which the anchoring process occurred is returned in the `timestamp` property.<br> Any data whose SHA256 hash matches the proof receipt's `targetHash` is proven to be existent at that time and unmodified.<br> - INVALID_PROOF: the receipt's `proof` property is not a valid Merkle proof<br> - TX_NOT_FOUND: the receipt's `anchors` property does not point to a valid Bitcoin transaction<br> - TX_MISMATCH_RECEIPT: the receipt's `merkleRoot` property does not match the transaction's `OP_RETURN` field<br> - INVALID_SIGNATURE: the receipt's `signature` property is not a valid signature 
   * @member {module:model/ReceiptVerificationStatus.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Proof receipt verification status text giving more insight about verification errors.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).<br> This is actually the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).<br> Any data whose SHA256 hash equals this proof receipt's target hash property is proven to be existent at that time and unmodified. 
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * Number of confirmations of the Bitcoin block into which the anchoring process occurred.
   * @member {Number} confirmations
   */
  exports.prototype['confirmations'] = undefined;
  /**
   * @member {module:model/IdentityVerificationStatus} identityVerificationStatus
   */
  exports.prototype['identityVerificationStatus'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED",
    /**
     * value: "INVALID_PROOF"
     * @const
     */
    "INVALID_PROOF": "INVALID_PROOF",
    /**
     * value: "TX_NOT_FOUND"
     * @const
     */
    "TX_NOT_FOUND": "TX_NOT_FOUND",
    /**
     * value: "TX_MISMATCH_RECEIPT"
     * @const
     */
    "TX_MISMATCH_RECEIPT": "TX_MISMATCH_RECEIPT",
    /**
     * value: "INVALID_SIGNATURE"
     * @const
     */
    "INVALID_SIGNATURE": "INVALID_SIGNATURE"  };


  return exports;
}));


