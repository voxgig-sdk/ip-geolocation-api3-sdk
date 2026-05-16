# IpGeolocationApi3 SDK utility: make_context
require_relative '../core/context'
module IpGeolocationApi3Utilities
  MakeContext = ->(ctxmap, basectx) {
    IpGeolocationApi3Context.new(ctxmap, basectx)
  }
end
