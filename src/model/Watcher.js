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
 * The Watcher model module.
 * @module model/Watcher
 * @version 1.13.0
 */
class Watcher {
    /**
     * Constructs a new <code>Watcher</code>.
     * A watcher of the signature request.
     * @alias module:model/Watcher
     * @param email {String} The email of the watcher.
     */
    constructor(email) { 
        
        Watcher.initialize(this, email);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email) { 
        obj['email'] = email;
    }

    /**
     * Constructs a <code>Watcher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Watcher} obj Optional instance to populate.
     * @return {module:model/Watcher} The populated <code>Watcher</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Watcher();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('commonName')) {
                obj['commonName'] = ApiClient.convertToType(data['commonName'], 'String');
            }
            if (data.hasOwnProperty('vars')) {
                obj['vars'] = ApiClient.convertToType(data['vars'], Object);
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The email of the watcher.
 * @member {String} email
 */
Watcher.prototype['email'] = undefined;

/**
 * The full name of the watcher.
 * @member {String} commonName
 */
Watcher.prototype['commonName'] = undefined;

/**
 * The set of variables (key/value pairs) to use to customize the signature request workflow for this watcher.<br> Values must be of type null, boolean, string or number: nested JSON objects are not allowed.<br> Variables defined here overwrites the ones defined at signature request level when emailing the watcher. 
 * @member {Object} vars
 */
Watcher.prototype['vars'] = undefined;

/**
 * The preferred language (provided as an ISO 639-1 string) to use when emailing the watcher.<br> If set, this property overwrites the `lang` property defined at signature request level. 
 * @member {String} lang
 */
Watcher.prototype['lang'] = undefined;






export default Watcher;

