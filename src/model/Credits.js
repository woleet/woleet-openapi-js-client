/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
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
    root.WoleetApi.Credits = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Credits model module.
   * @module model/Credits
   * @version 1.5.3
   */

  /**
   * Constructs a new <code>Credits</code>.
   * @alias module:model/Credits
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Credits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Credits} obj Optional instance to populate.
   * @return {module:model/Credits} The populated <code>Credits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('credits')) {
        obj['credits'] = ApiClient.convertToType(data['credits'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The remaining anchoring credits of the authenticated user's account.
   * @member {Number} credits
   */
  exports.prototype['credits'] = undefined;



  return exports;
}));


