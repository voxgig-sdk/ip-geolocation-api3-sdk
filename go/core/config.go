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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "As",
						"type": "`$STRING`",
						"short": "AS number and organization, separated by space (RIR).",
					},
					map[string]any{
						"name": "asname",
						"title": "Asname",
						"type": "`$STRING`",
						"short": "AS name (RIR).",
					},
					map[string]any{
						"name": "city",
						"title": "City",
						"type": "`$STRING`",
						"short": "City name",
					},
					map[string]any{
						"name": "continent",
						"title": "Continent",
						"type": "`$STRING`",
						"short": "Continent name",
					},
					map[string]any{
						"name": "continentCode",
						"title": "Continent Code",
						"type": "`$STRING`",
						"short": "Two-letter continent code",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"short": "Country name",
					},
					map[string]any{
						"name": "countryCode",
						"title": "Country Code",
						"type": "`$STRING`",
						"short": "Two-letter country code (ISO 3166-1 alpha-2)",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"short": "National currency code",
					},
					map[string]any{
						"name": "district",
						"title": "District",
						"type": "`$STRING`",
						"short": "District (subdivision of city)",
					},
					map[string]any{
						"name": "hosting",
						"title": "Hosting",
						"type": "`$BOOLEAN`",
						"short": "Hosting, colocated or data center",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isp",
						"title": "Isp",
						"type": "`$STRING`",
						"short": "ISP name",
					},
					map[string]any{
						"name": "lat",
						"title": "Lat",
						"type": "`$NUMBER`",
						"short": "Latitude",
						"format": "float",
					},
					map[string]any{
						"name": "lon",
						"title": "Lon",
						"type": "`$NUMBER`",
						"short": "Longitude",
						"format": "float",
					},
					map[string]any{
						"name": "message",
						"title": "Message",
						"type": "`$STRING`",
						"short": "Error message, included only when status is fail.",
					},
					map[string]any{
						"name": "mobile",
						"title": "Mobile",
						"type": "`$BOOLEAN`",
						"short": "Mobile (cellular) connection",
					},
					map[string]any{
						"name": "offset",
						"title": "Offset",
						"type": "`$INTEGER`",
						"short": "Timezone UTC DST offset in seconds",
					},
					map[string]any{
						"name": "org",
						"title": "Org",
						"type": "`$STRING`",
						"short": "Organization name",
					},
					map[string]any{
						"name": "proxy",
						"title": "Proxy",
						"type": "`$BOOLEAN`",
						"short": "Proxy, VPN or Tor exit address",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
						"type": "`$STRING`",
						"short": "IP address or domain used for the query",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"short": "Region/state short code (FIPS or ISO)",
					},
					map[string]any{
						"name": "regionName",
						"title": "Region Name",
						"type": "`$STRING`",
						"short": "Region/state name",
					},
					map[string]any{
						"name": "reverse",
						"title": "Reverse",
						"type": "`$STRING`",
						"short": "Reverse DNS of the IP (can delay response)",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Status of the query",
					},
					map[string]any{
						"name": "timezone",
						"title": "Timezone",
						"type": "`$STRING`",
						"short": "Timezone (tz database format)",
					},
					map[string]any{
						"name": "zip",
						"title": "Zip",
						"type": "`$STRING`",
						"short": "Zip/postal code",
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
								"kind": "http",
								"method": "GET",
								"orig": "/json/{query}",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"json",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"query": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "8.8.8.8",
										},
									},
									"query": []any{
										map[string]any{
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "status,message,country,city,lat,lon",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/json/",
								"segments": []any{
									map[string]any{
										"lit": "json",
									},
								},
								"parts": []any{
									"json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "callback",
											"orig": "callback",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "status,message,country,city,lat,lon",
										},
										map[string]any{
											"name": "lang",
											"orig": "lang",
											"type": "`$STRING`",
											"kind": "query",
											"example": "en",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback",
										"field",
										"lang",
									},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
