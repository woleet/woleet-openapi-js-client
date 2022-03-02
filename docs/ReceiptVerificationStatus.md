# WoleetApi.ReceiptVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Proof receipt verification status code:&lt;br&gt; - VERIFIED: success: the proof receipt is verified: both the proof of timestamp AND the proof of signature (if applicable) are valid (but the proof of identity may be invalid)&lt;br&gt; - INVALID_SIGNATURE: error: the proof of signature is invalid&lt;br&gt; - any other verification status code: the proof of timestamp is not ready or invalid  | [optional] 
**text** | **String** | Proof receipt verification status text giving more insight about verification errors. | [optional] 
**timestamp** | **Number** | Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).&lt;br&gt; This is the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).  | [optional] 
**confirmations** | **Number** | Number of confirmations of the Bitcoin block into which the anchoring process occurred. | [optional] 
**timestampVerificationStatus** | [**TimestampVerificationStatus**](TimestampVerificationStatus.md) |  | [optional] 
**signatureVerificationStatus** | [**SignatureVerificationStatus**](SignatureVerificationStatus.md) |  | [optional] 
**identityVerificationStatus** | [**IdentityVerificationStatus**](IdentityVerificationStatus.md) |  | [optional] 



## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `TX_NOT_SENT` (value: `"TX_NOT_SENT"`)

* `TX_NOT_CONFIRMED` (value: `"TX_NOT_CONFIRMED"`)

* `INVALID_PROOF` (value: `"INVALID_PROOF"`)

* `TX_NOT_FOUND` (value: `"TX_NOT_FOUND"`)

* `TX_MISMATCH_RECEIPT` (value: `"TX_MISMATCH_RECEIPT"`)

* `INVALID_SIGNATURE` (value: `"INVALID_SIGNATURE"`)




