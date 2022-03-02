/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.12.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SignatureRequestSign model module.
 * @module model/SignatureRequestSign
 * @version 1.12.0
 */
class SignatureRequestSign {
    /**
     * Constructs a new <code>SignatureRequestSign</code>.
     * @alias module:model/SignatureRequestSign
     * @param signature {String} Signature of the `hashToSign` property of the signature request using the public key `pubKey`, or, if any of `signedIdentity` or `signedIssuerDomain` is provided, signature of SHA256(`hashToSign` + `signedIdentity` + `signedIssuerDomain`) using the public key `pubKey`. 
     * @param pubKey {String} Public key used to sign.
     */
    constructor(signature, pubKey) { 
        
        SignatureRequestSign.initialize(this, signature, pubKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, signature, pubKey) { 
        obj['signature'] = signature;
        obj['pubKey'] = pubKey;
    }

    /**
     * Constructs a <code>SignatureRequestSign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequestSign} obj Optional instance to populate.
     * @return {module:model/SignatureRequestSign} The populated <code>SignatureRequestSign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestSign();

            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('pubKey')) {
                obj['pubKey'] = ApiClient.convertToType(data['pubKey'], 'String');
            }
            if (data.hasOwnProperty('signedIdentity')) {
                obj['signedIdentity'] = ApiClient.convertToType(data['signedIdentity'], 'String');
            }
            if (data.hasOwnProperty('signedIssuerDomain')) {
                obj['signedIssuerDomain'] = ApiClient.convertToType(data['signedIssuerDomain'], 'String');
            }
            if (data.hasOwnProperty('identityURL')) {
                obj['identityURL'] = ApiClient.convertToType(data['identityURL'], 'String');
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
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
 * Signature of the `hashToSign` property of the signature request using the public key `pubKey`, or, if any of `signedIdentity` or `signedIssuerDomain` is provided, signature of SHA256(`hashToSign` + `signedIdentity` + `signedIssuerDomain`) using the public key `pubKey`. 
 * @member {String} signature
 */
SignatureRequestSign.prototype['signature'] = undefined;

/**
 * Public key used to sign.
 * @member {String} pubKey
 */
SignatureRequestSign.prototype['pubKey'] = undefined;

/**
 * X500 Distinguished Name representing the signed identity.<br> If set, the CN (common name) and EMAILADDRESS (email address) attributes must match the common name and email address of the signer as set in the signature request. 
 * @member {String} signedIdentity
 */
SignatureRequestSign.prototype['signedIdentity'] = undefined;

/**
 * Domain name of the identity server.<br> If set, the domain name of the identity URL must be included in the `signedIssuerDomain` domain name. 
 * @member {String} signedIssuerDomain
 */
SignatureRequestSign.prototype['signedIssuerDomain'] = undefined;

/**
 * Web hook of the identity server to use to verify the signer's identity.<br> If set, it is used in place of the `identityURL` property of the signer to create the signature anchor. 
 * @member {String} identityURL
 */
SignatureRequestSign.prototype['identityURL'] = undefined;

/**
 * Type of device used to sign:<br> - SERVER: Woleet.ID Server or equivalent<br> - MOBILE: Woleet.ID Mobile or equivalent<br> - NANO: Ledger Nano S or equivalent 
 * @member {module:model/SignatureRequestSign.DeviceEnum} device
 */
SignatureRequestSign.prototype['device'] = undefined;

/**
 * Secret identifier of the signer (provided by email).<br> Only required if `pubKey` was not set for thìs signer. 
 * @member {String} signeeId
 */
SignatureRequestSign.prototype['signeeId'] = undefined;

/**
 * OTP of the signer (only required if `requiresOTP` was set to `true` for thìs signer). 
 * @member {String} OTP
 */
SignatureRequestSign.prototype['OTP'] = undefined;





/**
 * Allowed values for the <code>device</code> property.
 * @enum {String}
 * @readonly
 */
SignatureRequestSign['DeviceEnum'] = {

    /**
     * value: "SERVER"
     * @const
     */
    "SERVER": "SERVER",

    /**
     * value: "MOBILE"
     * @const
     */
    "MOBILE": "MOBILE",

    /**
     * value: "NANO"
     * @const
     */
    "NANO": "NANO"
};



export default SignatureRequestSign;

