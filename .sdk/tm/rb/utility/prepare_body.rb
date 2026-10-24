# IpGeolocationApi3 SDK utility: prepare_body
require_relative 'media'
module IpGeolocationApi3Utilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return IpGeolocationApi3Utilities.raw_body(ctx.reqdata) if IpGeolocationApi3Utilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
