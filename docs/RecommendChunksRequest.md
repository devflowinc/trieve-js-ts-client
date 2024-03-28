# TrieveJsTsClient.RecommendChunksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | [**ChunkFilter**](ChunkFilter.md) |  | [optional] 
**limit** | **Number** | The number of chunks to return. This is the number of chunks which will be returned in the response. The default is 10. | [optional] 
**negativeChunkIds** | **[String]** | The ids of the chunks to be used as negative examples for the recommendation. The chunks in this array will be used to filter out similar chunks. | [optional] 
**negativeTrackingIds** | **[String]** | The tracking_ids of the chunks to be used as negative examples for the recommendation. The chunks in this array will be used to filter out similar chunks. | [optional] 
**positiveChunkIds** | **[String]** | The ids of the chunks to be used as positive examples for the recommendation. The chunks in this array will be used to find similar chunks. | [optional] 
**positiveTrackingIds** | **[String]** | The tracking_ids of the chunks to be used as positive examples for the recommendation. The chunks in this array will be used to find similar chunks. | [optional] 


