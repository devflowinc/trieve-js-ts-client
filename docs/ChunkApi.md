# TrieveJsTsClient.ChunkApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChunk**](ChunkApi.md#createChunk) | **POST** /api/chunk | Create or Upsert Chunk or Chunks
[**createSuggestedQueriesHandler**](ChunkApi.md#createSuggestedQueriesHandler) | **POST** /api/chunk/gen_suggestions | Generate suggested queries
[**deleteChunk**](ChunkApi.md#deleteChunk) | **DELETE** /api/chunk/{chunk_id} | Delete Chunk
[**deleteChunkByTrackingId**](ChunkApi.md#deleteChunkByTrackingId) | **DELETE** /api/chunk/tracking_id/{tracking_id} | Delete Chunk By Tracking Id
[**generateOffChunks**](ChunkApi.md#generateOffChunks) | **POST** /api/chunk/generate | RAG on Specified Chunks
[**getChunkById**](ChunkApi.md#getChunkById) | **GET** /api/chunk/{chunk_id} | Get Chunk By Id
[**getChunkByTrackingId**](ChunkApi.md#getChunkByTrackingId) | **GET** /api/chunk/tracking_id/{tracking_id} | Get Chunk By Tracking Id
[**getRecommendedChunks**](ChunkApi.md#getRecommendedChunks) | **POST** /api/chunk/recommend | Get Recommended Chunks
[**searchChunk**](ChunkApi.md#searchChunk) | **POST** /api/chunk/search | Search
[**updateChunk**](ChunkApi.md#updateChunk) | **PUT** /api/chunk | Update Chunk
[**updateChunkByTrackingId**](ChunkApi.md#updateChunkByTrackingId) | **PUT** /api/chunk/tracking_id/update | Update Chunk By Tracking Id



## createChunk

> ReturnQueuedChunk createChunk(tRDataset, createChunkData)

Create or Upsert Chunk or Chunks

Create or Upsert Chunk or Chunks  Create a new chunk. If the chunk has the same tracking_id as an existing chunk, the request will fail. Once a chunk is created, it can be searched for using the search endpoint.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let createChunkData = new TrieveJsTsClient.CreateChunkData(); // CreateChunkData | JSON request payload to create a new chunk (chunk)
apiInstance.createChunk(tRDataset, createChunkData, (error, data, response) => {
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
 **createChunkData** | [**CreateChunkData**](CreateChunkData.md)| JSON request payload to create a new chunk (chunk) | 

### Return type

[**ReturnQueuedChunk**](ReturnQueuedChunk.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSuggestedQueriesHandler

> SuggestedQueriesResponse createSuggestedQueriesHandler(tRDataset, suggestedQueriesRequest)

Generate suggested queries

Generate suggested queries  This endpoint will generate 3 suggested queries based off the query provided in the request body and return them as a JSON object.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let suggestedQueriesRequest = new TrieveJsTsClient.SuggestedQueriesRequest(); // SuggestedQueriesRequest | JSON request payload to get alternative suggested queries
apiInstance.createSuggestedQueriesHandler(tRDataset, suggestedQueriesRequest, (error, data, response) => {
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
 **suggestedQueriesRequest** | [**SuggestedQueriesRequest**](SuggestedQueriesRequest.md)| JSON request payload to get alternative suggested queries | 

### Return type

[**SuggestedQueriesResponse**](SuggestedQueriesResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteChunk

> deleteChunk(tRDataset, chunkId)

Delete Chunk

Delete Chunk  Delete a chunk by its id. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let chunkId = "chunkId_example"; // String | Id of the chunk you want to fetch.
apiInstance.deleteChunk(tRDataset, chunkId, (error, data, response) => {
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
 **chunkId** | **String**| Id of the chunk you want to fetch. | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteChunkByTrackingId

> deleteChunkByTrackingId(tRDataset, trackingId)

Delete Chunk By Tracking Id

Delete Chunk By Tracking Id  Delete a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk. If deleting a root chunk which has a collision, the most recently created collision will become a new root chunk.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | tracking_id of the chunk you want to delete
apiInstance.deleteChunkByTrackingId(tRDataset, trackingId, (error, data, response) => {
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
 **trackingId** | **String**| tracking_id of the chunk you want to delete | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## generateOffChunks

> String generateOffChunks(tRDataset, generateChunksRequest)

RAG on Specified Chunks

RAG on Specified Chunks  This endpoint exists as an alternative to the topic+message concept where our API handles chat memory. With this endpoint, the user is responsible for providing the context window and the prompt. See more in the \&quot;search before generate\&quot; page at docs.trieve.ai.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let generateChunksRequest = new TrieveJsTsClient.GenerateChunksRequest(); // GenerateChunksRequest | JSON request payload to perform RAG on some chunks (chunks)
apiInstance.generateOffChunks(tRDataset, generateChunksRequest, (error, data, response) => {
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
 **generateChunksRequest** | [**GenerateChunksRequest**](GenerateChunksRequest.md)| JSON request payload to perform RAG on some chunks (chunks) | 

### Return type

**String**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain, application/json


## getChunkById

> ChunkMetadata getChunkById(tRDataset, chunkId)

Get Chunk By Id

Get Chunk By Id  Get a singular chunk by id.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let chunkId = "chunkId_example"; // String | Id of the chunk you want to fetch.
apiInstance.getChunkById(tRDataset, chunkId, (error, data, response) => {
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
 **chunkId** | **String**| Id of the chunk you want to fetch. | 

### Return type

[**ChunkMetadata**](ChunkMetadata.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getChunkByTrackingId

> ChunkMetadata getChunkByTrackingId(tRDataset, trackingId)

Get Chunk By Tracking Id

Get Chunk By Tracking Id  Get a singular chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use your own id as the primary reference for a chunk.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let trackingId = "trackingId_example"; // String | tracking_id of the chunk you want to fetch
apiInstance.getChunkByTrackingId(tRDataset, trackingId, (error, data, response) => {
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
 **trackingId** | **String**| tracking_id of the chunk you want to fetch | 

### Return type

[**ChunkMetadata**](ChunkMetadata.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRecommendedChunks

> [ChunkMetadataWithFileData] getRecommendedChunks(tRDataset, recommendChunksRequest)

Get Recommended Chunks

Get Recommended Chunks  Get recommendations of chunks similar to the chunks in the request. Think about this as a feature similar to the \&quot;add to playlist\&quot; recommendation feature on Spotify. This request pairs especially well with our groups endpoint.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let recommendChunksRequest = new TrieveJsTsClient.RecommendChunksRequest(); // RecommendChunksRequest | JSON request payload to get recommendations of chunks similar to the chunks in the request
apiInstance.getRecommendedChunks(tRDataset, recommendChunksRequest, (error, data, response) => {
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
 **recommendChunksRequest** | [**RecommendChunksRequest**](RecommendChunksRequest.md)| JSON request payload to get recommendations of chunks similar to the chunks in the request | 

### Return type

[**[ChunkMetadataWithFileData]**](ChunkMetadataWithFileData.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchChunk

> SearchChunkQueryResponseBody searchChunk(tRDataset, searchChunkData)

Search

Search  This route provides the primary search functionality for the API. It can be used to search for chunks by semantic similarity, full-text similarity, or a combination of both. Results&#39; &#x60;chunk_html&#x60; values will be modified with &#x60;&lt;b&gt;&#x60; tags for sub-sentence highlighting.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let searchChunkData = new TrieveJsTsClient.SearchChunkData(); // SearchChunkData | JSON request payload to semantically search for chunks (chunks)
apiInstance.searchChunk(tRDataset, searchChunkData, (error, data, response) => {
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
 **searchChunkData** | [**SearchChunkData**](SearchChunkData.md)| JSON request payload to semantically search for chunks (chunks) | 

### Return type

[**SearchChunkQueryResponseBody**](SearchChunkQueryResponseBody.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChunk

> updateChunk(tRDataset, updateChunkData)

Update Chunk

Update Chunk  Update a chunk. If you try to change the tracking_id of the chunk to have the same tracking_id as an existing chunk, the request will fail.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let updateChunkData = new TrieveJsTsClient.UpdateChunkData(); // UpdateChunkData | JSON request payload to update a chunk (chunk)
apiInstance.updateChunk(tRDataset, updateChunkData, (error, data, response) => {
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
 **updateChunkData** | [**UpdateChunkData**](UpdateChunkData.md)| JSON request payload to update a chunk (chunk) | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateChunkByTrackingId

> updateChunkByTrackingId(tRDataset, updateChunkByTrackingIdData)

Update Chunk By Tracking Id

Update Chunk By Tracking Id  Update a chunk by tracking_id. This is useful for when you are coordinating with an external system and want to use the tracking_id to identify the chunk.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.ChunkApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let updateChunkByTrackingIdData = new TrieveJsTsClient.UpdateChunkByTrackingIdData(); // UpdateChunkByTrackingIdData | JSON request payload to update a chunk by tracking_id (chunks)
apiInstance.updateChunkByTrackingId(tRDataset, updateChunkByTrackingIdData, (error, data, response) => {
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
 **updateChunkByTrackingIdData** | [**UpdateChunkByTrackingIdData**](UpdateChunkByTrackingIdData.md)| JSON request payload to update a chunk by tracking_id (chunks) | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

