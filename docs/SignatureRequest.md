# WoleetApi.SignatureRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Signature request identifier. It is allocated by the platform, and so must not be provided at creation time.  | [optional] 
**created** | **Number** | Date of creation (in milliseconds since Unix epoch).  | [optional] 
**lastModified** | **Number** | Date of last modification (in milliseconds since Unix epoch).  | [optional] 
**name** | **String** | Name of the signature request (doesn&#39;t need to be unique).  | 
**suspended** | **Boolean** | &#x60;true&#x60; if the signature request is suspended, or &#x60;false&#x60; (or unset) if not.&lt;br&gt; When suspended, no more signature can be registered before the request is resumed.  | [optional] 
**hashToSign** | **String** | SHA256 hash (ie. the fingerprint) of the original data to sign.  | 
**anchors** | [**[Anchor]**](Anchor.md) | List of signature anchors created for this signature request.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 
**deadline** | **Number** | Deadline of the signature request (in milliseconds since Unix epoch).&lt;br&gt; When not set, null or 0, no deadline is applied.&lt;br&gt; If set, signatures registered after the deadline are refused.  | [optional] 
**maxSignatures** | **Number** | Maximum number of signatures to accept for this signature request.&lt;br&gt; When not set, null or 0, no maximum is applied.&lt;br&gt; If set, signatures coming from signees not in this list are refused.&lt;br&gt; This property and the &#x60;authorizedSignees&#x60; property are mutually exclusive.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 
**authorizedSignees** | [**[AuthorizedSignee]**](AuthorizedSignee.md) | List of public keys of all signees authorized to register their signature for this signature request (no duplicate is authorized).&lt;br&gt; **Currently only Bitcoin addresses are supported.**&lt;br&gt; When not set or null, anybody can sign the signature request.&lt;br&gt; If set, signatures from public keys not in this list are rejected.&lt;br&gt; This property and the &#x60;maxSignatures&#x60; property are mutually exclusive.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 


