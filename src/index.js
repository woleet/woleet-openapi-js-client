/**
 * Woleet API
 * # Basics The Woleet API is an **HTTP REST API**: it has predictable, resource-oriented URLs and uses HTTP response codes to indicate API errors. It uses built-in HTTP features, like **Basic authentication** and HTTP verbs, for an easy integration with off-the-shelf HTTP clients. It supports **CORS** and provides **JWT authentication** allowing an easy and secure interaction with both web clients and backend applications.  The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.  The API base URL is **https://api.woleet.io/v1**. # Authentication The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.  The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using basic authentication) and then pass this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme. # Purpose The Woleet API provides an easy way to create **timestamped proofs of existence** for your files. Proofs created are **stored in the Bitcoin blockchain** and so are public, durable and unfalsifiable. The Woleet API provides you with an easy and cheap way to proove that your files existed in a given state at a given date.  The Woleet API creates proofs of existence conform to the open source standard [ChainPoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, and will stay **valid forever** even if Woleet stops it operations. # Creating proofs of existence To create a proof of existence for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you simply need to compute the file's SHA256 hash and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or the type of the file.  Newly created anchors are automatically collected by the platform and recorded in the Bitcoin blockchain: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate an URL to the anchor that the platform will call whenever the anchor's status change.  Once an anchor is recorded in the Bitcoin blockchain, you can retreive its associated **proof receipt** using the Wollet API. Proof receipts **conform to the [ChainPoint](https://www.chainpoint.org/) standard receipt format**. The proof receipt is the only piece of data required to prove the existence of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt whenever you want to verify a file. # Verifying files using proofs of existence Verifying a file is straighforward using the Woleet API: the API takes care of verifying that the proof receipt is valid and correctly recorded in a Bitcoin transaction, so you just have to check that the file's SHA256 hash match the one recorded in the proof receipt.  The Woleet API can also be used to verify any ChainPoint standard receipts, including the ones created by other providers.  Woleet also provides some sample open source code for various languages implementing the full verification process without the help of the Woleet API. # About public and private anchors An anchor can be public (which is the default) or private.  A private anchor is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the anchored data to anyone wanting to verify the data timestamp.  A public anchor is discoverable by anyone knowing the hash of the anchored data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to verify the timestamp of the anchored data using only the data hash as input: the proof receipt is no longer required, as it can be retreived from the anchor identifier and then verified. The process is the following: - use the `/anchorids` endpoint to retreive the anchor identifier by its hash - use the `receipt/{anchorid}` endpoint to retreive the proof receipt (which includes the anchor's metadata). - use the `receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the anchored data timestamp.  # About the verification process For your understanding, here is a description of the verification process: - compute the SHA256 hash of the file - check that the `target_hash` property of the receipt match the hash of the file - check that the `target_proof` property of the receipt is a valid Merkle proof (see the [ChainPoint](https://www.chainpoint.org/) standard for this step) - retreive the Bitcoin transaction matching the `tx_id` property of the receipt - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkle_root` property of the receipt 
 *
 * OpenAPI spec version: 1.0.1
 * Contact: contact@woleet.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Anchor', 'model/AnchorIds', 'model/Anchors', 'model/Receipt', 'model/ReceiptExtraNode', 'model/ReceiptHeader', 'model/ReceiptTarget', 'model/ReceiptTargetProofNode', 'model/ReceiptVerificationStatus', 'model/Token', 'api/AnchorApi', 'api/ReceiptApi', 'api/TokenApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Anchor'), require('./model/AnchorIds'), require('./model/Anchors'), require('./model/Receipt'), require('./model/ReceiptExtraNode'), require('./model/ReceiptHeader'), require('./model/ReceiptTarget'), require('./model/ReceiptTargetProofNode'), require('./model/ReceiptVerificationStatus'), require('./model/Token'), require('./api/AnchorApi'), require('./api/ReceiptApi'), require('./api/TokenApi'));
  }
}(function(ApiClient, Anchor, AnchorIds, Anchors, Receipt, ReceiptExtraNode, ReceiptHeader, ReceiptTarget, ReceiptTargetProofNode, ReceiptVerificationStatus, Token, AnchorApi, ReceiptApi, TokenApi) {
  'use strict';

  /**
   * _BasicsThe_Woleet_API_is_an_HTTP_REST_API_it_has_predictable_resource_oriented_URLs_and_uses_HTTP_response_codes_to_indicate_API_errors__It_uses_built_in_HTTP_features_like_Basic_authentication_and_HTTP_verbs_for_an_easy_integration_with_off_the_shelf_HTTP_clients__It_supports_CORS_and_provides_JWT_authentication_allowing_an_easy_and_secure_interaction_with_both_web_clients_and_backend_applications_The_Woleet_API_is_specified_following_the__SwaggerOpenAPI_httpsopenapis_org_standard__You_can_get_the_specification_file_at_httpsapi_woleet_ioswagger_yaml_and_generate_client_code_for_most_languages_using_the__Swagger_Editor_httpeditor_swagger_ioimporthttpsapi_woleet_iov1swagger_json_or__Swagger_Codegen_httpswagger_ioswagger_codegen_The_API_base_URL_is_httpsapi_woleet_iov1__AuthenticationThe_Woleet_API_provides__Basic_authentication_httpsen_wikipedia_orgwikiBasic_access_authentication_over_HTTPS_use_your_email_and_password_to_authenticate_The_Woleet_API_also_provides__JWT_authentication_httpsjwt_io_generate_a_JWT_token_by_doing_a_GET_call_on_the_token_endpoint__using_basic_authentication_and_then_pass_this_token_to_subsequent_API_calls_in_the_Authorization_header_using_the_Bearer_scheme__PurposeThe_Woleet_API_provides_an_easy_way_to_create_timestamped_proofs_of_existence_for_your_files__Proofs_created_are_stored_in_the_Bitcoin_blockchain_and_so_are_public_durable_and_unfalsifiable__The_Woleet_API_provides_you_with_an_easy_and_cheap_way_to_proove_that_your_files_existed_in_a_given_state_at_a_given_date_The_Woleet_API_creates_proofs_of_existence_conform_to_the_open_source_standard__ChainPoint_httpswww_chainpoint_org__Consequently_they_can_be_verified_using_any_tool_compatible_with_this_standard_and_will_stay_valid_forever_even_if_Woleet_stops_it_operations__Creating_proofs_of_existenceTo_create_a_proof_of_existence_for_a_file_you_need_to_create_what_we_call_an_anchor__An_anchor_is_basically_a_proof_of_existence_creation_request__To_do_so_you_simply_need_to_compute_the_files_SHA256_hash_and_choose_a_name_for_the_anchor__Since_the_platform_doesnt_need_the_actual_file_there_is_no_limitation_on_the_size_or_the_type_of_the_file_Newly_created_anchors_are_automatically_collected_by_the_platform_and_recorded_in_the_Bitcoin_blockchain_this_can_take_from_10_mn_to_a_few_hours_depending_on_the_load_the_the_Bitcoin_network_and_the_level_of_priority_of_your_user_account__To_check_the_state_of_your_anchors_you_can_pull_them_using_the_Woleet_API_or_you_can_associate_an_URL_to_the_anchor_that_the_platform_will_call_whenever_the_anchors_status_change_Once_an_anchor_is_recorded_in_the_Bitcoin_blockchain_you_can_retreive_its_associated_proof_receipt_using_the_Wollet_API__Proof_receipts_conform_to_the__ChainPoint_httpswww_chainpoint_org_standard_receipt_format__The_proof_receipt_is_the_only_piece_of_data_required_to_prove_the_existence_of_a_file_at_a_given_date__obviously_the_file_itself_is_also_required_since_it_is_not_included_in_the_proof_receipt__Thus_it_is_highly_recommended_you_keep_your_proof_receipts__and_your_files_in_your_own_data_store_so_that_you_dont_depend_on_the_Woleet_API_to_generate_the_proof_receipt_whenever_you_want_to_verify_a_file__Verifying_files_using_proofs_of_existenceVerifying_a_file_is_straighforward_using_the_Woleet_API_the_API_takes_care_of_verifying_that_the_proof_receipt_is_valid_and_correctly_recorded_in_a_Bitcoin_transaction_so_you_just_have_to_check_that_the_files_SHA256_hash_match_the_one_recorded_in_the_proof_receipt_The_Woleet_API_can_also_be_used_to_verify_any_ChainPoint_standard_receipts_including_the_ones_created_by_other_providers_Woleet_also_provides_some_sample_open_source_code_for_various_languages_implementing_the_full_verification_process_without_the_help_of_the_Woleet_API__About_public_and_private_anchorsAn_anchor_can_be_public__which_is_the_default_or_private_A_private_anchor_is_only_discoverable_by_its_owner__see_the_anchors_endpoint__Thus_the_owner_needs_to_provide_the_proof_receipt_and_the_anchored_data_to_anyone_wanting_to_verify_the_data_timestamp_A_public_anchor_is_discoverable_by_anyone_knowing_the_hash_of_the_anchored_data__including_people_with_no_Woleet_account_see_the_anchorids_endpoint__This_allows_anyone_to_verify_the_timestamp_of_the_anchored_data_using_only_the_data_hash_as_input_the_proof_receipt_is_no_longer_required_as_it_can_be_retreived_from_the_anchor_identifier_and_then_verified__The_process_is_the_following__use_the_anchorids_endpoint_to_retreive_the_anchor_identifier_by_its_hash__use_the_receiptanchorid_endpoint_to_retreive_the_proof_receipt__which_includes_the_anchors_metadata___use_the_receiptverify_endpoint__or_any_other_Chainpoint_compatible_tool_to_verify_the_proof_receipt_and_get_the_anchored_data_timestamp__About_the_verification_processFor_your_understanding_here_is_a_description_of_the_verification_process__compute_the_SHA256_hash_of_the_file__check_that_the_target_hash_property_of_the_receipt_match_the_hash_of_the_file__check_that_the_target_proof_property_of_the_receipt_is_a_valid_Merkle_proof__see_the__ChainPoint_httpswww_chainpoint_org_standard_for_this_step__retreive_the_Bitcoin_transaction_matching_the_tx_id_property_of_the_receipt__check_that_the_OP_RETURN_field_of_the_Bitcoin_transaction_matches_the_merkle_root_property_of_the_receipt.<br>
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
   * @version 1.0.1
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
     * The Receipt model constructor.
     * @property {module:model/Receipt}
     */
    Receipt: Receipt,
    /**
     * The ReceiptExtraNode model constructor.
     * @property {module:model/ReceiptExtraNode}
     */
    ReceiptExtraNode: ReceiptExtraNode,
    /**
     * The ReceiptHeader model constructor.
     * @property {module:model/ReceiptHeader}
     */
    ReceiptHeader: ReceiptHeader,
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
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token: Token,
    /**
     * The AnchorApi service constructor.
     * @property {module:api/AnchorApi}
     */
    AnchorApi: AnchorApi,
    /**
     * The ReceiptApi service constructor.
     * @property {module:api/ReceiptApi}
     */
    ReceiptApi: ReceiptApi,
    /**
     * The TokenApi service constructor.
     * @property {module:api/TokenApi}
     */
    TokenApi: TokenApi
  };

  return exports;
}));
