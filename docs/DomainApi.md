# WoleetApi.DomainApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDomainUser**](DomainApi.md#createDomainUser) | **POST** /domain/admin/user | Create a new domain user.
[**deleteDomainUser**](DomainApi.md#deleteDomainUser) | **DELETE** /domain/admin/user/{userid} | Delete a domain user.
[**getDomainUser**](DomainApi.md#getDomainUser) | **GET** /domain/admin/user/{userid} | Get a domain user by its identifier.
[**searchDomainUsers**](DomainApi.md#searchDomainUsers) | **GET** /domain/admin/users | Search for domain users.
[**updateDomainUser**](DomainApi.md#updateDomainUser) | **PUT** /domain/admin/user/{userid} | Update a domain user.


<a name="createDomainUser"></a>
# **createDomainUser**
> User createDomainUser(user)

Create a new domain user.

Use this operation to create a new domain user.&lt;br&gt;  The properties &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastModified&#x60;, &#x60;status&#x60;, &#x60;timestamp&#x60; and &#x60;confirmations&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned anchor. 

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

var apiInstance = new WoleetApi.DomainApi();

var user = new WoleetApi.User(); // User | User object to create (password must be provided).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createDomainUser(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User object to create (password must be provided). | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteDomainUser"></a>
# **deleteDomainUser**
> deleteDomainUser(userid)

Delete a domain user.

Use this operation to delete a domain user.

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

var apiInstance = new WoleetApi.DomainApi();

var userid = "userid_example"; // String | Identifier of the domain user to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteDomainUser(userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| Identifier of the domain user to delete. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDomainUser"></a>
# **getDomainUser**
> User getDomainUser(userid)

Get a domain user by its identifier.

Use this operation to retrieve a domain user by its identifier.

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

var apiInstance = new WoleetApi.DomainApi();

var userid = "userid_example"; // String | Identifier of the domain user to retrieve.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDomainUser(userid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| Identifier of the domain user to retrieve. | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchDomainUsers"></a>
# **searchDomainUsers**
> Users searchDomainUsers(opts)

Search for domain users.

Use this operation to retrieve all domain users having a given &#x60;email&#x60; property.&lt;br&gt; Paging and sorting is supported. 

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

var apiInstance = new WoleetApi.DomainApi();

var opts = { 
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of users per page.
  'direction': "ASC", // String | Sorting direction: ASC for ascending DESC for descending. 
  'sort': "created", // String | Sorting property: possible values are limited to `created`, `email`, `status` and `roles`. 
  'email': "email_example" // String | email to search for: a sub-string or regex of the email. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchDomainUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| Index of the page to retrieve (from 0). | [optional] [default to 0]
 **size** | **Number**| Number of users per page. | [optional] [default to 20]
 **direction** | **String**| Sorting direction: ASC for ascending DESC for descending.  | [optional] [default to ASC]
 **sort** | **String**| Sorting property: possible values are limited to &#x60;created&#x60;, &#x60;email&#x60;, &#x60;status&#x60; and &#x60;roles&#x60;.  | [optional] [default to created]
 **email** | **String**| email to search for: a sub-string or regex of the email.  | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateDomainUser"></a>
# **updateDomainUser**
> User updateDomainUser(userid, user)

Update a domain user.

Use this operation to update a domain user.

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

var apiInstance = new WoleetApi.DomainApi();

var userid = "userid_example"; // String | Identifier of the domain user to update.

var user = new WoleetApi.User(); // User | User object to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDomainUser(userid, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userid** | **String**| Identifier of the domain user to update. | 
 **user** | [**User**](User.md)| User object to update. | 

### Return type

[**User**](User.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

