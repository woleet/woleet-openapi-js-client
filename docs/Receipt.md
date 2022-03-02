# WoleetApi.Receipt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**targetHash** | **String** | Chainpoint 2.x: SHA256 hash of the proven data or signature.  | [optional] 
**type** | **String** | Chainpoint 2.x: Type of the proof receipt.&lt;br&gt; **Currently only &#39;ChainpointSHA256v2&#39; is supported.**  | [optional] 
**merkleRoot** | **String** | Chainpoint 2.x: Root of the Merkle tree.  | [optional] 
**proof** | [**[ReceiptProofNode]**](ReceiptProofNode.md) | Chainpoint 2.x: Merkle proof (path from &#x60;targetHash&#x60; to &#x60;merkleRoot&#x60; in the Merkle tree).  | [optional] 
**anchors** | [**[ReceiptAnchorsNode]**](ReceiptAnchorsNode.md) | Chainpoint 2.x: List of sources where the root of the Merkle proof is anchored.  | [optional] 
**partial** | **Boolean** | &#x60;true&#x60; if the receipt is a partial receipt (ie. does not contain the Chainpoint 2.x proof of timestamp).  | [optional] 
**signature** | [**ReceiptSignature**](ReceiptSignature.md) |  | [optional] 


