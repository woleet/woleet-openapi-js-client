# WoleetApi.User

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | User identifier. It is allocated by the platform, and so must not be provided at creation time.  | [optional] [readonly] 
**created** | **Number** | Date of creation (in milliseconds since Unix epoch).  | [optional] [readonly] 
**lastModified** | **Number** | Date of last modification (in milliseconds since Unix epoch).  | [optional] [readonly] 
**email** | **String** | Email of the user.  | 
**password** | **String** | Password of the user (it must be provided at creation time).  | 
**roles** | **[String]** | The roles of the user:&lt;br&gt; - ROLE_USER: regular user&lt;br&gt; - ROLE_DOMAIN_ADMIN: domain administrator.  | 
**info** | [**Info**](Info.md) |  | 
**status** | **String** | The status of the user:&lt;br&gt; - PENDING: the user email need to be validated&lt;br&gt; - APPROVED: the user can loging&lt;br&gt; - DISABLED: the user cannot login  | [default to &#39;PENDING&#39;]



## Enum: [RolesEnum]


* `USER` (value: `"ROLE_USER"`)

* `DOMAIN_ADMIN` (value: `"ROLE_DOMAIN_ADMIN"`)





## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `DISABLED` (value: `"DISABLED"`)




