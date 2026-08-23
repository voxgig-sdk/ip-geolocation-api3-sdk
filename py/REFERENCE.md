# IpGeolocationApi3 Python SDK Reference

Complete API reference for the IpGeolocationApi3 Python SDK.


## IpGeolocationApi3SDK

### Constructor

```python
from ipgeolocationapi3_sdk import IpGeolocationApi3SDK

client = IpGeolocationApi3SDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IpGeolocationApi3SDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IpGeolocationApi3SDK.test()
```


### Instance Methods

#### `Json(data=None)`

Create a new `JsonEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## JsonEntity

```python
json = client.Json()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `as` | `str` | No | AS number and organization, separated by space (RIR). |
| `asname` | `str` | No | AS name (RIR). |
| `city` | `str` | No | City name |
| `continent` | `str` | No | Continent name |
| `continentCode` | `str` | No | Two-letter continent code |
| `country` | `str` | No | Country name |
| `countryCode` | `str` | No | Two-letter country code (ISO 3166-1 alpha-2) |
| `currency` | `str` | No | National currency code |
| `district` | `str` | No | District (subdivision of city) |
| `hosting` | `bool` | No | Hosting, colocated or data center |
| `isp` | `str` | No | ISP name |
| `lat` | `float` | No | Latitude |
| `lon` | `float` | No | Longitude |
| `message` | `str` | No | Error message, included only when status is fail. |
| `mobile` | `bool` | No | Mobile (cellular) connection |
| `offset` | `int` | No | Timezone UTC DST offset in seconds |
| `org` | `str` | No | Organization name |
| `proxy` | `bool` | No | Proxy, VPN or Tor exit address |
| `query` | `str` | No | IP address or domain used for the query |
| `region` | `str` | No | Region/state short code (FIPS or ISO) |
| `regionName` | `str` | No | Region/state name |
| `reverse` | `str` | No | Reverse DNS of the IP (can delay response) |
| `status` | `str` | Yes | Status of the query |
| `timezone` | `str` | No | Timezone (tz database format) |
| `zip` | `str` | No | Zip/postal code |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Json().load({"id": "json_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `JsonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = IpGeolocationApi3SDK({
    "feature": {
        "test": {"active": True},
    },
})
```

