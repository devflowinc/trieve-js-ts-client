# TrieveJsTsClient.HealthApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](HealthApi.md#healthCheck) | **GET** /api/health | Health Check



## healthCheck

> healthCheck()

Health Check

Health Check  Confirmation that the service is healthy and can make embedding vectors

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.HealthApi();
apiInstance.healthCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

