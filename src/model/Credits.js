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
 * The Credits model module.
 * @module model/Credits
 * @version 1.11.1
 */
class Credits {
    /**
     * Constructs a new <code>Credits</code>.
     * @alias module:model/Credits
     */
    constructor() { 
        
        Credits.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Credits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Credits} obj Optional instance to populate.
     * @return {module:model/Credits} The populated <code>Credits</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Credits();

            if (data.hasOwnProperty('credits')) {
                obj['credits'] = ApiClient.convertToType(data['credits'], 'Number');
            }
            if (data.hasOwnProperty('signCredits')) {
                obj['signCredits'] = ApiClient.convertToType(data['signCredits'], 'Number');
            }
            if (data.hasOwnProperty('signatureRequestCredits')) {
                obj['signatureRequestCredits'] = ApiClient.convertToType(data['signatureRequestCredits'], 'Number');
            }
            if (data.hasOwnProperty('smsCredits')) {
                obj['smsCredits'] = ApiClient.convertToType(data['smsCredits'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The remaining number of anchoring credits of the authenticated user's account.
 * @member {Number} credits
 */
Credits.prototype['credits'] = undefined;

/**
 * The remaining number of signature credits of the authenticated user's account.
 * @member {Number} signCredits
 */
Credits.prototype['signCredits'] = undefined;

/**
 * The remaining number of signature request credits of the authenticated user's account.
 * @member {Number} signatureRequestCredits
 */
Credits.prototype['signatureRequestCredits'] = undefined;

/**
 * The remaining number of SMS credits of the authenticated user's account.
 * @member {Number} smsCredits
 */
Credits.prototype['smsCredits'] = undefined;






export default Credits;

