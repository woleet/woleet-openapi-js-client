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

/**
 * The SignatureRequestSignResult model module.
 * @module model/SignatureRequestSignResult
 * @version 1.13.0
 */
class SignatureRequestSignResult {
    /**
     * Constructs a new <code>SignatureRequestSignResult</code>.
     * @alias module:model/SignatureRequestSignResult
     */
    constructor() { 
        
        SignatureRequestSignResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignatureRequestSignResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequestSignResult} obj Optional instance to populate.
     * @return {module:model/SignatureRequestSignResult} The populated <code>SignatureRequestSignResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestSignResult();

            if (data.hasOwnProperty('anchorId')) {
                obj['anchorId'] = ApiClient.convertToType(data['anchorId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifier of the signature anchor created.
 * @member {String} anchorId
 */
SignatureRequestSignResult.prototype['anchorId'] = undefined;






export default SignatureRequestSignResult;

