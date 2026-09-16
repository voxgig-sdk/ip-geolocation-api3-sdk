-- IpGeolocationApi3 SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "IpGeolocationApi3",
      slug = "ip-geolocation-api3",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "http://ip-api.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["json"] = {},
      },
    },
    entity = {
      ["json"] = {
        ["fields"] = {
          {
            ["name"] = "as",
            ["short"] = "AS number and organization, separated by space (RIR).",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "asname",
            ["short"] = "AS name (RIR).",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "city",
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "continent",
            ["short"] = "Continent name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "continentCode",
            ["short"] = "Two-letter continent code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "country",
            ["short"] = "Country name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "countryCode",
            ["short"] = "Two-letter country code (ISO 3166-1 alpha-2)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currency",
            ["short"] = "National currency code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "district",
            ["short"] = "District (subdivision of city)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "hosting",
            ["short"] = "Hosting, colocated or data center",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isp",
            ["short"] = "ISP name",
            ["type"] = "`$STRING`",
          },
          {
            ["format"] = "float",
            ["name"] = "lat",
            ["short"] = "Latitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["format"] = "float",
            ["name"] = "lon",
            ["short"] = "Longitude",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "message",
            ["short"] = "Error message, included only when status is fail.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "mobile",
            ["short"] = "Mobile (cellular) connection",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "offset",
            ["short"] = "Timezone UTC DST offset in seconds",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "org",
            ["short"] = "Organization name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "proxy",
            ["short"] = "Proxy, VPN or Tor exit address",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "query",
            ["short"] = "IP address or domain used for the query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "region",
            ["short"] = "Region/state short code (FIPS or ISO)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "regionName",
            ["short"] = "Region/state name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reverse",
            ["short"] = "Reverse DNS of the IP (can delay response)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["short"] = "Status of the query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timezone",
            ["short"] = "Timezone (tz database format)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "zip",
            ["short"] = "Zip/postal code",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "json",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "8.8.8.8",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "query",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "status,message,country,city,lat,lon",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/json/{query}",
                ["rename"] = {
                  ["param"] = {
                    ["query"] = "id",
                  },
                },
                ["segments"] = {
                  {
                    ["lit"] = "json",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback",
                    "field",
                    "id",
                    "lang",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "json",
                  "{id}",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "callback",
                      ["orig"] = "callback",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "status,message,country,city,lat,lon",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "en",
                      ["kind"] = "query",
                      ["name"] = "lang",
                      ["orig"] = "lang",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/json/",
                ["segments"] = {
                  {
                    ["lit"] = "json",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback",
                    "field",
                    "lang",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "json",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
