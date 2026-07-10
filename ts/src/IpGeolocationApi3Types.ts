// Typed models for the IpGeolocationApi3 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Json {
  as?: string
  asname?: string
  city?: string
  continent?: string
  continent_code?: string
  country?: string
  country_code?: string
  currency?: string
  district?: string
  hosting?: boolean
  isp?: string
  lat?: number
  lon?: number
  message?: string
  mobile?: boolean
  offset?: number
  org?: string
  proxy?: boolean
  query?: string
  region?: string
  region_name?: string
  reverse?: string
  status: string
  timezone?: string
  zip?: string
}

export interface JsonLoadMatch {
  id?: string
}

