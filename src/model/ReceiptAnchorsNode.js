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
 * The ReceiptAnchorsNode model module.
 * @module model/ReceiptAnchorsNode
 * @version 1.7.7
 */
class ReceiptAnchorsNode {
    /**
     * Constructs a new <code>ReceiptAnchorsNode</code>.
     * @alias module:model/ReceiptAnchorsNode
     */
    constructor() { 
        
        ReceiptAnchorsNode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReceiptAnchorsNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReceiptAnchorsNode} obj Optional instance to populate.
     * @return {module:model/ReceiptAnchorsNode} The populated <code>ReceiptAnchorsNode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReceiptAnchorsNode();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('sourceId')) {
                obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 * @default 'BTCOpReturn'
 */
ReceiptAnchorsNode.prototype['type'] = 'BTCOpReturn';

/**
 * @member {String} sourceId
 */
ReceiptAnchorsNode.prototype['sourceId'] = undefined;






export default ReceiptAnchorsNode;

