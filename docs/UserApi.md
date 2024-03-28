# TrieveJsTsClient.UserApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUserApiKey**](UserApi.md#deleteUserApiKey) | **DELETE** /api/user/delete_api_key | Delete User Api Key
[**setUserApiKey**](UserApi.md#setUserApiKey) | **POST** /api/user/set_api_key | Set User Api Key
[**updateUser**](UserApi.md#updateUser) | **PUT** /api/user | Update User



## deleteUserApiKey

> [ApiKeyDTO] deleteUserApiKey(deleteUserApiKeyRequest)

Delete User Api Key

Delete User Api Key  Delete an api key for the auth&#39;ed user.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.UserApi();
let deleteUserApiKeyRequest = new TrieveJsTsClient.DeleteUserApiKeyRequest(); // DeleteUserApiKeyRequest | JSON request payload to delete a user api key
apiInstance.deleteUserApiKey(deleteUserApiKeyRequest, (error, data, response) => {
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
 **deleteUserApiKeyRequest** | [**DeleteUserApiKeyRequest**](DeleteUserApiKeyRequest.md)| JSON request payload to delete a user api key | 

### Return type

[**[ApiKeyDTO]**](ApiKeyDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setUserApiKey

> SetUserApiKeyResponse setUserApiKey(setUserApiKeyRequest)

Set User Api Key

Set User Api Key  Create a new api key for the auth&#39;ed user. Successful response will contain the newly created api key. If a write role is assigned the api key will have permission level of the auth&#39;ed user who calls this endpoint.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.UserApi();
let setUserApiKeyRequest = new TrieveJsTsClient.SetUserApiKeyRequest(); // SetUserApiKeyRequest | JSON request payload to create a new user api key
apiInstance.setUserApiKey(setUserApiKeyRequest, (error, data, response) => {
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
 **setUserApiKeyRequest** | [**SetUserApiKeyRequest**](SetUserApiKeyRequest.md)| JSON request payload to create a new user api key | 

### Return type

[**SetUserApiKeyResponse**](SetUserApiKeyResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> SlimUser updateUser(updateUserData)

Update User

Update User  Update a user&#39;s information. If the user_id is not provided, the auth&#39;ed user will be updated. If the user_id is provided, the auth&#39;ed user must be an admin (1) or owner (2) of the organization.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.UserApi();
let updateUserData = new TrieveJsTsClient.UpdateUserData(); // UpdateUserData | JSON request payload to update user information for the auth'ed user
apiInstance.updateUser(updateUserData, (error, data, response) => {
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
 **updateUserData** | [**UpdateUserData**](UpdateUserData.md)| JSON request payload to update user information for the auth&#39;ed user | 

### Return type

[**SlimUser**](SlimUser.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

