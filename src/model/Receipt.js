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
import ReceiptAnchorsNode from './ReceiptAnchorsNode';
import ReceiptProofNode from './ReceiptProofNode';
import ReceiptSignature from './ReceiptSignature';

/**
 * The Receipt model module.
 * @module model/Receipt
 * @version 1.12.0
 */
class Receipt {
    /**
     * Constructs a new <code>Receipt</code>.
     * A proof receipt:&lt;br&gt; - the proof of timestamp is provided as a Chainpoint 2.x proof receipt.&lt;br&gt; - the proof of signature (if applicable) is provided in the &#x60;signature&#x60; property.&lt;br&gt; If the proof receipt is partial (ie. does not contain the proof of timestamp) Chainpoint 2.x properties are not provided. 
     * @alias module:model/Receipt
     */
    constructor() { 
        
        Receipt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Receipt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Receipt} obj Optional instance to populate.
     * @return {module:model/Receipt} The populated <code>Receipt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Receipt();

            if (data.hasOwnProperty('targetHash')) {
                obj['targetHash'] = ApiClient.convertToType(data['targetHash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('merkleRoot')) {
                obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
            }
            if (data.hasOwnProperty('proof')) {
                obj['proof'] = ApiClient.convertToType(data['proof'], [ReceiptProofNode]);
            }
            if (data.hasOwnProperty('anchors')) {
                obj['anchors'] = ApiClient.convertToType(data['anchors'], [ReceiptAnchorsNode]);
            }
            if (data.hasOwnProperty('partial')) {
                obj['partial'] = ApiClient.convertToType(data['partial'], 'Boolean');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ReceiptSignature.constructFromObject(data['signature']);
            }
        }
        return obj;
    }


}

/**
 * Chainpoint 2.x: SHA256 hash of the proven data or signature. 
 * @member {String} targetHash
 */
Receipt.prototype['targetHash'] = undefined;

/**
 * Chainpoint 2.x: Type of the proof receipt.<br> **Currently only 'ChainpointSHA256v2' is supported.** 
 * @member {String} type
 */
Receipt.prototype['type'] = undefined;

/**
 * Chainpoint 2.x: Root of the Merkle tree. 
 * @member {String} merkleRoot
 */
Receipt.prototype['merkleRoot'] = undefined;

/**
 * Chainpoint 2.x: Merkle proof (path from `targetHash` to `merkleRoot` in the Merkle tree). 
 * @member {Array.<module:model/ReceiptProofNode>} proof
 */
Receipt.prototype['proof'] = undefined;

/**
 * Chainpoint 2.x: List of sources where the root of the Merkle proof is anchored. 
 * @member {Array.<module:model/ReceiptAnchorsNode>} anchors
 */
Receipt.prototype['anchors'] = undefined;

/**
 * `true` if the receipt is a partial receipt (ie. does not contain the Chainpoint 2.x proof of timestamp). 
 * @member {Boolean} partial
 */
Receipt.prototype['partial'] = undefined;

/**
 * @member {module:model/ReceiptSignature} signature
 */
Receipt.prototype['signature'] = undefined;






export default Receipt;

