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
    root.WoleetApi.User = factory(root.WoleetApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The User model module.
   * @module model/User
   * @version 1.5.3
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param email {String} Email of the user. 
   * @param password {String} Password of the user (it must be provided at creation time). 
   * @param roles {Array.<module:model/User.RolesEnum>} The roles of the user:<br> - ROLE_USER: regular user<br> - ROLE_DOMAIN_ADMIN: domain administrator. 
   * @param info {Object.<String, Object>} Object storing meta data about the user. Some property names are reserved, but properties are not limitted to the one listed here. 
   * @param status {module:model/User.StatusEnum} The status of the user:<br> - PENDING: the user email need to be validated<br> - APPROVED: the user can loging<br> - DISABLED: the user cannot login 
   */
  var exports = function(email, password, roles, info, status) {
    var _this = this;

    _this['email'] = email;
    _this['password'] = password;
    _this['roles'] = roles;
    _this['info'] = info;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Number');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('roles')) {
        obj['roles'] = ApiClient.convertToType(data['roles'], ['String']);
      }
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], {'String': Object});
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * User identifier. It is allocated by the platform, and so must not be provided at creation time. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Date of creation (in milliseconds since Unix epoch). 
   * @member {Number} created
   */
  exports.prototype['created'] = undefined;
  /**
   * Date of last modification (in milliseconds since Unix epoch). 
   * @member {Number} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * Email of the user. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Password of the user (it must be provided at creation time). 
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * The roles of the user:<br> - ROLE_USER: regular user<br> - ROLE_DOMAIN_ADMIN: domain administrator. 
   * @member {Array.<module:model/User.RolesEnum>} roles
   */
  exports.prototype['roles'] = undefined;
  /**
   * Object storing meta data about the user. Some property names are reserved, but properties are not limitted to the one listed here. 
   * @member {Object.<String, Object>} info
   */
  exports.prototype['info'] = undefined;
  /**
   * The status of the user:<br> - PENDING: the user email need to be validated<br> - APPROVED: the user can loging<br> - DISABLED: the user cannot login 
   * @member {module:model/User.StatusEnum} status
   * @default 'PENDING'
   */
  exports.prototype['status'] = 'PENDING';


  /**
   * Allowed values for the <code>roles</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RolesEnum = {
    /**
     * value: "ROLE_USER"
     * @const
     */
    "USER": "ROLE_USER",
    /**
     * value: "ROLE_DOMAIN_ADMIN"
     * @const
     */
    "DOMAIN_ADMIN": "ROLE_DOMAIN_ADMIN"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "APPROVED"
     * @const
     */
    "APPROVED": "APPROVED",
    /**
     * value: "DISABLED"
     * @const
     */
    "DISABLED": "DISABLED"  };


  return exports;
}));


