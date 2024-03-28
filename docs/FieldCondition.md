# TrieveJsTsClient.FieldCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field** | **String** | Field is the name of the field to filter on. The field value will be used to check for an exact substring match on the metadata values for each existing chunk. This is useful for when you want to filter chunks by arbitrary metadata. To access fields inside of the metadata that you provide with the card, prefix the field name with &#x60;metadata.&#x60;. | 
**match** | [**[MatchCondition]**](MatchCondition.md) | Match is the value to match on the field. The match value will be used to check for an exact substring match on the metadata values for each existing chunk. This is useful for when you want to filter chunks by arbitrary metadata. | [optional] 
**range** | [**Range**](Range.md) |  | [optional] 


