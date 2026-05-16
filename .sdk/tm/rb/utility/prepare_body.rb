# IpGeolocationApi3 SDK utility: prepare_body
module IpGeolocationApi3Utilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
