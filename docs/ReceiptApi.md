# WoleetApi.ReceiptApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOTSReceipt**](ReceiptApi.md#getOTSReceipt) | **GET** /receipt/{anchorId}/ots | Get the proof receipt of an anchor (OpenTimestamps proof format).
[**getReceipt**](ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorId} | Get the proof receipt of an anchor.
[**verifyReceipt**](ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.



## getOTSReceipt

> File getOTSReceipt(anchorId)

Get the proof receipt of an anchor (OpenTimestamps proof format).

Use this operation to retrieve the OpenTimestamps proof receipt associated to a given data anchor (note that this operation is NOT available for signature anchors).&lt;br&gt; This binary file is only available once the anchor status is SENT.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 

### Example

```javascript
import WoleetApi from 'woleet_api';
let defaultClient = WoleetApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: JWTAuth
let JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix = 'Token';

let apiInstance = new WoleetApi.ReceiptApi();
let anchorId = "anchorId_example"; // String | Identifier of the data anchor for which to build the proof receipt.
apiInstance.getOTSReceipt(anchorId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorId** | **String**| Identifier of the data anchor for which to build the proof receipt. | 

### Return type

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReceipt

> Receipt getReceipt(anchorId, opts)

Get the proof receipt of an anchor.

Use this operation to retrieve the proof receipt associated to a given anchor.&lt;br&gt; This JSON file is only available once the anchor status is SENT.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 

### Example

```javascript
import WoleetApi from 'woleet_api';
let defaultClient = WoleetApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: JWTAuth
let JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix = 'Token';

let apiInstance = new WoleetApi.ReceiptApi();
let anchorId = "anchorId_example"; // String | Identifier of the anchor for which to build the proof receipt.
let opts = {
  'allowPartial': true // Boolean | `true` if a partial proof receipt is to be returned when the proof of timestamp is not yet available (ie. the data or the signature has not yet been anchored).<br> If the proof of timestamp is availalble (anchor is SENT or CONFIRMED) a regular proof receipt is returned (with response code 200). Otherwise, a partial proof receipt not including the proof of timestamp is returned (response code 202).<br> The partial proof receipt of a signature anchor allows to verify the signature and the identity of the signer immediatly after signing, without having to wait for the anchoring process to complete. 
};
apiInstance.getReceipt(anchorId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorId** | **String**| Identifier of the anchor for which to build the proof receipt. | 
 **allowPartial** | **Boolean**| &#x60;true&#x60; if a partial proof receipt is to be returned when the proof of timestamp is not yet available (ie. the data or the signature has not yet been anchored).&lt;br&gt; If the proof of timestamp is availalble (anchor is SENT or CONFIRMED) a regular proof receipt is returned (with response code 200). Otherwise, a partial proof receipt not including the proof of timestamp is returned (response code 202).&lt;br&gt; The partial proof receipt of a signature anchor allows to verify the signature and the identity of the signer immediatly after signing, without having to wait for the anchoring process to complete.  | [optional] 

### Return type

[**Receipt**](Receipt.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## verifyReceipt

> ReceiptVerificationStatus verifyReceipt(receipt)

Verify a proof receipt.

Use this operation to verify a proof receipt and get the timestamp of the proof.&lt;br&gt; For proof of signature receipts including an identity URL, this operation also verifies and returns information about the signer&#39;s identity.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to verify a proof receipt. 

### Example

```javascript
import WoleetApi from 'woleet_api';
let defaultClient = WoleetApi.ApiClient.instance;
// Configure HTTP basic authorization: BasicAuth
let BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';
// Configure API key authorization: JWTAuth
let JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix = 'Token';

let apiInstance = new WoleetApi.ReceiptApi();
let receipt = new WoleetApi.Receipt(); // Receipt | Proof receipt to verify.
apiInstance.verifyReceipt(receipt, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receipt** | [**Receipt**](Receipt.md)| Proof receipt to verify. | 

### Return type

[**ReceiptVerificationStatus**](ReceiptVerificationStatus.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

