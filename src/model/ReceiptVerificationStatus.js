/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.13.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import IdentityVerificationStatus from './IdentityVerificationStatus';
import SignatureVerificationStatus from './SignatureVerificationStatus';
import TimestampVerificationStatus from './TimestampVerificationStatus';

/**
 * The ReceiptVerificationStatus model module.
 * @module model/ReceiptVerificationStatus
 * @version 1.13.0
 */
class ReceiptVerificationStatus {
    /**
     * Constructs a new <code>ReceiptVerificationStatus</code>.
     * @alias module:model/ReceiptVerificationStatus
     */
    constructor() { 
        
        ReceiptVerificationStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceiptVerificationStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptVerificationStatus} obj Optional instance to populate.
     * @return {module:model/ReceiptVerificationStatus} The populated <code>ReceiptVerificationStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptVerificationStatus();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('confirmations')) {
                obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
            }
            if (data.hasOwnProperty('timestampVerificationStatus')) {
                obj['timestampVerificationStatus'] = TimestampVerificationStatus.constructFromObject(data['timestampVerificationStatus']);
            }
            if (data.hasOwnProperty('signatureVerificationStatus')) {
                obj['signatureVerificationStatus'] = SignatureVerificationStatus.constructFromObject(data['signatureVerificationStatus']);
            }
            if (data.hasOwnProperty('identityVerificationStatus')) {
                obj['identityVerificationStatus'] = IdentityVerificationStatus.constructFromObject(data['identityVerificationStatus']);
            }
        }
        return obj;
    }


}

/**
 * Proof receipt verification status code: - VERIFIED: success: the proof receipt is verified: both the proof of timestamp AND the proof of signature (if applicable) are valid (but the proof of identity may be invalid) - INVALID_SIGNATURE: error: the proof of signature is invalid - any other verification status code: the proof of timestamp is not ready or invalid 
 * @member {module:model/ReceiptVerificationStatus.CodeEnum} code
 */
ReceiptVerificationStatus.prototype['code'] = undefined;

/**
 * Proof receipt verification status text giving more insight about verification errors.
 * @member {String} text
 */
ReceiptVerificationStatus.prototype['text'] = undefined;

/**
 * Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).<br> This is the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch). 
 * @member {Number} timestamp
 */
ReceiptVerificationStatus.prototype['timestamp'] = undefined;

/**
 * Number of confirmations of the Bitcoin block into which the anchoring process occurred.
 * @member {Number} confirmations
 */
ReceiptVerificationStatus.prototype['confirmations'] = undefined;

/**
 * @member {module:model/TimestampVerificationStatus} timestampVerificationStatus
 */
ReceiptVerificationStatus.prototype['timestampVerificationStatus'] = undefined;

/**
 * @member {module:model/SignatureVerificationStatus} signatureVerificationStatus
 */
ReceiptVerificationStatus.prototype['signatureVerificationStatus'] = undefined;

/**
 * @member {module:model/IdentityVerificationStatus} identityVerificationStatus
 */
ReceiptVerificationStatus.prototype['identityVerificationStatus'] = undefined;





/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
ReceiptVerificationStatus['CodeEnum'] = {

    /**
     * value: "VERIFIED"
     * @const
     */
    "VERIFIED": "VERIFIED",

    /**
     * value: "TX_NOT_SENT"
     * @const
     */
    "TX_NOT_SENT": "TX_NOT_SENT",

    /**
     * value: "TX_NOT_CONFIRMED"
     * @const
     */
    "TX_NOT_CONFIRMED": "TX_NOT_CONFIRMED",

    /**
     * value: "INVALID_PROOF"
     * @const
     */
    "INVALID_PROOF": "INVALID_PROOF",

    /**
     * value: "TX_NOT_FOUND"
     * @const
     */
    "TX_NOT_FOUND": "TX_NOT_FOUND",

    /**
     * value: "TX_MISMATCH_RECEIPT"
     * @const
     */
    "TX_MISMATCH_RECEIPT": "TX_MISMATCH_RECEIPT",

    /**
     * value: "INVALID_SIGNATURE"
     * @const
     */
    "INVALID_SIGNATURE": "INVALID_SIGNATURE"
};



export default ReceiptVerificationStatus;

