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
    define(['ApiClient', 'model/X500Name'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./X500Name'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.X509SubjectIssuer = factory(root.WoleetApi.ApiClient, root.WoleetApi.X500Name);
  }
}(this, function(ApiClient, X500Name) {
  'use strict';



  /**
   * The X509SubjectIssuer model module.
   * @module model/X509SubjectIssuer
   * @version 1.5.3
   */

  /**
   * Constructs a new <code>X509SubjectIssuer</code>.
   * @alias module:model/X509SubjectIssuer
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>X509SubjectIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/X509SubjectIssuer} obj Optional instance to populate.
   * @return {module:model/X509SubjectIssuer} The populated <code>X509SubjectIssuer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = X500Name.constructFromObject(data['subject']);
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = X500Name.constructFromObject(data['issuer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/X500Name} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * @member {module:model/X500Name} issuer
   */
  exports.prototype['issuer'] = undefined;



  return exports;
}));


