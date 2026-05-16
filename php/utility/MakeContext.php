<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IpGeolocationApi3MakeContext
{
    public static function call(array $ctxmap, ?IpGeolocationApi3Context $basectx): IpGeolocationApi3Context
    {
        return new IpGeolocationApi3Context($ctxmap, $basectx);
    }
}
