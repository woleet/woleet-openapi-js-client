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
 * The Anchor model module.
 * @module model/Anchor
 * @version 1.10.0
 */
class Anchor {
    /**
     * Constructs a new <code>Anchor</code>.
     * @alias module:model/Anchor
     * @param name {String} Name of the anchor (doesn't need to be unique).
     */
    constructor(name) { 
        
        Anchor.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Anchor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Anchor} obj Optional instance to populate.
     * @return {module:model/Anchor} The populated <code>Anchor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Anchor();

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
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('signedHash')) {
                obj['signedHash'] = ApiClient.convertToType(data['signedHash'], 'String');
            }
            if (data.hasOwnProperty('signedIdentity')) {
                obj['signedIdentity'] = ApiClient.convertToType(data['signedIdentity'], 'String');
            }
            if (data.hasOwnProperty('signedIssuerDomain')) {
                obj['signedIssuerDomain'] = ApiClient.convertToType(data['signedIssuerDomain'], 'String');
            }
            if (data.hasOwnProperty('pubKey')) {
                obj['pubKey'] = ApiClient.convertToType(data['pubKey'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('identityURL')) {
                obj['identityURL'] = ApiClient.convertToType(data['identityURL'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('notifyByEmail')) {
                obj['notifyByEmail'] = ApiClient.convertToType(data['notifyByEmail'], 'Boolean');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('callbackURL')) {
                obj['callbackURL'] = ApiClient.convertToType(data['callbackURL'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
            }
            if (data.hasOwnProperty('confirmations')) {
                obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
            }
            if (data.hasOwnProperty('txId')) {
                obj['txId'] = ApiClient.convertToType(data['txId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Anchor identifier. It is allocated by the platform, and so must not be provided at creation time.
 * @member {String} id
 */
Anchor.prototype['id'] = undefined;

/**
 * Date of creation (in milliseconds since Unix epoch).
 * @member {Number} created
 */
Anchor.prototype['created'] = undefined;

/**
 * Date of last modification (in milliseconds since Unix epoch).
 * @member {Number} lastModified
 */
Anchor.prototype['lastModified'] = undefined;

/**
 * Name of the anchor (doesn't need to be unique).
 * @member {String} name
 */
Anchor.prototype['name'] = undefined;

/**
 * SHA256 hash (ie. the fingerprint) of the data to anchor.<br> The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.<br> **This property must not be provided when creating a signature anchor: it is automatically set at creation time to the SHA256 hash of the `signature` property provided, meaning that the signature is the actual anchored data.** 
 * @member {String} hash
 */
Anchor.prototype['hash'] = undefined;

/**
 * SHA256 hash (ie. the fingerprint) of the signed data.<br> The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.<br> **This property must not be provided when creating a data anchor.** 
 * @member {String} signedHash
 */
Anchor.prototype['signedHash'] = undefined;

/**
 * X500 Distinguished Name representing the signed identity.<br> **This property must not be provided when creating a data anchor.** 
 * @member {String} signedIdentity
 */
Anchor.prototype['signedIdentity'] = undefined;

/**
 * Domain name of the identity issuer (ie. of the organization who verified the identity).<br> If set, the domain name of the identity URL must be included in the `signedIssuerDomain` domain name.<br> **This property must not be provided when creating a data anchor.** 
 * @member {String} signedIssuerDomain
 */
Anchor.prototype['signedIssuerDomain'] = undefined;

/**
 * Public key of the signer.<br> **Currently only Bitcoin addresses are supported.**<br> **This property must not be provided when creating a data anchor.** 
 * @member {String} pubKey
 */
Anchor.prototype['pubKey'] = undefined;

/**
 * Signature of the `signedHash` property using the public key `pubKey`, or, if any of the `signedIdentity` or `signedIssuerDomain` properties are provided, signature of SHA256(`signedHash` + `signedIdentity` + `signedIssuerDomain`) using the public key `pubKey`.<br> **Only Bitcoin signatures are currently supported.**<br> **This property must not be provided when creating a data anchor.** 
 * @member {String} signature
 */
Anchor.prototype['signature'] = undefined;

/**
 * Web hook of the identity server to use to verify the signer's identity.<br> This URL allows to retrieve the identity associated to the public key `pubKey`. It can also be used to verify that the identity server (itself identified by the TLS certificate of the URL) controls the key used to sign (ie. owns the private part of the key pair) by requesting it to sign some random data.<br> This URL MUST use an HTTPS scheme with a valid and non expired TLS certificate.<br> This URL MUST implement the following GET operation:<br> Query parameters:<br> - `pubKey`: the public key to be verified - mandatory<br> - `leftData`: the left part of the data to be signed (generated randomly by the caller) - if set, the identity server MAY provide a `signature`<br> Output:<br> A JSON object with: - `rightData`: the right part of the data signed (generated randomly by the identity server) - optional<br> - `signature`: the signature of the string `leftData` + `rightData` using the public key `pubKey` - optional<br> - `identity`: the X500 identity associated to the key claimed by the identity server - optional<br> - `key`: additional information about the key - optional<br> If `identity` is not provided, `signature` and `rightData` MUST be provided: in such a case the identity of the signer can be extracted from the TLS certificate. 
 * @member {String} identityURL
 */
Anchor.prototype['identityURL'] = undefined;

/**
 * `true` (or unset) if the anchor is public (ie. discoverable by its `hash` or `signedHash`) or `false` if it must be private (ie. not discoverable). 
 * @member {Boolean} public
 */
Anchor.prototype['public'] = undefined;

/**
 * `true` if the proof receipt must be sent by email once available, or `false` (or unset) if not. 
 * @member {Boolean} notifyByEmail
 */
Anchor.prototype['notifyByEmail'] = undefined;

/**
 * Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.<br> Tags are aimed at classifying and searching anchors. 
 * @member {Array.<String>} tags
 */
Anchor.prototype['tags'] = undefined;

/**
 * A set of variables (key/values pairs) to store with the anchor.<br> Values must be of type null, boolean, string or number: nested JSON objects are not allowed. 
 * @member {Object} metadata
 */
Anchor.prototype['metadata'] = undefined;

/**
 * Web hook to be called by the platform whenever the `status` property of the anchor changes:<br> the platform does a POST request on this URL with the anchor as a JSON object in the request body.<br> Verifying the authenticity of the callback can be done by checking the HMAC-SHA1 signature of the request body provided by the platform in the `x-woleet-signature` header.<br> Please refer to the <a target=\"_blank\" href=\"https://doc.woleet.io/reference#using-callbacks\">documentation</a> for more details. 
 * @member {String} callbackURL
 */
Anchor.prototype['callbackURL'] = undefined;

/**
 * Status of the anchor:<br> - WAIT: waiting to be processed by the platform (the proof receipt is not yet available for download)<br> - NEW: waiting to be sent to the blockchain (the proof receipt is not yet available for download)<br> - SENT: sent to the blockchain (the proof receipt is ready to download)<br> - CONFIRMED: confirmed at least 6 times by the blockchain (the proof receipt can be verified) 
 * @member {module:model/Anchor.StatusEnum} status
 */
Anchor.prototype['status'] = undefined;

/**
 * Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).<br> This is actually the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).<br> Any data whose SHA256 hash equals this anchor's hash is proven to exist at that time and has not been modified since.<br> This property is set when the first confirmation of the Bitcoin block occurs. Once set, the associated proof receipt can be verified (without having to wait for 6 confirmations). 
 * @member {Number} timestamp
 */
Anchor.prototype['timestamp'] = undefined;

/**
 * Number of confirmations of the Bitcoin block into which the anchoring process occurred.<br> This property is set when the first confirmation of the Bitcoin block occurs, and removed once the block is confirmed at least 6 times. 
 * @member {Number} confirmations
 */
Anchor.prototype['confirmations'] = undefined;

/**
 * Identifier of the Bitcoin transaction where the anchoring occurred.
 * @member {String} txId
 */
Anchor.prototype['txId'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Anchor['StatusEnum'] = {

    /**
     * value: "WAIT"
     * @const
     */
    "WAIT": "WAIT",

    /**
     * value: "NEW"
     * @const
     */
    "NEW": "NEW",

    /**
     * value: "SENT"
     * @const
     */
    "SENT": "SENT",

    /**
     * value: "CONFIRMED"
     * @const
     */
    "CONFIRMED": "CONFIRMED"
};



export default Anchor;

