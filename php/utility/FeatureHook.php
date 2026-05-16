<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: feature_hook

class IpGeolocationApi3FeatureHook
{
    public static function call(IpGeolocationApi3Context $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
