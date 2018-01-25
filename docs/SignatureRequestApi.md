# WoleetApi.SignatureRequestApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignatureRequest**](SignatureRequestApi.md#createSignatureRequest) | **POST** /signatureRequest | Create a new signature request.
[**deleteSignatureRequest**](SignatureRequestApi.md#deleteSignatureRequest) | **DELETE** /signatureRequest/{requestId} | Delete a signature request.
[**getSignatureRequest**](SignatureRequestApi.md#getSignatureRequest) | **GET** /signatureRequest/{requestId} | Get a signature request by its identifier.
[**searchSignatureRequests**](SignatureRequestApi.md#searchSignatureRequests) | **GET** /signatureRequests | Search for signature requests.
[**signSignatureRequest**](SignatureRequestApi.md#signSignatureRequest) | **POST** /signatureRequest/{requestId}/sign | Sign a signature request.
[**updateSignatureRequest**](SignatureRequestApi.md#updateSignatureRequest) | **PUT** /signatureRequest/{requestId} | Update a signature request.


<a name="createSignatureRequest"></a>
# **createSignatureRequest**
> SignatureRequest createSignatureRequest(signatureRequest)

Create a new signature request.

Use this operation to create a new signature request.&lt;br&gt; The properties &#x60;id&#x60;, &#x60;created&#x60; and &#x60;lastModified&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned request.&lt;br&gt; Only the properties &#x60;name&#x60; and &#x60;hashToSign&#x60; are required: the &#x60;hashToSign&#x60; property must be the SHA256 hash of the data to sign. This allows not to leak the original data and to keep the actual signed data small (signing the digest is equivalent to signing the original data).&lt;br&gt; Be sure to have enough anchoring credits on your account to fulfill the signature request (each signature registered will cost you 1 anchoring credit).&lt;br&gt; 

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

var apiInstance = new WoleetApi.SignatureRequestApi();

var signatureRequest = new WoleetApi.SignatureRequest(); // SignatureRequest | SignatureRequest object to create.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSignatureRequest(signatureRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signatureRequest** | [**SignatureRequest**](SignatureRequest.md)| SignatureRequest object to create. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSignatureRequest"></a>
# **deleteSignatureRequest**
> deleteSignatureRequest(requestId)

Delete a signature request.

Use this operation to delete a signature request.&lt;br&gt; 

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

var apiInstance = new WoleetApi.SignatureRequestApi();

var requestId = "requestId_example"; // String | Identifier of the signature request to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSignatureRequest(requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Identifier of the signature request to delete. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSignatureRequest"></a>
# **getSignatureRequest**
> SignatureRequest getSignatureRequest(requestId)

Get a signature request by its identifier.

Use this operation to retrieve a signature request by its identifier.&lt;br&gt; When accessed with no authentication, only public attributes of the signature request are returned. 

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

var apiInstance = new WoleetApi.SignatureRequestApi();

var requestId = "requestId_example"; // String | Identifier of the signature request to retrieve.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSignatureRequest(requestId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Identifier of the signature request to retrieve. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchSignatureRequests"></a>
# **searchSignatureRequests**
> SignatureRequests searchSignatureRequests(opts)

Search for signature requests.

Use this operation to retrieve all signature requests having a given &#x60;name&#x60; and/or &#x60;hashToSign&#x60; property.&lt;br&gt; Only requests belonging to the authenticated user are returned.&lt;br&gt; Paging and sorting is supported. 

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

var apiInstance = new WoleetApi.SignatureRequestApi();

var opts = { 
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of anchors per page.
  'direction': "ASC", // String | Sorting direction: ASC for ascending DESC for descending. 
  'sort': "created", // String | Sorting property: possible values are limited to `id`, `created` and `hashToSign`. 
  'name': "name_example", // String | `name` to search for: all signature requests whose `name` property contains this sub-string are returned.<br> **WARNING: searching by name can timeout on a large signature request set.** 
  'hashToSign': "hashToSign_example" // String | `hashToSign` to search for: all signature requests whose `hashToSign` property is equal are returned. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchSignatureRequests(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Index of the page to retrieve (from 0). | [optional] [default to 0]
 **size** | **Number**| Number of anchors per page. | [optional] [default to 20]
 **direction** | **String**| Sorting direction: ASC for ascending DESC for descending.  | [optional] [default to ASC]
 **sort** | **String**| Sorting property: possible values are limited to &#x60;id&#x60;, &#x60;created&#x60; and &#x60;hashToSign&#x60;.  | [optional] [default to created]
 **name** | **String**| &#x60;name&#x60; to search for: all signature requests whose &#x60;name&#x60; property contains this sub-string are returned.&lt;br&gt; **WARNING: searching by name can timeout on a large signature request set.**  | [optional] 
 **hashToSign** | **String**| &#x60;hashToSign&#x60; to search for: all signature requests whose &#x60;hashToSign&#x60; property is equal are returned.  | [optional] 

### Return type

[**SignatureRequests**](SignatureRequests.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="signSignatureRequest"></a>
# **signSignatureRequest**
> SignatureRequestSignResult signSignatureRequest(requestId, signature)

Sign a signature request.

Use this operation to register a signature for a signature request.&lt;br&gt; The signature is automatically anchored (on behalf of the owner of the signature request). The signature anchor created is added to the list of signature anchors of the signature request. This is a publicly accessible endpoint: authentication is not required to register a signature. 

### Example
```javascript
var WoleetApi = require('woleet_api');

var apiInstance = new WoleetApi.SignatureRequestApi();

var requestId = "requestId_example"; // String | Identifier of the signature request.

var signature = new WoleetApi.SignatureRequestSign(); // SignatureRequestSign | Signature to register.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signSignatureRequest(requestId, signature, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Identifier of the signature request. | 
 **signature** | [**SignatureRequestSign**](SignatureRequestSign.md)| Signature to register. | 

### Return type

[**SignatureRequestSignResult**](SignatureRequestSignResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateSignatureRequest"></a>
# **updateSignatureRequest**
> SignatureRequest updateSignatureRequest(requestId, request)

Update a signature request.

Use this operation to update a signature request.&lt;br&gt; Only the properties &#x60;name&#x60;, &#x60;suspended&#x60;, &#x60;deadline&#x60;, &#x60;maxSignatures&#x60; and &#x60;authorizedSignees&#x60; can be modified.&lt;br&gt; 

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

var apiInstance = new WoleetApi.SignatureRequestApi();

var requestId = "requestId_example"; // String | Identifier of signature request to update.

var request = new WoleetApi.SignatureRequest(); // SignatureRequest | SignatureRequest object to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSignatureRequest(requestId, request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | **String**| Identifier of signature request to update. | 
 **request** | [**SignatureRequest**](SignatureRequest.md)| SignatureRequest object to update. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
