# TrieveJsTsClient.CreateTopicData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstUserMessage** | **String** | The first message which will belong to the topic. The topic name is generated based on this message similar to how it works in the OpenAI chat UX if a name is not explicitly provided on the name request body key. | [optional] 
**model** | **String** | The model to use for the assistant&#39;s messages. This can be any model from the openrouter model list. If no model is provided, the gpt-3.5-turbo will be used. | [optional] 
**name** | **String** | The name of the topic. If this is not provided, the topic name is generated from the first_user_message. | [optional] 


