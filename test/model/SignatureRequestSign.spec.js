/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.3
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
    instance = new WoleetApi.SignatureRequestSign();
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

  describe('SignatureRequestSign', function() {
    it('should create an instance of SignatureRequestSign', function() {
      // uncomment below and update the code to test SignatureRequestSign
      //var instance = new WoleetApi.SignatureRequestSign();
      //expect(instance).to.be.a(WoleetApi.SignatureRequestSign);
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instance = new WoleetApi.SignatureRequestSign();
      //expect(instance).to.be();
    });

    it('should have the property pubKey (base name: "pubKey")', function() {
      // uncomment below and update the code to test the property pubKey
      //var instance = new WoleetApi.SignatureRequestSign();
      //expect(instance).to.be();
    });

    it('should have the property identityURL (base name: "identityURL")', function() {
      // uncomment below and update the code to test the property identityURL
      //var instance = new WoleetApi.SignatureRequestSign();
      //expect(instance).to.be();
    });

  });

}));
