# IpGeolocationApi3 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IpGeolocationApi3Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi3BaseFeature.new
    when "ratelimit"
      IpGeolocationApi3RatelimitFeature.new
    when "retry"
      IpGeolocationApi3RetryFeature.new
    when "test"
      IpGeolocationApi3TestFeature.new
    when "timeout"
      IpGeolocationApi3TimeoutFeature.new
    else
      IpGeolocationApi3BaseFeature.new
    end
  end
end
