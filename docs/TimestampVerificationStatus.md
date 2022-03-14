# WoleetApi.TimestampVerificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Timestamp verification status code: - VERIFIED: success: the proof receipt is verified&lt;br&gt; The receipt format is valid, the transaction is present in the Bitcoin blockchain and confirmed at least once, the receipt contains a valid Merkle proof linking its &#x60;targetHash&#x60; property to the transaction&#39;s &#x60;OP_RETURN&#x60; field.&lt;br&gt; The creation time and the number of confirmation of the block containing the transaction is returned in the &#x60;timestamp&#x60; and &#x60;confirmations&#x60; properties.&lt;br&gt; Any data whose SHA256 hash matches the proof receipt&#39;s &#x60;targetHash&#x60; is proven to exist at that time and has not been modified since.&lt;br&gt; - TX_NOT_SENT: warning: the transaction has not yet been sent to the blockchain (ie. the data or the signature has not yet been anchored) - TX_NOT_CONFIRMED: warning: the transaction is not yet confirmed by the blockchain (ie. not yet included in a block) - TX_NOT_FOUND: error: the receipt&#39;s &#x60;anchors&#x60; property does not include a valid Bitcoin transaction - INVALID_PROOF: error: the receipt&#39;s &#x60;proof&#x60; property is not a valid Merkle proof - TX_MISMATCH_RECEIPT: error: the receipt&#39;s &#x60;merkleRoot&#x60; property does not match the transaction&#39;s &#x60;OP_RETURN&#x60; field  | [optional] 
**text** | **String** | Timestamp verification status text giving more insight about verification errors. | [optional] 
**timestamp** | **Number** | Proven timestamp of the data (for a data anchor) or of the signature (for a signature anchor).&lt;br&gt; This is the time of the Bitcoin block into which the anchoring process occurred (in milliseconds since Unix epoch).  | [optional] 
**confirmations** | **Number** | Number of confirmations of the Bitcoin block into which the anchoring process occurred. | [optional] 



## Enum: CodeEnum


* `VERIFIED` (value: `"VERIFIED"`)

* `TX_NOT_SENT` (value: `"TX_NOT_SENT"`)

* `TX_NOT_CONFIRMED` (value: `"TX_NOT_CONFIRMED"`)

* `INVALID_PROOF` (value: `"INVALID_PROOF"`)

* `TX_NOT_FOUND` (value: `"TX_NOT_FOUND"`)

* `TX_MISMATCH_RECEIPT` (value: `"TX_MISMATCH_RECEIPT"`)




