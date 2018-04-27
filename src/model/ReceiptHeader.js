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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.ReceiptHeader = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReceiptHeader model module.
   * @module model/ReceiptHeader
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>ReceiptHeader</code>.
   * For Chainpoint 1.x receipts only
   * @alias module:model/ReceiptHeader
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ReceiptHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptHeader} obj Optional instance to populate.
   * @return {module:model/ReceiptHeader} The populated <code>ReceiptHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('chainpoint_version')) {
        obj['chainpoint_version'] = ApiClient.convertToType(data['chainpoint_version'], 'String');
      }
      if (data.hasOwnProperty('hash_type')) {
        obj['hash_type'] = ApiClient.convertToType(data['hash_type'], 'String');
      }
      if (data.hasOwnProperty('merkle_root')) {
        obj['merkle_root'] = ApiClient.convertToType(data['merkle_root'], 'String');
      }
      if (data.hasOwnProperty('tx_id')) {
        obj['tx_id'] = ApiClient.convertToType(data['tx_id'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} chainpoint_version
   * @default '1.0'
   */
  exports.prototype['chainpoint_version'] = '1.0';
  /**
   * @member {String} hash_type
   * @default 'SHA-256'
   */
  exports.prototype['hash_type'] = 'SHA-256';
  /**
   * @member {String} merkle_root
   */
  exports.prototype['merkle_root'] = undefined;
  /**
   * @member {String} tx_id
   */
  exports.prototype['tx_id'] = undefined;
  /**
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


