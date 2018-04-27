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
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.Users = factory(root.WoleetApi.ApiClient, root.WoleetApi.User);
  }
}(this, function(ApiClient, User) {
  'use strict';




  /**
   * The Users model module.
   * @module model/Users
   * @version 1.5.1
   */

  /**
   * Constructs a new <code>Users</code>.
   * @alias module:model/Users
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Users</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Users} obj Optional instance to populate.
   * @return {module:model/Users} The populated <code>Users</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], [User]);
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
   * Array of users matching the search criteria.
   * @member {Array.<module:model/User>} content
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
   * Number of users in the retrieved page.
   * @member {Number} numberOfElements
   */
  exports.prototype['numberOfElements'] = undefined;
  /**
   * Number of users per page.
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


