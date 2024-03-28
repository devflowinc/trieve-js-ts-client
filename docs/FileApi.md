# TrieveJsTsClient.FileApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFileHandler**](FileApi.md#deleteFileHandler) | **DELETE** /api/file/{file_id} | Delete File
[**getDatasetFilesHandler**](FileApi.md#getDatasetFilesHandler) | **GET** /api/dataset/files/{dataset_id}/{page} | Get Files for Dataset
[**getFileHandler**](FileApi.md#getFileHandler) | **GET** /api/file/{file_id} | Get File
[**uploadFileHandler**](FileApi.md#uploadFileHandler) | **POST** /api/file | Upload File



## deleteFileHandler

> deleteFileHandler(tRDataset, fileId, deleteChunks)

Delete File

Delete File  Delete a file from S3 attached to the server based on its id. This will disassociate chunks from the file, but will not delete the chunks. We plan to add support for deleting chunks in a release soon. Auth&#39;ed user must be an admin or owner of the dataset&#39;s organization to upload a file.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.FileApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let fileId = "fileId_example"; // String | The id of the file to delete
let deleteChunks = true; // Boolean | Whether or not to delete the chunks associated with the file
apiInstance.deleteFileHandler(tRDataset, fileId, deleteChunks, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRDataset** | **String**| The dataset id to use for the request | 
 **fileId** | **String**| The id of the file to delete | 
 **deleteChunks** | **Boolean**| Whether or not to delete the chunks associated with the file | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatasetFilesHandler

> [File] getDatasetFilesHandler(tRDataset, datasetId, page)

Get Files for Dataset

Get Files for Dataset  Get all files which belong to a given dataset specified by the dataset_id parameter. 10 files are returned per page.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.FileApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let datasetId = "datasetId_example"; // String | The id of the dataset to fetch files for.
let page = 789; // Number | The page number of files you wish to fetch. Each page contains at most 10 files.
apiInstance.getDatasetFilesHandler(tRDataset, datasetId, page, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRDataset** | **String**| The dataset id to use for the request | 
 **datasetId** | **String**| The id of the dataset to fetch files for. | 
 **page** | **Number**| The page number of files you wish to fetch. Each page contains at most 10 files. | 

### Return type

**[File]**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileHandler

> FileDTO getFileHandler(tRDataset, fileId)

Get File

Get File  Download a file from S3 attached to the server based on its id. We plan to add support for getting signed S3 URLs to download from S3 directly in a release soon.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.FileApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let fileId = "fileId_example"; // String | The id of the file to fetch
apiInstance.getFileHandler(tRDataset, fileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRDataset** | **String**| The dataset id to use for the request | 
 **fileId** | **String**| The id of the file to fetch | 

### Return type

[**FileDTO**](FileDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## uploadFileHandler

> UploadFileResult uploadFileHandler(tRDataset, uploadFileData)

Upload File

Upload File  Upload a file to S3 attached to the server. The file will be converted to HTML with tika and chunked algorithmically, images will be OCR&#39;ed with tesseract. The resulting chunks will be indexed and searchable. Optionally, you can only upload the file and manually create chunks associated to the file after. See docs.trieve.ai and/or contact us for more details and tips. Auth&#39;ed user must be an admin or owner of the dataset&#39;s organization to upload a file.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.FileApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let uploadFileData = new TrieveJsTsClient.UploadFileData(); // UploadFileData | JSON request payload to upload a file
apiInstance.uploadFileHandler(tRDataset, uploadFileData, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRDataset** | **String**| The dataset id to use for the request | 
 **uploadFileData** | [**UploadFileData**](UploadFileData.md)| JSON request payload to upload a file | 

### Return type

[**UploadFileResult**](UploadFileResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

