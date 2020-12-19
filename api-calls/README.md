# API Documentation
*The greatest factorial calculator!*

## Documentation for each api call

#### 1. get: https://qainterview.pythonanywhere.com/factorial
**Reuest**
|key|value|required|
|---|---|---|
|**base url**|`https://qainterview.pythonanywhere.com`|
|**path**|`/factorial`|
|**method**|`POST`|
|**request body**|`number=[number]`|yes - a positive integer|

**Response**
|key|value|
|---|---|
|**Status Code**|`200 OK`|
|**Content-Type**|`application/json`|
|**response body**|`{"answer":[number]}`|

