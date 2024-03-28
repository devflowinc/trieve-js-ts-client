# TrieveJsTsClient.SearchChunkData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateBias** | **Boolean** | Set date_bias to true to bias search results towards more recent chunks. This will work best in hybrid search mode. | [optional] 
**filters** | [**ChunkFilter**](ChunkFilter.md) |  | [optional] 
**getCollisions** | **Boolean** | Set get_collisions to true to get the collisions for each chunk. This will only apply if environment variable COLLISIONS_ENABLED is set to true. | [optional] 
**highlightDelimiters** | **[String]** | Set highlight_delimiters to a list of strings to use as delimiters for highlighting. If not specified, this defaults to [\&quot;?\&quot;, \&quot;,\&quot;, \&quot;.\&quot;, \&quot;!\&quot;]. | [optional] 
**highlightResults** | **Boolean** | Set highlight_results to true to highlight the results. If not specified, this defaults to true. | [optional] 
**page** | **Number** | Page of chunks to fetch. Each page is 10 chunks. Support for custom page size is coming soon. | [optional] 
**pageSize** | **Number** | Page size is the number of chunks to fetch. This can be used to fetch more than 10 chunks at a time. | [optional] 
**query** | **String** | Query is the search query. This can be any string. The query will be used to create an embedding vector and/or SPLADE vector which will be used to find the result set. | 
**scoreThreshold** | **Number** | Set score_threshold to a float to filter out chunks with a score below the threshold. | [optional] 
**searchType** | **String** | Can be either \&quot;semantic\&quot;, \&quot;fulltext\&quot;, or \&quot;hybrid\&quot;. \&quot;hybrid\&quot; will pull in one page (10 chunks) of both semantic and full-text results then re-rank them using BAAI/bge-reranker-large. \&quot;semantic\&quot; will pull in one page (10 chunks) of the nearest cosine distant vectors. \&quot;fulltext\&quot; will pull in one page (10 chunks) of full-text results based on SPLADE. | 
**useWeights** | **Boolean** | Set use_weights to true to use the weights of the chunks in the result set in order to sort them. If not specified, this defaults to true. | [optional] 


