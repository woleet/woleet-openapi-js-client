/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.11.1
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SignatureVerificationStatus model module.
 * @module model/SignatureVerificationStatus
 * @version 1.11.1
 */
class SignatureVerificationStatus {
    /**
     * Constructs a new <code>SignatureVerificationStatus</code>.
     * @alias module:model/SignatureVerificationStatus
     */
    constructor() { 
        
        SignatureVerificationStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignatureVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureVerificationStatus} obj Optional instance to populate.
     * @return {module:model/SignatureVerificationStatus} The populated <code>SignatureVerificationStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureVerificationStatus();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Signature verification status code:<br> - VERIFIED: success: the receipt's `signature` property is a valid signature of `signedHash`, or, if any of `signedIdentity` or `signedIssuerDomain` is provided, a valid signature of SHA256(`signedHash` + `signedIdentity` + `signedIssuerDomain`) using the public key `pubKey`.<br> - SIGNATURE_MISMATCH_RECEIPT: error: the receipt's `targetHash` does not match the SHA256 hash of `signature`.<br> - INVALID_SIGNATURE: error: the receipt's `signature` property is invalid. 
 * @member {module:model/SignatureVerificationStatus.CodeEnum} code
 */
SignatureVerificationStatus.prototype['code'] = undefined;

/**
 * Signature verification status text (gives more insights about the verification process).
 * @member {String} text
 */
SignatureVerificationStatus.prototype['text'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
SignatureVerificationStatus['CodeEnum'] = {

    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED",

    /**
     * value: "INVALID_SIGNATURE"
     * @const
     */
    "INVALID_SIGNATURE": "INVALID_SIGNATURE",

    /**
     * value: "SIGNATURE_MISMATCH_RECEIPT"
     * @const
     */
    "SIGNATURE_MISMATCH_RECEIPT": "SIGNATURE_MISMATCH_RECEIPT"
};



export default SignatureVerificationStatus;

