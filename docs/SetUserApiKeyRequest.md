# TrieveJsTsClient.SetUserApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name which will be assigned to the new api key. | 
**role** | **Number** | The role which will be assigned to the new api key. Either 0 (read), 1 (read and write at the level of the currently auth&#39;ed user). The auth&#39;ed user must have a role greater than or equal to the role being assigned which means they must be an admin (1) or owner (2) of the organization to assign write permissions with a role of 1. | 


