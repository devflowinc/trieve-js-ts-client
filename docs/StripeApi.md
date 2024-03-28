# TrieveJsTsClient.StripeApi

All URIs are relative to *http://localhost:8090*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](StripeApi.md#cancelSubscription) | **DELETE** /api/stripe/subscription/{subscription_id} | Cancel Subscription
[**directToPaymentLink**](StripeApi.md#directToPaymentLink) | **GET** /api/stripe/payment_link/{plan_id}/{organization_id} | Checkout
[**getAllPlans**](StripeApi.md#getAllPlans) | **GET** /api/stripe/plans | Get All Plans
[**updateSubscriptionPlan**](StripeApi.md#updateSubscriptionPlan) | **PATCH** /api/stripe/subscription_plan/{subscription_id}/{plan_id} | Update Subscription Plan



## cancelSubscription

> cancelSubscription(tROrganization, subscriptionId)

Cancel Subscription

Cancel Subscription  Cancel a subscription by its id

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.StripeApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let subscriptionId = "subscriptionId_example"; // String | id of the subscription you want to cancel
apiInstance.cancelSubscription(tROrganization, subscriptionId, (error, data, response) => {
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
 **subscriptionId** | **String**| id of the subscription you want to cancel | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## directToPaymentLink

> directToPaymentLink(planId, organizationId)

Checkout

Checkout  Get a direct link to the stripe checkout page for the plan and organization

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.StripeApi();
let planId = "planId_example"; // String | id of the plan you want to subscribe to
let organizationId = "organizationId_example"; // String | id of the organization you want to subscribe to the plan
apiInstance.directToPaymentLink(planId, organizationId, (error, data, response) => {
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
 **planId** | **String**| id of the plan you want to subscribe to | 
 **organizationId** | **String**| id of the organization you want to subscribe to the plan | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPlans

> [StripePlan] getAllPlans()

Get All Plans

Get All Plans  Get a list of all plans

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';

let apiInstance = new TrieveJsTsClient.StripeApi();
apiInstance.getAllPlans((error, data, response) => {
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

[**[StripePlan]**](StripePlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSubscriptionPlan

> updateSubscriptionPlan(tROrganization, subscriptionId, planId)

Update Subscription Plan

Update Subscription Plan  Update a subscription to a new plan

### Example

```javascript
import TrieveJsTsClient from 'trieve-js-ts-client';
let defaultClient = TrieveJsTsClient.ApiClient.instance;
// Configure API key authorization: ApiKey
let ApiKey = defaultClient.authentications['ApiKey'];
ApiKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKey.apiKeyPrefix = 'Token';

let apiInstance = new TrieveJsTsClient.StripeApi();
let tROrganization = "tROrganization_example"; // String | The organization id to use for the request
let subscriptionId = "subscriptionId_example"; // String | id of the subscription you want to update
let planId = "planId_example"; // String | id of the plan you want to subscribe to
apiInstance.updateSubscriptionPlan(tROrganization, subscriptionId, planId, (error, data, response) => {
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
 **subscriptionId** | **String**| id of the subscription you want to update | 
 **planId** | **String**| id of the plan you want to subscribe to | 

### Return type

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

