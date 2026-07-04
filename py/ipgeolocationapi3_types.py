# Typed models for the IpGeolocationApi3 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Json:
    status: str
    asname: Optional[str] = None
    city: Optional[str] = None
    continent: Optional[str] = None
    continent_code: Optional[str] = None
    country: Optional[str] = None
    country_code: Optional[str] = None
    currency: Optional[str] = None
    district: Optional[str] = None
    hosting: Optional[bool] = None
    isp: Optional[str] = None
    lat: Optional[float] = None
    lon: Optional[float] = None
    message: Optional[str] = None
    mobile: Optional[bool] = None
    offset: Optional[int] = None
    org: Optional[str] = None
    proxy: Optional[bool] = None
    query: Optional[str] = None
    region: Optional[str] = None
    region_name: Optional[str] = None
    reverse: Optional[str] = None
    timezone: Optional[str] = None
    zip: Optional[str] = None


@dataclass
class JsonLoadMatch:
    id: str

