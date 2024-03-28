# TrieveJsTsClient.DatasetApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDataset**](DatasetApi.md#createDataset) | **POST** /api/dataset | Create dataset
[**deleteDataset**](DatasetApi.md#deleteDataset) | **DELETE** /api/dataset | Delete Dataset
[**getClientDatasetConfig**](DatasetApi.md#getClientDatasetConfig) | **GET** /api/dataset/envs | Get Client Configuration
[**getDataset**](DatasetApi.md#getDataset) | **GET** /api/dataset/{dataset_id} | Get Dataset
[**getDatasetsFromOrganization**](DatasetApi.md#getDatasetsFromOrganization) | **GET** /api/dataset/organization/{organization_id} | Get Datasets from Organization
[**updateDataset**](DatasetApi.md#updateDataset) | **PUT** /api/dataset | Update Dataset



## createDataset

> Dataset createDataset(tROrganization, createDatasetRequest)

Create dataset

Create dataset  Create a new dataset. The auth&#39;ed user must be an owner of the organization to create a dataset.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let createDatasetRequest = new TrieveJsTsClient.CreateDatasetRequest(); // CreateDatasetRequest | JSON request payload to create a new dataset
apiInstance.createDataset(tROrganization, createDatasetRequest, (error, data, response) => {
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
 **tROrganization** | **String**| The organization id to use for the request | 
 **createDatasetRequest** | [**CreateDatasetRequest**](CreateDatasetRequest.md)| JSON request payload to create a new dataset | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDataset

> deleteDataset(tROrganization, deleteDatasetRequest)

Delete Dataset

Delete Dataset  Delete a dataset. The auth&#39;ed user must be an owner of the organization to delete a dataset.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let deleteDatasetRequest = new TrieveJsTsClient.DeleteDatasetRequest(); // DeleteDatasetRequest | JSON request payload to delete a dataset
apiInstance.deleteDataset(tROrganization, deleteDatasetRequest, (error, data, response) => {
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
 **tROrganization** | **String**| The organization id to use for the request | 
 **deleteDatasetRequest** | [**DeleteDatasetRequest**](DeleteDatasetRequest.md)| JSON request payload to delete a dataset | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getClientDatasetConfig

> ClientDatasetConfiguration getClientDatasetConfig(tRDataset)

Get Client Configuration

Get Client Configuration  Get the client configuration for a dataset. Will use the TR-D

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
apiInstance.getClientDatasetConfig(tRDataset, (error, data, response) => {
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

### Return type

[**ClientDatasetConfiguration**](ClientDatasetConfiguration.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDataset

> Dataset getDataset(tROrganization, tRDataset, datasetId)

Get Dataset

Get Dataset  Get a dataset by id. The auth&#39;ed user must be an admin or owner of the organization to get a dataset.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let datasetId = "datasetId_example"; // String | The id of the dataset you want to retrieve.
apiInstance.getDataset(tROrganization, tRDataset, datasetId, (error, data, response) => {
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
 **tROrganization** | **String**| The organization id to use for the request | 
 **tRDataset** | **String**| The dataset id to use for the request | 
 **datasetId** | **String**| The id of the dataset you want to retrieve. | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDatasetsFromOrganization

> [DatasetAndUsage] getDatasetsFromOrganization(tROrganization, organizationId)

Get Datasets from Organization

Get Datasets from Organization  Get all datasets for an organization. The auth&#39;ed user must be an admin or owner of the organization to get its datasets.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let organizationId = "organizationId_example"; // String | id of the organization you want to retrieve datasets for
apiInstance.getDatasetsFromOrganization(tROrganization, organizationId, (error, data, response) => {
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
 **tROrganization** | **String**| The organization id to use for the request | 
 **organizationId** | **String**| id of the organization you want to retrieve datasets for | 

### Return type

[**[DatasetAndUsage]**](DatasetAndUsage.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDataset

> Dataset updateDataset(tROrganization, updateDatasetRequest)

Update Dataset

Update Dataset  Update a dataset. The auth&#39;ed user must be an owner of the organization to update a dataset.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.DatasetApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let updateDatasetRequest = new TrieveJsTsClient.UpdateDatasetRequest(); // UpdateDatasetRequest | JSON request payload to update a dataset
apiInstance.updateDataset(tROrganization, updateDatasetRequest, (error, data, response) => {
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
 **tROrganization** | **String**| The organization id to use for the request | 
 **updateDatasetRequest** | [**UpdateDatasetRequest**](UpdateDatasetRequest.md)| JSON request payload to update a dataset | 

### Return type

[**Dataset**](Dataset.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

