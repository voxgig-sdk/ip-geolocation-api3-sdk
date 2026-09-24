
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'IpGeolocationApi3',
        slug: "ip-geolocation-api3",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "http://ip-api.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        json: {
        },
  
    }
  }


  entity = {
    "json": {
      "fields": [
        {
          "name": "as",
          "title": "As",
          "type": "`$STRING`",
          "short": "AS number and organization, separated by space (RIR)."
        },
        {
          "name": "asname",
          "title": "Asname",
          "type": "`$STRING`",
          "short": "AS name (RIR)."
        },
        {
          "name": "city",
          "title": "City",
          "type": "`$STRING`",
          "short": "City name"
        },
        {
          "name": "continent",
          "title": "Continent",
          "type": "`$STRING`",
          "short": "Continent name"
        },
        {
          "name": "continentCode",
          "title": "Continent Code",
          "type": "`$STRING`",
          "short": "Two-letter continent code"
        },
        {
          "name": "country",
          "title": "Country",
          "type": "`$STRING`",
          "short": "Country name"
        },
        {
          "name": "countryCode",
          "title": "Country Code",
          "type": "`$STRING`",
          "short": "Two-letter country code (ISO 3166-1 alpha-2)"
        },
        {
          "name": "currency",
          "title": "Currency",
          "type": "`$STRING`",
          "short": "National currency code"
        },
        {
          "name": "district",
          "title": "District",
          "type": "`$STRING`",
          "short": "District (subdivision of city)"
        },
        {
          "name": "hosting",
          "title": "Hosting",
          "type": "`$BOOLEAN`",
          "short": "Hosting, colocated or data center"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        },
        {
          "name": "isp",
          "title": "Isp",
          "type": "`$STRING`",
          "short": "ISP name"
        },
        {
          "name": "lat",
          "title": "Lat",
          "type": "`$NUMBER`",
          "short": "Latitude",
          "format": "float"
        },
        {
          "name": "lon",
          "title": "Lon",
          "type": "`$NUMBER`",
          "short": "Longitude",
          "format": "float"
        },
        {
          "name": "message",
          "title": "Message",
          "type": "`$STRING`",
          "short": "Error message, included only when status is fail."
        },
        {
          "name": "mobile",
          "title": "Mobile",
          "type": "`$BOOLEAN`",
          "short": "Mobile (cellular) connection"
        },
        {
          "name": "offset",
          "title": "Offset",
          "type": "`$INTEGER`",
          "short": "Timezone UTC DST offset in seconds"
        },
        {
          "name": "org",
          "title": "Org",
          "type": "`$STRING`",
          "short": "Organization name"
        },
        {
          "name": "proxy",
          "title": "Proxy",
          "type": "`$BOOLEAN`",
          "short": "Proxy, VPN or Tor exit address"
        },
        {
          "name": "query",
          "title": "Query",
          "type": "`$STRING`",
          "short": "IP address or domain used for the query"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "short": "Region/state short code (FIPS or ISO)"
        },
        {
          "name": "regionName",
          "title": "Region Name",
          "type": "`$STRING`",
          "short": "Region/state name"
        },
        {
          "name": "reverse",
          "title": "Reverse",
          "type": "`$STRING`",
          "short": "Reverse DNS of the IP (can delay response)"
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "req": true,
          "short": "Status of the query"
        },
        {
          "name": "timezone",
          "title": "Timezone",
          "type": "`$STRING`",
          "short": "Timezone (tz database format)"
        },
        {
          "name": "zip",
          "title": "Zip",
          "type": "`$STRING`",
          "short": "Zip/postal code"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
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
                  "lit": "json"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "json",
                "{id}"
              ],
              "rename": {
                "param": {
                  "query": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "query",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true,
                    "example": "8.8.8.8"
                  }
                ],
                "query": [
                  {
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "status,message,country,city,lat,lon"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  }
                ]
              },
              "select": {
                "exist": [
                  "callback",
                  "field",
                  "id",
                  "lang"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/json/",
              "segments": [
                {
                  "lit": "json"
                }
              ],
              "parts": [
                "json"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "callback",
                    "orig": "callback",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "field",
                    "orig": "field",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "status,message,country,city,lat,lon"
                  },
                  {
                    "name": "lang",
                    "orig": "lang",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "en"
                  }
                ]
              },
              "select": {
                "exist": [
                  "callback",
                  "field",
                  "lang"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

