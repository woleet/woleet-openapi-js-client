# WoleetApi.ReceiptVerificationStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Proof receipt verification status code:&lt;br&gt; - VERIFIED: the proof receipt is verified (ie. the receipt is valid, the associated Bitcoin transaction has been found in the blockchain and the receipt&#39;s &#x60;merkle_root&#x60; property matches the transaction&#39;s &#x60;OP_RETURN&#x60; field). The time of the Bitcoin block into which the anchoring process occured is returned in the &#x60;timestamp&#x60; property.&lt;br&gt; Any data whose SHA256 hash matches the proof receipt&#39;s &#x60;target_hash&#x60; is proven to be existant at that time and unmodified.&lt;br&gt; - INVALID_TARGET_PROOF: the receipt&#39;s &#x60;target_proof&#x60; property is not a valid Merkle proof&lt;br&gt; - TX_NOT_FOUND: the receipt&#39;s &#x60;tx_id&#x60; property does not point to a valid Bitcoin transaction&lt;br&gt; - TX_MISMATCH_RECEIPT: the receipt&#39;s &#x60;merkle_root&#x60; property does not match the transaction&#39;s &#x60;OP_RETURN&#x60; field&lt;br&gt;  | [optional] 
**text** | **String** | Proof receipt verification status text giving more insight about verification errors.  | [optional] 
**timestamp** | **Integer** | Timestamp of the Bitcoin block into which the anchoring transaction was included (in milliseconds since Unix epoch). | [optional] 


<a name="CodeEnum"></a>
## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `INVALID_TARGET_PROOF` (value: `"INVALID_TARGET_PROOF"`)

* `TX_NOT_FOUND` (value: `"TX_NOT_FOUND"`)

* `TX_MISMATCH_RECEIPT` (value: `"TX_MISMATCH_RECEIPT"`)




