# TrieveJsTsClient.ReccomendGroupChunksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ChunkFilter**](ChunkFilter.md) |  | [optional] 
**groupSize** | **Number** | The number of chunks to fetch for each group. This is the number of chunks which will be returned in the response for each group. The default is 10. | [optional] 
**limit** | **Number** | The number of groups to return. This is the number of groups which will be returned in the response. The default is 10. | [optional] 
**negativeGroupIds** | **[String]** | The  ids of the groups to be used as negative examples for the recommendation. The groups in this array will be used to filter out similar groups. | [optional] 
**negativeGroupTrackingIds** | **[String]** | The  ids of the groups to be used as negative examples for the recommendation. The groups in this array will be used to filter out similar groups. | [optional] 
**positiveGroupIds** | **[String]** | The  ids of the groups to be used as positive examples for the recommendation. The groups in this array will be used to find similar groups. | [optional] 
**positiveGroupTrackingIds** | **[String]** | The  ids of the groups to be used as positive examples for the recommendation. The groups in this array will be used to find similar groups. | [optional] 


