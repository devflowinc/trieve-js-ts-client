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
    instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
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

  describe('ReccomendGroupChunksRequest', function() {
    it('should create an instance of ReccomendGroupChunksRequest', function() {
      // uncomment below and update the code to test ReccomendGroupChunksRequest
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be.a(TrieveJsTsClient.ReccomendGroupChunksRequest);
    });

    it('should have the property filters (base name: "filters")', function() {
      // uncomment below and update the code to test the property filters
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property groupSize (base name: "group_size")', function() {
      // uncomment below and update the code to test the property groupSize
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property negativeGroupIds (base name: "negative_group_ids")', function() {
      // uncomment below and update the code to test the property negativeGroupIds
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property negativeGroupTrackingIds (base name: "negative_group_tracking_ids")', function() {
      // uncomment below and update the code to test the property negativeGroupTrackingIds
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property positiveGroupIds (base name: "positive_group_ids")', function() {
      // uncomment below and update the code to test the property positiveGroupIds
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

    it('should have the property positiveGroupTrackingIds (base name: "positive_group_tracking_ids")', function() {
      // uncomment below and update the code to test the property positiveGroupTrackingIds
      //var instance = new TrieveJsTsClient.ReccomendGroupChunksRequest();
      //expect(instance).to.be();
    });

  });

}));
