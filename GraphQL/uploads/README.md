## HackBook API


# Allowed HTTPs requests:

POST    : Update resource
GET     : Get a resource or list of resources

# Description Of Usual Server Responses:

-   200 `OK` - the request was successful (some API calls may return 201 instead).
    
-   201 `Created` - the request was successful and a resource was created.
    
-   204 `No Content` - the request was successful but there is no representation to return (i.e. the response is empty).
    
-   400 `Bad Request` - the request could not be understood or was missing required parameters.
    
-   401 `Unauthorized` - authentication failed or user doesn't have permissions for requested operation.
    
-   403 `Forbidden` - access denied.
    
-   404 `Not Found` - resource was not found.
    
-   405 `Method Not Allowed` - requested method is not supported for resource.

## API Database Schema
Users

    name:  {
    
    type:String,
    
    required:true,
    
    min:4,
    
    max:10
    
    },
    
    email:{
    
    type:String,
    
    required:true,
    
    max:255,
    
    min:6
    
    },
    
    password:{
    
    type:String,
    
    required:true,
    
    max:16,
    
    min:6
    
    },
    
    plainpassword:{
    
    type:String
    
    },//Debug Purpose Only
    
    date:{
    
    type:Date,
    
    default:Date.now
    
    }

Posts

    author:  {
    
    type:String,
    
    required:true,
    
    min:4,
    
    max:10
    
    },
    
    post:{
    
    type:String,
    
    required:true,
    
    max:255,
    
    min:6
    
    },
    
    date:{
    
    type:Date,
    
    default:Date.now
    
    }

### API calls

Explore the API here hands-on.

This API supports a data response in JSON format.
**

## Index

**
Request

    GET /
    Host: localhost:3000
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    Connection: keep-alive
    Upgrade-Insecure-Requests: 1
    If-None-Match: W/"21-dwofNCGUlaDYcsROC6awQQcp1ws"
    Cache-Control: max-age=0

Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 14
    ETag: W/"e-TRyodWMr2S9LjP9Wq/M3Bbp95ko"
    Date: Mon, 29 Jul 2019 07:19:24 GMT
    Connection: close
    
    "HackBook API"
    
## Register

Request

    GET /api/user/register HTTP/1.1
    Host: localhost:3000
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
    Accept-Language: en-US,en;q=0.5
    Accept-Encoding: gzip, deflate
    Connection: close
    Upgrade-Insecure-Requests: 1
    If-None-Match: W/"16-sl1Fcfpz/9DnlKXjSwOJ+HiEcZA"
    Cache-Control: max-age=0

Response

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 14
ETag: W/"e-TRyodWMr2S9LjP9Wq/M3Bbp95ko"
Date: Mon, 29 Jul 2019 07:19:24 GMT
Connection: close

"Register as new user"
```

    POST /api/user/register HTTP/1.1
    Content-Type: application/json
    Authorization: Basic 08a8b86f2b9938a021747b1ab64afe7a
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 9cdf64a0-50fb-45e6-8d53-117fca9913e2
    Host: localhost:3000
    Accept-Encoding: gzip, deflate
    Content-Length: 70
    Connection: close
    
    {
    	"name":"user",
    	"email":"test@user.com",
    	"password":"testuser"
    	
    }'
 Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 215
    ETag: W/"d7-HqS0bcRPSGJYBeb6Z5y0HQdnQHQ"
    Date: Mon, 29 Jul 2019 07:35:27 GMT
    Connection: close
    
    {"_id":"5d3ea1bf28a2c205a8ac4ed8","name":"user","email":"test@user.com","password":"$2b$10$w1zRrUrS7ErFGHXmDGQMO.s6AB2e8STCAtWR53UMmprjadhVuOPh6","plainpassword":"testuser","date":"2019-07-29T07:35:27.291Z","__v":0}

Using Curl

    curl -i -s -k  -X $'POST' \
        -H $'Content-Type: application/json' -H $'Accept: */*' -H $'Cache-Control: no-cache' -H $'Host: localhost:3000' -H $'Accept-Encoding: gzip, deflate' -H $'Content-Length: 70' -H $'Connection: close' \
        --data-binary $'{\x0a\x09\"name\":\"user\",\x0a\x09\"email\":\"test@user.com\",\x0a\x09\"password\":\"testuser\"\x0a\x09\x0a}' \
        $'http://localhost:3000/api/user/register'

## LogIn
Request

    GET /api/user/login HTTP/1.1
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 2b7cfa1d-246b-4867-a7cd-6b843bf31f93
    Host: localhost:3000
    Accept-Encoding: gzip, deflate
    Content-Length: 44
    Connection: close

Response
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 14
ETag: W/"e-TRyodWMr2S9LjP9Wq/M3Bbp95ko"
Date: Mon, 29 Jul 2019 07:19:24 GMT
Connection: close

"Please Login with Email and password"
```
Login User

    POST /api/user/login HTTP/1.1
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Host: localhost:3000
    Accept-Encoding: gzip, deflate
    Content-Length: 44
    Connection: close
    
    {
    	"name":"user",
    	"password":"testuser"
    	
    }
Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidXNlciIsImlhdCI6MTU2NDM4NjQxMH0.ksgcwlLVP-xDNq339eEAdfHc9fu5wqM0ml_5fTX-Bjo
    Content-Type: application/json; charset=utf-8
    Content-Length: 12
    ETag: W/"c-Alm8veRBTHtI/FR1e8OXpQzz518"
    Date: Mon, 29 Jul 2019 07:46:50 GMT
    Connection: close
    
    "Hello user"
