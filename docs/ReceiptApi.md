# WoleetApi.ReceiptApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReceipt**](ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorid} | Get the proof receipt of an anchor.
[**verifyReceipt**](ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.


<a name="getReceipt"></a>
# **getReceipt**
> Receipt getReceipt(anchorid)

Get the proof receipt of an anchor.

Use this operation to retrieve the ChainPoint standard receipt associated to a given anchor. This endpoint can be accessed publicly: authentication is required only to retreive private anchors&#39; receipts. Public anchors&#39; receipts can be retreived without authentication. 

### Example
```javascript
var WoleetApi = require('woleet_api');
var defaultClient = WoleetApi.ApiClient.default;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

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
 **anchorid** | **String**| Identifier of the anchor for which to build the proof receipt.  | 

### Return type

[**Receipt**](Receipt.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="verifyReceipt"></a>
# **verifyReceipt**
> ReceiptVerificationStatus verifyReceipt(receipt)

Verify a proof receipt.

Use this operation to verify a ChainPoint standard receipt.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to verify a receipt. 

### Example
```javascript
var WoleetApi = require('woleet_api');

var apiInstance = new WoleetApi.ReceiptApi();

var receipt = new WoleetApi.Receipt(); // Receipt | Chainpoint standard receipt to verify. 


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
 **receipt** | [**Receipt**](Receipt.md)| Chainpoint standard receipt to verify.  | 

### Return type

[**ReceiptVerificationStatus**](ReceiptVerificationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

