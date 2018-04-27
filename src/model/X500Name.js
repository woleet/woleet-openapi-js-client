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
    root.WoleetApi.X500Name = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The X500Name model module.
   * @module model/X500Name
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>X500Name</code>.
   * @alias module:model/X500Name
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>X500Name</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/X500Name} obj Optional instance to populate.
   * @return {module:model/X500Name} The populated <code>X500Name</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('C')) {
        obj['C'] = ApiClient.convertToType(data['C'], 'String');
      }
      if (data.hasOwnProperty('ST')) {
        obj['ST'] = ApiClient.convertToType(data['ST'], 'String');
      }
      if (data.hasOwnProperty('L')) {
        obj['L'] = ApiClient.convertToType(data['L'], 'String');
      }
      if (data.hasOwnProperty('O')) {
        obj['O'] = ApiClient.convertToType(data['O'], 'String');
      }
      if (data.hasOwnProperty('OU')) {
        obj['OU'] = ApiClient.convertToType(data['OU'], 'String');
      }
      if (data.hasOwnProperty('CN')) {
        obj['CN'] = ApiClient.convertToType(data['CN'], 'String');
      }
    }
    return obj;
  }

  /**
   * Country/region
   * @member {String} C
   */
  exports.prototype['C'] = undefined;
  /**
   * State or Province
   * @member {String} ST
   */
  exports.prototype['ST'] = undefined;
  /**
   * Locality
   * @member {String} L
   */
  exports.prototype['L'] = undefined;
  /**
   * Organization
   * @member {String} O
   */
  exports.prototype['O'] = undefined;
  /**
   * Organizational Unit
   * @member {String} OU
   */
  exports.prototype['OU'] = undefined;
  /**
   * Common Name
   * @member {String} CN
   */
  exports.prototype['CN'] = undefined;



  return exports;
}));


