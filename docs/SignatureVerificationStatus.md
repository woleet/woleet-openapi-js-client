# WoleetApi.SignatureVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Signature verification status code: - VERIFIED: success: the receipt&#39;s &#x60;signature&#x60; property is a valid signature of &#x60;signedHash&#x60;, or, if any of &#x60;signedIdentity&#x60; or &#x60;signedIssuerDomain&#x60; is provided, a valid signature of SHA256(&#x60;signedHash&#x60; + &#x60;signedIdentity&#x60; + &#x60;signedIssuerDomain&#x60;) using the public key &#x60;pubKey&#x60; - SIGNATURE_MISMATCH_RECEIPT: error: the receipt&#39;s &#x60;targetHash&#x60; does not match the SHA256 hash of &#x60;signature&#x60; - INVALID_SIGNATURE: error: the receipt&#39;s &#x60;signature&#x60; property is invalid  | [optional] 
**text** | **String** | Signature verification status text (gives more insights about the verification process). | [optional] 



## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `INVALID_SIGNATURE` (value: `"INVALID_SIGNATURE"`)

* `SIGNATURE_MISMATCH_RECEIPT` (value: `"SIGNATURE_MISMATCH_RECEIPT"`)




