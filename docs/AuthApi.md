# TrieveJsTsClient.AuthApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callback**](AuthApi.md#callback) | **GET** /api/auth/callback | OpenID Connect callback
[**getMe**](AuthApi.md#getMe) | **GET** /api/auth/me | Get Me
[**login**](AuthApi.md#login) | **GET** /api/auth | Login
[**logout**](AuthApi.md#logout) | **DELETE** /api/auth | Logout



## callback

> SlimUser callback()

OpenID Connect callback

OpenID Connect callback  This is the callback route for the OAuth provider, it should not be called directly. Redirects to browser with set-cookie header.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.AuthApi();
apiInstance.callback((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SlimUser**](SlimUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMe

> SlimUser getMe()

Get Me

Get Me  Get the user corresponding to your current auth credentials.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.AuthApi();
apiInstance.getMe((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**SlimUser**](SlimUser.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## login

> login(content)

Login

Login  This will redirect you to the OAuth provider for authentication with email/pass, SSO, Google, Github, etc.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.AuthApi();
let content = new TrieveJsTsClient.AuthQuery(); // AuthQuery | Query parameters for login to be included as kv pairs after ? on the request URL.
apiInstance.login(content, (error, data, response) => {
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
 **content** | [**AuthQuery**](.md)| Query parameters for login to be included as kv pairs after ? on the request URL. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## logout

> logout()

Logout

Logout  Invalidate your current auth credential stored typically stored in a cookie. This does not invalidate your API key.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.AuthApi();
apiInstance.logout((error, data, response) => {
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
- **Accept**: Not defined

