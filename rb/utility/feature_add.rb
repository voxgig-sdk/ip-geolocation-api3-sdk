# IpGeolocationApi3 SDK utility: feature_add
module IpGeolocationApi3Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
