# WoleetApi.Receipt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Chainpoint 2.x only. Type of Chainpoint 2.x receipt. | [optional] 
**targetHash** | **String** | Chainpoint 2.x only. SHA256 hash of the proven data or signature. | [optional] 
**merkleRoot** | **String** | Chainpoint 2.x only. Root of the Merkle tree. | [optional] 
**proof** | [**[ReceiptProofNode]**](ReceiptProofNode.md) | Chainpoint 2.x only. Merkle proof: path from &#x60;targetHash&#x60; to &#x60;merkleRoot&#x60; in the Merkle tree.  | [optional] 
**anchors** | [**[ReceiptAnchorsNode]**](ReceiptAnchorsNode.md) | Chainpoint 2.x only. List of sources where the root of the Merkle proof is anchored. | [optional] 
**signature** | [**ReceiptSignature**](ReceiptSignature.md) |  | [optional] 
**header** | [**ReceiptHeader**](ReceiptHeader.md) |  | [optional] 
**target** | [**ReceiptTarget**](ReceiptTarget.md) |  | [optional] 


