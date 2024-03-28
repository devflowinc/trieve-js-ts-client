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
    instance = new TrieveJsTsClient.DatasetApi();
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

  describe('DatasetApi', function() {
    describe('createDataset', function() {
      it('should call createDataset successfully', function(done) {
        //uncomment below and update the code to test createDataset
        //instance.createDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDataset', function() {
      it('should call deleteDataset successfully', function(done) {
        //uncomment below and update the code to test deleteDataset
        //instance.deleteDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientDatasetConfig', function() {
      it('should call getClientDatasetConfig successfully', function(done) {
        //uncomment below and update the code to test getClientDatasetConfig
        //instance.getClientDatasetConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDataset', function() {
      it('should call getDataset successfully', function(done) {
        //uncomment below and update the code to test getDataset
        //instance.getDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasetsFromOrganization', function() {
      it('should call getDatasetsFromOrganization successfully', function(done) {
        //uncomment below and update the code to test getDatasetsFromOrganization
        //instance.getDatasetsFromOrganization(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDataset', function() {
      it('should call updateDataset successfully', function(done) {
        //uncomment below and update the code to test updateDataset
        //instance.updateDataset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
