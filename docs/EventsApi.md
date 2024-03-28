# TrieveJsTsClient.EventsApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEvents**](EventsApi.md#getEvents) | **POST** /api/events | Get events for the dataset



## getEvents

> EventReturn getEvents(tRDataset, getEventsData)

Get events for the dataset

Get events for the dataset  Get events for the auth&#39;ed user. Currently, this is only for events belonging to the auth&#39;ed user. Soon, we plan to associate events to datasets instead of users.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.EventsApi();
let tRDataset = "tRDataset_example"; // String | The dataset id to use for the request
let getEventsData = new TrieveJsTsClient.GetEventsData(); // GetEventsData | JSON request payload to get events for a dataset
apiInstance.getEvents(tRDataset, getEventsData, (error, data, response) => {
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
 **getEventsData** | [**GetEventsData**](GetEventsData.md)| JSON request payload to get events for a dataset | 

### Return type

[**EventReturn**](EventReturn.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

