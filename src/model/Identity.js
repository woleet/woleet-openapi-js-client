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
 * The Identity model module.
 * @module model/Identity
 * @version 1.13.0
 */
class Identity {
    /**
     * Constructs a new <code>Identity</code>.
     * Signer&#39;s identity as returned by the identity server, provided as a set of X.500 attributes (see https://www.ietf.org/rfc/rfc4519.txt).
     * @alias module:model/Identity
     * @param commonName {String} commonName (CN) (2.5.4.3)
     */
    constructor(commonName) { 
        
        Identity.initialize(this, commonName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commonName) { 
        obj['commonName'] = commonName;
    }

    /**
     * Constructs a <code>Identity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Identity} obj Optional instance to populate.
     * @return {module:model/Identity} The populated <code>Identity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Identity();

            if (data.hasOwnProperty('commonName')) {
                obj['commonName'] = ApiClient.convertToType(data['commonName'], 'String');
            }
            if (data.hasOwnProperty('organization')) {
                obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
            }
            if (data.hasOwnProperty('organizationalUnit')) {
                obj['organizationalUnit'] = ApiClient.convertToType(data['organizationalUnit'], 'String');
            }
            if (data.hasOwnProperty('locality')) {
                obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * commonName (CN) (2.5.4.3)
 * @member {String} commonName
 */
Identity.prototype['commonName'] = undefined;

/**
 * organizationName (O) (2.5.4.10)
 * @member {String} organization
 */
Identity.prototype['organization'] = undefined;

/**
 * organizationalUnitName (OU) (2.5.4.11)
 * @member {String} organizationalUnit
 */
Identity.prototype['organizationalUnit'] = undefined;

/**
 * localityName (L) (2.5.4.7)
 * @member {String} locality
 */
Identity.prototype['locality'] = undefined;

/**
 * countryName (C) (2.5.4.6)
 * @member {String} country
 */
Identity.prototype['country'] = undefined;






export default Identity;

