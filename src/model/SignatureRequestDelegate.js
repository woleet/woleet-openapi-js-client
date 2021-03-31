/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SignatureRequestDelegate model module.
 * @module model/SignatureRequestDelegate
 * @version 1.8.0
 */
class SignatureRequestDelegate {
    /**
     * Constructs a new <code>SignatureRequestDelegate</code>.
     * @alias module:model/SignatureRequestDelegate
     * @param signeeId {String} Secret identifier of the signer (provided by email).
     */
    constructor(signeeId) { 
        
        SignatureRequestDelegate.initialize(this, signeeId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signeeId) { 
        obj['signeeId'] = signeeId;
    }

    /**
     * Constructs a <code>SignatureRequestDelegate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequestDelegate} obj Optional instance to populate.
     * @return {module:model/SignatureRequestDelegate} The populated <code>SignatureRequestDelegate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestDelegate();

            if (data.hasOwnProperty('signeeId')) {
                obj['signeeId'] = ApiClient.convertToType(data['signeeId'], 'String');
            }
            if (data.hasOwnProperty('OTP')) {
                obj['OTP'] = ApiClient.convertToType(data['OTP'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Secret identifier of the signer (provided by email).
 * @member {String} signeeId
 */
SignatureRequestDelegate.prototype['signeeId'] = undefined;

/**
 * OTP of the signer (only required if `requiresOTP` was set to `true` for thìs signer). 
 * @member {String} OTP
 */
SignatureRequestDelegate.prototype['OTP'] = undefined;






export default SignatureRequestDelegate;

