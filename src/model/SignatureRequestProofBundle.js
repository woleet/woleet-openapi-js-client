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
import Receipt from './Receipt';

/**
 * The SignatureRequestProofBundle model module.
 * @module model/SignatureRequestProofBundle
 * @version 1.11.1
 */
class SignatureRequestProofBundle {
    /**
     * Constructs a new <code>SignatureRequestProofBundle</code>.
     * A bundle of all the pieces of evidence of a signature request.
     * @alias module:model/SignatureRequestProofBundle
     */
    constructor() { 
        
        SignatureRequestProofBundle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignatureRequestProofBundle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequestProofBundle} obj Optional instance to populate.
     * @return {module:model/SignatureRequestProofBundle} The populated <code>SignatureRequestProofBundle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestProofBundle();

            if (data.hasOwnProperty('signatureReceipts')) {
                obj['signatureReceipts'] = ApiClient.convertToType(data['signatureReceipts'], [Receipt]);
            }
            if (data.hasOwnProperty('auditTrailReceipt')) {
                obj['auditTrailReceipt'] = Receipt.constructFromObject(data['auditTrailReceipt']);
            }
            if (data.hasOwnProperty('auditTrailData')) {
                obj['auditTrailData'] = ApiClient.convertToType(data['auditTrailData'], 'String');
            }
            if (data.hasOwnProperty('complete')) {
                obj['complete'] = ApiClient.convertToType(data['complete'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Proof receipts of the signatures of the file by the signers
 * @member {Array.<module:model/Receipt>} signatureReceipts
 */
SignatureRequestProofBundle.prototype['signatureReceipts'] = undefined;

/**
 * @member {module:model/Receipt} auditTrailReceipt
 */
SignatureRequestProofBundle.prototype['auditTrailReceipt'] = undefined;

/**
 * Audit trail data (Base64 encoded JSON object)
 * @member {String} auditTrailData
 */
SignatureRequestProofBundle.prototype['auditTrailData'] = undefined;

/**
 * `true` if all pieces of evidence are present in the proof bundle, or `false` if not<br> All the following conditions must be met:<br> - the signature request is COMPLETED (by the platform) or CLOSED (by the requester)<br> - the audit trail is generated and signed by the platform<br> - all the proof receipts are available 
 * @member {Boolean} complete
 */
SignatureRequestProofBundle.prototype['complete'] = undefined;






export default SignatureRequestProofBundle;

