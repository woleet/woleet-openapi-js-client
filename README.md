# woleet_api

WoleetApi - JavaScript client for woleet_api
Welcome to **Woleet API reference documentation**.<br>
It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation.

This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.13.0
- Package version: 1.13.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.woleet.io/](https://www.woleet.io/)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install woleet_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your woleet_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
*WoleetApi.AnchorApi* | [**deleteAnchor**](docs/AnchorApi.md#deleteAnchor) | **DELETE** /anchor/{anchorId} | Delete an anchor.
*WoleetApi.AnchorApi* | [**getAnchor**](docs/AnchorApi.md#getAnchor) | **GET** /anchor/{anchorId} | Get an anchor by its identifier.
*WoleetApi.AnchorApi* | [**getAnchorAttestation**](docs/AnchorApi.md#getAnchorAttestation) | **GET** /anchor/{anchorId}/attestation | Download the Proof Attestation document of an anchor.
*WoleetApi.AnchorApi* | [**searchAnchorIds**](docs/AnchorApi.md#searchAnchorIds) | **GET** /anchorIds | Search for public anchor identifiers.
*WoleetApi.AnchorApi* | [**searchAnchors**](docs/AnchorApi.md#searchAnchors) | **GET** /anchors | Search for anchors.
*WoleetApi.AnchorApi* | [**updateAnchor**](docs/AnchorApi.md#updateAnchor) | **PUT** /anchor/{anchorId} | Update an anchor.
*WoleetApi.ReceiptApi* | [**getOTSReceipt**](docs/ReceiptApi.md#getOTSReceipt) | **GET** /receipt/{anchorId}/ots | Get the proof receipt of an anchor (OpenTimestamps proof format).
*WoleetApi.ReceiptApi* | [**getReceipt**](docs/ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorId} | Get the proof receipt of an anchor.
*WoleetApi.ReceiptApi* | [**verifyReceipt**](docs/ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.
*WoleetApi.SignatureRequestApi* | [**createSignatureRequest**](docs/SignatureRequestApi.md#createSignatureRequest) | **POST** /signatureRequest | Create a new signature request.
*WoleetApi.SignatureRequestApi* | [**delegateSignSignatureRequest**](docs/SignatureRequestApi.md#delegateSignSignatureRequest) | **POST** /signatureRequest/{requestId}/delegate | Sign a signature request by delegating the signature.
*WoleetApi.SignatureRequestApi* | [**deleteSignatureRequest**](docs/SignatureRequestApi.md#deleteSignatureRequest) | **DELETE** /signatureRequest/{requestId} | Delete a signature request.
*WoleetApi.SignatureRequestApi* | [**downloadSignatureRequestFile**](docs/SignatureRequestApi.md#downloadSignatureRequestFile) | **GET** /signatureRequest/{requestId}/file | Download the file to sign.
*WoleetApi.SignatureRequestApi* | [**getSignatureRequest**](docs/SignatureRequestApi.md#getSignatureRequest) | **GET** /signatureRequest/{requestId} | Get a signature request by its identifier.
*WoleetApi.SignatureRequestApi* | [**getSignatureRequestAttestation**](docs/SignatureRequestApi.md#getSignatureRequestAttestation) | **GET** /signatureRequest/{requestId}/attestation | Download the Signature Attestation document of a signature request.
*WoleetApi.SignatureRequestApi* | [**getSignatureRequestProofBundle**](docs/SignatureRequestApi.md#getSignatureRequestProofBundle) | **GET** /signatureRequest/{requestId}/proofbundle | Get the proof bundle of a signature request.
*WoleetApi.SignatureRequestApi* | [**reportSignatureRequestEvent**](docs/SignatureRequestApi.md#reportSignatureRequestEvent) | **POST** /signatureRequest/{requestId}/event | Report an event on a signature request.
*WoleetApi.SignatureRequestApi* | [**reportSignatureRequestFeedback**](docs/SignatureRequestApi.md#reportSignatureRequestFeedback) | **POST** /signatureRequest/{requestId}/feedback | Report a feedback about a signature request.
*WoleetApi.SignatureRequestApi* | [**searchSignatureRequestIds**](docs/SignatureRequestApi.md#searchSignatureRequestIds) | **GET** /signatureRequestIds | Search for public signature request identifiers.
*WoleetApi.SignatureRequestApi* | [**searchSignatureRequests**](docs/SignatureRequestApi.md#searchSignatureRequests) | **GET** /signatureRequests | Search for signature requests.
*WoleetApi.SignatureRequestApi* | [**sendSignatureRequestOTP**](docs/SignatureRequestApi.md#sendSignatureRequestOTP) | **GET** /signatureRequest/{requestId}/otp/{signeeId} | Generate and send an OTP to a signer of a signature request.
*WoleetApi.SignatureRequestApi* | [**sendSignatureRequestReminder**](docs/SignatureRequestApi.md#sendSignatureRequestReminder) | **POST** /signatureRequest/{requestId}/remind | Send a reminder email to a set of signers of a signature request.
*WoleetApi.SignatureRequestApi* | [**signSignatureRequest**](docs/SignatureRequestApi.md#signSignatureRequest) | **POST** /signatureRequest/{requestId}/sign | Sign a signature request by registering a signature.
*WoleetApi.SignatureRequestApi* | [**transitionSignatureRequest**](docs/SignatureRequestApi.md#transitionSignatureRequest) | **POST** /signatureRequest/{requestId}/transition | Change the state of a signature request.
*WoleetApi.SignatureRequestApi* | [**updateSignatureRequest**](docs/SignatureRequestApi.md#updateSignatureRequest) | **PUT** /signatureRequest/{requestId} | Update a signature request.
*WoleetApi.SignatureRequestApi* | [**uploadSignatureRequestFile**](docs/SignatureRequestApi.md#uploadSignatureRequestFile) | **POST** /signatureRequest/{requestId}/file | Upload the file to sign.
*WoleetApi.TokenApi* | [**generateToken**](docs/TokenApi.md#generateToken) | **GET** /token | Generate a JWT token.
*WoleetApi.TokenApi* | [**revokeToken**](docs/TokenApi.md#revokeToken) | **DELETE** /token | Revoke a JWT token.
*WoleetApi.UserApi* | [**getCallbackSecret**](docs/UserApi.md#getCallbackSecret) | **GET** /user/callbackSecret | Get the current callback secret (null if not set).
*WoleetApi.UserApi* | [**getCredits**](docs/UserApi.md#getCredits) | **GET** /user/credits | Get user&#39;s credits.
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
 - [WoleetApi.Key](docs/Key.md)
 - [WoleetApi.Receipt](docs/Receipt.md)
 - [WoleetApi.ReceiptAnchorsNode](docs/ReceiptAnchorsNode.md)
 - [WoleetApi.ReceiptProofNode](docs/ReceiptProofNode.md)
 - [WoleetApi.ReceiptSignature](docs/ReceiptSignature.md)
 - [WoleetApi.ReceiptVerificationStatus](docs/ReceiptVerificationStatus.md)
 - [WoleetApi.SignatureRequest](docs/SignatureRequest.md)
 - [WoleetApi.SignatureRequestDelegate](docs/SignatureRequestDelegate.md)
 - [WoleetApi.SignatureRequestEvent](docs/SignatureRequestEvent.md)
 - [WoleetApi.SignatureRequestFeedback](docs/SignatureRequestFeedback.md)
 - [WoleetApi.SignatureRequestIds](docs/SignatureRequestIds.md)
 - [WoleetApi.SignatureRequestProofBundle](docs/SignatureRequestProofBundle.md)
 - [WoleetApi.SignatureRequestSign](docs/SignatureRequestSign.md)
 - [WoleetApi.SignatureRequestSignResult](docs/SignatureRequestSignResult.md)
 - [WoleetApi.SignatureRequestState](docs/SignatureRequestState.md)
 - [WoleetApi.SignatureRequests](docs/SignatureRequests.md)
 - [WoleetApi.SignatureVerificationStatus](docs/SignatureVerificationStatus.md)
 - [WoleetApi.SignedIdentity](docs/SignedIdentity.md)
 - [WoleetApi.TimestampVerificationStatus](docs/TimestampVerificationStatus.md)
 - [WoleetApi.Token](docs/Token.md)
 - [WoleetApi.Tokens](docs/Tokens.md)
 - [WoleetApi.Watcher](docs/Watcher.md)
 - [WoleetApi.X500Name](docs/X500Name.md)
 - [WoleetApi.X509SubjectIssuer](docs/X509SubjectIssuer.md)


## Documentation for Authorization



### BasicAuth

- **Type**: HTTP basic authentication



### JWTAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

