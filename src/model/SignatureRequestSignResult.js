/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.2
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
    root.WoleetApi.SignatureRequestSignResult = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SignatureRequestSignResult model module.
   * @module model/SignatureRequestSignResult
   * @version 1.5.2
   */

  /**
   * Constructs a new <code>SignatureRequestSignResult</code>.
   * @alias module:model/SignatureRequestSignResult
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SignatureRequestSignResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureRequestSignResult} obj Optional instance to populate.
   * @return {module:model/SignatureRequestSignResult} The populated <code>SignatureRequestSignResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('anchorid')) {
        obj['anchorid'] = ApiClient.convertToType(data['anchorid'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier of the signature anchor created. 
   * @member {String} anchorid
   */
  exports.prototype['anchorid'] = undefined;



  return exports;
}));


