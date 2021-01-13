/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.7.7
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
 * The GetSignatureRequestProofBundle model module.
 * @module model/GetSignatureRequestProofBundle
 * @version 1.7.7
 */
class GetSignatureRequestProofBundle {
    /**
     * Constructs a new <code>GetSignatureRequestProofBundle</code>.
     * @alias module:model/GetSignatureRequestProofBundle
     */
    constructor() { 
        
        GetSignatureRequestProofBundle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSignatureRequestProofBundle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSignatureRequestProofBundle} obj Optional instance to populate.
     * @return {module:model/GetSignatureRequestProofBundle} The populated <code>GetSignatureRequestProofBundle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSignatureRequestProofBundle();

            if (data.hasOwnProperty('signatureReceipts')) {
                obj['signatureReceipts'] = ApiClient.convertToType(data['signatureReceipts'], [Receipt]);
            }
            if (data.hasOwnProperty('auditTrailReceipt')) {
                obj['auditTrailReceipt'] = Receipt.constructFromObject(data['auditTrailReceipt']);
            }
            if (data.hasOwnProperty('auditTrailData')) {
                obj['auditTrailData'] = ApiClient.convertToType(data['auditTrailData'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Array of signature proof receipts.
 * @member {Array.<module:model/Receipt>} signatureReceipts
 */
GetSignatureRequestProofBundle.prototype['signatureReceipts'] = undefined;

/**
 * @member {module:model/Receipt} auditTrailReceipt
 */
GetSignatureRequestProofBundle.prototype['auditTrailReceipt'] = undefined;

/**
 * Audit trail data (Base64 encoded JSON array)
 * @member {String} auditTrailData
 */
GetSignatureRequestProofBundle.prototype['auditTrailData'] = undefined;






export default GetSignatureRequestProofBundle;
