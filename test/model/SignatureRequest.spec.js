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
    instance = new WoleetApi.SignatureRequest();
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

  describe('SignatureRequest', function() {
    it('should create an instance of SignatureRequest', function() {
      // uncomment below and update the code to test SignatureRequest
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be.a(WoleetApi.SignatureRequest);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property suspended (base name: "suspended")', function() {
      // uncomment below and update the code to test the property suspended
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property hashToSign (base name: "hashToSign")', function() {
      // uncomment below and update the code to test the property hashToSign
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property anchors (base name: "anchors")', function() {
      // uncomment below and update the code to test the property anchors
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property deadline (base name: "deadline")', function() {
      // uncomment below and update the code to test the property deadline
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxSignatures (base name: "maxSignatures")', function() {
      // uncomment below and update the code to test the property maxSignatures
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

    it('should have the property authorizedSignees (base name: "authorizedSignees")', function() {
      // uncomment below and update the code to test the property authorizedSignees
      //var instance = new WoleetApi.SignatureRequest();
      //expect(instance).to.be();
    });

  });

}));
