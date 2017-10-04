# woleet_api

WoleetApi - JavaScript client for woleet_api
# Basics The Woleet API is an **HTTP REST API**. It supports **CORS** and provides **Basic authentication** and **JWT authentication**, allowing an easy and secure interaction with both web clients and backend applications.  The Woleet API is specified following the [Swagger/OpenAPI](https://openapis.org/) standard. You can get the specification file at https://api.woleet.io/swagger.yaml) and, from it, **generate client code for most languages using the [Swagger Editor](http://editor.swagger.io/?import=https://api.woleet.io/v1/swagger.json) or [Swagger Codegen](http://swagger.io/swagger-codegen/)**.  Ready to use versions of the client code are provided as open source code for [JavaScript/NodeJS](https://github.com/woleet/woleet-openapi-js-client) and [Java](https://github.com/woleet/woleet-openapi-java-client).  The API base URL is **https://api.woleet.io/v1**. # Authentication The Woleet API provides **[Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)** over HTTPS: use your email and password to authenticate.  The Woleet API also provides **[JWT authentication](https://jwt.io/)**: generate a JWT token by doing a `GET` call on the `/token` endpoint (using Basic authentication) and then provide this token to subsequent API calls in the `Authorization` header using the `Bearer` scheme. # Purpose The Woleet API provides an easy and cheap way to create **timestamped proofs of existence** and **timestamped proofs of signature** for your data (which can be of any type). Proofs created are **stored in the Bitcoin blockchain** and so are independent from Woleet (an access to the Bitcoin blockchain and some client side open source code is enough to verify proofs). Using the Woleet API, you can create durable and unfalsifiable cryptographic proofs usable to prove your data existed in a given state at a given date, and optionally was signed by a given signee.  The Woleet API creates **proofs of existence** conform to the open source standard [ChainPoint](https://www.chainpoint.org/). Consequently, they can be verified using any tool compatible with this standard, without any interaction with Woleet, and so remain **verifiable forever** even if Woleet stops its operations.  The Woleet API creates **proofs of signature** that are an extension of the same standard proposed by Woleet (we are actively involved in the standardization process). Thus, the existence and timestamp of a signature is verifiable using the same tools used to verify proofs of existence. When it comes to verifying the validity of the signature and the signee's identity, some additional processing is performed: since this processing can be fully performed client side with no additional data, proofs of signature remain **verifiable forever** even if Woleet stops its operations. # Creating proofs To create a **proof of existence** for a file, you need to create what we call an **'anchor'**. An anchor is basically a proof of existence creation request. To do so, you only need to compute the SHA256 hash of the file client side and choose a name for the anchor. Since the platform doesn't need the actual file, there is no limitation on the size or on the type of the file, and the file is not even leaked to Woleet.  To create a **proof of signature** for a file, you also need to create an anchor, and so to compute the SHA256 hash of the file and choose a name for the anchor, but some additional data is required: your public key (the one associated with the private key used to sign the SHA256 hash of the file) and your signature itself. Optionally, you can provide a URL allowing to verify your identity by ensuring you own the public key and the TLS certificate of the URL.  Newly created **anchors are automatically collected** by the platform and **recorded in the Bitcoin blockchain**: this can take from 10 mn to a few hours, depending on the load the the Bitcoin network and the level of priority of your user account. To check the state of your anchors, you can pull them using the Woleet API, or you can associate a URL to an anchor that the platform will call whenever the anchor status changes.  Once an anchor is recorded in the Bitcoin blockchain, you can retrieve its associated **proof receipt** using the Woleet API. Proof receipts **conform to the [ChainPoint](https://www.chainpoint.org/) standard receipt format** (with some extension when it comes to proofs of signature). The proof receipt is the only piece of data required to prove the existence/signature of a file at a given date (obviously the file itself is also required, since it is not included in the proof receipt). Thus, it is highly recommended you keep your proof receipts (and your files) in your own data store, so that you don't depend on the Woleet API to generate the proof receipt on-demand whenever you want to verify a file. # Verifying proofs Verifying a **proof of existence** using the Woleet API is straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, so you just need to check that the SHA256 hash of the file matches the proof receipt's `hash` property.  Verifying a **proof of signature** using the Woleet API is also straightforward: the API takes care of verifying that the proof receipt is valid and correctly anchored in a Bitcoin transaction, then verifies the signature, and optionally verifies that the signee owns the public key and the TLS certificate, so you just need to check that the SHA256 hash of the file matches the proof receipt's `signedHash` property.  The Woleet API can also be used to verify any ChainPoint standard receipts, including the ones created by other providers.  Woleet also provides an open source [JavaScript library for web clients](https://github.com/woleet/woleet-weblibs) implementing the full verification process without the help of the Woleet API. # About public and private anchors An anchor can be public (which is the default) or private.  A **private anchor** is only discoverable by its owner (see the `/anchors` endpoint). Thus, the owner needs to provide the proof receipt *and* the data to anyone wanting to verify the proof.  A **public anchor** is discoverable by anyone knowing the hash of the data (including people with no Woleet account, see the `/anchorids` endpoint). This allows anyone to retrieve the proof receipt using only the data hash as input, and then to verify it using the Woleet API or any other mean: - use the `/anchorids` endpoint to retrieve the anchor identifier by its hash - use the `receipt/{anchorid}` endpoint to retrieve the proof receipt. - use the `receipt/verify` endpoint (or any other Chainpoint compatible tool) to verify the proof receipt and get the data or signature timestamp.  # About the verification process For your understanding, here is a formal description of the verification process of a **proof of existence**: - compute the SHA256 hash of the file - check that the `target_hash` property of the proof receipt matches the hash of the file - check that the `target_proof` property of the proof receipt is a valid Merkle proof (see the [ChainPoint](https://www.chainpoint.org/) standard for this step) - retrieve the Bitcoin transaction matching the `tx_id` property of the proof receipt - check that the `OP_RETURN` field of the Bitcoin transaction matches the `merkle_root` property of the proof receipt  For **proof of signature**, an additional verification process is performed: - check that the SHA256 hash of the `signature` property matches its `target_hash` property - check that the `signature` property is a valid signature of the `signedHash` property for the public key stored in the `pubKey` property - additionally, if an `identityURL` property is available:   - call `identityURL` to make the callee sign some random data using the public key `pubKey`    - check that the returned signature is valid    - get the TLS certificates of the URL (it must be an HTTPS URL) to get insight about the signee's identity 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.3.1
- Package version: 1.3.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
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
*WoleetApi.ReceiptApi* | [**getReceipt**](docs/ReceiptApi.md#getReceipt) | **GET** /receipt/{anchorid} | Get the proof receipt of an anchor.
*WoleetApi.ReceiptApi* | [**verifyReceipt**](docs/ReceiptApi.md#verifyReceipt) | **POST** /receipt/verify | Verify a proof receipt.
*WoleetApi.SignatureRequestApi* | [**createSignatureRequest**](docs/SignatureRequestApi.md#createSignatureRequest) | **POST** /signatureRequest | Create a new signature request.
*WoleetApi.SignatureRequestApi* | [**deleteSignatureRequest**](docs/SignatureRequestApi.md#deleteSignatureRequest) | **DELETE** /signatureRequest/{requestId} | Delete a signature request.
*WoleetApi.SignatureRequestApi* | [**getSignatureRequest**](docs/SignatureRequestApi.md#getSignatureRequest) | **GET** /signatureRequest/{requestId} | Get a signature request by its identifier.
*WoleetApi.SignatureRequestApi* | [**searchSignatureRequests**](docs/SignatureRequestApi.md#searchSignatureRequests) | **GET** /signatureRequests | Search for signature requests.
*WoleetApi.SignatureRequestApi* | [**signSignatureRequest**](docs/SignatureRequestApi.md#signSignatureRequest) | **POST** /signatureRequest/{requestId}/sign | Sign a signature request.
*WoleetApi.SignatureRequestApi* | [**updateSignatureRequest**](docs/SignatureRequestApi.md#updateSignatureRequest) | **PUT** /signatureRequest/{requestId} | Update a signature request.
*WoleetApi.TokenApi* | [**generateToken**](docs/TokenApi.md#generateToken) | **GET** /token | Generate a JWT token.
*WoleetApi.TokenApi* | [**revokeToken**](docs/TokenApi.md#revokeToken) | **DELETE** /token | Revoke a JWT token.
*WoleetApi.UserApi* | [**getCredits**](docs/UserApi.md#getCredits) | **GET** /user/credits | Get remaining anchoring credits.


## Documentation for Models

 - [WoleetApi.Anchor](docs/Anchor.md)
 - [WoleetApi.AnchorIds](docs/AnchorIds.md)
 - [WoleetApi.Anchors](docs/Anchors.md)
 - [WoleetApi.AuthorizedSignee](docs/AuthorizedSignee.md)
 - [WoleetApi.Credits](docs/Credits.md)
 - [WoleetApi.IdentityVerificationStatus](docs/IdentityVerificationStatus.md)
 - [WoleetApi.Receipt](docs/Receipt.md)
 - [WoleetApi.ReceiptHeader](docs/ReceiptHeader.md)
 - [WoleetApi.ReceiptSignature](docs/ReceiptSignature.md)
 - [WoleetApi.ReceiptTarget](docs/ReceiptTarget.md)
 - [WoleetApi.ReceiptTargetProofNode](docs/ReceiptTargetProofNode.md)
 - [WoleetApi.ReceiptVerificationStatus](docs/ReceiptVerificationStatus.md)
 - [WoleetApi.SignatureRequest](docs/SignatureRequest.md)
 - [WoleetApi.SignatureRequestSign](docs/SignatureRequestSign.md)
 - [WoleetApi.SignatureRequestSignResult](docs/SignatureRequestSignResult.md)
 - [WoleetApi.SignatureRequests](docs/SignatureRequests.md)
 - [WoleetApi.Token](docs/Token.md)
 - [WoleetApi.X500Name](docs/X500Name.md)
 - [WoleetApi.X509SubjectIssuer](docs/X509SubjectIssuer.md)


## Documentation for Authorization


### BasicAuth

- **Type**: HTTP basic authentication

### JWTAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

