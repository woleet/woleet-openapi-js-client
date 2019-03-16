/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.0
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
    define(['ApiClient', 'model/SignatureRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SignatureRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.SignatureRequests = factory(root.WoleetApi.ApiClient, root.WoleetApi.SignatureRequest);
  }
}(this, function(ApiClient, SignatureRequest) {
  'use strict';



  /**
   * The SignatureRequests model module.
   * @module model/SignatureRequests
   * @version 1.6.0
   */

  /**
   * Constructs a new <code>SignatureRequests</code>.
   * @alias module:model/SignatureRequests
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SignatureRequests</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignatureRequests} obj Optional instance to populate.
   * @return {module:model/SignatureRequests} The populated <code>SignatureRequests</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [SignatureRequest]);
      }
      if (data.hasOwnProperty('first')) {
        obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
      }
      if (data.hasOwnProperty('last')) {
        obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
      }
      if (data.hasOwnProperty('numberOfElements')) {
        obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Array of signature requests matching the search criteria. 
   * @member {Array.<module:model/SignatureRequest>} content
   */
  exports.prototype['content'] = undefined;
  /**
   * `true` if this is the first page. 
   * @member {Boolean} first
   */
  exports.prototype['first'] = undefined;
  /**
   * `true` if this is the last page. 
   * @member {Boolean} last
   */
  exports.prototype['last'] = undefined;
  /**
   * Number of requests in the retrieved page. 
   * @member {Number} numberOfElements
   */
  exports.prototype['numberOfElements'] = undefined;
  /**
   * Number of requests per page. 
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * Index of the retrieved page (from 0). 
   * @member {Number} number
   */
  exports.prototype['number'] = undefined;



  return exports;
}));


