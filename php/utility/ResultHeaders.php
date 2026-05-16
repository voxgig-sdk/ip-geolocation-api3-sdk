<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: result_headers

class IpGeolocationApi3ResultHeaders
{
    public static function call(IpGeolocationApi3Context $ctx): ?IpGeolocationApi3Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
