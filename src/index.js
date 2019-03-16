/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Anchor', 'model/AnchorIds', 'model/Anchors', 'model/AuthorizedSignee', 'model/CallbackSecret', 'model/Credits', 'model/Identity', 'model/IdentityVerificationStatus', 'model/InlineObject', 'model/Receipt', 'model/ReceiptAnchorsNode', 'model/ReceiptHeader', 'model/ReceiptProofNode', 'model/ReceiptSignature', 'model/ReceiptTarget', 'model/ReceiptTargetProofNode', 'model/ReceiptVerificationStatus', 'model/SignatureRequest', 'model/SignatureRequestSign', 'model/SignatureRequestSignResult', 'model/SignatureRequests', 'model/Token', 'model/User', 'model/Users', 'model/X500Name', 'model/X509SubjectIssuer', 'api/AnchorApi', 'api/DomainApi', 'api/ReceiptApi', 'api/SignatureRequestApi', 'api/TokenApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Anchor'), require('./model/AnchorIds'), require('./model/Anchors'), require('./model/AuthorizedSignee'), require('./model/CallbackSecret'), require('./model/Credits'), require('./model/Identity'), require('./model/IdentityVerificationStatus'), require('./model/InlineObject'), require('./model/Receipt'), require('./model/ReceiptAnchorsNode'), require('./model/ReceiptHeader'), require('./model/ReceiptProofNode'), require('./model/ReceiptSignature'), require('./model/ReceiptTarget'), require('./model/ReceiptTargetProofNode'), require('./model/ReceiptVerificationStatus'), require('./model/SignatureRequest'), require('./model/SignatureRequestSign'), require('./model/SignatureRequestSignResult'), require('./model/SignatureRequests'), require('./model/Token'), require('./model/User'), require('./model/Users'), require('./model/X500Name'), require('./model/X509SubjectIssuer'), require('./api/AnchorApi'), require('./api/DomainApi'), require('./api/ReceiptApi'), require('./api/SignatureRequestApi'), require('./api/TokenApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Anchor, AnchorIds, Anchors, AuthorizedSignee, CallbackSecret, Credits, Identity, IdentityVerificationStatus, InlineObject, Receipt, ReceiptAnchorsNode, ReceiptHeader, ReceiptProofNode, ReceiptSignature, ReceiptTarget, ReceiptTargetProofNode, ReceiptVerificationStatus, SignatureRequest, SignatureRequestSign, SignatureRequestSignResult, SignatureRequests, Token, User, Users, X500Name, X509SubjectIssuer, AnchorApi, DomainApi, ReceiptApi, SignatureRequestApi, TokenApi, UserApi) {
  'use strict';

  /**
   * Welcome_to_Woleet_API_reference_documentation_brIt_is_highly_recommanded_to_read_the_chapters__introducing_Woleet_API_concepts_httpsdoc_woleet_ioreference_before_reading_this_documentation_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var WoleetApi = require('index'); // See note below*.
   * var xxxSvc = new WoleetApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new WoleetApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new WoleetApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new WoleetApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.6.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Anchor model constructor.
     * @property {module:model/Anchor}
     */
    Anchor: Anchor,
    /**
     * The AnchorIds model constructor.
     * @property {module:model/AnchorIds}
     */
    AnchorIds: AnchorIds,
    /**
     * The Anchors model constructor.
     * @property {module:model/Anchors}
     */
    Anchors: Anchors,
    /**
     * The AuthorizedSignee model constructor.
     * @property {module:model/AuthorizedSignee}
     */
    AuthorizedSignee: AuthorizedSignee,
    /**
     * The CallbackSecret model constructor.
     * @property {module:model/CallbackSecret}
     */
    CallbackSecret: CallbackSecret,
    /**
     * The Credits model constructor.
     * @property {module:model/Credits}
     */
    Credits: Credits,
    /**
     * The Identity model constructor.
     * @property {module:model/Identity}
     */
    Identity: Identity,
    /**
     * The IdentityVerificationStatus model constructor.
     * @property {module:model/IdentityVerificationStatus}
     */
    IdentityVerificationStatus: IdentityVerificationStatus,
    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject: InlineObject,
    /**
     * The Receipt model constructor.
     * @property {module:model/Receipt}
     */
    Receipt: Receipt,
    /**
     * The ReceiptAnchorsNode model constructor.
     * @property {module:model/ReceiptAnchorsNode}
     */
    ReceiptAnchorsNode: ReceiptAnchorsNode,
    /**
     * The ReceiptHeader model constructor.
     * @property {module:model/ReceiptHeader}
     */
    ReceiptHeader: ReceiptHeader,
    /**
     * The ReceiptProofNode model constructor.
     * @property {module:model/ReceiptProofNode}
     */
    ReceiptProofNode: ReceiptProofNode,
    /**
     * The ReceiptSignature model constructor.
     * @property {module:model/ReceiptSignature}
     */
    ReceiptSignature: ReceiptSignature,
    /**
     * The ReceiptTarget model constructor.
     * @property {module:model/ReceiptTarget}
     */
    ReceiptTarget: ReceiptTarget,
    /**
     * The ReceiptTargetProofNode model constructor.
     * @property {module:model/ReceiptTargetProofNode}
     */
    ReceiptTargetProofNode: ReceiptTargetProofNode,
    /**
     * The ReceiptVerificationStatus model constructor.
     * @property {module:model/ReceiptVerificationStatus}
     */
    ReceiptVerificationStatus: ReceiptVerificationStatus,
    /**
     * The SignatureRequest model constructor.
     * @property {module:model/SignatureRequest}
     */
    SignatureRequest: SignatureRequest,
    /**
     * The SignatureRequestSign model constructor.
     * @property {module:model/SignatureRequestSign}
     */
    SignatureRequestSign: SignatureRequestSign,
    /**
     * The SignatureRequestSignResult model constructor.
     * @property {module:model/SignatureRequestSignResult}
     */
    SignatureRequestSignResult: SignatureRequestSignResult,
    /**
     * The SignatureRequests model constructor.
     * @property {module:model/SignatureRequests}
     */
    SignatureRequests: SignatureRequests,
    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users: Users,
    /**
     * The X500Name model constructor.
     * @property {module:model/X500Name}
     */
    X500Name: X500Name,
    /**
     * The X509SubjectIssuer model constructor.
     * @property {module:model/X509SubjectIssuer}
     */
    X509SubjectIssuer: X509SubjectIssuer,
    /**
     * The AnchorApi service constructor.
     * @property {module:api/AnchorApi}
     */
    AnchorApi: AnchorApi,
    /**
     * The DomainApi service constructor.
     * @property {module:api/DomainApi}
     */
    DomainApi: DomainApi,
    /**
     * The ReceiptApi service constructor.
     * @property {module:api/ReceiptApi}
     */
    ReceiptApi: ReceiptApi,
    /**
     * The SignatureRequestApi service constructor.
     * @property {module:api/SignatureRequestApi}
     */
    SignatureRequestApi: SignatureRequestApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi,
    /**
     * The UserApi service constructor.
     * @property {module:api/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
