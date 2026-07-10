<?php
declare(strict_types=1);

// Typed models for the IpGeolocationApi3 SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Json entity data model. */
class Json
{
    public ?string $as = null;
    public ?string $asname = null;
    public ?string $city = null;
    public ?string $continent = null;
    public ?string $continent_code = null;
    public ?string $country = null;
    public ?string $country_code = null;
    public ?string $currency = null;
    public ?string $district = null;
    public ?bool $hosting = null;
    public ?string $isp = null;
    public ?float $lat = null;
    public ?float $lon = null;
    public ?string $message = null;
    public ?bool $mobile = null;
    public ?int $offset = null;
    public ?string $org = null;
    public ?bool $proxy = null;
    public ?string $query = null;
    public ?string $region = null;
    public ?string $region_name = null;
    public ?string $reverse = null;
    public string $status;
    public ?string $timezone = null;
    public ?string $zip = null;
}

/** Request payload for Json#load. */
class JsonLoadMatch
{
    public ?string $id = null;
}

