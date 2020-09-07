# WoleetApi.TokenApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateToken**](TokenApi.md#generateToken) | **GET** /token | Generate a JWT token.
[**revokeToken**](TokenApi.md#revokeToken) | **DELETE** /token | Revoke a JWT token.



## generateToken

> Token generateToken(opts)

Generate a JWT token.

Use this operation to generate a new JWT token.&lt;br&gt; JWT tokens can be used to authenticate to the API, using the &#x60;Bearer&#x60; scheme of the &#x60;Authorization&#x60; header, like:&lt;br&gt; &#x60;Authorization: Bearer {JWT token}&#x60; 

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

let apiInstance = new WoleetApi.TokenApi();
let opts = {
  'cdata': "cdata_example" // String | Client data to inject into the generated JWT token (64 characters max).<br> This data is not processed by the platform, and can be easily retrieved from the token by Base64 decoding its `payload`. 
};
apiInstance.generateToken(opts, (error, data, response) => {
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
 **cdata** | **String**| Client data to inject into the generated JWT token (64 characters max).&lt;br&gt; This data is not processed by the platform, and can be easily retrieved from the token by Base64 decoding its &#x60;payload&#x60;.  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revokeToken

> revokeToken(token)

Revoke a JWT token.

Use this operation to revoke a JWT token.&lt;br&gt; JWT tokens have no expiration date so are always valid: if you need to invalidate a token (eg. because you think it is compromised) you need to use this endpoint to inform the platform that this token must no longer be accepted. 

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

let apiInstance = new WoleetApi.TokenApi();
let token = "token_example"; // String | JWT token to revoke.
apiInstance.revokeToken(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| JWT token to revoke. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

