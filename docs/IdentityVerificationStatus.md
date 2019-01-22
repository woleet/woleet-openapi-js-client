# WoleetApi.IdentityVerificationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Identity verification status code:&lt;br&gt; - VERIFIED: the identity is verified (the identity URL succeeded to sign a challenge using the same public key as the proof receipt, proving it owns the associated private key)&lt;br&gt; - HTTP_ERROR: the identity URL returned an HTTP error&lt;br&gt; - INVALID_SIGNATURE: the identity URL returned an invalid signature (and thus failed to prove the ownership of the proof receipt&#39;s &#x60;pubKey&#x60; public key)  | [optional] 
**text** | **String** | Identity verification status text giving more insight about verification errors. | [optional] 
**certificates** | [**[X509SubjectIssuer]**](X509SubjectIssuer.md) | Array of subjects and issuers of the certificates extracted from the identity URL&#39;s TLS certificate. | [optional] 
**identity** | [**Identity**](Identity.md) |  | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `HTTP_ERROR` (value: `"HTTP_ERROR"`)

* `INVALID_SIGNATURE` (value: `"INVALID_SIGNATURE"`)




