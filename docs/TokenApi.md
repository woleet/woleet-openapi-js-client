# WoleetApi.TokenApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](TokenApi.md#generateToken) | **GET** /token | Generate a JWT token.
[**revokeToken**](TokenApi.md#revokeToken) | **DELETE** /token | Revoke a JWT token.


<a name="generateToken"></a>
# **generateToken**
> Token generateToken(opts)

Generate a JWT token.

Use this operation to generate a new JWT token.&lt;br&gt; Then, use this token to authenticate using the &#x60;Bearer&#x60; scheme of the &#x60;Authorization&#x60; header, like:&lt;br&gt; &#x60;Authorization: Bearer {JWT token value}&#x60; 

### Example
```javascript
var WoleetApi = require('woleet_api');
var defaultClient = WoleetApi.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: JWTAuth
var JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix = 'Token';

var apiInstance = new WoleetApi.TokenApi();

var opts = { 
  'cdata': "cdata_example" // String | Client data to inject into the generated JWT token (64 characters max).<br> This data is not processed by the platform, and can be easily retrieved from the token by BASE64 decoding its `payload`. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateToken(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cdata** | **String**| Client data to inject into the generated JWT token (64 characters max).&lt;br&gt; This data is not processed by the platform, and can be easily retrieved from the token by BASE64 decoding its &#x60;payload&#x60;.  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="revokeToken"></a>
# **revokeToken**
> revokeToken(token)

Revoke a JWT token.

Use this operation to revoke a JWT token.&lt;br&gt; JWT tokens have no expiration date so are always valid: if you need to invalidate a token (eg. because you think it is compromised) you need to use this endpoint to inform the platform that this token should no longer be accepted. 

### Example
```javascript
var WoleetApi = require('woleet_api');
var defaultClient = WoleetApi.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME';
BasicAuth.password = 'YOUR PASSWORD';

// Configure API key authorization: JWTAuth
var JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix = 'Token';

var apiInstance = new WoleetApi.TokenApi();

var token = new WoleetApi.Token(); // Token | Token to revoke.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.revokeToken(token, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | [**Token**](Token.md)| Token to revoke. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

