/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.1
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
    define(['ApiClient', 'model/Identity', 'model/X509SubjectIssuer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Identity'), require('./X509SubjectIssuer'));
  } else {
    // Browser globals (root is window)
    if (!root.WoleetApi) {
      root.WoleetApi = {};
    }
    root.WoleetApi.IdentityVerificationStatus = factory(root.WoleetApi.ApiClient, root.WoleetApi.Identity, root.WoleetApi.X509SubjectIssuer);
  }
}(this, function(ApiClient, Identity, X509SubjectIssuer) {
  'use strict';



  /**
   * The IdentityVerificationStatus model module.
   * @module model/IdentityVerificationStatus
   * @version 1.6.1
   */

  /**
   * Constructs a new <code>IdentityVerificationStatus</code>.
   * @alias module:model/IdentityVerificationStatus
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>IdentityVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentityVerificationStatus} obj Optional instance to populate.
   * @return {module:model/IdentityVerificationStatus} The populated <code>IdentityVerificationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('certificates')) {
        obj['certificates'] = ApiClient.convertToType(data['certificates'], [X509SubjectIssuer]);
      }
      if (data.hasOwnProperty('identity')) {
        obj['identity'] = Identity.constructFromObject(data['identity']);
      }
    }
    return obj;
  }

  /**
   * Identity verification status code:<br> - VERIFIED: the identity is verified (the identity URL succeeded to sign a challenge using the same public key as the proof receipt, proving it owns the associated private key)<br> - HTTP_ERROR: the identity URL returned an HTTP error<br> - INVALID_SIGNATURE: the identity URL returned an invalid signature (and thus failed to prove the ownership of the proof receipt's `pubKey` public key) 
   * @member {module:model/IdentityVerificationStatus.CodeEnum} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Identity verification status text giving more insight about verification errors.
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Array of subjects and issuers of the certificates extracted from the identity URL's TLS certificate.
   * @member {Array.<module:model/X509SubjectIssuer>} certificates
   */
  exports.prototype['certificates'] = undefined;
  /**
   * @member {module:model/Identity} identity
   */
  exports.prototype['identity'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED",
    /**
     * value: "HTTP_ERROR"
     * @const
     */
    "HTTP_ERROR": "HTTP_ERROR",
    /**
     * value: "INVALID_SIGNATURE"
     * @const
     */
    "INVALID_SIGNATURE": "INVALID_SIGNATURE"  };


  return exports;
}));


