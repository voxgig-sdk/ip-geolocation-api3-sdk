// Typed models for the IpGeolocationApi3 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Json is the typed data model for the json entity.
type Json struct {
	As *string `json:"as,omitempty"`
	Asname *string `json:"asname,omitempty"`
	City *string `json:"city,omitempty"`
	Continent *string `json:"continent,omitempty"`
	ContinentCode *string `json:"continent_code,omitempty"`
	Country *string `json:"country,omitempty"`
	CountryCode *string `json:"country_code,omitempty"`
	Currency *string `json:"currency,omitempty"`
	District *string `json:"district,omitempty"`
	Hosting *bool `json:"hosting,omitempty"`
	Isp *string `json:"isp,omitempty"`
	Lat *float64 `json:"lat,omitempty"`
	Lon *float64 `json:"lon,omitempty"`
	Message *string `json:"message,omitempty"`
	Mobile *bool `json:"mobile,omitempty"`
	Offset *int `json:"offset,omitempty"`
	Org *string `json:"org,omitempty"`
	Proxy *bool `json:"proxy,omitempty"`
	Query *string `json:"query,omitempty"`
	Region *string `json:"region,omitempty"`
	RegionName *string `json:"region_name,omitempty"`
	Reverse *string `json:"reverse,omitempty"`
	Status string `json:"status"`
	Timezone *string `json:"timezone,omitempty"`
	Zip *string `json:"zip,omitempty"`
}

// JsonLoadMatch is the typed request payload for Json.LoadTyped.
type JsonLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
