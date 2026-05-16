<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: prepare_headers

class IpGeolocationApi3PrepareHeaders
{
    public static function call(IpGeolocationApi3Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
