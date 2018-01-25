# WoleetApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | User identifier. It is allocated by the platform, and so must not be provided at creation time.  | [optional] 
**email** | **String** | Email of the user.  | 
**password** | **String** | Password of the user (it must be provided at creation time).  | 
**roles** | **[String]** | The roles of the user:&lt;br&gt; - ROLE_USER: regular user&lt;br&gt; - ROLE_DOMAIN_ADMIN: domain administrator.  | 
**info** | **{String: Object}** | Object storing meta data about the user. Some property names are reserved, but properties are not limitted to the one listed here.  | 
**status** | **String** | The status of the user:&lt;br&gt; - PENDING: the user email need to be validated&lt;br&gt; - APPROVED: the user can loging&lt;br&gt; - DISABLED: the user cannot login  | [default to &#39;PENDING&#39;]
**created** | **Number** | Date of creation (in ms since Unix epoch).  | [optional] 
**lastModified** | **Number** | Date of last modification (in ms since Unix epoch).  | [optional] 


<a name="[RolesEnum]"></a>
## Enum: [RolesEnum]


* `USER` (value: `"ROLE_USER"`)

* `DOMAIN_ADMIN` (value: `"ROLE_DOMAIN_ADMIN"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `DISABLED` (value: `"DISABLED"`)




