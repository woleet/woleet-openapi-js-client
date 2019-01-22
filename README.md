# woleet_api

WoleetApi - JavaScript client for woleet_api
Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.5.3
- Package version: 1.5.3
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.woleet.io/](https://www.woleet.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install woleet_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your woleet_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('woleet_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WoleetApi = require('woleet_api');

var defaultClient = WoleetApi.ApiClient.instance;

// Configure HTTP basic authorization: BasicAuth
var BasicAuth = defaultClient.authentications['BasicAuth'];
BasicAuth.username = 'YOUR USERNAME'
BasicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: JWTAuth
var JWTAuth = defaultClient.authentications['JWTAuth'];
JWTAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//JWTAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new WoleetApi.AnchorApi()
var anchor = new WoleetApi.Anchor(); // {Anchor} Anchor object to create.

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createAnchor(anchor, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.woleet.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WoleetApi.AnchorApi* | [**createAnchor**](docs/AnchorApi.md#createAnchor) | **POST** /anchor | Create a new anchor.
*WoleetApi.AnchorApi* | [**deleteAnchor**](docs/AnchorApi.md#deleteAnchor) | **DELETE** /anchor/{anchorid} | Delete an anchor.
*WoleetApi.AnchorApi* | [**getAnchor**](docs/AnchorApi.md#getAnchor) | **GET** /anchor/{anchorid} | Get an anchor by its identifier.
*WoleetApi.AnchorApi* | [**searchAnchorIds**](docs/AnchorApi.md#searchAnchorIds) | **GET** /anchorids | Search for public anchors&#39; identifiers.
*WoleetApi.AnchorApi* | [**searchAnchors**](docs/AnchorApi.md#searchAnchors) | **GET** /anchors | Search for anchors.
*WoleetApi.AnchorApi* | [**updateAnchor**](docs/AnchorApi.md#updateAnchor) | **PUT** /anchor/{anchorid} | Update an anchor.
*WoleetApi.DomainApi* | [**createDomainUser**](docs/DomainApi.md#createDomainUser) | **POST** /domain/admin/user | Create a new domain user.
*WoleetApi.DomainApi* | [**deleteDomainUser**](docs/DomainApi.md#deleteDomainUser) | **DELETE** /domain/admin/user/{userid} | Delete a domain user.
*WoleetApi.DomainApi* | [**getDomainUser**](docs/DomainApi.md#getDomainUser) | **GET** /domain/admin/user/{userid} | Get a domain user by its identifier.
*WoleetApi.DomainApi* | [**searchDomainUsers**](docs/DomainApi.md#searchDomainUsers) | **GET** /domain/admin/users | Search for domain users.
*WoleetApi.DomainApi* | [**updateDomainUser**](docs/DomainApi.md#updateDomainUser) | **PUT** /domain/admin/user/{userid} | Update a domain user.
*WoleetApi.ReceiptApi* | [**getOTSReceipt**](docs/ReceiptApi.md#getOTSReceipt) | **GET** /receipt/{anchorid}/ots | Get the proof receipt of an anchor (OpenTimestamps proof format).
*WoleetApi.ReceiptApi* | [**getReceipt**](docs/ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorid} | Get the proof receipt of an anchor (Chainpoint proof format).
*WoleetApi.ReceiptApi* | [**verifyReceipt**](docs/ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.
*WoleetApi.SignatureRequestApi* | [**createSignatureRequest**](docs/SignatureRequestApi.md#createSignatureRequest) | **POST** /signatureRequest | Create a new signature request.
*WoleetApi.SignatureRequestApi* | [**deleteSignatureRequest**](docs/SignatureRequestApi.md#deleteSignatureRequest) | **DELETE** /signatureRequest/{requestid} | Delete a signature request.
*WoleetApi.SignatureRequestApi* | [**getSignatureRequest**](docs/SignatureRequestApi.md#getSignatureRequest) | **GET** /signatureRequest/{requestid} | Get a signature request by its identifier.
*WoleetApi.SignatureRequestApi* | [**searchSignatureRequests**](docs/SignatureRequestApi.md#searchSignatureRequests) | **GET** /signatureRequests | Search for signature requests.
*WoleetApi.SignatureRequestApi* | [**signSignatureRequest**](docs/SignatureRequestApi.md#signSignatureRequest) | **POST** /signatureRequest/{requestid}/sign | Sign a signature request.
*WoleetApi.SignatureRequestApi* | [**updateSignatureRequest**](docs/SignatureRequestApi.md#updateSignatureRequest) | **PUT** /signatureRequest/{requestid} | Update a signature request.
*WoleetApi.TokenApi* | [**generateToken**](docs/TokenApi.md#generateToken) | **GET** /token | Generate a JWT token.
*WoleetApi.TokenApi* | [**revokeToken**](docs/TokenApi.md#revokeToken) | **DELETE** /token | Revoke a JWT token.
*WoleetApi.UserApi* | [**getCallbackSecret**](docs/UserApi.md#getCallbackSecret) | **GET** /user/callbackSecret | Get the currently used callback secret (null if not set).
*WoleetApi.UserApi* | [**getCredits**](docs/UserApi.md#getCredits) | **GET** /user/credits | Get user&#39;s anchoriong credits.
*WoleetApi.UserApi* | [**getTokens**](docs/UserApi.md#getTokens) | **GET** /user/tokens | Get user&#39;s registered JWT tokens.
*WoleetApi.UserApi* | [**putTokens**](docs/UserApi.md#putTokens) | **PUT** /user/tokens | Update user&#39;s registered JWT tokens.
*WoleetApi.UserApi* | [**updateCallbackSecret**](docs/UserApi.md#updateCallbackSecret) | **PUT** /user/callbackSecret | Generates a new callback secret.


## Documentation for Models

 - [WoleetApi.Anchor](docs/Anchor.md)
 - [WoleetApi.AnchorIds](docs/AnchorIds.md)
 - [WoleetApi.Anchors](docs/Anchors.md)
 - [WoleetApi.AuthorizedSignee](docs/AuthorizedSignee.md)
 - [WoleetApi.CallbackSecret](docs/CallbackSecret.md)
 - [WoleetApi.Credits](docs/Credits.md)
 - [WoleetApi.Identity](docs/Identity.md)
 - [WoleetApi.IdentityVerificationStatus](docs/IdentityVerificationStatus.md)
 - [WoleetApi.InlineObject](docs/InlineObject.md)
 - [WoleetApi.Receipt](docs/Receipt.md)
 - [WoleetApi.ReceiptAnchorsNode](docs/ReceiptAnchorsNode.md)
 - [WoleetApi.ReceiptHeader](docs/ReceiptHeader.md)
 - [WoleetApi.ReceiptProofNode](docs/ReceiptProofNode.md)
 - [WoleetApi.ReceiptSignature](docs/ReceiptSignature.md)
 - [WoleetApi.ReceiptTarget](docs/ReceiptTarget.md)
 - [WoleetApi.ReceiptTargetProofNode](docs/ReceiptTargetProofNode.md)
 - [WoleetApi.ReceiptVerificationStatus](docs/ReceiptVerificationStatus.md)
 - [WoleetApi.SignatureRequest](docs/SignatureRequest.md)
 - [WoleetApi.SignatureRequestSign](docs/SignatureRequestSign.md)
 - [WoleetApi.SignatureRequestSignResult](docs/SignatureRequestSignResult.md)
 - [WoleetApi.SignatureRequests](docs/SignatureRequests.md)
 - [WoleetApi.Token](docs/Token.md)
 - [WoleetApi.User](docs/User.md)
 - [WoleetApi.Users](docs/Users.md)
 - [WoleetApi.X500Name](docs/X500Name.md)
 - [WoleetApi.X509SubjectIssuer](docs/X509SubjectIssuer.md)


## Documentation for Authorization


### BasicAuth

- **Type**: HTTP basic authentication

### JWTAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

