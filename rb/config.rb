# IpGeolocationApi3 SDK configuration

module IpGeolocationApi3Config
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "type" => "`$STRING`",
            },
            {
              "name" => "asname",
              "type" => "`$STRING`",
            },
            {
              "name" => "city",
              "type" => "`$STRING`",
            },
            {
              "name" => "continent",
              "type" => "`$STRING`",
            },
            {
              "name" => "continentCode",
              "type" => "`$STRING`",
            },
            {
              "name" => "country",
              "type" => "`$STRING`",
            },
            {
              "name" => "countryCode",
              "type" => "`$STRING`",
            },
            {
              "name" => "currency",
              "type" => "`$STRING`",
            },
            {
              "name" => "district",
              "type" => "`$STRING`",
            },
            {
              "name" => "hosting",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "isp",
              "type" => "`$STRING`",
            },
            {
              "name" => "lat",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "lon",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "message",
              "type" => "`$STRING`",
            },
            {
              "name" => "mobile",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "offset",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "org",
              "type" => "`$STRING`",
            },
            {
              "name" => "proxy",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "query",
              "type" => "`$STRING`",
            },
            {
              "name" => "region",
              "type" => "`$STRING`",
            },
            {
              "name" => "regionName",
              "type" => "`$STRING`",
            },
            {
              "name" => "reverse",
              "type" => "`$STRING`",
            },
            {
              "name" => "status",
              "req" => true,
              "type" => "`$STRING`",
            },
            {
              "name" => "timezone",
              "type" => "`$STRING`",
            },
            {
              "name" => "zip",
              "type" => "`$STRING`",
            },
          ],
          "name" => "json",
          "op" => {
            "load" => {
              "input" => "data",
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
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "callback",
                        "orig" => "callback",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "status,message,country,city,lat,lon",
                        "kind" => "query",
                        "name" => "field",
                        "orig" => "field",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "en",
                        "kind" => "query",
                        "name" => "lang",
                        "orig" => "lang",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
