# WoleetApi.SignatureRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Signature request identifier. It is allocated by the platform, and so must not be provided at creation time.  | [optional] 
**created** | **Number** | Date of creation (in milliseconds since Unix epoch).  | [optional] 
**lastModified** | **Number** | Date of last modification (in milliseconds since Unix epoch).  | [optional] 
**name** | **String** | Name of the signature request (doesn&#39;t need to be unique).  | 
**_public** | **Boolean** | &#x60;true&#x60; (or unset) if the signature anchors created in the scope of this signature request must be public (ie. discoverable by their &#x60;signedHash&#x60;).&lt;br&gt; &#x60;false&#x60; if they must be private (ie. not dicoverable).&lt;br&gt; **If this field is not set at creation time, the anchor is public by default.**  | [optional] 
**suspended** | **Boolean** | &#x60;true&#x60; if the signature request is suspended, or &#x60;false&#x60; (or unset) if not.&lt;br&gt; When suspended, no more signature can be registered before the request is resumed.  | [optional] 
**hashToSign** | **String** | SHA256 hash (ie. the fingerprint) of the original data to sign. The value must be provided as an hexadecimal lowercase string.  | 
**anchors** | [**[Anchor]**](Anchor.md) | List of signature anchors created in teh scope of this signature request&lt;br&gt; A signature anchor is created each time a new signature is registered.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 
**deadline** | **Number** | Deadline of the signature request (in milliseconds since Unix epoch).&lt;br&gt; When not set, null or 0, no deadline is applied.&lt;br&gt; If set, signatures registered after the deadline are refused.  | [optional] 
**identityURL** | **String** | Web hook to use to verify the signee&#39;s identity.&lt;br&gt; If set, it is used to verify signees&#39; identity at signature registration time.  | [optional] 
**maxSignatures** | **Number** | Maximum number of signatures to accept for this signature request.&lt;br&gt; When not set, null or 0, no maximum is applied.&lt;br&gt; This property and the &#x60;authorizedSignees&#x60; property are mutually exclusive.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 
**authorizedSignees** | [**[AuthorizedSignee]**](AuthorizedSignee.md) | List of all signees authorized to register their signature for this signature request (no duplicate is authorized).&lt;br&gt; When not set or null, anybody can sign the signature request.&lt;br&gt; If set, signatures registered by signees not in this list are rejected.&lt;br&gt; This property and the &#x60;maxSignatures&#x60; property are mutually exclusive.&lt;br&gt; This property is only available to the owner of the signature request.  | [optional] 


