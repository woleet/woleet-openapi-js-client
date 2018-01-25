/**
 * Woleet API
 * # Basics  The Woleet API is an **HTTP REST API**. It supports **CORS** and provides **Basic authentication** and **JWT authentication**, allowing an easy and secure interaction with both web clients and backend applications.   The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and, from it, **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.   Ready to use versions of the client code are provided as open source code for [JavaScript/NodeJS](https://github.com/woleet/woleet-openapi-js-client) and [Java](https://github.com/woleet/woleet-openapi-java-client).   The API base URL is **https://api.woleet.io/v1**.  # Authentication  The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.   The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using Basic authentication) and then provide this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme.  # Purpose  The Woleet API provides an easy and cheap way to create **timestamped proofs of existence** and **timestamped proofs of signature** for your data (which can be of any type). Proofs created are **stored in the Bitcoin blockchain** and so are independent from Woleet (an access to the Bitcoin blockchain and some client side open source code is enough to verify proofs). Using the Woleet API, you can create durable and unfalsifiable cryptographic proofs usable to prove your data existed in a given state at a given date, and optionally was signed by a given signee.   The Woleet API creates **proofs of existence** conform to the open source standard [Chainpoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, without any interaction with Woleet, and so remain **verifiable forever** even if Woleet stops its operations.   The Woleet API creates **proofs of signature** that are an extension of the same standard proposed by Woleet (we are actively involved in the standardization process). Thus, the existence and timestamp of a signature is verifiable using the same tools used to verify proofs of existence. When it comes to verifying the validity of the signature and the signee's identity, some additional processing is performed: since this processing can be fully performed client side with no additional data, proofs of signature remain **verifiable forever** even if Woleet stops its operations.  # Creating proofs  To create a **proof of existence** for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you only need to compute the SHA256 hash of the file client side and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or on the type of the file, and the file is not even leaked to Woleet.   To create a **proof of signature** for a file, you also need to create an anchor, and so to compute the SHA256 hash of the file and choose a name for the anchor, but some additional data is required: your public key (the one associated with the private key used to sign the SHA256 hash of the file) and your signature itself. Optionally, you can provide a URL allowing to verify your identity by ensuring you own the public key and the TLS certificate of the URL.   Newly created **anchors are automatically collected** by the platform and **recorded in the Bitcoin blockchain**: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate a URL to an anchor that the platform will call whenever the anchor status changes.   Once an anchor is recorded in the Bitcoin blockchain, you can retrieve its associated **proof receipt** using the Woleet API. Proof receipts **conform to the [Chainpoint 1 or 2](https://www.chainpoint.org/) proof receipt format** (with some Woleet extensions when it comes to proofs of signature). The proof receipt is the only piece of data required to prove the existence/signature of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt on-demand whenever you want to verify a file.  # Verifying proofs  Verifying a **proof of existence** using the Woleet API is straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, so you just need to check that the SHA256 hash of the file matches the proof receipt's `hash` property.   Verifying a **proof of signature** using the Woleet API is also straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, then verifies the signature, and optionally verifies that the signee owns the public key and the TLS certificate, so you just need to check that the SHA256 hash of the file matches the proof receipt's `signedHash` property.   The Woleet API can also be used to verify any Chainpoint 1 or 2 proof receipt, including those created by other providers.   Woleet also provides an open source [JavaScript library for web clients](https://github.com/woleet/woleet-weblibs) implementing the full verification process without the help of the Woleet API.  # About public and private anchors  An anchor can be public (which is the default) or private.   A **private anchor** is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the data to anyone wanting to verify the proof.   A **public anchor** is discoverable by anyone knowing the hash of the data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to retrieve the proof receipt using only the data hash as input, and then to verify it using the Woleet API or any other mean:  - use the `/anchorids` endpoint to retrieve the anchor identifier by its hash  - use the `/receipt/{anchorid}` endpoint to retrieve the proof receipt.  - use the `/receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the data or signature timestamp.  # About the verification process  For your understanding, here is a formal description of the verification process of a **proof of existence**:  - compute the SHA256 hash of the file  - check that the `targetHash` property of the proof receipt matches the hash of the file  - check that the `proof` property of the proof receipt is a valid Merkle proof (see the [Chainpoint](https://www.chainpoint.org/) standard for this step)  - retrieve the Bitcoin transaction from the `anchors` property of the proof receipt  - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkleRoot` property of the proof receipt   For **proof of signature**, an additional verification process is performed:  - check that the SHA256 hash of the `signature` property matches its `targetHash` property  - check that the `signature` property is a valid signature of the `signedHash` property for the public key stored in the `pubKey` property  - additionally, if an `identityURL` property is available:   - call `identityURL` to make the callee sign some random data using the public key `pubKey`    - check that the returned signature is valid    - get the TLS certificates of the URL (it must be an HTTPS URL) to get insight about the signee's identity  # Using domains  If you want to use the Woleet API for a given domain (eg. the \"acme\" domain, that would be accessible at **https://`acme`.woleet.io/_**) you still have to use the base URL **https://api.woleet.io/v1**, but you need to specify the domain to use by adding a `Domain` header to your calls. Obviously, you need to authenticate using the credentials of one of the domain's users. 
 *
 * OpenAPI spec version: 1.5.0
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Anchor', 'model/AnchorIds', 'model/Anchors', 'model/AuthorizedSignee', 'model/Credits', 'model/IdentityVerificationStatus', 'model/Receipt', 'model/ReceiptAnchorsNode', 'model/ReceiptHeader', 'model/ReceiptProofNode', 'model/ReceiptSignature', 'model/ReceiptTarget', 'model/ReceiptTargetProofNode', 'model/ReceiptVerificationStatus', 'model/SignatureRequest', 'model/SignatureRequestSign', 'model/SignatureRequestSignResult', 'model/SignatureRequests', 'model/Token', 'model/User', 'model/Users', 'model/X500Name', 'model/X509SubjectIssuer', 'api/AnchorApi', 'api/DomainApi', 'api/ReceiptApi', 'api/SignatureRequestApi', 'api/TokenApi', 'api/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Anchor'), require('./model/AnchorIds'), require('./model/Anchors'), require('./model/AuthorizedSignee'), require('./model/Credits'), require('./model/IdentityVerificationStatus'), require('./model/Receipt'), require('./model/ReceiptAnchorsNode'), require('./model/ReceiptHeader'), require('./model/ReceiptProofNode'), require('./model/ReceiptSignature'), require('./model/ReceiptTarget'), require('./model/ReceiptTargetProofNode'), require('./model/ReceiptVerificationStatus'), require('./model/SignatureRequest'), require('./model/SignatureRequestSign'), require('./model/SignatureRequestSignResult'), require('./model/SignatureRequests'), require('./model/Token'), require('./model/User'), require('./model/Users'), require('./model/X500Name'), require('./model/X509SubjectIssuer'), require('./api/AnchorApi'), require('./api/DomainApi'), require('./api/ReceiptApi'), require('./api/SignatureRequestApi'), require('./api/TokenApi'), require('./api/UserApi'));
  }
}(function(ApiClient, Anchor, AnchorIds, Anchors, AuthorizedSignee, Credits, IdentityVerificationStatus, Receipt, ReceiptAnchorsNode, ReceiptHeader, ReceiptProofNode, ReceiptSignature, ReceiptTarget, ReceiptTargetProofNode, ReceiptVerificationStatus, SignatureRequest, SignatureRequestSign, SignatureRequestSignResult, SignatureRequests, Token, User, Users, X500Name, X509SubjectIssuer, AnchorApi, DomainApi, ReceiptApi, SignatureRequestApi, TokenApi, UserApi) {
  'use strict';

  /**
   * _BasicsThe_Woleet_API_is_an_HTTP_REST_API__It_supports_CORS_and_provides_Basic_authentication_and_JWT_authentication_allowing_an_easy_and_secure_interaction_with_both_web_clients_and_backend_applications_The_Woleet_API_is_specified_following_the__SwaggerOpenAPI_httpsopenapis_org_standard__You_can_get_the_specification_file_at_httpsapi_woleet_ioswagger_yaml_and_from_it_generate_client_code_for_most_languages_using_the__Swagger_Editor_httpeditor_swagger_ioimporthttpsapi_woleet_iov1swagger_json_or__Swagger_Codegen_httpswagger_ioswagger_codegen_Ready_to_use_versions_of_the_client_code_are_provided_as_open_source_code_for__JavaScriptNodeJS_httpsgithub_comwoleetwoleet_openapi_js_client_and__Java_httpsgithub_comwoleetwoleet_openapi_java_client_The_API_base_URL_is_httpsapi_woleet_iov1__AuthenticationThe_Woleet_API_provides__Basic_authentication_httpsen_wikipedia_orgwikiBasic_access_authentication_over_HTTPS_use_your_email_and_password_to_authenticate_The_Woleet_API_also_provides__JWT_authentication_httpsjwt_io_generate_a_JWT_token_by_doing_a_GET_call_on_the_token_endpoint__using_Basic_authentication_and_then_provide_this_token_to_subsequent_API_calls_in_the_Authorization_header_using_the_Bearer_scheme__PurposeThe_Woleet_API_provides_an_easy_and_cheap_way_to_create_timestamped_proofs_of_existence_and_timestamped_proofs_of_signature_for_your_data__which_can_be_of_any_type__Proofs_created_are_stored_in_the_Bitcoin_blockchain_and_so_are_independent_from_Woleet__an_access_to_the_Bitcoin_blockchain_and_some_client_side_open_source_code_is_enough_to_verify_proofs__Using_the_Woleet_API_you_can_create_durable_and_unfalsifiable_cryptographic_proofs_usable_to_prove_your_data_existed_in_a_given_state_at_a_given_date_and_optionally_was_signed_by_a_given_signee_The_Woleet_API_creates_proofs_of_existence_conform_to_the_open_source_standard__Chainpoint_httpswww_chainpoint_org__Consequently_they_can_be_verified_using_any_tool_compatible_with_this_standard_without_any_interaction_with_Woleet_and_so_remain_verifiable_forever_even_if_Woleet_stops_its_operations_The_Woleet_API_creates_proofs_of_signature_that_are_an_extension_of_the_same_standard_proposed_by_Woleet__we_are_actively_involved_in_the_standardization_process__Thus_the_existence_and_timestamp_of_a_signature_is_verifiable_using_the_same_tools_used_to_verify_proofs_of_existence__When_it_comes_to_verifying_the_validity_of_the_signature_and_the_signees_identity_some_additional_processing_is_performed_since_this_processing_can_be_fully_performed_client_side_with_no_additional_data_proofs_of_signature_remain_verifiable_forever_even_if_Woleet_stops_its_operations__Creating_proofsTo_create_a_proof_of_existence_for_a_file_you_need_to_create_what_we_call_an_anchor__An_anchor_is_basically_a_proof_of_existence_creation_request__To_do_so_you_only_need_to_compute_the_SHA256_hash_of_the_file_client_side_and_choose_a_name_for_the_anchor__Since_the_platform_doesnt_need_the_actual_file_there_is_no_limitation_on_the_size_or_on_the_type_of_the_file_and_the_file_is_not_even_leaked_to_Woleet_To_create_a_proof_of_signature_for_a_file_you_also_need_to_create_an_anchor_and_so_to_compute_the_SHA256_hash_of_the_file_and_choose_a_name_for_the_anchor_but_some_additional_data_is_required_your_public_key__the_one_associated_with_the_private_key_used_to_sign_the_SHA256_hash_of_the_file_and_your_signature_itself__Optionally_you_can_provide_a_URL_allowing_to_verify_your_identity_by_ensuring_you_own_the_public_key_and_the_TLS_certificate_of_the_URL_Newly_created_anchors_are_automatically_collected_by_the_platform_and_recorded_in_the_Bitcoin_blockchain_this_can_take_from_10_mn_to_a_few_hours_depending_on_the_load_the_the_Bitcoin_network_and_the_level_of_priority_of_your_user_account__To_check_the_state_of_your_anchors_you_can_pull_them_using_the_Woleet_API_or_you_can_associate_a_URL_to_an_anchor_that_the_platform_will_call_whenever_the_anchor_status_changes_Once_an_anchor_is_recorded_in_the_Bitcoin_blockchain_you_can_retrieve_its_associated_proof_receipt_using_the_Woleet_API__Proof_receipts_conform_to_the__Chainpoint_1_or_2_httpswww_chainpoint_org_proof_receipt_format__with_some_Woleet_extensions_when_it_comes_to_proofs_of_signature__The_proof_receipt_is_the_only_piece_of_data_required_to_prove_the_existencesignature_of_a_file_at_a_given_date__obviously_the_file_itself_is_also_required_since_it_is_not_included_in_the_proof_receipt__Thus_it_is_highly_recommended_you_keep_your_proof_receipts__and_your_files_in_your_own_data_store_so_that_you_dont_depend_on_the_Woleet_API_to_generate_the_proof_receipt_on_demand_whenever_you_want_to_verify_a_file__Verifying_proofsVerifying_a_proof_of_existence_using_the_Woleet_API_is_straightforward_the_API_takes_care_of_verifying_that_the_proof_receipt_is_valid_and_correctly_anchored_in_a_Bitcoin_transaction_so_you_just_need_to_check_that_the_SHA256_hash_of_the_file_matches_the_proof_receipts_hash_property_Verifying_a_proof_of_signature_using_the_Woleet_API_is_also_straightforward_the_API_takes_care_of_verifying_that_the_proof_receipt_is_valid_and_correctly_anchored_in_a_Bitcoin_transaction_then_verifies_the_signature_and_optionally_verifies_that_the_signee_owns_the_public_key_and_the_TLS_certificate_so_you_just_need_to_check_that_the_SHA256_hash_of_the_file_matches_the_proof_receipts_signedHash_property_The_Woleet_API_can_also_be_used_to_verify_any_Chainpoint_1_or_2_proof_receipt_including_those_created_by_other_providers_Woleet_also_provides_an_open_source__JavaScript_library_for_web_clients_httpsgithub_comwoleetwoleet_weblibs_implementing_the_full_verification_process_without_the_help_of_the_Woleet_API__About_public_and_private_anchorsAn_anchor_can_be_public__which_is_the_default_or_private_A_private_anchor_is_only_discoverable_by_its_owner__see_the_anchors_endpoint__Thus_the_owner_needs_to_provide_the_proof_receipt_and_the_data_to_anyone_wanting_to_verify_the_proof_A_public_anchor_is_discoverable_by_anyone_knowing_the_hash_of_the_data__including_people_with_no_Woleet_account_see_the_anchorids_endpoint__This_allows_anyone_to_retrieve_the_proof_receipt_using_only_the_data_hash_as_input_and_then_to_verify_it_using_the_Woleet_API_or_any_other_mean__use_the_anchorids_endpoint_to_retrieve_the_anchor_identifier_by_its_hash__use_the_receiptanchorid_endpoint_to_retrieve_the_proof_receipt___use_the_receiptverify_endpoint__or_any_other_Chainpoint_compatible_tool_to_verify_the_proof_receipt_and_get_the_data_or_signature_timestamp__About_the_verification_processFor_your_understanding_here_is_a_formal_description_of_the_verification_process_of_a_proof_of_existence__compute_the_SHA256_hash_of_the_file__check_that_the_targetHash_property_of_the_proof_receipt_matches_the_hash_of_the_file__check_that_the_proof_property_of_the_proof_receipt_is_a_valid_Merkle_proof__see_the__Chainpoint_httpswww_chainpoint_org_standard_for_this_step__retrieve_the_Bitcoin_transaction_from_the_anchors_property_of_the_proof_receipt__check_that_the_OP_RETURN_field_of_the_Bitcoin_transaction_matches_the_merkleRoot_property_of_the_proof_receiptFor_proof_of_signature_an_additional_verification_process_is_performed__check_that_the_SHA256_hash_of_the_signature_property_matches_its_targetHash_property__check_that_the_signature_property_is_a_valid_signature_of_the_signedHash_property_for_the_public_key_stored_in_the_pubKey_property__additionally_if_an_identityURL_property_is_available____call_identityURL_to_make_the_callee_sign_some_random_data_using_the_public_key_pubKey____check_that_the_returned_signature_is_valid____get_the_TLS_certificates_of_the_URL__it_must_be_an_HTTPS_URL_to_get_insight_about_the_signees_identity_Using_domainsIf_you_want_to_use_the_Woleet_API_for_a_given_domain__eg__the_acme_domain_that_would_be_accessible_at_httpsacme_woleet_io_you_still_have_to_use_the_base_URL_httpsapi_woleet_iov1_but_you_need_to_specify_the_domain_to_use_by_adding_a_Domain_header_to_your_calls__Obviously_you_need_to_authenticate_using_the_credentials_of_one_of_the_domains_users_.<br>
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
   * @version 1.5.0
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
     * The Credits model constructor.
     * @property {module:model/Credits}
     */
    Credits: Credits,
    /**
     * The IdentityVerificationStatus model constructor.
     * @property {module:model/IdentityVerificationStatus}
     */
    IdentityVerificationStatus: IdentityVerificationStatus,
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
