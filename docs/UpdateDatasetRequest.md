# TrieveJsTsClient.UpdateDatasetRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientConfiguration** | **Object** | The new client configuration of the dataset, can be arbitrary JSON. See docs.trieve.ai for more information. If not provided, the client configuration will not be updated. | [optional] 
**datasetId** | **String** | The id of the dataset you want to update. | 
**datasetName** | **String** | The new name of the dataset. Must be unique within the organization. If not provided, the name will not be updated. | [optional] 
**serverConfiguration** | **Object** | The new server configuration of the dataset, can be arbitrary JSON. See docs.trieve.ai for more information. If not provided, the server configuration will not be updated. | [optional] 


