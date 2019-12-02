/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Anchor from './Anchor';
import AuthorizedSignee from './AuthorizedSignee';

/**
 * The SignatureRequest model module.
 * @module model/SignatureRequest
 * @version 1.6.2
 */
class SignatureRequest {
    /**
     * Constructs a new <code>SignatureRequest</code>.
     * @alias module:model/SignatureRequest
     * @param name {String} Name of the signature request (doesn't need to be unique). 
     * @param hashToSign {String} SHA256 hash (ie. the fingerprint) of the original data to sign. The value must be provided as an hexadecimal lowercase string. 
     */
    constructor(name, hashToSign) { 
        
        SignatureRequest.initialize(this, name, hashToSign);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, hashToSign) { 
        obj['name'] = name;
        obj['hashToSign'] = hashToSign;
    }

    /**
     * Constructs a <code>SignatureRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SignatureRequest} obj Optional instance to populate.
     * @return {module:model/SignatureRequest} The populated <code>SignatureRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignatureRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Number');
            }
            if (data.hasOwnProperty('lastModified')) {
                obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('suspended')) {
                obj['suspended'] = ApiClient.convertToType(data['suspended'], 'Boolean');
            }
            if (data.hasOwnProperty('hashToSign')) {
                obj['hashToSign'] = ApiClient.convertToType(data['hashToSign'], 'String');
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Number');
            }
            if (data.hasOwnProperty('identityURL')) {
                obj['identityURL'] = ApiClient.convertToType(data['identityURL'], 'String');
            }
            if (data.hasOwnProperty('maxSignatures')) {
                obj['maxSignatures'] = ApiClient.convertToType(data['maxSignatures'], 'Number');
            }
            if (data.hasOwnProperty('authorizedSignees')) {
                obj['authorizedSignees'] = ApiClient.convertToType(data['authorizedSignees'], [AuthorizedSignee]);
            }
            if (data.hasOwnProperty('anchors')) {
                obj['anchors'] = ApiClient.convertToType(data['anchors'], [Anchor]);
            }
        }
        return obj;
    }


}

/**
 * Signature request identifier. It is allocated by the platform, and so must not be provided at creation time. 
 * @member {String} id
 */
SignatureRequest.prototype['id'] = undefined;

/**
 * Date of creation (in milliseconds since Unix epoch). 
 * @member {Number} created
 */
SignatureRequest.prototype['created'] = undefined;

/**
 * Date of last modification (in milliseconds since Unix epoch). 
 * @member {Number} lastModified
 */
SignatureRequest.prototype['lastModified'] = undefined;

/**
 * Name of the signature request (doesn't need to be unique). 
 * @member {String} name
 */
SignatureRequest.prototype['name'] = undefined;

/**
 * `true` (or unset) if the signature anchors created in the scope of this signature request must be public (ie. discoverable by their `signedHash`).<br> `false` if they must be private (ie. not dicoverable).<br> **If this field is not set at creation time, all anchors created will be  public by default.** 
 * @member {Boolean} public
 */
SignatureRequest.prototype['public'] = undefined;

/**
 * `true` if the signature request is suspended, or `false` (or unset) if not.<br> When suspended, no signature can be registered. 
 * @member {Boolean} suspended
 */
SignatureRequest.prototype['suspended'] = undefined;

/**
 * SHA256 hash (ie. the fingerprint) of the original data to sign. The value must be provided as an hexadecimal lowercase string. 
 * @member {String} hashToSign
 */
SignatureRequest.prototype['hashToSign'] = undefined;

/**
 * Deadline of the signature request (in milliseconds since Unix epoch).<br> When not set, null or 0, no deadline is applied.<br> If set, signatures registered after the deadline are refused. 
 * @member {Number} deadline
 */
SignatureRequest.prototype['deadline'] = undefined;

/**
 * Web hook to use to verify the signee's identity.<br> If set, it is used to verify the identity of signees at signature registration time. 
 * @member {String} identityURL
 */
SignatureRequest.prototype['identityURL'] = undefined;

/**
 * Maximum number of signatures to accept for this signature request.<br> When not set, null or 0, no maximum is applied.<br> This property and the `authorizedSignees` property are mutually exclusive.<br> **This property is only available to the owner of the signature request.** 
 * @member {Number} maxSignatures
 */
SignatureRequest.prototype['maxSignatures'] = undefined;

/**
 * List of all signees authorized to register their signature for this signature request (no duplicate is authorized).<br> When not set or null, anybody can sign the signature request.<br> If set, signatures registered by signees not in this list are rejected.<br> This property and the `maxSignatures` property are mutually exclusive.<br> **This property is only available to the owner of the signature request.** 
 * @member {Array.<module:model/AuthorizedSignee>} authorizedSignees
 */
SignatureRequest.prototype['authorizedSignees'] = undefined;

/**
 * List of signature anchors created in the scope of this signature request<br> A signature anchor is created each time a new signature is registered.<br> **This property is only available to the owner of the signature request.** 
 * @member {Array.<module:model/Anchor>} anchors
 */
SignatureRequest.prototype['anchors'] = undefined;






export default SignatureRequest;

