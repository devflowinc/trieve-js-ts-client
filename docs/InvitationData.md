# TrieveJsTsClient.InvitationData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appUrl** | **String** | The url of the app that the user will be directed to in order to set their password. Usually admin.trieve.ai, but may differ for local dev or self-hosted setups. | 
**email** | **String** | The email of the user to invite. Must be a valid email as they will be sent an email to register. | 
**organizationId** | **String** | The id of the organization to invite the user to. | 
**redirectUri** | **String** | The url that the user will be redirected to after setting their password. | 
**userRole** | **Number** | The role the user will have in the organization. 0 &#x3D; User, 1 &#x3D; Admin, 2 &#x3D; Owner. | 


