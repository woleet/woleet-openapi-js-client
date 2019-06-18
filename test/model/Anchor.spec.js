/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.6.1
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WoleetApi);
  }
}(this, function(expect, WoleetApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WoleetApi.Anchor();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Anchor', function() {
    it('should create an instance of Anchor', function() {
      // uncomment below and update the code to test Anchor
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be.a(WoleetApi.Anchor);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property signedHash (base name: "signedHash")', function() {
      // uncomment below and update the code to test the property signedHash
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property pubKey (base name: "pubKey")', function() {
      // uncomment below and update the code to test the property pubKey
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property identityURL (base name: "identityURL")', function() {
      // uncomment below and update the code to test the property identityURL
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property notifyByEmail (base name: "notifyByEmail")', function() {
      // uncomment below and update the code to test the property notifyByEmail
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property callbackURL (base name: "callbackURL")', function() {
      // uncomment below and update the code to test the property callbackURL
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property timestamp (base name: "timestamp")', function() {
      // uncomment below and update the code to test the property timestamp
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property confirmations (base name: "confirmations")', function() {
      // uncomment below and update the code to test the property confirmations
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

    it('should have the property txId (base name: "txId")', function() {
      // uncomment below and update the code to test the property txId
      //var instance = new WoleetApi.Anchor();
      //expect(instance).to.be();
    });

  });

}));