Using Curl

    curl -i -s -k  -X $'POST' \
        -H $'Content-Type: application/json' -H $'User-Agent: PostmanRuntime/7.15.2' -H $'Accept: */*' -H $'Cache-Control: no-cache' -H $'Postman-Token: eb72d499-8ab1-4f41-9a11-03375c4eeff2' -H $'Host: localhost:3000' -H $'Accept-Encoding: gzip, deflate' -H $'Content-Length: 44' -H $'Connection: close' \
        --data-binary $'{\x0a\x09\"name\":\"user\",\x0a\x09\"password\":\"testuser\"\x0a\x09\x0a}' \
        $'http://localhost:3000/api/user/login'

## Experimental Stuff

**GraphQL**

    POST /graphql HTTP/1.1
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Postman-Token: 2cc77cbd-6a19-4608-8e36-fd5be2bdef61
    Host: localhost:3000
    Accept-Encoding: gzip, deflate
    Content-Length: 76
    Connection: close
    
    {"query":"{\r\n    posts{\r\n        author,\r\n        post\r\n    }\r\n}"}

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 1697
    ETag: W/"6a1-PbyFYA2AEzqnx/fdW9xgdAApkis"
    Date: Mon, 29 Jul 2019 07:50:56 GMT
    Connection: close
    
    {"data":{"posts":[{"author":"admin","post":"Hello World this is a test post"},{"author":"Mr. Robot","post":"When we lose our principles, we invite chaos."},{"author":"Fernando Vera","post":"People walk around, act like they know what hate means. Nah, no one does, until you hate yourself. I mean truly hate yourself. Thatâs power."},{"author":"Mr. Robot","post":"I have burrowed underneath your brain. I am nested there. I am the scream in your mind. You will cooperate."},{"author":"Elliot","post":"Though sheâs a psychologist sheâs really bad at reading people but Iâm good at reading people. My secret? I look for the worst in them."},{"author":"Elliot","post":"Weâre all living in each otherâs paranoia."},{"author":"Terry Colby","post":"If you want to change things, perhaps you should try from within, because this is what happens from the outside"},{"author":"Mr. Robot","post":"The concept of waiting bewilders me. There are always deadlines. There are always ticking clocks. That is why you must manage your time."},{"author":"Mr. Robot","post":"Iâve never found it hard to hack most people. If you listen to them, watch them, their vulnerabilities are like a neon sign."},{"author":"Lone Star","post":"Never trust a tech guy with a rat tailâtoo easy to carve secrets out of him."},{"author":"Mr. Robot","post":"Control can sometimes be an illusion. But sometimes you need illusion to gain control"},{"author":"Elliot","post":"Itâs good. So good, it scratched that part of my mind. The part that doesnât allow good to exist without a condition."},{"author":"Elliot","post":"I wanted to save the world."},{"author":"Whiterose","post":"You hack people. I hack time."}]}}

Using Curl

    curl -i -s -k  -X $'POST' \
        -H $'Content-Type: application/json' -H $'User-Agent: PostmanRuntime/7.15.2' -H $'Accept: */*' -H $'Cache-Control: no-cache' -H $'Postman-Token: 2cc77cbd-6a19-4608-8e36-fd5be2bdef61' -H $'Host: localhost:3000' -H $'Accept-Encoding: gzip, deflate' -H $'Content-Length: 76' -H $'Connection: close' \
        --data-binary $'{\"query\":\"{\\r\\n    posts{\\r\\n        author,\\r\\n        post\\r\\n    }\\r\\n}\"}' \
        $'http://localhost:3000/graphql'

Querying Posts based on Authors

    POST /graphql HTTP/1.1
    Content-Type: application/json
    User-Agent: PostmanRuntime/7.15.2
    Accept: */*
    Cache-Control: no-cache
    Host: localhost:3000
    Accept-Encoding: gzip, deflate
    Content-Length: 94
    Connection: close
    
    {"query":"{\r\n    post(author:\"Elliot\"){\r\n        author,\r\n        post\r\n    }\r\n}"}

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 188
    ETag: W/"bc-xzmMYlOZZwHdLDtuIAPzVMJoM40"
    Date: Mon, 29 Jul 2019 07:53:16 GMT
    Connection: close
    
    {"data":{"post":{"author":"Elliot","post":"Though sheâs a psychologist sheâs really bad at reading people but Iâm good at reading people. My secret? I look for the worst in them."}}}

Returns Post made by **Elliot**


***API Requests can be made through Postman or Insomnia Rest Client***
