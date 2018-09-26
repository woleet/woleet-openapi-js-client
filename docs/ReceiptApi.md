# WoleetApi.ReceiptApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOTSReceipt**](ReceiptApi.md#getOTSReceipt) | **GET** /receipt/{anchorid}/ots | Get the proof receipt of an anchor (OpenTimestamps proof format).
[**getReceipt**](ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorid} | Get the proof receipt of an anchor (Chainpoint proof format).
[**verifyReceipt**](ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.


<a name="getOTSReceipt"></a>
# **getOTSReceipt**
> OtsReceipt getOTSReceipt(anchorid)

Get the proof receipt of an anchor (OpenTimestamps proof format).

Use this operation to retrieve the OpenTimestamps proof receipt associated to a given anchor. This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 

### Example
```javascript
var WoleetApi = require('woleet_api');

var apiInstance = new WoleetApi.ReceiptApi();

var anchorid = "anchorid_example"; // String | Identifier of the anchor for which to build the proof receipt.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOTSReceipt(anchorid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorid** | **String**| Identifier of the anchor for which to build the proof receipt. | 

### Return type

[**OtsReceipt**](OtsReceipt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReceipt"></a>
# **getReceipt**
> Receipt getReceipt(anchorid)

Get the proof receipt of an anchor (Chainpoint proof format).

Use this operation to retrieve the Chainpoint proof receipt associated to a given anchor. This is a publicly accessible endpoint: authentication is not required to retrieve a proof receipt (but the anchor identifier need to be known). 

### Example
```javascript
var WoleetApi = require('woleet_api');

var apiInstance = new WoleetApi.ReceiptApi();

var anchorid = "anchorid_example"; // String | Identifier of the anchor for which to build the proof receipt.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceipt(anchorid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **anchorid** | **String**| Identifier of the anchor for which to build the proof receipt. | 

### Return type

[**Receipt**](Receipt.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="verifyReceipt"></a>
# **verifyReceipt**
> ReceiptVerificationStatus verifyReceipt(receipt)

Verify a proof receipt.

Use this operation to verify a Chainpoint proof receipt and get the timestamp of the proof.&lt;br&gt; For proof of signature receipts including an identity URL, this operation also verify and returns information about the signee&#39;s identity.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to verify a proof receipt. 

### Example
```javascript
var WoleetApi = require('woleet_api');

var apiInstance = new WoleetApi.ReceiptApi();

var receipt = new WoleetApi.Receipt(); // Receipt | Chainpoint proof receipt to verify.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.verifyReceipt(receipt, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **receipt** | [**Receipt**](Receipt.md)| Chainpoint proof receipt to verify. | 

### Return type

[**ReceiptVerificationStatus**](ReceiptVerificationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

