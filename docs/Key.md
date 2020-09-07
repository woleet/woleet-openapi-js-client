# WoleetApi.Key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Key name. | [optional] 
**pubKey** | **String** | Public key (bitcoin address when using BIP39 keys). | [optional] 
**status** | **String** | Key status:&lt;br&gt; &#x60;valid&#x60;: the key is valid and can be used to sign&lt;br&gt; &#x60;expired&#x60;: the key expired at &#x60;expiration&#x60;&lt;br&gt; &#x60;revoked&#x60;: the key was revoked at &#x60;revokedAt&#x60;  | [optional] 
**expiration** | **Number** | Key expiration date (Unix ms timestamp). &lt;br&gt;Note that this property is not returned if the key has no expiration date.  | [optional] 
**revokedAt** | **Number** | Key revocation date (Unix ms timestamp). &lt;br&gt;Note that this property is not returned if the key is not yet revoked.  | [optional] 



## Enum: StatusEnum


* `valid` (value: `"valid"`)

* `expired` (value: `"expired"`)

* `revoked` (value: `"revoked"`)




