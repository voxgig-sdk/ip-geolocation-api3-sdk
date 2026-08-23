<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK configuration

class IpGeolocationApi3Config
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IpGeolocationApi3",
                "slug" => "ip-geolocation-api3",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "http://ip-api.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "json" => [],
                ],
            ],
            "entity" => [
        'json' => [
          'fields' => [
            [
              'name' => 'as',
              'short' => 'AS number and organization, separated by space (RIR).',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'asname',
              'short' => 'AS name (RIR).',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'city',
              'short' => 'City name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'continent',
              'short' => 'Continent name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'continentCode',
              'short' => 'Two-letter continent code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'country',
              'short' => 'Country name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'countryCode',
              'short' => 'Two-letter country code (ISO 3166-1 alpha-2)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currency',
              'short' => 'National currency code',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'district',
              'short' => 'District (subdivision of city)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'hosting',
              'short' => 'Hosting, colocated or data center',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'isp',
              'short' => 'ISP name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'lat',
              'short' => 'Latitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'lon',
              'short' => 'Longitude',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'message',
              'short' => 'Error message, included only when status is fail.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'mobile',
              'short' => 'Mobile (cellular) connection',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'offset',
              'short' => 'Timezone UTC DST offset in seconds',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'org',
              'short' => 'Organization name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'proxy',
              'short' => 'Proxy, VPN or Tor exit address',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'query',
              'short' => 'IP address or domain used for the query',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'region',
              'short' => 'Region/state short code (FIPS or ISO)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'regionName',
              'short' => 'Region/state name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'reverse',
              'short' => 'Reverse DNS of the IP (can delay response)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Status of the query',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'timezone',
              'short' => 'Timezone (tz database format)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'zip',
              'short' => 'Zip/postal code',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'json',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '8.8.8.8',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'query',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'status,message,country,city,lat,lon',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json/{query}',
                  'parts' => [
                    'json',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'query' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'field',
                      'id',
                      'lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'callback',
                        'orig' => 'callback',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'status,message,country,city,lat,lon',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'en',
                        'kind' => 'query',
                        'name' => 'lang',
                        'orig' => 'lang',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/json/',
                  'parts' => [
                    'json',
                  ],
                  'select' => [
                    'exist' => [
                      'callback',
                      'field',
                      'lang',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IpGeolocationApi3Features::make_feature($name);
    }
}
