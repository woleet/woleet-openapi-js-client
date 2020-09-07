/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.7.5
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Anchor from './Anchor';

/**
 * The Anchors model module.
 * @module model/Anchors
 * @version 1.7.5
 */
class Anchors {
    /**
     * Constructs a new <code>Anchors</code>.
     * @alias module:model/Anchors
     */
    constructor() { 
        
        Anchors.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Anchors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Anchors} obj Optional instance to populate.
     * @return {module:model/Anchors} The populated <code>Anchors</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Anchors();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], [Anchor]);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'Boolean');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'Boolean');
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
 * Array of anchors matching the search criteria.
 * @member {Array.<module:model/Anchor>} content
 */
Anchors.prototype['content'] = undefined;

/**
 * `true` if this is the first page. 
 * @member {Boolean} first
 */
Anchors.prototype['first'] = undefined;

/**
 * `true` if this is the last page. 
 * @member {Boolean} last
 */
Anchors.prototype['last'] = undefined;

/**
 * Number of anchors in the retrieved page.
 * @member {Number} numberOfElements
 */
Anchors.prototype['numberOfElements'] = undefined;

/**
 * Number of anchors per page.
 * @member {Number} size
 */
Anchors.prototype['size'] = undefined;

/**
 * Index of the retrieved page (from 0).
 * @member {Number} number
 */
Anchors.prototype['number'] = undefined;






export default Anchors;

