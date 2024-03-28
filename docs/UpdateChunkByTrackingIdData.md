# TrieveJsTsClient.UpdateChunkByTrackingIdData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunkHtml** | **String** | HTML content of the chunk you want to update. This can also be plaintext. The innerText of the HTML will be used to create the embedding vector. The point of using HTML is for convienience, as some users have applications where users submit HTML content. If no chunk_html is provided, the existing chunk_html will be used. | [optional] 
**groupIds** | **[String]** | Group ids are the ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request. | [optional] 
**groupTrackingIds** | **[String]** | Group tracking_ids are the tracking_ids of the groups that the chunk should be placed into. This is useful for when you want to update a chunk and add it to a group or multiple groups in one request. | [optional] 
**link** | **String** | Link of the chunk you want to update. This can also be any string. Frequently, this is a link to the source of the chunk. The link value will not affect the embedding creation. If no link is provided, the existing link will be used. | [optional] 
**metadata** | **Object** | The metadata is a JSON object which can be used to filter chunks. This is useful for when you want to filter chunks by arbitrary metadata. Unlike with tag filtering, there is a performance hit for filtering on metadata. If no metadata is provided, the existing metadata will be used. | [optional] 
**timeStamp** | **String** | Time_stamp should be an ISO 8601 combined date and time without timezone. It is used for time window filtering and recency-biasing search results. If no time_stamp is provided, the existing time_stamp will be used. | [optional] 
**trackingId** | **String** | Tracking_id of the chunk you want to update. This is required to match an existing chunk. | 
**weight** | **Number** | Weight is a float which can be used to bias search results. This is useful for when you want to bias search results for a chunk. The magnitude only matters relative to other chunks in the chunk&#39;s dataset dataset. If no weight is provided, the existing weight will be used. | [optional] 


