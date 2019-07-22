/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.2
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
    define(['ApiClient', 'model/ReceiptTargetProofNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReceiptTargetProofNode'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.ReceiptTarget = factory(root.WoleetApi.ApiClient, root.WoleetApi.ReceiptTargetProofNode);
  }
}(this, function(ApiClient, ReceiptTargetProofNode) {
  'use strict';



  /**
   * The ReceiptTarget model module.
   * @module model/ReceiptTarget
   * @version 1.6.2
   */

  /**
   * Constructs a new <code>ReceiptTarget</code>.
   * Chainpoint 1.x only
   * @alias module:model/ReceiptTarget
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReceiptTarget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptTarget} obj Optional instance to populate.
   * @return {module:model/ReceiptTarget} The populated <code>ReceiptTarget</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('target_hash')) {
        obj['target_hash'] = ApiClient.convertToType(data['target_hash'], 'String');
      }
      if (data.hasOwnProperty('target_proof')) {
        obj['target_proof'] = ApiClient.convertToType(data['target_proof'], [ReceiptTargetProofNode]);
      }
    }
    return obj;
  }

  /**
   * @member {String} target_hash
   */
  exports.prototype['target_hash'] = undefined;
  /**
   * @member {Array.<module:model/ReceiptTargetProofNode>} target_proof
   */
  exports.prototype['target_proof'] = undefined;



  return exports;
}));


