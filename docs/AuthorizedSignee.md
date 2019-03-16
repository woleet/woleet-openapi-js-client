# WoleetApi.AuthorizedSignee

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pubKey** | **String** | The public key of the authorized signee.&lt;br&gt; **Currently only Bitcoin addresses are supported.**&lt;br&gt;  | [optional] 
**email** | **String** | The email of the authorized signee.&lt;br&gt; If set, &#x60;commonName&#x60; must also be set.  | [optional] 
**countryCallingCode** | **String** | The country calling code the phone of the authorized signee.  | [optional] 
**phone** | **String** | The phone of the authorized signee (not including the country calling code).&lt;br&gt; This phone must be able to receive a One Time Password by SMS.  | [optional] 
**requiresOTP** | **Boolean** | &#x60;true&#x60; if the signee must provide a One Time Password to sign.&lt;br&gt; If &#x60;true&#x60;, &#x60;phone&#x60; must be set, since the One Time Password is sent by SMS.  | [optional] 
**commonName** | **String** | The full name of the authorized signee.  | [optional] 


