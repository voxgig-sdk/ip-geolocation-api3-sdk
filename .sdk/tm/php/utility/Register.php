<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IpGeolocationApi3Utility::setRegistrar(function (IpGeolocationApi3Utility $u): void {
    $u->clean = [IpGeolocationApi3Clean::class, 'call'];
    $u->done = [IpGeolocationApi3Done::class, 'call'];
    $u->make_error = [IpGeolocationApi3MakeError::class, 'call'];
    $u->feature_add = [IpGeolocationApi3FeatureAdd::class, 'call'];
    $u->feature_hook = [IpGeolocationApi3FeatureHook::class, 'call'];
    $u->feature_init = [IpGeolocationApi3FeatureInit::class, 'call'];
    $u->fetcher = [IpGeolocationApi3Fetcher::class, 'call'];
    $u->make_fetch_def = [IpGeolocationApi3MakeFetchDef::class, 'call'];
    $u->make_context = [IpGeolocationApi3MakeContext::class, 'call'];
    $u->make_options = [IpGeolocationApi3MakeOptions::class, 'call'];
    $u->make_request = [IpGeolocationApi3MakeRequest::class, 'call'];
    $u->make_response = [IpGeolocationApi3MakeResponse::class, 'call'];
    $u->make_result = [IpGeolocationApi3MakeResult::class, 'call'];
    $u->make_point = [IpGeolocationApi3MakePoint::class, 'call'];
    $u->make_spec = [IpGeolocationApi3MakeSpec::class, 'call'];
    $u->make_url = [IpGeolocationApi3MakeUrl::class, 'call'];
    $u->param = [IpGeolocationApi3Param::class, 'call'];
    $u->prepare_auth = [IpGeolocationApi3PrepareAuth::class, 'call'];
    $u->prepare_body = [IpGeolocationApi3PrepareBody::class, 'call'];
    $u->prepare_headers = [IpGeolocationApi3PrepareHeaders::class, 'call'];
    $u->prepare_method = [IpGeolocationApi3PrepareMethod::class, 'call'];
    $u->prepare_params = [IpGeolocationApi3PrepareParams::class, 'call'];
    $u->prepare_path = [IpGeolocationApi3PreparePath::class, 'call'];
    $u->prepare_query = [IpGeolocationApi3PrepareQuery::class, 'call'];
    $u->result_basic = [IpGeolocationApi3ResultBasic::class, 'call'];
    $u->result_body = [IpGeolocationApi3ResultBody::class, 'call'];
    $u->result_headers = [IpGeolocationApi3ResultHeaders::class, 'call'];
    $u->transform_request = [IpGeolocationApi3TransformRequest::class, 'call'];
    $u->transform_response = [IpGeolocationApi3TransformResponse::class, 'call'];
});
