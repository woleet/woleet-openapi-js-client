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
import Anchor from './Anchor';
import AuthorizedSignee from './AuthorizedSignee';
import SignatureRequestState from './SignatureRequestState';
import Watcher from './Watcher';

/**
 * The SignatureRequest model module.
 * @module model/SignatureRequest
 * @version 1.11.1
 */
class SignatureRequest {
    /**
     * Constructs a new <code>SignatureRequest</code>.
     * @alias module:model/SignatureRequest
     * @param name {String} Name of the signature request (doesn't need to be unique).
     * @param hashToSign {String} SHA256 hash of the file to sign.<br> The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.<br> 
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
            if (data.hasOwnProperty('state')) {
                obj['state'] = SignatureRequestState.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('callbackURL')) {
                obj['callbackURL'] = ApiClient.convertToType(data['callbackURL'], 'String');
            }
            if (data.hasOwnProperty('vars')) {
                obj['vars'] = ApiClient.convertToType(data['vars'], Object);
            }
            if (data.hasOwnProperty('baseVarsKey')) {
                obj['baseVarsKey'] = ApiClient.convertToType(data['baseVarsKey'], 'String');
            }
            if (data.hasOwnProperty('lang')) {
                obj['lang'] = ApiClient.convertToType(data['lang'], 'String');
            }
            if (data.hasOwnProperty('public')) {
                obj['public'] = ApiClient.convertToType(data['public'], 'Boolean');
            }
            if (data.hasOwnProperty('hashToSign')) {
                obj['hashToSign'] = ApiClient.convertToType(data['hashToSign'], 'String');
            }
            if (data.hasOwnProperty('activation')) {
                obj['activation'] = ApiClient.convertToType(data['activation'], 'Number');
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Number');
            }
            if (data.hasOwnProperty('identityURL')) {
                obj['identityURL'] = ApiClient.convertToType(data['identityURL'], 'String');
            }
            if (data.hasOwnProperty('fileName')) {
                obj['fileName'] = ApiClient.convertToType(data['fileName'], 'String');
            }
            if (data.hasOwnProperty('fileURL')) {
                obj['fileURL'] = ApiClient.convertToType(data['fileURL'], 'String');
            }
            if (data.hasOwnProperty('maxSignatures')) {
                obj['maxSignatures'] = ApiClient.convertToType(data['maxSignatures'], 'Number');
            }
            if (data.hasOwnProperty('authorizedSignees')) {
                obj['authorizedSignees'] = ApiClient.convertToType(data['authorizedSignees'], [AuthorizedSignee]);
            }
            if (data.hasOwnProperty('watchers')) {
                obj['watchers'] = ApiClient.convertToType(data['watchers'], [Watcher]);
            }
            if (data.hasOwnProperty('ordered')) {
                obj['ordered'] = ApiClient.convertToType(data['ordered'], 'Boolean');
            }
            if (data.hasOwnProperty('anchors')) {
                obj['anchors'] = ApiClient.convertToType(data['anchors'], [Anchor]);
            }
            if (data.hasOwnProperty('auditTrailData')) {
                obj['auditTrailData'] = ApiClient.convertToType(data['auditTrailData'], 'String');
            }
            if (data.hasOwnProperty('auditTrailAnchorId')) {
                obj['auditTrailAnchorId'] = ApiClient.convertToType(data['auditTrailAnchorId'], 'String');
            }
            if (data.hasOwnProperty('proofBundleComplete')) {
                obj['proofBundleComplete'] = ApiClient.convertToType(data['proofBundleComplete'], 'Boolean');
            }
            if (data.hasOwnProperty('testMode')) {
                obj['testMode'] = ApiClient.convertToType(data['testMode'], 'Boolean');
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
 * @member {module:model/SignatureRequestState} state
 */
SignatureRequest.prototype['state'] = undefined;

/**
 * Web hook to be called by the platform whenever:<br> - the `state` property changes<br> - a new signature is registered<br> - the `proofBundleComplete` property is set to `true` by the platform (which means that the proof bundle and the Signature Attestation document are ready to download)<br> The platform does a POST request on this URL with the signature request as a JSON object in the request body.<br> Verifying the authenticity of the callback can be done by checking the HMAC-SHA1 signature of the request body provided by the platform in the `x-woleet-signature` header.<br> Please refer to the <a target=\"_blank\" href=\"https://doc.woleet.io/reference/using-callbacks\">documentation</a> for more details. 
 * @member {String} callbackURL
 */
SignatureRequest.prototype['callbackURL'] = undefined;

/**
 * The set of variables (key/value pairs) to use to customize the signature request workflow.<br> Values must be of type null, boolean, string or number: nested JSON objects are not allowed.<br> In particular, these variables can be used to customize the various email sent and disable some of these emails.<br> Please refer to the <a target=\"_blank\" href=\"https://doc.woleet.io/reference/custom-signature-workflow\">documentation</a> for more details.<br> **This property is only available to the owner and the signers of the signature request.** 
 * @member {Object} vars
 */
SignatureRequest.prototype['vars'] = undefined;

/**
 * The key of an object in the user's k/v store to use as the base value of the `vars` property.<br> Properties defined in this object are overwritten by those defined in the `vars` property.<br> **Use this property to store large customization variables shared by multiple signature requests (like email tempates).** 
 * @member {String} baseVarsKey
 */
SignatureRequest.prototype['baseVarsKey'] = undefined;

/**
 * The preferred language (provided as an ISO 639-1 string) to use when emailing the signers.
 * @member {String} lang
 */
SignatureRequest.prototype['lang'] = undefined;

/**
 * `true` (or unset) if the signature request is public (ie. discoverable by its `hashToSign`) or `false` if it must be private (ie. not discoverable).<br> **Signature anchors created in the scope of a signature request inherit from its `public` property.** 
 * @member {Boolean} public
 */
SignatureRequest.prototype['public'] = undefined;

/**
 * SHA256 hash of the file to sign.<br> The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.<br> 
 * @member {String} hashToSign
 */
SignatureRequest.prototype['hashToSign'] = undefined;

/**
 * Date of activation of the signature request (in milliseconds since Unix epoch).<br> When set, the platform waits for it before transitioning the signature request from PENDING to IN_PROGRESS automatically.<br> When not set, the platform transitions the signature request to IN_PROGRESS as soon as the signature request is transitioned to PENDING.<br> **Only stateful signature request can have an activation date.** 
 * @member {Number} activation
 */
SignatureRequest.prototype['activation'] = undefined;

/**
 * Deadline of the signature request (in milliseconds since Unix epoch).<br> When not set or null, no deadline is applied.<br> If set, signatures registered after the deadline are refused. 
 * @member {Number} deadline
 */
SignatureRequest.prototype['deadline'] = undefined;

/**
 * Web hook to use to verify the signers' identity.<br> If set, it is used to verify the identity of the signers at signature registration time. 
 * @member {String} identityURL
 */
SignatureRequest.prototype['identityURL'] = undefined;

/**
 * Name of the file to sign.<br> If set, the signature application can use it to give an indication about the file to the signers. 
 * @member {String} fileName
 */
SignatureRequest.prototype['fileName'] = undefined;

/**
 * Public URL of the file to sign.<br> If set, the signature application can use it to download and present the file to the signers. 
 * @member {String} fileURL
 */
SignatureRequest.prototype['fileURL'] = undefined;

/**
 * Maximum number of signatures to accept for this signature request.<br> When not set or null, no maximum is applied.<br> This property and the `authorizedSignees` property are mutually exclusive.<br> **This property is only available to the owner of the signature request.** 
 * @member {Number} maxSignatures
 */
SignatureRequest.prototype['maxSignatures'] = undefined;

/**
 * List of all signers authorized to register their signature (no duplicate is authorized).<br> When not set or null, anybody can sign the signature request.<br> If set, signers not being part of this list are not allowed to register their signature.<br> This property and the `maxSignatures` property are mutually exclusive. 
 * @member {Array.<module:model/AuthorizedSignee>} authorizedSignees
 */
SignatureRequest.prototype['authorizedSignees'] = undefined;

/**
 * List of all watchers to notify by email about the progress of the signature request.<br> The set of events being notified are:<br> - the signature request is activated<br> - a signer signs the signature request<br> - the signature request is canceled<br> - the signature request is closed or completed and the Signature Attestation document is ready **This property is only available to the owner of the signature request.** 
 * @member {Array.<module:model/Watcher>} watchers
 */
SignatureRequest.prototype['watchers'] = undefined;

/**
 * `true` if the signers must sign in their order of appearance in the `authorizedSignees` list.<br> In this mode, each signer is notified only once the previous signer completes his signature.<br> **Only stateful signature request can be ordered.** 
 * @member {Boolean} ordered
 */
SignatureRequest.prototype['ordered'] = undefined;

/**
 * List of signature anchors created in the scope of this signature request<br> A signature anchor is created each time a new signature is registered. 
 * @member {Array.<module:model/Anchor>} anchors
 */
SignatureRequest.prototype['anchors'] = undefined;

/**
 * Audit trail data.<br> When the signature request is COMPLETED (by the platform) or CLOSED (by the requester) its audit trail (ie. the list of events recorded by the platform during the signature request workflow) is serialized to a JSON object and Base64 encoded. This data is then signed by the platform and recorded in this property. 
 * @member {String} auditTrailData
 */
SignatureRequest.prototype['auditTrailData'] = undefined;

/**
 * Identifier of the signature anchor created by the platform to sign the audit trail data.<br> This property is set only once the audit trail is generated and can be used to retrieve its proof receipt. 
 * @member {String} auditTrailAnchorId
 */
SignatureRequest.prototype['auditTrailAnchorId'] = undefined;

/**
 * `true` when all pieces of evidence are available.<br> The proof bundle and the Signature Attestation are ready to download. 
 * @member {Boolean} proofBundleComplete
 */
SignatureRequest.prototype['proofBundleComplete'] = undefined;

/**
 * **WARNING: Do not use (test purpose only).** 
 * @member {Boolean} testMode
 */
SignatureRequest.prototype['testMode'] = undefined;






export default SignatureRequest;

