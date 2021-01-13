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

/**
 * The ReceiptProofNode model module.
 * @module model/ReceiptProofNode
 * @version 1.7.7
 */
class ReceiptProofNode {
    /**
     * Constructs a new <code>ReceiptProofNode</code>.
     * @alias module:model/ReceiptProofNode
     */
    constructor() { 
        
        ReceiptProofNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceiptProofNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptProofNode} obj Optional instance to populate.
     * @return {module:model/ReceiptProofNode} The populated <code>ReceiptProofNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptProofNode();

            if (data.hasOwnProperty('left')) {
                obj['left'] = ApiClient.convertToType(data['left'], 'String');
            }
            if (data.hasOwnProperty('right')) {
                obj['right'] = ApiClient.convertToType(data['right'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} left
 */
ReceiptProofNode.prototype['left'] = undefined;

/**
 * @member {String} right
 */
ReceiptProofNode.prototype['right'] = undefined;






export default ReceiptProofNode;

