/**
 * Woleet API
 * Welcome to **Woleet API reference documentation**.<br> It is highly recommanded to read the chapters **[introducing Woleet API concepts](https://doc.woleet.io/v1.5.1/reference)** before reading this documentation. 
 *
 * OpenAPI spec version: 1.5.2
 * Contact: contact@woleet.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    instance = new WoleetApi.Receipt();
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

  describe('Receipt', function() {
    it('should create an instance of Receipt', function() {
      // uncomment below and update the code to test Receipt
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be.a(WoleetApi.Receipt);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property targetHash (base name: "targetHash")', function() {
      // uncomment below and update the code to test the property targetHash
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property merkleRoot (base name: "merkleRoot")', function() {
      // uncomment below and update the code to test the property merkleRoot
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property proof (base name: "proof")', function() {
      // uncomment below and update the code to test the property proof
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property anchors (base name: "anchors")', function() {
      // uncomment below and update the code to test the property anchors
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property header (base name: "header")', function() {
      // uncomment below and update the code to test the property header
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

    it('should have the property target (base name: "target")', function() {
      // uncomment below and update the code to test the property target
      //var instane = new WoleetApi.Receipt();
      //expect(instance).to.be();
    });

  });

}));
