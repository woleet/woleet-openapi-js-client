# WoleetApi.SignatureRequestSign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signature** | **String** | Signature of the &#x60;hashToSign&#x60; property of the signature request using the public key stored in the &#x60;pubKey&#x60; property.  | [optional] 
**pubKey** | **String** | Public key of the signee.  | [optional] 
**signeeId** | **String** | Secret identifier of the signee (only required if &#x60;email&#x60; was set for this signee).  | [optional] 
**otp** | **String** | One Time Password of the signee (only required if &#x60;requiresOTP&#x60; was set to &#x60;true&#x60; for thìs signee).  | [optional] 
**identityURL** | **String** | Web hook to use to verify the signee&#39;s identity.  | [optional] 


