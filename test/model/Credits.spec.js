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
    instance = new WoleetApi.Credits();
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

  describe('Credits', function() {
    it('should create an instance of Credits', function() {
      // uncomment below and update the code to test Credits
      //var instance = new WoleetApi.Credits();
      //expect(instance).to.be.a(WoleetApi.Credits);
    });

    it('should have the property credits (base name: "credits")', function() {
      // uncomment below and update the code to test the property credits
      //var instance = new WoleetApi.Credits();
      //expect(instance).to.be();
    });

    it('should have the property signCredits (base name: "signCredits")', function() {
      // uncomment below and update the code to test the property signCredits
      //var instance = new WoleetApi.Credits();
      //expect(instance).to.be();
    });

  });

}));
