/**
 * Trieve API
 * Trieve OpenAPI Specification. This document describes all of the operations available through the Trieve API.
 *
 * The version of the OpenAPI document: 0.5.0
 * Contact: developers@trieve.ai
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TrieveJsTsClient);
  }
}(this, function(expect, TrieveJsTsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TrieveJsTsClient.DeleteDatasetRequest();
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

  describe('DeleteDatasetRequest', function() {
    it('should create an instance of DeleteDatasetRequest', function() {
      // uncomment below and update the code to test DeleteDatasetRequest
      //var instance = new TrieveJsTsClient.DeleteDatasetRequest();
      //expect(instance).to.be.a(TrieveJsTsClient.DeleteDatasetRequest);
    });

    it('should have the property datasetId (base name: "dataset_id")', function() {
      // uncomment below and update the code to test the property datasetId
      //var instance = new TrieveJsTsClient.DeleteDatasetRequest();
      //expect(instance).to.be();
    });

  });

}));
