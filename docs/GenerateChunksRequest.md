# TrieveJsTsClient.GenerateChunksRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chunkIds** | **[String]** | The ids of the chunks to be retrieved and injected into the context window for RAG. | 
**model** | **String** | The model to use for the chat. This can be any model from the openrouter model list. If no model is provided, gpt-3.5-turbo will be used. | [optional] 
**prevMessages** | [**[ChatMessageProxy]**](ChatMessageProxy.md) | The previous messages to be placed into the chat history. The last message in this array will be the prompt for the model to inference on. The length of this array must be at least 1. | 
**prompt** | **String** | Prompt for the last message in the prev_messages array. This will be used to generate the next message in the chat. The default is &#39;Respond to the instruction and include the doc numbers that you used in square brackets at the end of the sentences that you used the docs for:&#39;. You can also specify an empty string to leave the final message alone such that your user&#39;s final message can be used as the prompt. See docs.trieve.ai or contact us for more information. | [optional] 
**streamResponse** | **Boolean** | Whether or not to stream the response. If this is set to true or not included, the response will be a stream. If this is set to false, the response will be a normal JSON response. Default is true. | [optional] 


