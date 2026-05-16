# IpGeolocationApi3 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module IpGeolocationApi3Features
  def self.make_feature(name)
    case name
    when "base"
      IpGeolocationApi3BaseFeature.new
    when "test"
      IpGeolocationApi3TestFeature.new
    else
      IpGeolocationApi3BaseFeature.new
    end
  end
end
