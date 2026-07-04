-- Typed models for the IpGeolocationApi3 SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Json
---@field as? string
---@field asname? string
---@field city? string
---@field continent? string
---@field continent_code? string
---@field country? string
---@field country_code? string
---@field currency? string
---@field district? string
---@field hosting? boolean
---@field isp? string
---@field lat? number
---@field lon? number
---@field message? string
---@field mobile? boolean
---@field offset? number
---@field org? string
---@field proxy? boolean
---@field query? string
---@field region? string
---@field region_name? string
---@field reverse? string
---@field status string
---@field timezone? string
---@field zip? string

---@class JsonLoadMatch
---@field id string

local M = {}

return M
