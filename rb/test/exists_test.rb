# IpGeolocationApi3 SDK exists test

require "minitest/autorun"
require_relative "../IpGeolocationApi3_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IpGeolocationApi3SDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
