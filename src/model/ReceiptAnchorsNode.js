/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.3
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.ReceiptAnchorsNode = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ReceiptAnchorsNode model module.
   * @module model/ReceiptAnchorsNode
   * @version 1.5.3
   */

  /**
   * Constructs a new <code>ReceiptAnchorsNode</code>.
   * @alias module:model/ReceiptAnchorsNode
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReceiptAnchorsNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptAnchorsNode} obj Optional instance to populate.
   * @return {module:model/ReceiptAnchorsNode} The populated <code>ReceiptAnchorsNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('sourceId')) {
        obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} type
   * @default 'BTCOpReturn'
   */
  exports.prototype['type'] = 'BTCOpReturn';
  /**
   * @member {String} sourceId
   */
  exports.prototype['sourceId'] = undefined;



  return exports;
}));


