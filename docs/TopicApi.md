# TrieveJsTsClient.TopicApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTopic**](TopicApi.md#createTopic) | **POST** /api/topic | Create Topic
[**deleteTopic**](TopicApi.md#deleteTopic) | **DELETE** /api/topic | Delete Topic
[**getAllTopicsForUser**](TopicApi.md#getAllTopicsForUser) | **GET** /api/topic/user/{user_id} | Get All Topics for User
[**updateTopic**](TopicApi.md#updateTopic) | **PUT** /api/topic | Update Topic



## createTopic

> Topic createTopic(tRDataset, createTopicData)

Create Topic

Create Topic  Create a new chat topic. Topics are attached to a user and act as a coordinator for memory of gen-AI chat sessions. We are considering refactoring this resource of the API soon.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.TopicApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let createTopicData = new TrieveJsTsClient.CreateTopicData(); // CreateTopicData | JSON request payload to create chat topic
apiInstance.createTopic(tRDataset, createTopicData, (error, data, response) => {
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
 **createTopicData** | [**CreateTopicData**](CreateTopicData.md)| JSON request payload to create chat topic | 

### Return type

[**Topic**](Topic.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTopic

> deleteTopic(tRDataset, deleteTopicData)

Delete Topic

Delete Topic  Delete an existing chat topic. When a topic is deleted, all associated chat messages are also deleted.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.TopicApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let deleteTopicData = new TrieveJsTsClient.DeleteTopicData(); // DeleteTopicData | JSON request payload to delete a chat topic
apiInstance.deleteTopic(tRDataset, deleteTopicData, (error, data, response) => {
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
 **deleteTopicData** | [**DeleteTopicData**](DeleteTopicData.md)| JSON request payload to delete a chat topic | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllTopicsForUser

> [Topic] getAllTopicsForUser(userId, tRDataset)

Get All Topics for User

Get All Topics for User  Get all topics belonging to a the auth&#39;ed user. Soon, we plan to allow specification of the user for this route and include pagination.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.TopicApi();
let userId = "userId_example"; // String | The id of the user to get topics for
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
apiInstance.getAllTopicsForUser(userId, tRDataset, (error, data, response) => {
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
 **userId** | **String**| The id of the user to get topics for | 
 **tRDataset** | **String**| The dataset id to use for the request | 

### Return type

[**[Topic]**](Topic.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTopic

> updateTopic(tRDataset, updateTopicData)

Update Topic

Update Topic  Update an existing chat topic. Currently, only the name of the topic can be updated.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.TopicApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let updateTopicData = new TrieveJsTsClient.UpdateTopicData(); // UpdateTopicData | JSON request payload to update a chat topic
apiInstance.updateTopic(tRDataset, updateTopicData, (error, data, response) => {
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
 **updateTopicData** | [**UpdateTopicData**](UpdateTopicData.md)| JSON request payload to update a chat topic | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

