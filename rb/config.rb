# IpGeolocationApi3 SDK configuration

module IpGeolocationApi3Config
  def self.make_config
    {
      "main" => {
        "name" => "IpGeolocationApi3",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "http://ip-api.com",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "json" => {},
        },
      },
      "entity" => {
        "json" => {
          "fields" => [
            {
              "name" => "as",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "asname",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "city",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "continent",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
            {
              "name" => "continent_code",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 4,
            },
            {
              "name" => "country",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 5,
            },
            {
              "name" => "country_code",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 6,
            },
            {
              "name" => "currency",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 7,
            },
            {
              "name" => "district",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 8,
            },
            {
              "name" => "hosting",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 9,
            },
            {
              "name" => "isp",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 10,
            },
            {
              "name" => "lat",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 11,
            },
            {
              "name" => "lon",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 12,
            },
            {
              "name" => "message",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 13,
            },
            {
              "name" => "mobile",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 14,
            },
            {
              "name" => "offset",
              "req" => false,
              "type" => "`$INTEGER`",
              "active" => true,
              "index$" => 15,
            },
            {
              "name" => "org",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 16,
            },
            {
              "name" => "proxy",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 17,
            },
            {
              "name" => "query",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 18,
            },
            {
              "name" => "region",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 19,
            },
            {
              "name" => "region_name",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 20,
            },
            {
              "name" => "reverse",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 21,
            },
            {
              "name" => "status",
              "req" => true,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 22,
            },
            {
              "name" => "timezone",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 23,
            },
            {
              "name" => "zip",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 24,
            },
          ],
          "name" => "json",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "8.8.8.8",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/json/{query}",
                  "parts" => [
                    "json",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "query" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "callback",
                      "field",
                      "id",
                      "lang",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/json/",
                  "parts" => [
                    "json",
                  ],
                  "select" => {
                    "exist" => [
                      "callback",
                      "field",
                      "lang",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 1,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    IpGeolocationApi3Features.make_feature(name)
  end
end
