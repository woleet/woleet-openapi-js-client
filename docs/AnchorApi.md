# WoleetApi.AnchorApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAnchor**](AnchorApi.md#createAnchor) | **POST** /anchor | Create a new anchor.
[**deleteAnchor**](AnchorApi.md#deleteAnchor) | **DELETE** /anchor/{anchorId} | Delete an anchor.
[**getAnchor**](AnchorApi.md#getAnchor) | **GET** /anchor/{anchorId} | Get an anchor by its identifier.
[**getAnchorAttestation**](AnchorApi.md#getAnchorAttestation) | **GET** /anchor/{anchorId}/attestation | Download the Proof Attestation document of an anchor.
[**searchAnchorIds**](AnchorApi.md#searchAnchorIds) | **GET** /anchorIds | Search for public anchor identifiers.
[**searchAnchors**](AnchorApi.md#searchAnchors) | **GET** /anchors | Search for anchors.
[**updateAnchor**](AnchorApi.md#updateAnchor) | **PUT** /anchor/{anchorId} | Update an anchor.



## createAnchor

> Anchor createAnchor(anchor)

Create a new anchor.

Use this operation to create a new anchor of one of these two types: - a **data anchor** (to generate a *proof of timestamp* allowing to prove the existence of a data at some point in time) - a **signature anchor** (to generate a *proof of seal* allowing to prove the existence of the signature of a data at some point in time, the validity of the signature and the identity of the signer)  The properties &#x60;id&#x60;, &#x60;created&#x60;, &#x60;lastModified&#x60;, &#x60;status&#x60;, &#x60;timestamp&#x60; and &#x60;confirmations&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned anchor.&lt;br&gt; For data anchors, only the properties &#x60;name&#x60; and &#x60;hash&#x60; are required: the &#x60;hash&#x60; property must be the SHA256 hash of the data to anchor, and must be computed caller side. This allows not to leak the original data.&lt;br&gt; For signature anchors, only the properties &#x60;name&#x60;, &#x60;signedHash&#x60;, &#x60;signature&#x60; and &#x60;pubKey&#x60; are required.&lt;br&gt; Be sure to have at least 1 timestamp credit (for a data anchor) or 1 seal credit (for a signature anchor). 

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

let apiInstance = new WoleetApi.AnchorApi();
let anchor = new WoleetApi.Anchor(); // Anchor | Anchor object to create.
apiInstance.createAnchor(anchor, (error, data, response) => {
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
 **anchor** | [**Anchor**](Anchor.md)| Anchor object to create. | 

### Return type

[**Anchor**](Anchor.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAnchor

> deleteAnchor(anchorId)

Delete an anchor.

Use this operation to delete an anchor.&lt;br&gt; **WARNING: You should never delete an anchor, otherwise you will no longer be able to download its proof receipt.&lt;br&gt; Use this for test purpose only.** 

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

let apiInstance = new WoleetApi.AnchorApi();
let anchorId = "anchorId_example"; // String | Identifier of the anchor to delete.
apiInstance.deleteAnchor(anchorId, (error, data, response) => {
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
 **anchorId** | **String**| Identifier of the anchor to delete. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAnchor

> Anchor getAnchor(anchorId)

Get an anchor by its identifier.

Use this operation to retrieve an anchor by its identifier.

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

let apiInstance = new WoleetApi.AnchorApi();
let anchorId = "anchorId_example"; // String | Identifier of the anchor to retrieve.
apiInstance.getAnchor(anchorId, (error, data, response) => {
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
 **anchorId** | **String**| Identifier of the anchor to retrieve. | 

### Return type

[**Anchor**](Anchor.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAnchorAttestation

> File getAnchorAttestation(anchorId)

Download the Proof Attestation document of an anchor.

Use this operation to retrieve the Proof Attestation document of an anchor.&lt;br&gt; This PDF file is only available once the anchor status is CONFIRMED. 

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

let apiInstance = new WoleetApi.AnchorApi();
let anchorId = "anchorId_example"; // String | Identifier of the anchor.
apiInstance.getAnchorAttestation(anchorId, (error, data, response) => {
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
 **anchorId** | **String**| Identifier of the anchor. | 

### Return type

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAnchorIds

> AnchorIds searchAnchorIds(opts)

Search for public anchor identifiers.

Use this operation to retrieve the identifiers of all public anchors having a given &#x60;hash&#x60; and/or &#x60;signedHash&#x60; property.&lt;br&gt; Only public anchor identifiers are returned.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve public anchor identifiers.&lt;br&gt; Paging is supported. 

### Example

```javascript
import WoleetApi from 'woleet_api';

let apiInstance = new WoleetApi.AnchorApi();
let opts = {
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of anchor identifiers per page.
  'hash': "hash_example", // String | `hash` to search for: all public anchors whose `hash` property is equal are returned. 
  'signedHash': "signedHash_example", // String | `signedHash` to search for: all public anchors whose `signedHash` property is equal are returned. 
  'userId': "userId_example" // String | User identifier to use to filter out results: only public anchors belonging to this user are returned. 
};
apiInstance.searchAnchorIds(opts, (error, data, response) => {
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
 **page** | **Number**| Index of the page to retrieve (from 0). | [optional] [default to 0]
 **size** | **Number**| Number of anchor identifiers per page. | [optional] [default to 20]
 **hash** | **String**| &#x60;hash&#x60; to search for: all public anchors whose &#x60;hash&#x60; property is equal are returned.  | [optional] 
 **signedHash** | **String**| &#x60;signedHash&#x60; to search for: all public anchors whose &#x60;signedHash&#x60; property is equal are returned.  | [optional] 
 **userId** | **String**| User identifier to use to filter out results: only public anchors belonging to this user are returned.  | [optional] 

### Return type

[**AnchorIds**](AnchorIds.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAnchors

> Anchors searchAnchors(opts)

Search for anchors.

Use this operation to retrieve all anchors having a given &#x60;name&#x60;, &#x60;hash&#x60;, &#x60;signedHash&#x60; and/or &#x60;tags&#x60; property.&lt;br&gt; Only anchors belonging to the authenticated user are returned.&lt;br&gt; Paging and sorting is supported. 

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

let apiInstance = new WoleetApi.AnchorApi();
let opts = {
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of anchors per page.
  'direction': "'ASC'", // String | Sorting direction: ASC for ascending DESC for descending. 
  'sort': "'created'", // String | Sorting property: possible values are limited to `created`, `hash` and `signedHash`. 
  'name': "name_example", // String | `name` to search for: all anchors whose `name` property contains this sub-string are returned.<br> **WARNING: Searching by name can timeout on a large anchor set.** 
  'hash': "hash_example", // String | `hash` to search for: all anchors whose `hash` property is equal are returned. 
  'signedHash': "signedHash_example", // String | `signedHash` to search for: all anchors whose `signedHash` property is equal are returned. 
  'tags': ["null"] // [String] | Tags to search for: all anchors having all of these tags sets are returned. 
};
apiInstance.searchAnchors(opts, (error, data, response) => {
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
 **page** | **Number**| Index of the page to retrieve (from 0). | [optional] [default to 0]
 **size** | **Number**| Number of anchors per page. | [optional] [default to 20]
 **direction** | **String**| Sorting direction: ASC for ascending DESC for descending.  | [optional] [default to &#39;ASC&#39;]
 **sort** | **String**| Sorting property: possible values are limited to &#x60;created&#x60;, &#x60;hash&#x60; and &#x60;signedHash&#x60;.  | [optional] [default to &#39;created&#39;]
 **name** | **String**| &#x60;name&#x60; to search for: all anchors whose &#x60;name&#x60; property contains this sub-string are returned.&lt;br&gt; **WARNING: Searching by name can timeout on a large anchor set.**  | [optional] 
 **hash** | **String**| &#x60;hash&#x60; to search for: all anchors whose &#x60;hash&#x60; property is equal are returned.  | [optional] 
 **signedHash** | **String**| &#x60;signedHash&#x60; to search for: all anchors whose &#x60;signedHash&#x60; property is equal are returned.  | [optional] 
 **tags** | [**[String]**](String.md)| Tags to search for: all anchors having all of these tags sets are returned.  | [optional] 

### Return type

[**Anchors**](Anchors.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateAnchor

> Anchor updateAnchor(anchorId, anchor)

Update an anchor.

Use this operation to update an anchor.&lt;br&gt; Only the properties &#x60;name&#x60;, &#x60;public&#x60;, &#x60;tags&#x60;, &#x60;metadata&#x60; and &#x60;callbackURL&#x60; can be modified. 

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

let apiInstance = new WoleetApi.AnchorApi();
let anchorId = "anchorId_example"; // String | Identifier of anchor to update.
let anchor = new WoleetApi.Anchor(); // Anchor | Anchor object to update.
apiInstance.updateAnchor(anchorId, anchor, (error, data, response) => {
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
 **anchorId** | **String**| Identifier of anchor to update. | 
 **anchor** | [**Anchor**](Anchor.md)| Anchor object to update. | 

### Return type

[**Anchor**](Anchor.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

