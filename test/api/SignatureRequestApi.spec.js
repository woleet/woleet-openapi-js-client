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
    instance = new WoleetApi.SignatureRequestApi();
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

  describe('SignatureRequestApi', function() {
    describe('createSignatureRequest', function() {
      it('should call createSignatureRequest successfully', function(done) {
        //uncomment below and update the code to test createSignatureRequest
        //instance.createSignatureRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSignatureRequest', function() {
      it('should call deleteSignatureRequest successfully', function(done) {
        //uncomment below and update the code to test deleteSignatureRequest
        //instance.deleteSignatureRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSignatureRequest', function() {
      it('should call getSignatureRequest successfully', function(done) {
        //uncomment below and update the code to test getSignatureRequest
        //instance.getSignatureRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSignatureRequests', function() {
      it('should call searchSignatureRequests successfully', function(done) {
        //uncomment below and update the code to test searchSignatureRequests
        //instance.searchSignatureRequests(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signSignatureRequest', function() {
      it('should call signSignatureRequest successfully', function(done) {
        //uncomment below and update the code to test signSignatureRequest
        //instance.signSignatureRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSignatureRequest', function() {
      it('should call updateSignatureRequest successfully', function(done) {
        //uncomment below and update the code to test updateSignatureRequest
        //instance.updateSignatureRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
