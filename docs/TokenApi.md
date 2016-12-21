# WoleetApi.TokenApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](TokenApi.md#getToken) | **GET** /token | Get a JWT authentication token.


<a name="getToken"></a>
# **getToken**
> Token getToken()

Get a JWT authentication token.

Use this operation to retrieve a JWT authentication token. Then, use this token to authenticate using the &#x60;Bearer&#x60; scheme of the &#x60;Authorization&#x60; header, like:  &#x60;Authorization: Bearer {JWT token value}&#x60; 

### Example
```javascript
var WoleetApi = require('woleet_api');
var defaultClient = WoleetApi.ApiClient.default;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

var apiInstance = new WoleetApi.TokenApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getToken(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Token**](Token.md)

### Authorization

[BasicAuth](../README.md#BasicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

