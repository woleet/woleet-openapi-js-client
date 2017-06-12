# WoleetApi.ReceiptVerificationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Proof receipt verification status code:&lt;br&gt; - VERIFIED: the proof receipt is verified: the receipt format is valid, the associated Bitcoin transaction is present in the blockchain, and the receipt contains a valid cryptographic proof that its &#x60;target_hash&#x60; property is anchored into the transaction&#39;s &#x60;OP_RETURN&#x60; field. The time of the Bitcoin block into which the anchoring process occurred is returned in the &#x60;timestamp&#x60; property.&lt;br&gt; Any data whose SHA256 hash matches the proof receipt&#39;s &#x60;target_hash&#x60; is proven to be existent at that time and unmodified.&lt;br&gt; - INVALID_TARGET_PROOF: the receipt&#39;s &#x60;target_proof&#x60; property is not a valid Merkle proof&lt;br&gt; - TX_NOT_FOUND: the receipt&#39;s &#x60;tx_id&#x60; property does not point to a valid Bitcoin transaction&lt;br&gt; - TX_MISMATCH_RECEIPT: the receipt&#39;s &#x60;merkle_root&#x60; property does not match the transaction&#39;s &#x60;OP_RETURN&#x60; field&lt;br&gt; - INVALID_SIGNATURE: the receipt&#39;s &#x60;signature&#x60; property is not a valid signature&lt;br&gt;  | [optional] 
**text** | **String** | Proof receipt verification status text giving more insight about verification errors. | [optional] 
**timestamp** | **Number** | Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).&lt;br&gt; This is actually the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).&lt;br&gt; Any data whose SHA256 hash equals this receipt target&#39;s target_hash property is proven to be existent at that time and unmodified.  | [optional] 
**confirmations** | **Number** | Number of confirmations of the Bitcoin block into which the anchoring hapenned. | [optional] 
**identityVerificationStatus** | [**IdentityVerificationStatus**](IdentityVerificationStatus.md) |  | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `INVALID_TARGET_PROOF` (value: `"INVALID_TARGET_PROOF"`)

* `TX_NOT_FOUND` (value: `"TX_NOT_FOUND"`)

* `TX_MISMATCH_RECEIPT` (value: `"TX_MISMATCH_RECEIPT"`)

* `INVALID_SIGNATURE` (value: `"INVALID_SIGNATURE"`)




