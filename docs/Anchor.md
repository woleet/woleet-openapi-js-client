# WoleetApi.Anchor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Anchor identifier. It is allocated by the platform, and so must not be provided at creation time. | [optional] [readonly] 
**created** | **Number** | Date of creation (in milliseconds since Unix epoch). | [optional] [readonly] 
**lastModified** | **Number** | Date of last modification (in milliseconds since Unix epoch). | [optional] [readonly] 
**name** | **String** | Name of the anchor (doesn&#39;t need to be unique). | 
**hash** | **String** | SHA256 hash of the data to anchor.&lt;br&gt; The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.&lt;br&gt; **This property must not be provided when creating a signature anchor: it is automatically set at creation time to the SHA256 hash of the &#x60;signature&#x60; property provided, meaning that the signature is the actual anchored data.**  | [optional] 
**signedHash** | **String** | SHA256 hash of the signed data.&lt;br&gt; The value must be provided as an hexadecimal lowercase string. The hash of the empty file is forbidden.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signedIdentity** | **String** | X500 Distinguished Name representing the signed identity.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signedIssuerDomain** | **String** | Domain name of the identity server.&lt;br&gt; If set, the domain name of the identity URL must be included in the &#x60;signedIssuerDomain&#x60; domain name.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**pubKey** | **String** | Public key of the signer.&lt;br&gt; **Currently only Bitcoin addresses are supported.**&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signature** | **String** | Signature of the &#x60;signedHash&#x60; property using the public key &#x60;pubKey&#x60;, or, if any of the &#x60;signedIdentity&#x60; or &#x60;signedIssuerDomain&#x60; properties are provided, signature of SHA256(&#x60;signedHash&#x60; + &#x60;signedIdentity&#x60; + &#x60;signedIssuerDomain&#x60;) using the public key &#x60;pubKey&#x60;.&lt;br&gt; **Only Bitcoin signatures are currently supported.**&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**identityURL** | **String** | Web hook of the identity server to use to verify the signer&#39;s identity.&lt;br&gt; It is used to verify that the server knows the &#x60;pubKey&#x60; public key and to get or check the identity of the user owning that key.&lt;br&gt; For proofs of seal, it is also used to verify that the identity server (itself identified by the TLS certificate of the URL) controls the key used to sign (ie. owns the private part of the key pair) by requesting it to sign some random data.&lt;br&gt; Please refer to &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://app.swaggerhub.com/apis-docs/Woleet/WoleetIDServerAPI/#/Identity/getIdentity\&quot;&gt;Woleet.ID Server documentation&lt;/a&gt; for more details.  | [optional] 
**signatureRequestId** | **String** | If the anchor is a signature anchor, identifier of the signature request.  | [optional] [readonly] 
**_public** | **Boolean** | &#x60;true&#x60; (or unset) if the anchor is public (ie. discoverable by its &#x60;hash&#x60; or &#x60;signedHash&#x60;) or &#x60;false&#x60; if it must be private (ie. not discoverable).  | [optional] 
**notifyByEmail** | **Boolean** | &#x60;true&#x60; if the proof receipt must be sent by email once available, or &#x60;false&#x60; (or unset) if not.  | [optional] 
**tags** | **[String]** | Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.&lt;br&gt; Tags are aimed at classifying and searching anchors.  | [optional] 
**metadata** | **Object** | A set of variables (key/values pairs) to store with the anchor.&lt;br&gt; Values must be of type null, boolean, string or number: nested JSON objects are not allowed.  | [optional] 
**callbackURL** | **String** | Web hook to be called by the platform whenever the &#x60;status&#x60; property of the anchor changes.&lt;br&gt; The platform does a POST request on this URL with the anchor as a JSON object in the request body. The domain of the URL must resolve to an external IP address.&lt;br&gt; Verifying the authenticity of the callback can be done by checking the HMAC-SHA1 signature of the request body provided by the platform in the &#x60;x-woleet-signature&#x60; header.&lt;br&gt; Please refer to &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://doc.woleet.io/reference/using-callbacks\&quot;&gt;this documentation&lt;/a&gt; for more details.  | [optional] 
**status** | **String** | Status of the anchor: - WAIT: waiting to be processed by the platform (the proof receipt is not yet available for download) - NEW: waiting to be sent to the blockchain (the proof receipt is not yet available for download) - SENT: sent to the blockchain (the proof receipt is ready to download) - CONFIRMED: confirmed at least 6 times by the blockchain (the proof receipt can be verified)  | [optional] [readonly] 
**timestamp** | **Number** | Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).&lt;br&gt; This is the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).&lt;br&gt; Any data whose SHA256 hash equals this anchor&#39;s hash is proven to exist at that time and has not been modified since.&lt;br&gt; This property is set when the first confirmation of the Bitcoin block occurs. Once set, the associated proof receipt can be verified (without having to wait for 6 confirmations).  | [optional] [readonly] 
**confirmations** | **Number** | Number of confirmations of the Bitcoin block into which the anchoring process occurred.&lt;br&gt; This property is set when the first confirmation of the Bitcoin block occurs, and removed once the block is confirmed at least 6 times.  | [optional] [readonly] 
**txId** | **String** | Identifier of the Bitcoin transaction where the anchoring occurred. | [optional] [readonly] 



## Enum: StatusEnum


* `WAIT` (value: `"WAIT"`)

* `NEW` (value: `"NEW"`)

* `SENT` (value: `"SENT"`)

* `CONFIRMED` (value: `"CONFIRMED"`)




