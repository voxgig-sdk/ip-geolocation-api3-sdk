# IpGeolocationApi3 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IpGeolocationApi3Utility.registrar = ->(u) {
  u.clean = IpGeolocationApi3Utilities::Clean
  u.done = IpGeolocationApi3Utilities::Done
  u.make_error = IpGeolocationApi3Utilities::MakeError
  u.feature_add = IpGeolocationApi3Utilities::FeatureAdd
  u.feature_hook = IpGeolocationApi3Utilities::FeatureHook
  u.feature_init = IpGeolocationApi3Utilities::FeatureInit
  u.fetcher = IpGeolocationApi3Utilities::Fetcher
  u.make_fetch_def = IpGeolocationApi3Utilities::MakeFetchDef
  u.make_context = IpGeolocationApi3Utilities::MakeContext
  u.make_options = IpGeolocationApi3Utilities::MakeOptions
  u.make_request = IpGeolocationApi3Utilities::MakeRequest
  u.make_response = IpGeolocationApi3Utilities::MakeResponse
  u.make_result = IpGeolocationApi3Utilities::MakeResult
  u.make_point = IpGeolocationApi3Utilities::MakePoint
  u.make_spec = IpGeolocationApi3Utilities::MakeSpec
  u.make_url = IpGeolocationApi3Utilities::MakeUrl
  u.param = IpGeolocationApi3Utilities::Param
  u.prepare_auth = IpGeolocationApi3Utilities::PrepareAuth
  u.prepare_body = IpGeolocationApi3Utilities::PrepareBody
  u.prepare_headers = IpGeolocationApi3Utilities::PrepareHeaders
  u.prepare_method = IpGeolocationApi3Utilities::PrepareMethod
  u.prepare_params = IpGeolocationApi3Utilities::PrepareParams
  u.prepare_path = IpGeolocationApi3Utilities::PreparePath
  u.prepare_query = IpGeolocationApi3Utilities::PrepareQuery
  u.result_basic = IpGeolocationApi3Utilities::ResultBasic
  u.result_body = IpGeolocationApi3Utilities::ResultBody
  u.result_headers = IpGeolocationApi3Utilities::ResultHeaders
  u.transform_request = IpGeolocationApi3Utilities::TransformRequest
  u.transform_response = IpGeolocationApi3Utilities::TransformResponse
}
