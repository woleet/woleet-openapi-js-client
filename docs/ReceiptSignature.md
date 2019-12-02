# WoleetApi.ReceiptSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signedHash** | **String** | SHA256 hash (ie. the fingerprint) of the original signed data. | [optional] 
**signedIdentity** | **String** | X500 Distinguished Name representing the signed identity. | [optional] 
**signedIssuerDomain** | **String** | Domain name of the identity issuer (ie. of the organization who verified the identity). | [optional] 
**pubKey** | **String** | Public key of the signee.&lt;br&gt; **Currently only Bitcoin addresses are supported.**  | [optional] 
**signature** | **String** | Signature of the &#x60;signedHash&#x60; property using the public key &#x60;pubKey&#x60;, or, if any of &#x60;signedIdentity&#x60; or &#x60;signedIssuerDomain&#x60; is provided, signature of SHA256(&#x60;hashToSign&#x60; + &#x60;signedIdentity&#x60; + &#x60;signedIssuerDomain&#x60;) using the public key &#x60;pubKey&#x60;.  | [optional] 
**identityURL** | **String** | Web hook to use to verify the signee&#39;s identity. | [optional] 


