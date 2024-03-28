# TrieveJsTsClient.EditMessageData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**highlightCitations** | **Boolean** | Whether or not to highlight the citations in the response. If this is set to true or not included, the citations will be highlighted. If this is set to false, the citations will not be highlighted. Default is true. | [optional] 
**highlightDelimiters** | **[String]** | The delimiters to use for highlighting the citations. If this is not included, the default delimiters will be used. Default is &#x60;[\&quot;.\&quot;, \&quot;!\&quot;, \&quot;?\&quot;, \&quot;\\n\&quot;, \&quot;\\t\&quot;, \&quot;,\&quot;]&#x60;. | [optional] 
**messageSortOrder** | **Number** | The sort order of the message to edit. | 
**model** | **String** | The model to use for the assistant generative inferences. This can be any model from the openrouter model list. If no model is provided, the gpt-3.5-turbo will be used.~ | [optional] 
**newMessageContent** | **String** | The new content of the message to replace the old content with. | 
**streamResponse** | **Boolean** | Whether or not to stream the response. If this is set to true or not included, the response will be a stream. If this is set to false, the response will be a normal JSON response. Default is true. | [optional] 
**topicId** | **String** | The id of the topic to edit the message at the given sort order for. | 


