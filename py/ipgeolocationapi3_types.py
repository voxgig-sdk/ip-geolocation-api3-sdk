# Typed models for the IpGeolocationApi3 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class JsonRequired(TypedDict):
    status: str


class Json(JsonRequired, total=False):
    asname: str
    city: str
    continent: str
    continent_code: str
    country: str
    country_code: str
    currency: str
    district: str
    hosting: bool
    isp: str
    lat: float
    lon: float
    message: str
    mobile: bool
    offset: int
    org: str
    proxy: bool
    query: str
    region: str
    region_name: str
    reverse: str
    timezone: str
    zip: str


class JsonLoadMatch(TypedDict, total=False):
    id: str
