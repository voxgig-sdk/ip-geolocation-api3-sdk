<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility: result_body

class IpGeolocationApi3ResultBody
{
    public static function call(IpGeolocationApi3Context $ctx): ?IpGeolocationApi3Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
