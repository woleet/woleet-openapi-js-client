# WoleetApi.AuthorizedSignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubKey** | **String** | The public key the authorized signee must use to sign.&lt;br&gt; **Currently only Bitcoin addresses are supported.**&lt;br&gt; If not set, the authorized signee can sign using any key.  | [optional] 
**device** | **String** | The type of device the authorized signee should use to sign:&lt;br&gt; - SERVER: Woleet.ID Server or equivalent - MOBILE: Woleet.ID Mobile or equivalent - NANO: Ledger Nano S or equivalent If set, the signature web application could only offer the corresponding signature mode.  | [optional] 
**email** | **String** | The email of the authorized signee.&lt;br&gt; If set, an email is sent by the platform to the authorized signee, and &#x60;commonName&#x60; must also be set.&lt;br&gt; If set, &#x60;pubKey&#x60; is not mandatory, to allow the authorized signee to sign using any key.  | [optional] 
**countryCallingCode** | **String** | The country calling code of the authorized signee.  | [optional] 
**phone** | **String** | The phone of the authorized signee (not including the country calling code).&lt;br&gt; This phone must be able to receive an OTP by SMS.  | [optional] 
**requiresOTP** | **Boolean** | &#x60;true&#x60; if the signee must provide an OTP to sign.&lt;br&gt; If &#x60;true&#x60;, &#x60;phone&#x60; must be set, since the OTP is sent by SMS.  | [optional] 
**commonName** | **String** | The full name of the authorized signee.  | [optional] 
**identityURL** | **String** | Web hook to use to verify the signee&#39;s identity.&lt;br&gt; If set, it is used to verify signee&#39;s identity at signature registration time.  | [optional] 
**anchorId** | **String** | If the authorized signee has signed, identifier of the signature anchor created.  | [optional] 



## Enum: DeviceEnum


* `SERVER` (value: `"SERVER"`)

* `MOBILE` (value: `"MOBILE"`)

* `NANO` (value: `"NANO"`)




