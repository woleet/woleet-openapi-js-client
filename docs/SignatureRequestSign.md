# WoleetApi.SignatureRequestSign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **String** | Signature of the &#x60;hashToSign&#x60; property of the signature request using the public key &#x60;pubKey&#x60;, or, if any of &#x60;signedIdentity&#x60; or &#x60;signedIssuerDomain&#x60; is provided, signature of SHA256(&#x60;hashToSign&#x60; + &#x60;signedIdentity&#x60; + &#x60;signedIssuerDomain&#x60;) using the public key &#x60;pubKey&#x60;.  | 
**pubKey** | **String** | Public key used to sign. | 
**signedIdentity** | **String** | X500 Distinguished Name representing the signed identity.&lt;br&gt; If set, the CN (common name) and EMAILADDRESS (email address) attributes must match the common name and email address of the signer as set in the signature request.  | [optional] 
**signedIssuerDomain** | **String** | Domain name of the identity issuer (ie. of the organization who verified the identity).&lt;br&gt; If set, the domain name of the identity URL must be included in the &#x60;signedIssuerDomain&#x60; domain name.  | [optional] 
**identityURL** | **String** | Web hook to use to verify the signer&#39;s identity.&lt;br&gt; If set, it is used in place of the &#x60;identityURL&#x60; property of the signer to create the signature anchor.  | [optional] 
**device** | **String** | Type of device used to sign:&lt;br&gt; - SERVER: Woleet.ID Server or equivalent&lt;br&gt; - MOBILE: Woleet.ID Mobile or equivalent&lt;br&gt; - NANO: Ledger Nano S or equivalent  | [optional] 
**signeeId** | **String** | Secret identifier of the signer (provided by email). | [optional] 
**OTP** | **String** | OTP of the signer (only required if &#x60;requiresOTP&#x60; was set to &#x60;true&#x60; for thìs signer).  | [optional] 



## Enum: DeviceEnum


* `SERVER` (value: `"SERVER"`)

* `MOBILE` (value: `"MOBILE"`)

* `NANO` (value: `"NANO"`)




