# frozen_string_literal: true

# Typed models for the IpGeolocationApi3 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Json entity data model.
#
# @!attribute [rw] as
#   @return [String, nil]
#
# @!attribute [rw] asname
#   @return [String, nil]
#
# @!attribute [rw] city
#   @return [String, nil]
#
# @!attribute [rw] continent
#   @return [String, nil]
#
# @!attribute [rw] continent_code
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] district
#   @return [String, nil]
#
# @!attribute [rw] hosting
#   @return [Boolean, nil]
#
# @!attribute [rw] isp
#   @return [String, nil]
#
# @!attribute [rw] lat
#   @return [Float, nil]
#
# @!attribute [rw] lon
#   @return [Float, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] mobile
#   @return [Boolean, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] proxy
#   @return [Boolean, nil]
#
# @!attribute [rw] query
#   @return [String, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] region_name
#   @return [String, nil]
#
# @!attribute [rw] reverse
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String, nil]
#
# @!attribute [rw] zip
#   @return [String, nil]
Json = Struct.new(
  :as,
  :asname,
  :city,
  :continent,
  :continent_code,
  :country,
  :country_code,
  :currency,
  :district,
  :hosting,
  :isp,
  :lat,
  :lon,
  :message,
  :mobile,
  :offset,
  :org,
  :proxy,
  :query,
  :region,
  :region_name,
  :reverse,
  :status,
  :timezone,
  :zip,
  keyword_init: true
)

# Request payload for Json#load.
#
# @!attribute [rw] id
#   @return [String]
JsonLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

