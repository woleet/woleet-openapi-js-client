# WoleetApi.SignatureRequestEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signeeId** | **String** | Secret identifier of the signer (provided by email). | 
**type** | **String** | Type of the event to report:&lt;br&gt; - DATA_VERIFIED: the signer verified the integrity (ie. hash) of the data to sign - DATA_REVIEWED: the signer reviewed and acceted the data to sign - TCU_ACCEPTED: the signer reviewed and accepted the TCU - TCU_REFUSED: the signer refused the TCU - SIGN_ACCEPTED: the signer accepted to sign the data - SIGN_REFUSED: the signer refused to sign the data  | 
**comment** | **String** | Comment related to the event to report. | [optional] 



## Enum: TypeEnum


* `DATA_VERIFIED` (value: `"DATA_VERIFIED"`)

* `DATA_REVIEWED` (value: `"DATA_REVIEWED"`)

* `TCU_ACCEPTED` (value: `"TCU_ACCEPTED"`)

* `TCU_REFUSED` (value: `"TCU_REFUSED"`)

* `SIGN_ACCEPTED` (value: `"SIGN_ACCEPTED"`)

* `SIGN_REFUSED` (value: `"SIGN_REFUSED"`)




