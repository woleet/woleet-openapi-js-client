# WoleetApi.Anchor

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Anchor identifier.&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 
**created** | **Integer** | Date of creation (in milliseconds since Unix epoch).&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 
**lastModified** | **Integer** | Date of last modification (in milliseconds since Unix epoch).&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 
**name** | **String** | Anchor name (don&#39;t need to be unique).  | 
**hash** | **String** | SHA256 hash of the anchored data. This is the fingerprint of the anchored data.  | 
**_public** | **Boolean** | &#x60;true&#x60; (or unset) if the anchor is public. &#x60;false&#x60; is the anchor is private.&lt;br&gt; If this field is not set at creation time, the anchor is public by default.&lt;br&gt;  | [optional] [default to true]
**tags** | **[String]** | Set of tags associated to the anchor. There is no restriction on tag names, except they cannot contain spaces.&lt;br&gt; Tags are aimed at classifying and searching anchors.  | [optional] 
**metadata** | **Object** | A JavaScript object containing any set of key/values to store with the anchor and giving additional information about the anchored data.&lt;br&gt; ex: { title: &#39;Ubik&#39;, author: &#39;Philip K. Dick&#39; }  | [optional] 
**callbackURL** | **String** | URL to be called by the platform whenever the anchor status change: the platform performs a POST operation with the anchor as a JSON object in the body.  | [optional] 
**targetURI** | **String** | URI of the anchored data (this URI is not used by the platform).  | [optional] 
**status** | **String** | The status of the anchor:&lt;br&gt; - WAIT: waiting to be processed.&lt;br&gt; - NEW: waiting to be sent to the blockchain.&lt;br&gt; - SENT: waiting to be confirmed 6 times by the blockchain.&lt;br&gt; - CONFIRMED: confirmed at least 6 times by the blockchain.&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 
**timestamp** | **Integer** | Proven timestamp of the data.&lt;br&gt; This is actually the time of the Bitcoin block into which the anchoring process occured (in milliseconds since Unix epoch).&lt;br&gt; Any data whose SHA256 hash equals this anchor&#39;s hash is prooven to be existant at that time and unmodified.&lt;br&gt; This field is set when the first confirmation of the Bitcoin block occurs.&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 
**confirmations** | **Integer** | Number of confirmations of the Bitcoin block into which the anchoring hapenned.&lt;br&gt; This field is set when the first confirmation of the Bitcoin block occurs, and removed when the block is confirmed.&lt;br&gt; **This property is a read-only property managed by the platform: it must not be provided at creation time or modified.**.  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `WAIT` (value: `"WAIT"`)

* `NEW` (value: `"NEW"`)

* `SENT` (value: `"SENT"`)

* `CONFIRMED` (value: `"CONFIRMED"`)




