# IpGeolocationApi3 Lua SDK Reference

Complete API reference for the IpGeolocationApi3 Lua SDK.


## IpGeolocationApi3SDK

### Constructor

```lua
local sdk = require("ip-geolocation-api3_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Json(data)`

Create a new `Json` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## JsonEntity

```lua
local json = client:Json(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as` | `string` | No | AS number and organization, separated by space (RIR). |
| `asname` | `string` | No | AS name (RIR). |
| `city` | `string` | No | City name |
| `continent` | `string` | No | Continent name |
| `continentCode` | `string` | No | Two-letter continent code |
| `country` | `string` | No | Country name |
| `countryCode` | `string` | No | Two-letter country code (ISO 3166-1 alpha-2) |
| `currency` | `string` | No | National currency code |
| `district` | `string` | No | District (subdivision of city) |
| `hosting` | `boolean` | No | Hosting, colocated or data center |
| `isp` | `string` | No | ISP name |
| `lat` | `number` | No | Latitude |
| `lon` | `number` | No | Longitude |
| `message` | `string` | No | Error message, included only when status is fail. |
| `mobile` | `boolean` | No | Mobile (cellular) connection |
| `offset` | `number` | No | Timezone UTC DST offset in seconds |
| `org` | `string` | No | Organization name |
| `proxy` | `boolean` | No | Proxy, VPN or Tor exit address |
| `query` | `string` | No | IP address or domain used for the query |
| `region` | `string` | No | Region/state short code (FIPS or ISO) |
| `regionName` | `string` | No | Region/state name |
| `reverse` | `string` | No | Reverse DNS of the IP (can delay response) |
| `status` | `string` | Yes | Status of the query |
| `timezone` | `string` | No | Timezone (tz database format) |
| `zip` | `string` | No | Zip/postal code |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Json():load({ id = "json_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JsonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

