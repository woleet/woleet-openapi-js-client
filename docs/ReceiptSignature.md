# WoleetApi.ReceiptSignature

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signedHash** | **String** | SHA256 hash (ie. the fingerprint) of the original signed data. | [optional] 
**pubKey** | **String** | Public key of the signee.&lt;br&gt; **Currently only Bitcoin addresses are supported.**  | [optional] 
**signature** | **String** | Signature of the &#x60;signedHash&#x60; property using the public key &#x60;pubKey&#x60;. | [optional] 
**identityURL** | **String** | Web hook to use to verify the signee&#39;s identity. | [optional] 


