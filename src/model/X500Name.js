/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.10.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The X500Name model module.
 * @module model/X500Name
 * @version 1.10.0
 */
class X500Name {
    /**
     * Constructs a new <code>X500Name</code>.
     * X500 Distinguished Name.
     * @alias module:model/X500Name
     */
    constructor() { 
        
        X500Name.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>X500Name</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/X500Name} obj Optional instance to populate.
     * @return {module:model/X500Name} The populated <code>X500Name</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new X500Name();

            if (data.hasOwnProperty('C')) {
                obj['C'] = ApiClient.convertToType(data['C'], 'String');
            }
            if (data.hasOwnProperty('ST')) {
                obj['ST'] = ApiClient.convertToType(data['ST'], 'String');
            }
            if (data.hasOwnProperty('L')) {
                obj['L'] = ApiClient.convertToType(data['L'], 'String');
            }
            if (data.hasOwnProperty('O')) {
                obj['O'] = ApiClient.convertToType(data['O'], 'String');
            }
            if (data.hasOwnProperty('OU')) {
                obj['OU'] = ApiClient.convertToType(data['OU'], 'String');
            }
            if (data.hasOwnProperty('CN')) {
                obj['CN'] = ApiClient.convertToType(data['CN'], 'String');
            }
            if (data.hasOwnProperty('EMAILADDRESS')) {
                obj['EMAILADDRESS'] = ApiClient.convertToType(data['EMAILADDRESS'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Country code
 * @member {String} C
 */
X500Name.prototype['C'] = undefined;

/**
 * State or Province
 * @member {String} ST
 */
X500Name.prototype['ST'] = undefined;

/**
 * Locality
 * @member {String} L
 */
X500Name.prototype['L'] = undefined;

/**
 * Organization
 * @member {String} O
 */
X500Name.prototype['O'] = undefined;

/**
 * Organizational Unit
 * @member {String} OU
 */
X500Name.prototype['OU'] = undefined;

/**
 * Common Name
 * @member {String} CN
 */
X500Name.prototype['CN'] = undefined;

/**
 * Email address
 * @member {String} EMAILADDRESS
 */
X500Name.prototype['EMAILADDRESS'] = undefined;






export default X500Name;

