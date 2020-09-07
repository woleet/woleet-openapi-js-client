/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.7.5
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Identity from './Identity';
import Key from './Key';
import X509SubjectIssuer from './X509SubjectIssuer';

/**
 * The IdentityVerificationStatus model module.
 * @module model/IdentityVerificationStatus
 * @version 1.7.5
 */
class IdentityVerificationStatus {
    /**
     * Constructs a new <code>IdentityVerificationStatus</code>.
     * @alias module:model/IdentityVerificationStatus
     */
    constructor() { 
        
        IdentityVerificationStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IdentityVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IdentityVerificationStatus} obj Optional instance to populate.
     * @return {module:model/IdentityVerificationStatus} The populated <code>IdentityVerificationStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdentityVerificationStatus();

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
            if (data.hasOwnProperty('signedIdentity')) {
                obj['signedIdentity'] = Identity.constructFromObject(data['signedIdentity']);
            }
            if (data.hasOwnProperty('signedIssuerDomain')) {
                obj['signedIssuerDomain'] = ApiClient.convertToType(data['signedIssuerDomain'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = Key.constructFromObject(data['key']);
            }
        }
        return obj;
    }


}

/**
 * Identity verification status code:<br> - VERIFIED: success: the key is controlled by the identity server,<br> and/or the key is associated to an identity on the identity server,<br> and/or the identity is included in the anchored signature,<br> and/or the signed identity matches the one claimed by the identity server,<br> - IDENTITY_MISMATCH: error: the identity included in the anchored signature mismatch the identity claimed by the identity server<br> - INVALID_SIGNATURE: error: the identity URL returned an invalid signature (ie. the identity server failed to prove that it owns the private part of key pair)<br> - HTTP_ERROR: error: the identity URL returned an HTTP error<br> - DEPRECATED_KEY: error: the key expired or was revoked before the signature timestamp. 
 * @member {module:model/IdentityVerificationStatus.CodeEnum} code
 */
IdentityVerificationStatus.prototype['code'] = undefined;

/**
 * Identity verification status text (gives more insights about the verification process).
 * @member {String} text
 */
IdentityVerificationStatus.prototype['text'] = undefined;

/**
 * Array of subjects and issuers of the certificates extracted from the identity URL's TLS certificate.
 * @member {Array.<module:model/X509SubjectIssuer>} certificates
 */
IdentityVerificationStatus.prototype['certificates'] = undefined;

/**
 * @member {module:model/Identity} identity
 */
IdentityVerificationStatus.prototype['identity'] = undefined;

/**
 * @member {module:model/Identity} signedIdentity
 */
IdentityVerificationStatus.prototype['signedIdentity'] = undefined;

/**
 * Domain name of the identity issuer (ie. of the organization who verified the identity).
 * @member {String} signedIssuerDomain
 */
IdentityVerificationStatus.prototype['signedIssuerDomain'] = undefined;

/**
 * @member {module:model/Key} key
 */
IdentityVerificationStatus.prototype['key'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
IdentityVerificationStatus['CodeEnum'] = {

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
     * value: "IDENTITY_MISMATCH"
     * @const
     */
    "IDENTITY_MISMATCH": "IDENTITY_MISMATCH",

    /**
     * value: "INVALID_SIGNATURE"
     * @const
     */
    "INVALID_SIGNATURE": "INVALID_SIGNATURE",

    /**
     * value: "DEPRECATED_KEY"
     * @const
     */
    "DEPRECATED_KEY": "DEPRECATED_KEY"
};



export default IdentityVerificationStatus;

