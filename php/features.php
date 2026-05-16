<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IpGeolocationApi3Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IpGeolocationApi3BaseFeature();
            case "test":
                return new IpGeolocationApi3TestFeature();
            default:
                return new IpGeolocationApi3BaseFeature();
        }
    }
}
