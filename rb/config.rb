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
              "active" => true,
              "name" => "as",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "asname",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "city",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "continent",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "continent_code",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "country",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "country_code",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "currency",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "district",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "hosting",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 9,
            },
            {
              "active" => true,
              "name" => "isp",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 10,
            },
            {
              "active" => true,
              "name" => "lat",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 11,
            },
            {
              "active" => true,
              "name" => "lon",
              "req" => false,
              "type" => "`$NUMBER`",
              "index$" => 12,
            },
            {
              "active" => true,
              "name" => "message",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 13,
            },
            {
              "active" => true,
              "name" => "mobile",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 14,
            },
            {
              "active" => true,
              "name" => "offset",
              "req" => false,
              "type" => "`$INTEGER`",
              "index$" => 15,
            },
            {
              "active" => true,
              "name" => "org",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 16,
            },
            {
              "active" => true,
              "name" => "proxy",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "index$" => 17,
            },
            {
              "active" => true,
              "name" => "query",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 18,
            },
            {
              "active" => true,
              "name" => "region",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 19,
            },
            {
              "active" => true,
              "name" => "region_name",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 20,
            },
            {
              "active" => true,
              "name" => "reverse",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 21,
            },
            {
              "active" => true,
              "name" => "status",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 22,
            },
            {
              "active" => true,
              "name" => "timezone",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 23,
            },
            {
              "active" => true,
              "name" => "zip",
              "req" => false,
              "type" => "`$STRING`",
              "index$" => 24,
            },
          ],
          "name" => "json",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "example" => "8.8.8.8",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "query",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
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
                  "index$" => 0,
                },
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "reqd" => false,
                        "type" => "`$STRING`",
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
                  "index$" => 1,
                },
              ],
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
