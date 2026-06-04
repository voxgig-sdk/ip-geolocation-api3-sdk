# IpGeolocationApi3 SDK configuration


def make_config():
    return {
        "main": {
            "name": "IpGeolocationApi3",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "asname",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "city",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "continent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "continent_code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "country",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "country_code",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "currency",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "district",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "hosting",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "isp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "lat",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "lon",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "mobile",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "offset",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "org",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
          {
            "name": "proxy",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 17,
          },
          {
            "name": "query",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 18,
          },
          {
            "name": "region",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 19,
          },
          {
            "name": "region_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 20,
          },
          {
            "name": "reverse",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 21,
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 22,
          },
          {
            "name": "timezone",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 23,
          },
          {
            "name": "zip",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 24,
          },
        ],
        "name": "json",
        "op": {
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "example": "8.8.8.8",
                      "kind": "param",
                      "name": "id",
                      "orig": "query",
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "status,message,country,city,lat,lon",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/json/{query}",
                "parts": [
                  "json",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "query": "id",
                  },
                },
                "select": {
                  "exist": [
                    "callback",
                    "field",
                    "id",
                    "lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "callback",
                      "orig": "callback",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "status,message,country,city,lat,lon",
                      "kind": "query",
                      "name": "field",
                      "orig": "field",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "en",
                      "kind": "query",
                      "name": "lang",
                      "orig": "lang",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/json/",
                "parts": [
                  "json",
                ],
                "select": {
                  "exist": [
                    "callback",
                    "field",
                    "lang",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 1,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
