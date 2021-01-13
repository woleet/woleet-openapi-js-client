# WoleetApi.Anchor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Anchor identifier. It is allocated by the platform, and so must not be provided at creation time. | [optional] [readonly] 
**created** | **Number** | Date of creation (in milliseconds since Unix epoch). | [optional] [readonly] 
**lastModified** | **Number** | Date of last modification (in milliseconds since Unix epoch). | [optional] [readonly] 
**name** | **String** | Name of the anchor (doesn&#39;t need to be unique). | 
**hash** | **String** | SHA256 hash (ie. the fingerprint) of the original data to anchor.&lt;br&gt; The value must be provided as an hexadecimal lowercase string.&lt;br&gt; **This property must not be provided when creating a signature anchor: it is set at creation time to the SHA256 hash of the &#x60;signature&#x60; property provided (so the signature is what is actually anchored in this case).**  | [optional] 
**signedHash** | **String** | SHA256 hash (ie. the fingerprint) of the original signed data.&lt;br&gt; The value must be provided as an hexadecimal lowercase string.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signedIdentity** | **String** | X500 Distinguished Name representing the signed identity.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signedIssuerDomain** | **String** | Domain name of the identity issuer (ie. of the organization who verified the identity).&lt;br&gt; If set, the domain name of the identity URL must be included in the &#x60;signedIssuerDomain&#x60; domain name.&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**pubKey** | **String** | Public key of the signer.&lt;br&gt; **Currently only Bitcoin addresses are supported.**&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**signature** | **String** | Signature of the &#x60;signedHash&#x60; property using the public key &#x60;pubKey&#x60;, or, if any of the &#x60;signedIdentity&#x60; or &#x60;signedIssuerDomain&#x60; properties are provided, signature of SHA256(&#x60;hashToSign&#x60; + &#x60;signedIdentity&#x60; + &#x60;signedIssuerDomain&#x60;) using the public key &#x60;pubKey&#x60;.&lt;br&gt; **Only Bitcoin signatures are currently supported.**&lt;br&gt; **This property must not be provided when creating a data anchor.**  | [optional] 
**identityURL** | **String** | Web hook of the identity server to use to verify the signer&#39;s identity.&lt;br&gt; This URL allows to retrieve the identity associated to the public key &#x60;pubKey&#x60;. It can also be used to verify that the identity server (itself identified by the TLS certificate of the URL) controls the key used to sign (ie. owns the private part of the key pair) by requesting it to sign some random data.&lt;br&gt; This URL MUST use an HTTPS scheme with a valid and non expired TLS certificate.&lt;br&gt; This URL MUST implement the following GET operation:&lt;br&gt; Query parameters:&lt;br&gt; - &#x60;pubKey&#x60;: the public key to be verified - mandatory&lt;br&gt; - &#x60;leftData&#x60;: the left part of the data to be signed (generated randomly by the caller) - if set, the identity server MAY provide a &#x60;signature&#x60;&lt;br&gt; Output:&lt;br&gt; A JSON object with: - &#x60;rightData&#x60;: the right part of the data signed (generated randomly by the identity server) - optional&lt;br&gt; - &#x60;signature&#x60;: the signature of the string &#x60;leftData&#x60; + &#x60;rightData&#x60; using the public key &#x60;pubKey&#x60; - optional&lt;br&gt; - &#x60;identity&#x60;: the X500 identity associated to the key claimed by the identity server - optional&lt;br&gt; - &#x60;key&#x60;: additional information about the key - optional&lt;br&gt; If &#x60;identity&#x60; is not provided, &#x60;signature&#x60; and &#x60;rightData&#x60; MUST be provided: in such a case the identity of the signer can be extracted from the TLS certificate.  | [optional] 
**_public** | **Boolean** | &#x60;true&#x60; (or unset) if the anchor is public (ie. discoverable by its &#x60;hash&#x60; or &#x60;signedHash&#x60;).&lt;br&gt; &#x60;false&#x60; if it must be private (ie. not discoverable).&lt;br&gt; **If this property is not set, the anchor is public by default.**  | [optional] 
**notifyByEmail** | **Boolean** | &#x60;true&#x60; if the proof receipt must be sent by email once available, or &#x60;false&#x60; (or unset) if not.  | [optional] 
**tags** | **[String]** | Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.&lt;br&gt; Tags are aimed at classifying and searching anchors.  | [optional] 
**metadata** | [**Object**](.md) | A set of variables (key/values pairs) to store with the anchor and giving additional information about the anchored data.&lt;br&gt; Values must be of type null, boolean, string or number: nested JSON objects are not allowed.  | [optional] 
**callbackURL** | **String** | Web hook to be called by the platform whenever the &#x60;status&#x60; property of the anchor changes:&lt;br&gt; the platform does a POST request on this URL with the anchor as a JSON object in the request body.&lt;br&gt; Verifying the authenticity of the callback can be done by checking the HMAC-SHA1 signature of the request body provided by the platform in the &#x60;x-woleet-signature&#x60; header.&lt;br&gt; Please refer to the &lt;a target&#x3D;\&quot;_blank\&quot; href&#x3D;\&quot;https://doc.woleet.io/reference#using-callbacks\&quot;&gt;documentation&lt;/a&gt; for more details.  | [optional] 
**status** | **String** | Status of the anchor:&lt;br&gt; - WAIT: waiting to be processed by the platform (the proof receipt is not yet available for download)&lt;br&gt; - NEW: waiting to be sent to the blockchain (the proof receipt is not yet available for download)&lt;br&gt; - SENT: sent to the blockchain (the proof receipt can be downloaded)&lt;br&gt; - CONFIRMED: confirmed at least 6 times by the blockchain (the proof receipt can be verified)  | [optional] [readonly] 
**timestamp** | **Number** | Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).&lt;br&gt; This is actually the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).&lt;br&gt; Any data whose SHA256 hash equals this anchor&#39;s hash is proven to exist at that time and has not been modified since.&lt;br&gt; This property is set when the first confirmation of the Bitcoin block occurs. Once set, the associated proof receipt can be verified (without having to wait for 6 confirmations).  | [optional] [readonly] 
**confirmations** | **Number** | Number of confirmations of the Bitcoin block into which the anchoring process occurred.&lt;br&gt; This property is set when the first confirmation of the Bitcoin block occurs, and removed once the block is confirmed at least 6 times.  | [optional] [readonly] 
**txId** | **String** | Identifier of the Bitcoin transaction where the anchoring occurred. | [optional] [readonly] 



## Enum: StatusEnum


* `WAIT` (value: `"WAIT"`)

* `NEW` (value: `"NEW"`)

* `SENT` (value: `"SENT"`)

* `CONFIRMED` (value: `"CONFIRMED"`)




