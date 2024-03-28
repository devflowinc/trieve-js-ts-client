# TrieveJsTsClient.OrganizationApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrganization**](OrganizationApi.md#createOrganization) | **POST** /api/organization | Create Organization
[**deleteOrganizationById**](OrganizationApi.md#deleteOrganizationById) | **DELETE** /api/organization/{organization_id} | Delete Organization
[**getOrganizationById**](OrganizationApi.md#getOrganizationById) | **GET** /api/organization/{organization_id} | Get Organization
[**getOrganizationUsage**](OrganizationApi.md#getOrganizationUsage) | **GET** /api/organization/usage/{organization_id} | Get Organization Usage
[**getOrganizationUsers**](OrganizationApi.md#getOrganizationUsers) | **GET** /api/organization/users/{organization_id} | Get Organization Users
[**updateOrganization**](OrganizationApi.md#updateOrganization) | **PUT** /api/organization | Update Organization



## createOrganization

> Organization createOrganization(createOrganizationData)

Create Organization

Create Organization  Create a new organization. The auth&#39;ed user who creates the organization will be the default owner of the organization.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let createOrganizationData = new TrieveJsTsClient.CreateOrganizationData(); // CreateOrganizationData | The organization data that you want to create
apiInstance.createOrganization(createOrganizationData, (error, data, response) => {
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
 **createOrganizationData** | [**CreateOrganizationData**](CreateOrganizationData.md)| The organization data that you want to create | 

### Return type

[**Organization**](Organization.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteOrganizationById

> Organization deleteOrganizationById(tROrganization, organizationId)

Delete Organization

Delete Organization  Delete an organization by its id. The auth&#39;ed user must be an owner of the organization to delete it.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let organizationId = "organizationId_example"; // String | The id of the organization you want to fetch.
apiInstance.deleteOrganizationById(tROrganization, organizationId, (error, data, response) => {
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
 **organizationId** | **String**| The id of the organization you want to fetch. | 

### Return type

[**Organization**](Organization.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationById

> Organization getOrganizationById(tROrganization, organizationId)

Get Organization

Get Organization  Fetch the details of an organization by its id. The auth&#39;ed user must be an admin or owner of the organization to fetch it.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let organizationId = "organizationId_example"; // String | The id of the organization you want to fetch.
apiInstance.getOrganizationById(tROrganization, organizationId, (error, data, response) => {
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
 **organizationId** | **String**| The id of the organization you want to fetch. | 

### Return type

[**Organization**](Organization.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationUsage

> OrganizationUsageCount getOrganizationUsage(tROrganization, organizationId)

Get Organization Usage

Get Organization Usage  Fetch the current usage specification of an organization by its id. The auth&#39;ed user must be an admin or owner of the organization to fetch it.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let organizationId = "organizationId_example"; // String | The id of the organization you want to fetch the usage of.
apiInstance.getOrganizationUsage(tROrganization, organizationId, (error, data, response) => {
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
 **organizationId** | **String**| The id of the organization you want to fetch the usage of. | 

### Return type

[**OrganizationUsageCount**](OrganizationUsageCount.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getOrganizationUsers

> [SlimUser] getOrganizationUsers(tROrganization, organizationId)

Get Organization Users

Get Organization Users  Fetch the users of an organization by its id. The auth&#39;ed user must be an admin or owner of the organization to fetch it.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let organizationId = "organizationId_example"; // String | The id of the organization you want to fetch the users of.
apiInstance.getOrganizationUsers(tROrganization, organizationId, (error, data, response) => {
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
 **organizationId** | **String**| The id of the organization you want to fetch the users of. | 

### Return type

[**[SlimUser]**](SlimUser.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateOrganization

> Organization updateOrganization(tROrganization, updateOrganizationData)

Update Organization

Update Organization  Update an organization. Only the owner of the organization can update it.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.OrganizationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let updateOrganizationData = new TrieveJsTsClient.UpdateOrganizationData(); // UpdateOrganizationData | The organization data that you want to update
apiInstance.updateOrganization(tROrganization, updateOrganizationData, (error, data, response) => {
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
 **updateOrganizationData** | [**UpdateOrganizationData**](UpdateOrganizationData.md)| The organization data that you want to update | 

### Return type

[**Organization**](Organization.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

