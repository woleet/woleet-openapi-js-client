/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.8.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SignatureRequestIds model module.
 * @module model/SignatureRequestIds
 * @version 1.8.0
 */
class SignatureRequestIds {
    /**
     * Constructs a new <code>SignatureRequestIds</code>.
     * @alias module:model/SignatureRequestIds
     */
    constructor() { 
        
        SignatureRequestIds.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SignatureRequestIds</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequestIds} obj Optional instance to populate.
     * @return {module:model/SignatureRequestIds} The populated <code>SignatureRequestIds</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequestIds();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], ['String']);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('numberOfElements')) {
                obj['numberOfElements'] = ApiClient.convertToType(data['numberOfElements'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Array of identifiers of signature requests matching the search criteria.
 * @member {Array.<String>} content
 */
SignatureRequestIds.prototype['content'] = undefined;

/**
 * `true` if this is the first page. 
 * @member {Boolean} first
 */
SignatureRequestIds.prototype['first'] = undefined;

/**
 * `true` if this is the last page. 
 * @member {Boolean} last
 */
SignatureRequestIds.prototype['last'] = undefined;

/**
 * Total number of pages available.
 * @member {Number} totalPages
 */
SignatureRequestIds.prototype['totalPages'] = undefined;

/**
 * Total number of signature requests matching the search criteria.
 * @member {Number} totalElements
 */
SignatureRequestIds.prototype['totalElements'] = undefined;

/**
 * Number of signature requests in the retrieved page.
 * @member {Number} numberOfElements
 */
SignatureRequestIds.prototype['numberOfElements'] = undefined;

/**
 * Number of signature requests per page.
 * @member {Number} size
 */
SignatureRequestIds.prototype['size'] = undefined;

/**
 * Index of the retrieved page (from 0).
 * @member {Number} number
 */
SignatureRequestIds.prototype['number'] = undefined;






export default SignatureRequestIds;

