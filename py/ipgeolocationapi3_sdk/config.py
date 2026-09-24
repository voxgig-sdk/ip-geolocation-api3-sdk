# IpGeolocationApi3 SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "IpGeolocationApi3",
            "slug": "ip-geolocation-api3",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "http://ip-api.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "json": {},
            },
        },
        "entity": {
      "json": {
        "fields": [
          {
            "name": "as",
            "title": "As",
            "type": "`$STRING`",
            "short": "AS number and organization, separated by space (RIR).",
          },
          {
            "name": "asname",
            "title": "Asname",
            "type": "`$STRING`",
            "short": "AS name (RIR).",
          },
          {
            "name": "city",
            "title": "City",
            "type": "`$STRING`",
            "short": "City name",
          },
          {
            "name": "continent",
            "title": "Continent",
            "type": "`$STRING`",
            "short": "Continent name",
          },
          {
            "name": "continentCode",
            "title": "Continent Code",
            "type": "`$STRING`",
            "short": "Two-letter continent code",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "short": "Country name",
          },
          {
            "name": "countryCode",
            "title": "Country Code",
            "type": "`$STRING`",
            "short": "Two-letter country code (ISO 3166-1 alpha-2)",
          },
          {
            "name": "currency",
            "title": "Currency",
            "type": "`$STRING`",
            "short": "National currency code",
          },
          {
            "name": "district",
            "title": "District",
            "type": "`$STRING`",
            "short": "District (subdivision of city)",
          },
          {
            "name": "hosting",
            "title": "Hosting",
            "type": "`$BOOLEAN`",
            "short": "Hosting, colocated or data center",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "isp",
            "title": "Isp",
            "type": "`$STRING`",
            "short": "ISP name",
          },
          {
            "name": "lat",
            "title": "Lat",
            "type": "`$NUMBER`",
            "short": "Latitude",
            "format": "float",
          },
          {
            "name": "lon",
            "title": "Lon",
            "type": "`$NUMBER`",
            "short": "Longitude",
            "format": "float",
          },
          {
            "name": "message",
            "title": "Message",
            "type": "`$STRING`",
            "short": "Error message, included only when status is fail.",
          },
          {
            "name": "mobile",
            "title": "Mobile",
            "type": "`$BOOLEAN`",
            "short": "Mobile (cellular) connection",
          },
          {
            "name": "offset",
            "title": "Offset",
            "type": "`$INTEGER`",
            "short": "Timezone UTC DST offset in seconds",
          },
          {
            "name": "org",
            "title": "Org",
            "type": "`$STRING`",
            "short": "Organization name",
          },
          {
            "name": "proxy",
            "title": "Proxy",
            "type": "`$BOOLEAN`",
            "short": "Proxy, VPN or Tor exit address",
          },
          {
            "name": "query",
            "title": "Query",
            "type": "`$STRING`",
            "short": "IP address or domain used for the query",
          },
          {
            "name": "region",
            "title": "Region",
            "type": "`$STRING`",
            "short": "Region/state short code (FIPS or ISO)",
          },
          {
            "name": "regionName",
            "title": "Region Name",
            "type": "`$STRING`",
            "short": "Region/state name",
          },
          {
            "name": "reverse",
            "title": "Reverse",
            "type": "`$STRING`",
            "short": "Reverse DNS of the IP (can delay response)",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Status of the query",
          },
          {
            "name": "timezone",
            "title": "Timezone",
            "type": "`$STRING`",
            "short": "Timezone (tz database format)",
          },
          {
            "name": "zip",
            "title": "Zip",
            "type": "`$STRING`",
            "short": "Zip/postal code",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "json",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/json/{query}",
                "segments": [
                  {
                    "lit": "json",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "json",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "query": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "query",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "8.8.8.8",
                    },
                  ],
                  "query": [
                    {
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "status,message,country,city,lat,lon",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "callback",
                    "field",
                    "id",
                    "lang",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/json/",
                "segments": [
                  {
                    "lit": "json",
                  },
                ],
                "parts": [
                  "json",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "callback",
                      "orig": "callback",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "field",
                      "orig": "field",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "status,message,country,city,lat,lon",
                    },
                    {
                      "name": "lang",
                      "orig": "lang",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "en",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "callback",
                    "field",
                    "lang",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
