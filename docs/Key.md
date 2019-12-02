# WoleetApi.Key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Key name. | [optional] 
**pubKey** | **String** | Public key (bitcoin address when using BIP39 keys). | [optional] 
**status** | **String** | Key status. | [optional] 
**expiration** | **Number** | Key expiration date (Unix ms timestamp). &lt;br&gt;Note that the field is not returned if the key has no expiration date.  | [optional] 
**revokedAt** | **Number** | Key revocation date (Unix ms timestamp). &lt;br&gt;Note that the field is not returned if the key is not yet revoked.  | [optional] 



## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `expired` (value: `"expired"`)

* `revoked` (value: `"revoked"`)




