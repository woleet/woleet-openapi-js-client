# WoleetApi.SignatureRequestProofBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signatureReceipts** | [**[Receipt]**](Receipt.md) | Proof receipts of the signatures of the file by the signers | [optional] 
**auditTrailReceipt** | [**Receipt**](Receipt.md) |  | [optional] 
**auditTrailData** | **String** | Audit trail data (Base64 encoded JSON object) | [optional] 
**complete** | **Boolean** | &#x60;true&#x60; if all pieces of evidence are present in the proof bundle, or &#x60;false&#x60; if not.&lt;br&gt; All the following conditions must be met: - the signature request is COMPLETED (by the platform) or CLOSED (by the requester) - the audit trail is generated and signed by the platform - all the proof receipts are available  | [optional] 


