# WoleetApi.IdentityVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Identity verification status code:&lt;br&gt; - VERIFIED: success: the key is controlled by the identity server,&lt;br&gt; and/or the key is associated to an identity on the identity server,&lt;br&gt; and/or the identity is included in the anchored signature,&lt;br&gt; and/or the signed identity matches the one claimed by the identity server,&lt;br&gt; - IDENTITY_MISMATCH: error: the identity included in the anchored signature mismatch the identity claimed by the identity server&lt;br&gt; - INVALID_SIGNATURE: error: the identity URL returned an invalid signature (ie. the identity server failed to prove that it owns the private part of key pair)&lt;br&gt; - HTTP_ERROR: error: the identity URL returned an HTTP error&lt;br&gt; - DEPRECATED_KEY: error: the key expired or was revoked before the signature timestamp.  | [optional] 
**text** | **String** | Identity verification status text (gives more insights about the verification process). | [optional] 
**certificates** | [**[X509SubjectIssuer]**](X509SubjectIssuer.md) | Array of subjects and issuers of the certificates extracted from the identity URL&#39;s TLS certificate. | [optional] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**signedIdentity** | [**Identity**](Identity.md) |  | [optional] 
**signedIssuerDomain** | **String** | Domain name of the identity issuer (ie. of the organization who verified the identity). | [optional] 
**key** | [**Key**](Key.md) |  | [optional] 



## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `HTTP_ERROR` (value: `"HTTP_ERROR"`)

* `IDENTITY_MISMATCH` (value: `"IDENTITY_MISMATCH"`)

* `INVALID_SIGNATURE` (value: `"INVALID_SIGNATURE"`)

* `DEPRECATED_KEY` (value: `"DEPRECATED_KEY"`)




