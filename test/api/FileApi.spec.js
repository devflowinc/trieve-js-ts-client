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
    instance = new TrieveJsTsClient.FileApi();
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

  describe('FileApi', function() {
    describe('deleteFileHandler', function() {
      it('should call deleteFileHandler successfully', function(done) {
        //uncomment below and update the code to test deleteFileHandler
        //instance.deleteFileHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDatasetFilesHandler', function() {
      it('should call getDatasetFilesHandler successfully', function(done) {
        //uncomment below and update the code to test getDatasetFilesHandler
        //instance.getDatasetFilesHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFileHandler', function() {
      it('should call getFileHandler successfully', function(done) {
        //uncomment below and update the code to test getFileHandler
        //instance.getFileHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadFileHandler', function() {
      it('should call uploadFileHandler successfully', function(done) {
        //uncomment below and update the code to test uploadFileHandler
        //instance.uploadFileHandler(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
