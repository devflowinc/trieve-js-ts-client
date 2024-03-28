# TrieveJsTsClient.ChunkGroupApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addChunkToGroup**](ChunkGroupApi.md#addChunkToGroup) | **POST** /api/chunk_group/chunk/{group_id} | Add Chunk to Group
[**addChunkToGroupByTrackingId**](ChunkGroupApi.md#addChunkToGroupByTrackingId) | **POST** /api/chunk_group/tracking_id/{tracking_id} | Add Chunk to Group by Tracking ID
[**createChunkGroup**](ChunkGroupApi.md#createChunkGroup) | **POST** /api/chunk_group | Create Chunk Group
[**deleteChunkGroup**](ChunkGroupApi.md#deleteChunkGroup) | **DELETE** /api/chunk_group/{group_id} | Delete Group
[**deleteGroupByTrackingId**](ChunkGroupApi.md#deleteGroupByTrackingId) | **DELETE** /api/chunk_group/tracking_id/{tracking_id} | Delete Group by Tracking ID
[**getChunkGroup**](ChunkGroupApi.md#getChunkGroup) | **GET** /api/chunk_group/{group_id} | Get Group
[**getChunksInGroup**](ChunkGroupApi.md#getChunksInGroup) | **GET** /api/chunk_group/{group_id}/{page} | Get Chunks in Group
[**getChunksInGroupByTrackingId**](ChunkGroupApi.md#getChunksInGroupByTrackingId) | **GET** /api/chunk_group/tracking_id/{group_tracking_id}/{page} | Get Chunks in Group by Tracking ID
[**getGroupByTrackingId**](ChunkGroupApi.md#getGroupByTrackingId) | **GET** /api/chunk_group/tracking_id/{tracking_id} | Get Group by Tracking ID
[**getGroupsChunkIsIn**](ChunkGroupApi.md#getGroupsChunkIsIn) | **POST** /api/chunk_group/chunks | Get Groups for Chunks
[**getRecommendedGroups**](ChunkGroupApi.md#getRecommendedGroups) | **POST** /api/chunk_group/recommend | Get Recommended Groups
[**getSpecificDatasetChunkGroups**](ChunkGroupApi.md#getSpecificDatasetChunkGroups) | **GET** /api/dataset/groups/{dataset_id}/{page} | Get Groups for Dataset
[**removeChunkFromGroup**](ChunkGroupApi.md#removeChunkFromGroup) | **DELETE** /api/chunk_group/chunk/{group_id} | Remove Chunk from Group
[**searchOverGroups**](ChunkGroupApi.md#searchOverGroups) | **POST** /api/chunk_group/group_oriented_search | Search Over Groups
[**searchWithinGroup**](ChunkGroupApi.md#searchWithinGroup) | **POST** /api/chunk_group/search | Search Within Group
[**updateChunkGroup**](ChunkGroupApi.md#updateChunkGroup) | **PUT** /api/chunk_group | Update Group
[**updateGroupByTrackingId**](ChunkGroupApi.md#updateGroupByTrackingId) | **PUT** /api/chunk_group/tracking_id/{tracking_id} | Update Group by Tracking ID



## addChunkToGroup

> addChunkToGroup(tRDataset, groupId, addChunkToGroupData)

Add Chunk to Group

Add Chunk to Group  Route to add a chunk to a group.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupId = "groupId_example"; // String | Id of the group to add the chunk to as a bookmark
let addChunkToGroupData = new TrieveJsTsClient.AddChunkToGroupData(); // AddChunkToGroupData | JSON request payload to add a chunk to a group (bookmark it)
apiInstance.addChunkToGroup(tRDataset, groupId, addChunkToGroupData, (error, data, response) => {
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
 **groupId** | **String**| Id of the group to add the chunk to as a bookmark | 
 **addChunkToGroupData** | [**AddChunkToGroupData**](AddChunkToGroupData.md)| JSON request payload to add a chunk to a group (bookmark it) | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addChunkToGroupByTrackingId

> addChunkToGroupByTrackingId(tRDataset, trackingId, addChunkToGroupData)

Add Chunk to Group by Tracking ID

Add Chunk to Group by Tracking ID  Route to add a chunk to a group by tracking id.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | Id of the group to add the chunk to as a bookmark
let addChunkToGroupData = new TrieveJsTsClient.AddChunkToGroupData(); // AddChunkToGroupData | JSON request payload to add a chunk to a group (bookmark it)
apiInstance.addChunkToGroupByTrackingId(tRDataset, trackingId, addChunkToGroupData, (error, data, response) => {
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
 **trackingId** | **String**| Id of the group to add the chunk to as a bookmark | 
 **addChunkToGroupData** | [**AddChunkToGroupData**](AddChunkToGroupData.md)| JSON request payload to add a chunk to a group (bookmark it) | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createChunkGroup

> ChunkGroup createChunkGroup(tRDataset, createChunkGroupData)

Create Chunk Group

Create Chunk Group  Create a new chunk_group. This is a way to group chunks together. If you try to create a chunk_group with the same tracking_id as an existing chunk_group, this operation will fail.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let createChunkGroupData = new TrieveJsTsClient.CreateChunkGroupData(); // CreateChunkGroupData | JSON request payload to cretea a chunkGroup
apiInstance.createChunkGroup(tRDataset, createChunkGroupData, (error, data, response) => {
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
 **createChunkGroupData** | [**CreateChunkGroupData**](CreateChunkGroupData.md)| JSON request payload to cretea a chunkGroup | 

### Return type

[**ChunkGroup**](ChunkGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChunkGroup

> deleteChunkGroup(tRDataset, groupId, deleteChunks)

Delete Group

Delete Group  This will delete a chunk_group. This will not delete the chunks that are in the group. We will soon support deleting a chunk_group along with its member chunks.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupId = "groupId_example"; // String | Id of the group you want to fetch.
let deleteChunks = true; // Boolean | Delete the chunks within the group
apiInstance.deleteChunkGroup(tRDataset, groupId, deleteChunks, (error, data, response) => {
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
 **groupId** | **String**| Id of the group you want to fetch. | 
 **deleteChunks** | **Boolean**| Delete the chunks within the group | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteGroupByTrackingId

> deleteGroupByTrackingId(tRDataset, trackingId)

Delete Group by Tracking ID

Delete Group by Tracking ID  Delete a chunk_group with the given tracking id.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | Tracking id of the chunk_group to delete
apiInstance.deleteGroupByTrackingId(tRDataset, trackingId, (error, data, response) => {
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
 **trackingId** | **String**| Tracking id of the chunk_group to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChunkGroup

> ChunkGroup getChunkGroup(tRDataset, groupId)

Get Group

Get Group  Fetch the group with the given id. get_group

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupId = "groupId_example"; // String | Id of the group you want to fetch.
apiInstance.getChunkGroup(tRDataset, groupId, (error, data, response) => {
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
 **groupId** | **String**| Id of the group you want to fetch. | 

### Return type

[**ChunkGroup**](ChunkGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChunksInGroup

> BookmarkData getChunksInGroup(tRDataset, groupId, page)

Get Chunks in Group

Get Chunks in Group  Route to get all chunks for a group. The response is paginated, with each page containing 10 chunks. Support for custom page size is coming soon.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupId = "groupId_example"; // String | Id of the group you want to fetch.
let page = 789; // Number | The page of chunks to get from the group
apiInstance.getChunksInGroup(tRDataset, groupId, page, (error, data, response) => {
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
 **groupId** | **String**| Id of the group you want to fetch. | 
 **page** | **Number**| The page of chunks to get from the group | 

### Return type

[**BookmarkData**](BookmarkData.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChunksInGroupByTrackingId

> BookmarkData getChunksInGroupByTrackingId(tRDataset, groupTrackingId, page)

Get Chunks in Group by Tracking ID

Get Chunks in Group by Tracking ID  Route to get all chunks for a group. The response is paginated, with each page containing 10 chunks. Support for custom page size is coming soon.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupTrackingId = "groupTrackingId_example"; // String | The id of the group to get the chunks from
let page = 789; // Number | The page of chunks to get from the group
apiInstance.getChunksInGroupByTrackingId(tRDataset, groupTrackingId, page, (error, data, response) => {
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
 **groupTrackingId** | **String**| The id of the group to get the chunks from | 
 **page** | **Number**| The page of chunks to get from the group | 

### Return type

[**BookmarkData**](BookmarkData.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupByTrackingId

> ChunkGroup getGroupByTrackingId(tRDataset, trackingId)

Get Group by Tracking ID

Get Group by Tracking ID  Fetch the group with the given tracking id. get_group_by_tracking_id

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | The tracking id of the group to fetch.
apiInstance.getGroupByTrackingId(tRDataset, trackingId, (error, data, response) => {
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
 **trackingId** | **String**| The tracking id of the group to fetch. | 

### Return type

[**ChunkGroup**](ChunkGroup.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getGroupsChunkIsIn

> [BookmarkGroupResult] getGroupsChunkIsIn(tRDataset, getGroupsForChunksData)

Get Groups for Chunks

Get Groups for Chunks  Route to get the groups that a chunk is in.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let getGroupsForChunksData = new TrieveJsTsClient.GetGroupsForChunksData(); // GetGroupsForChunksData | JSON request payload to get the groups that a chunk is in
apiInstance.getGroupsChunkIsIn(tRDataset, getGroupsForChunksData, (error, data, response) => {
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
 **getGroupsForChunksData** | [**GetGroupsForChunksData**](GetGroupsForChunksData.md)| JSON request payload to get the groups that a chunk is in | 

### Return type

[**[BookmarkGroupResult]**](BookmarkGroupResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRecommendedGroups

> [GroupScoreChunkDTO] getRecommendedGroups(tRDataset, reccomendGroupChunksRequest)

Get Recommended Groups

Get Recommended Groups  Route to get recommended groups. This route will return groups which are similar to the groups in the request body.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let reccomendGroupChunksRequest = new TrieveJsTsClient.ReccomendGroupChunksRequest(); // ReccomendGroupChunksRequest | JSON request payload to get recommendations of chunks similar to the chunks in the request
apiInstance.getRecommendedGroups(tRDataset, reccomendGroupChunksRequest, (error, data, response) => {
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
 **reccomendGroupChunksRequest** | [**ReccomendGroupChunksRequest**](ReccomendGroupChunksRequest.md)| JSON request payload to get recommendations of chunks similar to the chunks in the request | 

### Return type

[**[GroupScoreChunkDTO]**](GroupScoreChunkDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSpecificDatasetChunkGroups

> GroupData getSpecificDatasetChunkGroups(tRDataset, datasetId, page)

Get Groups for Dataset

Get Groups for Dataset  Fetch the groups which belong to a dataset specified by its id.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let datasetId = "datasetId_example"; // String | The id of the dataset to fetch groups for.
let page = 789; // Number | The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon.
apiInstance.getSpecificDatasetChunkGroups(tRDataset, datasetId, page, (error, data, response) => {
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
 **datasetId** | **String**| The id of the dataset to fetch groups for. | 
 **page** | **Number**| The page of groups to fetch. Each page contains 10 groups. Support for custom page size is coming soon. | 

### Return type

[**GroupData**](GroupData.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeChunkFromGroup

> removeChunkFromGroup(tRDataset, groupId, createChunkGroupData)

Remove Chunk from Group

Remove Chunk from Group  Route to remove a chunk from a group.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let groupId = "groupId_example"; // String | Id of the group to remove the bookmark'ed chunk from
let createChunkGroupData = new TrieveJsTsClient.CreateChunkGroupData(); // CreateChunkGroupData | JSON request payload to cretea a chunkGroup
apiInstance.removeChunkFromGroup(tRDataset, groupId, createChunkGroupData, (error, data, response) => {
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
 **groupId** | **String**| Id of the group to remove the bookmark&#39;ed chunk from | 
 **createChunkGroupData** | [**CreateChunkGroupData**](CreateChunkGroupData.md)| JSON request payload to cretea a chunkGroup | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchOverGroups

> SearchOverGroupsResponseBody searchOverGroups(searchOverGroupsData)

Search Over Groups

Search Over Groups  This route allows you to get groups as results instead of chunks. Each group returned will have the matching chunks sorted by similarity within the group. This is useful for when you want to get groups of chunks which are similar to the search query. If choosing hybrid search, the results will be re-ranked using BAAI/bge-reranker-large. Compatible with semantic, fulltext, or hybrid search modes.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let searchOverGroupsData = new TrieveJsTsClient.SearchOverGroupsData(); // SearchOverGroupsData | JSON request payload to semantically search over groups
apiInstance.searchOverGroups(searchOverGroupsData, (error, data, response) => {
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
 **searchOverGroupsData** | [**SearchOverGroupsData**](SearchOverGroupsData.md)| JSON request payload to semantically search over groups | 

### Return type

[**SearchOverGroupsResponseBody**](SearchOverGroupsResponseBody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchWithinGroup

> SearchGroupsResult searchWithinGroup(tRDataset, searchWithinGroupData)

Search Within Group

Search Within Group  This route allows you to search only within a group. This is useful for when you only want search results to contain chunks which are members of a specific group. If choosing hybrid search, the results will be re-ranked using BAAI/bge-reranker-large.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let searchWithinGroupData = new TrieveJsTsClient.SearchWithinGroupData(); // SearchWithinGroupData | JSON request payload to semantically search a group
apiInstance.searchWithinGroup(tRDataset, searchWithinGroupData, (error, data, response) => {
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
 **searchWithinGroupData** | [**SearchWithinGroupData**](SearchWithinGroupData.md)| JSON request payload to semantically search a group | 

### Return type

[**SearchGroupsResult**](SearchGroupsResult.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChunkGroup

> updateChunkGroup(tRDataset, updateChunkGroupData)

Update Group

Update Group  Update a chunk_group. If you try to change the tracking_id to one that already exists, this operation will fail.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let updateChunkGroupData = new TrieveJsTsClient.UpdateChunkGroupData(); // UpdateChunkGroupData | JSON request payload to update a chunkGroup
apiInstance.updateChunkGroup(tRDataset, updateChunkGroupData, (error, data, response) => {
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
 **updateChunkGroupData** | [**UpdateChunkGroupData**](UpdateChunkGroupData.md)| JSON request payload to update a chunkGroup | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateGroupByTrackingId

> updateGroupByTrackingId(tRDataset, trackingId, updateGroupByTrackingIDData)

Update Group by Tracking ID

Update Group by Tracking ID  Update a chunk_group with the given tracking id.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkGroupApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | Tracking id of the chunk_group to update
let updateGroupByTrackingIDData = new TrieveJsTsClient.UpdateGroupByTrackingIDData(); // UpdateGroupByTrackingIDData | JSON request payload to update a chunkGroup
apiInstance.updateGroupByTrackingId(tRDataset, trackingId, updateGroupByTrackingIDData, (error, data, response) => {
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
 **trackingId** | **String**| Tracking id of the chunk_group to update | 
 **updateGroupByTrackingIDData** | [**UpdateGroupByTrackingIDData**](UpdateGroupByTrackingIDData.md)| JSON request payload to update a chunkGroup | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

