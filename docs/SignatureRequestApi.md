# WoleetApi.SignatureRequestApi

All URIs are relative to *https://api.woleet.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSignatureRequest**](SignatureRequestApi.md#createSignatureRequest) | **POST** /signatureRequest | Create a new signature request.
[**delegateSignatureRequest**](SignatureRequestApi.md#delegateSignatureRequest) | **POST** /signatureRequest/{requestId}/delegate | Sign a signature request by delegating the signature.
[**deleteSignatureRequest**](SignatureRequestApi.md#deleteSignatureRequest) | **DELETE** /signatureRequest/{requestId} | Delete a signature request.
[**downloadSignatureRequestFile**](SignatureRequestApi.md#downloadSignatureRequestFile) | **GET** /signatureRequest/{requestId}/file | Download the file to sign.
[**getSignatureRequest**](SignatureRequestApi.md#getSignatureRequest) | **GET** /signatureRequest/{requestId} | Get a signature request by its identifier.
[**getSignatureRequestAttestation**](SignatureRequestApi.md#getSignatureRequestAttestation) | **GET** /signatureRequest/{requestId}/attestation | Download the Signature Attestation document of a signature request.
[**getSignatureRequestProofBundle**](SignatureRequestApi.md#getSignatureRequestProofBundle) | **GET** /signatureRequest/{requestId}/proofbundle | Get the proof bundle of a signature request.
[**reportSignatureRequestFeedback**](SignatureRequestApi.md#reportSignatureRequestFeedback) | **POST** /signatureRequest/{requestId}/feedback | Report feedback about a signature request.
[**searchSignatureRequestIds**](SignatureRequestApi.md#searchSignatureRequestIds) | **GET** /signatureRequestIds | Search for public signature request identifiers.
[**searchSignatureRequests**](SignatureRequestApi.md#searchSignatureRequests) | **GET** /signatureRequests | Search for signature requests.
[**sendSignatureRequestOTP**](SignatureRequestApi.md#sendSignatureRequestOTP) | **GET** /signatureRequest/{requestId}/otp/{signeeId} | Generate and send an OTP to a signer of a signature request.
[**sendSignatureRequestReminder**](SignatureRequestApi.md#sendSignatureRequestReminder) | **POST** /signatureRequest/{requestId}/remind | Send a reminder email to a set of signers of a signature request.
[**signSignatureRequest**](SignatureRequestApi.md#signSignatureRequest) | **POST** /signatureRequest/{requestId}/sign | Sign a signature request by registering a signature.
[**transitionSignatureRequest**](SignatureRequestApi.md#transitionSignatureRequest) | **POST** /signatureRequest/{requestId}/transition | Change the state of a signature request.
[**updateSignatureRequest**](SignatureRequestApi.md#updateSignatureRequest) | **PUT** /signatureRequest/{requestId} | Update a signature request.
[**uploadSignatureRequestFile**](SignatureRequestApi.md#uploadSignatureRequestFile) | **POST** /signatureRequest/{requestId}/file | Upload the file to sign.



## createSignatureRequest

> SignatureRequest createSignatureRequest(signatureRequest)

Create a new signature request.

Use this operation to create a new signature request.&lt;br&gt; The properties &#x60;id&#x60;, &#x60;created&#x60; and &#x60;lastModified&#x60; are read-only and so must not be provided: they are managed by the platform and added to the returned request.&lt;br&gt; Only the properties &#x60;name&#x60; and &#x60;hashToSign&#x60; are required: the &#x60;hashToSign&#x60; property must be the SHA256 hash of the file to sign.&lt;br&gt; Be sure to have enough signature and anchoring credits on your account to fulfill the signature request (each registered signature costs you 1 signature and 1 anchoring credit).&lt;br&gt; 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let signatureRequest = new WoleetApi.SignatureRequest(); // SignatureRequest | SignatureRequest object to create.
apiInstance.createSignatureRequest(signatureRequest, (error, data, response) => {
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
 **signatureRequest** | [**SignatureRequest**](SignatureRequest.md)| SignatureRequest object to create. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## delegateSignatureRequest

> SignatureRequestSignResult delegateSignatureRequest(requestId, delegate)

Sign a signature request by delegating the signature.

A signer can use this operation to sign a signature request by delegating the signature to the platform.&lt;br&gt; This operation is only available when the email of the signer is set: since the secret identifier is sent by email to the signer, he/she can provide it back to authenticate.&lt;br&gt; When using this signature mode, the signer&#39;s identity and signature key is controled by the platform, which act as a trusted third party.&lt;br&gt; The signature is automatically anchored on behalf of the owner of the signature request.&lt;br&gt; The signature anchor created is added to the list of signature anchors of the signature request.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to delegate a signature (authentication of the signers, when required, rely on their knowledge of their secret identifier and OTP, or on their control of their public key). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let delegate = new WoleetApi.SignatureRequestDelegate(); // SignatureRequestDelegate | Authentication information about the signer.
apiInstance.delegateSignatureRequest(requestId, delegate, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **delegate** | [**SignatureRequestDelegate**](SignatureRequestDelegate.md)| Authentication information about the signer. | 

### Return type

[**SignatureRequestSignResult**](SignatureRequestSignResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSignatureRequest

> deleteSignatureRequest(requestId)

Delete a signature request.

Use this operation to delete a signature request.

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request to delete.
apiInstance.deleteSignatureRequest(requestId, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request to delete. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## downloadSignatureRequestFile

> File downloadSignatureRequestFile(requestId)

Download the file to sign.

Use this operation to download the file to be signed for a signature request.&lt;br&gt; The name of the file is included in the &#x60;Content-Disposition&#x60; header (see https://www.ietf.org/rfc/rfc6266.txt). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
apiInstance.downloadSignatureRequestFile(requestId, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 

### Return type

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getSignatureRequest

> SignatureRequest getSignatureRequest(requestId, opts)

Get a signature request by its identifier.

Use this operation to retrieve a signature request by its identifier.

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request to retrieve.
let opts = {
  'signeeId': "signeeId_example" // String | Secret identifier of the signer wanting to retrieve the signature request.<br> If set, information related to this signer is guaranteed to be returned in `authorizedSignees[0]`.<br> **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.** 
};
apiInstance.getSignatureRequest(requestId, opts, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request to retrieve. | 
 **signeeId** | **String**| Secret identifier of the signer wanting to retrieve the signature request.&lt;br&gt; If set, information related to this signer is guaranteed to be returned in &#x60;authorizedSignees[0]&#x60;.&lt;br&gt; **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.**  | [optional] 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSignatureRequestAttestation

> File getSignatureRequestAttestation(requestId)

Download the Signature Attestation document of a signature request.

Use this operation to retrieve the Signature Attestation document of a signature request.&lt;br&gt; This PDF file summarizes the signature request and includes the proof bundle attached.&lt;br&gt; The proof bundle is a JSON file containing all the pieces of evidence:&lt;br&gt; - the audit trail&lt;br&gt; - the proof receipt of the signature of the audit trail by the platform&lt;br&gt; - the proof receipts of the signature of the file by the signers&lt;br&gt; Consequently, the signature attestation is only available once all the following conditions are met:&lt;br&gt; - the signature request is COMPLETED (by the platform) or CLOSED (by the requester)&lt;br&gt; - all the proofs receipts are available (ie. have been anchored)&lt;br&gt; - the audit trail is generated and signed by the platform and its proof receipt is available (ie. is anchored)&lt;br&gt; Once these conditions are met, the platform generates and signs the signature attestation and set the &#x60;attestationAnchorId&#x60; property.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve the signature attestation of a signature request (but its identifier need to be known). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
apiInstance.getSignatureRequestAttestation(requestId, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 

### Return type

**File**

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSignatureRequestProofBundle

> GetSignatureRequestProofBundle getSignatureRequestProofBundle(requestId)

Get the proof bundle of a signature request.

Use this operation to retrieve the proof bundle of a signature request.&lt;br&gt; The proof bundle is a JSON file containing all the pieces of evidence:&lt;br&gt; - the audit trail&lt;br&gt; - the proof receipt of the signature of the audit trail by the platform&lt;br&gt; - the proof receipts of the signature of the file by the signers&lt;br&gt; Consequently, the proof bundle is only available once all the following conditions are met:&lt;br&gt; - the signature request is COMPLETED (by the platform) or CLOSED (by the requester)&lt;br&gt; - all the proofs receipts are available (ie. have been anchored)&lt;br&gt; - the audit trail is generated and signed by the platform and its proof receipt is available (ie. is anchored)&lt;br&gt; If this endpoint is called before all these conditions are met, it returns only the available proof receipts (with a 202 status).&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve the proof receipts of a signature request (but its identifier need to be known). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
apiInstance.getSignatureRequestProofBundle(requestId, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 

### Return type

[**GetSignatureRequestProofBundle**](GetSignatureRequestProofBundle.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reportSignatureRequestFeedback

> reportSignatureRequestFeedback(requestId, feedback)

Report feedback about a signature request.

A signer can use this operation to report a feedback to the owner of a signature request.&lt;br&gt; This operation is only available when the email of the signer is set: since the secret identifier is sent by email to the signer, he/she can provide it back to authenticate.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to report feedback (authentication of the signers, when required, rely on their knowledge of their secret identifier). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let feedback = new WoleetApi.SignatureRequestFeedback(); // SignatureRequestFeedback | Feedback to report.
apiInstance.reportSignatureRequestFeedback(requestId, feedback, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **feedback** | [**SignatureRequestFeedback**](SignatureRequestFeedback.md)| Feedback to report. | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## searchSignatureRequestIds

> SignatureRequestIds searchSignatureRequestIds(opts)

Search for public signature request identifiers.

Use this operation to retrieve the identifiers of all public signature requests having a given &#x60;hashToSign&#x60; property.&lt;br&gt; Only public signature request identifiers are returned.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to retrieve public signature request identifiers.&lt;br&gt; Paging is supported. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let opts = {
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of signature request identifiers per page.
  'hashToSign': "hashToSign_example" // String | `hashToSign` to search for: all public signature requests whose `hashToSign` property is equal are returned. 
};
apiInstance.searchSignatureRequestIds(opts, (error, data, response) => {
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
 **size** | **Number**| Number of signature request identifiers per page. | [optional] [default to 20]
 **hashToSign** | **String**| &#x60;hashToSign&#x60; to search for: all public signature requests whose &#x60;hashToSign&#x60; property is equal are returned.  | [optional] 

### Return type

[**SignatureRequestIds**](SignatureRequestIds.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchSignatureRequests

> SignatureRequests searchSignatureRequests(opts)

Search for signature requests.

Use this operation to retrieve all signature requests having a given &#x60;name&#x60; and/or &#x60;hashToSign&#x60; property.&lt;br&gt; Only requests belonging to the authenticated user are returned.&lt;br&gt; Paging and sorting is supported. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let opts = {
  'page': 0, // Number | Index of the page to retrieve (from 0).
  'size': 20, // Number | Number of anchors per page.
  'direction': "'ASC'", // String | Sorting direction: ASC for ascending DESC for descending. 
  'sort': "'created'", // String | Sorting property: possible values are limited to `created` and `hashToSign`. 
  'name': "name_example", // String | `name` to search for: all signature requests whose `name` property contains this sub-string are returned.<br> **WARNING: Searching by name can timeout on a large signature request set.** 
  'hashToSign': "hashToSign_example", // String | `hashToSign` to search for: all signature requests whose `hashToSign` property is equal are returned. 
  'state': ["null"] // [String] | `state` to search for: all signature requests having one of those state are returned. 
};
apiInstance.searchSignatureRequests(opts, (error, data, response) => {
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
 **sort** | **String**| Sorting property: possible values are limited to &#x60;created&#x60; and &#x60;hashToSign&#x60;.  | [optional] [default to &#39;created&#39;]
 **name** | **String**| &#x60;name&#x60; to search for: all signature requests whose &#x60;name&#x60; property contains this sub-string are returned.&lt;br&gt; **WARNING: Searching by name can timeout on a large signature request set.**  | [optional] 
 **hashToSign** | **String**| &#x60;hashToSign&#x60; to search for: all signature requests whose &#x60;hashToSign&#x60; property is equal are returned.  | [optional] 
 **state** | [**[String]**](String.md)| &#x60;state&#x60; to search for: all signature requests having one of those state are returned.  | [optional] 

### Return type

[**SignatureRequests**](SignatureRequests.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendSignatureRequestOTP

> sendSignatureRequestOTP(requestId, signeeId)

Generate and send an OTP to a signer of a signature request.

Use this operation to generate and send a new OTP (One Time Password) by SMS to a signer of a signature request.&lt;br&gt; This OTP can be used to sign during a maximum period of 10 mn. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let signeeId = "signeeId_example"; // String | Secret identifier of the signer wanting to retrieve his/her OTP.<br> **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.** 
apiInstance.sendSignatureRequestOTP(requestId, signeeId, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **signeeId** | **String**| Secret identifier of the signer wanting to retrieve his/her OTP.&lt;br&gt; **This secret identifier is generated by the platform and provided by email to the signer only. It allows the platform to authenticate the signer and verify his/her email address.**  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## sendSignatureRequestReminder

> sendSignatureRequestReminder(requestId, signeeEmails)

Send a reminder email to a set of signers of a signature request.

Use this operation to send a reminder email to a set of signers of a signature request.&lt;br&gt; This email reminds them that they have a document to sign. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let signeeEmails = ["john.doe@acme.com"]; // [String] | The list of emails of the authorized signers who will receive the reminder email. 
apiInstance.sendSignatureRequestReminder(requestId, signeeEmails, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **signeeEmails** | [**[String]**](String.md)| The list of emails of the authorized signers who will receive the reminder email.  | 

### Return type

null (empty response body)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## signSignatureRequest

> SignatureRequestSignResult signSignatureRequest(requestId, signature)

Sign a signature request by registering a signature.

A signer can use this operation to sign a signature request by registering a signature he/she procuded on his/her own.&lt;br&gt; The signature is automatically anchored on behalf of the owner of the signature request.&lt;br&gt; The signature anchor created is added to the list of signature anchors of the signature request.&lt;br&gt; This is a publicly accessible endpoint: authentication is not required to register a signature (authentication of the signers, when required, rely on their knowledge of their secret identifier and OTP, or on their control of their public key). 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let signature = new WoleetApi.SignatureRequestSign(); // SignatureRequestSign | Signature to register.
apiInstance.signSignatureRequest(requestId, signature, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **signature** | [**SignatureRequestSign**](SignatureRequestSign.md)| Signature to register. | 

### Return type

[**SignatureRequestSignResult**](SignatureRequestSignResult.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transitionSignatureRequest

> SignatureRequest transitionSignatureRequest(requestId, state)

Change the state of a signature request.

Use this operation to transition a **stateful** signature request to a new state.&lt;br&gt; Possible transitions are:&lt;br&gt; - from DRAFT to PENDING: start the signature request: the platform wait for the activation date (if any) and transition to IN_PROGRESS&lt;br&gt; - from PENDING to DRAFT: suspend the signature request: allow it to be updated&lt;br&gt; - from PENDING to CANCELED: cancel the signature request without waiting for the  activation date&lt;br&gt; - from IN_PROGRESS to CLOSED: close the signature request without waiting for all signatures to be colleted&lt;br&gt; - from IN_PROGRESS to CANCELED: cancel the signature request before all signatures get colleted&lt;br&gt; Note that **stateless** signature requests can only be transitioned to CLOSED, allowing to trigger the generation of the audit trail and the signature attestation. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let state = "state_example"; // String | New state of the signature request.
apiInstance.transitionSignatureRequest(requestId, state, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **state** | **String**| New state of the signature request. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSignatureRequest

> SignatureRequest updateSignatureRequest(requestId, request)

Update a signature request.

Use this operation to update a signature request.&lt;br&gt; Only the properties &#x60;name&#x60;, &#x60;public&#x60;, &#x60;callbackURL&#x60;, &#x60;activation&#x60;, &#x60;deadline&#x60;, &#x60;identityURL&#x60;, &#x60;fileName&#x60;, &#x60;fileURL&#x60;, &#x60;lang&#x60;, &#x60;vars&#x60;, &#x60;maxSignatures&#x60; and &#x60;authorizedSignees&#x60; can be modified.&lt;br&gt; Only **stateless** signature requests or **stateful** signature request in &#39;DRAFT&#39; state can be updated. 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of signature request to update.
let request = new WoleetApi.SignatureRequest(); // SignatureRequest | SignatureRequest object to update.
apiInstance.updateSignatureRequest(requestId, request, (error, data, response) => {
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
 **requestId** | **String**| Identifier of signature request to update. | 
 **request** | [**SignatureRequest**](SignatureRequest.md)| SignatureRequest object to update. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadSignatureRequestFile

> SignatureRequest uploadSignatureRequestFile(requestId, file)

Upload the file to sign.

Use this operation to upload the file to be signed for a signature request.&lt;br&gt; The SHA256 hash of the uploaded file must be equal to the &#x60;hashToSign&#x60; property of the signature request or the upload fails.&lt;br&gt; Once uploaded, the file is stored and the &#x60;fileURL&#x60; property of the signature request is set, so that it can be used by a signature application to download and present the file to the signers.&lt;br&gt; Only **stateless** signature requests or **stateful** signature request in &#39;DRAFT&#39; state can be updated. **WARNING: the storage of the file to be signed is provided for convenience only: it is not required, and you should never upload a file if you have any concern about its privacy.** 

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

let apiInstance = new WoleetApi.SignatureRequestApi();
let requestId = "requestId_example"; // String | Identifier of the signature request.
let file = "/path/to/file"; // File | The file to sign.
apiInstance.uploadSignatureRequestFile(requestId, file, (error, data, response) => {
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
 **requestId** | **String**| Identifier of the signature request. | 
 **file** | **File**| The file to sign. | 

### Return type

[**SignatureRequest**](SignatureRequest.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [JWTAuth](../README.md#JWTAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

