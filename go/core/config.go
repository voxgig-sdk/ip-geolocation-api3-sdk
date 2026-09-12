package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "IpGeolocationApi3",
			"slug": "ip-geolocation-api3",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "http://ip-api.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"json": map[string]any{},
			},
		},
		"entity": map[string]any{
			"json": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "as",
						"short": "AS number and organization, separated by space (RIR).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "asname",
						"short": "AS name (RIR).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "city",
						"short": "City name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "continent",
						"short": "Continent name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "continentCode",
						"short": "Two-letter continent code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "country",
						"short": "Country name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "countryCode",
						"short": "Two-letter country code (ISO 3166-1 alpha-2)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"short": "National currency code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "district",
						"short": "District (subdivision of city)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hosting",
						"short": "Hosting, colocated or data center",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isp",
						"short": "ISP name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "lat",
						"short": "Latitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "float",
						"name": "lon",
						"short": "Longitude",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "message",
						"short": "Error message, included only when status is fail.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "mobile",
						"short": "Mobile (cellular) connection",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "offset",
						"short": "Timezone UTC DST offset in seconds",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "org",
						"short": "Organization name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proxy",
						"short": "Proxy, VPN or Tor exit address",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "query",
						"short": "IP address or domain used for the query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "region",
						"short": "Region/state short code (FIPS or ISO)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "regionName",
						"short": "Region/state name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reverse",
						"short": "Reverse DNS of the IP (can delay response)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Status of the query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timezone",
						"short": "Timezone (tz database format)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "zip",
						"short": "Zip/postal code",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "json",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "8.8.8.8",
											"kind": "param",
											"name": "id",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "status,message,country,city,lat,lon",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/json/{query}",
								"rename": map[string]any{
									"param": map[string]any{
										"query": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"field",
										"id",
										"lang",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"json",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "status,message,country,city,lat,lon",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "en",
											"kind": "query",
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/json/",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"field",
										"lang",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
