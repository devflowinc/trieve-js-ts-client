# TrieveJsTsClient.InvitationApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postInvitation**](InvitationApi.md#postInvitation) | **POST** /api/invitation | Send Invitation



## postInvitation

> postInvitation(tROrganization, invitationData)

Send Invitation

Send Invitation  Invitations act as a way to invite users to join an organization. After a user is invited, they will automatically be added to the organization with the role specified in the invitation once they set their.

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.InvitationApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let invitationData = new TrieveJsTsClient.InvitationData(); // InvitationData | JSON request payload to send an invitation
apiInstance.postInvitation(tROrganization, invitationData, (error, data, response) => {
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
 **invitationData** | [**InvitationData**](InvitationData.md)| JSON request payload to send an invitation | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

