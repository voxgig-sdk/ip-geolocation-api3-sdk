<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: feature_add

class IpGeolocationApi3FeatureAdd
{
    public static function call(IpGeolocationApi3Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
