# IpGeolocationApi3 SDK

Look up geolocation and network details for any IP address or domain over plain HTTP

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About IP Geolocation API

[ip-api.com](http://ip-api.com) is an IP geolocation service that has operated since 2012, resolving IPv4/IPv6 addresses and domain names to location and network metadata. The operator reports handling more than a billion requests per day.

What you get from the API:

- Location fields such as `country`, `countryCode`, `region`, `regionName`, `city`, `lat`, `lon`, and `timezone`.
- Network fields including `isp`, `org`, and AS information.
- Flags indicating whether the address is associated with mobile, proxy, or hosting networks.
- A `fields` query parameter to restrict the response to only the values you need.

The free JSON endpoint lives at `http://ip-api.com/json/{query}` and is accessed over plain HTTP with no key. Requests are limited to 45 per minute per client IP; over-limit calls return HTTP 429, and each response includes `X-Rl` (requests remaining) and `X-Ttl` (seconds until reset) headers. Batch and DNS endpoints are also available, and HTTPS plus higher quotas are offered through the paid pro tier.

## Try it

**TypeScript**
```bash
npm install ip-geolocation-api3
```

**Python**
```bash
pip install ip-geolocation-api3-sdk
```

**PHP**
```bash
composer require voxgig/ip-geolocation-api3-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/ip-geolocation-api3-sdk/go
```

**Ruby**
```bash
gem install ip-geolocation-api3-sdk
```

**Lua**
```bash
luarocks install ip-geolocation-api3-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { IpGeolocationApi3SDK } from 'ip-geolocation-api3'

const client = new IpGeolocationApi3SDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o ip-geolocation-api3-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "ip-geolocation-api3": {
      "command": "/abs/path/to/ip-geolocation-api3-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Json** | Geolocation lookup for an IP address or domain, returned as JSON from `/json/{query}` with optional `fields` filtering. | `/json/{query}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from ipgeolocationapi3_sdk import IpGeolocationApi3SDK

client = IpGeolocationApi3SDK({})


# Load a specific json
json, err = client.Json(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'ipgeolocationapi3_sdk.php';

$client = new IpGeolocationApi3SDK([]);


// Load a specific json
[$json, $err] = $client->Json(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/ip-geolocation-api3-sdk/go"

client := sdk.NewIpGeolocationApi3SDK(map[string]any{})

```

### Ruby

```ruby
require_relative "IpGeolocationApi3_sdk"

client = IpGeolocationApi3SDK.new({})


# Load a specific json
json, err = client.Json(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("ip-geolocation-api3_sdk")

local client = sdk.new({})


-- Load a specific json
local json, err = client:Json(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = IpGeolocationApi3SDK.test()
const result = await client.Json().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = IpGeolocationApi3SDK.test(None, None)
result, err = client.Json(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = IpGeolocationApi3SDK::test(null, null);
[$result, $err] = $client->Json(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Json(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = IpGeolocationApi3SDK.test(nil, nil)
result, err = client.Json(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Json(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the IP Geolocation API

- Upstream: [http://ip-api.com](http://ip-api.com)
- API docs: [http://ip-api.com/docs](http://ip-api.com/docs)

- Free tier is for non-commercial use only.
- No API key or registration required for the free endpoint.
- Commercial use, SSL access, and unlimited queries require the paid pro service.
- Operator commits that the free API schema will not change.

---

Generated from the IP Geolocation API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
