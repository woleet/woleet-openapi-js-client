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
    root.WoleetApi.Token = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Token model module.
   * @module model/Token
   * @version 1.5.3
   */

  /**
   * Constructs a new <code>Token</code>.
   * @alias module:model/Token
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Token</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Token} obj Optional instance to populate.
   * @return {module:model/Token} The populated <code>Token</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The JWT token value to provide in the `Bearer` scheme of the `Authorization` header.
   * @member {String} token
   */
  exports.prototype['token'] = undefined;



  return exports;
}));


