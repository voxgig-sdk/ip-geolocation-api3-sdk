package = "voxgig-sdk-ip-geolocation-api3"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/ip-geolocation-api3-sdk.git"
}
description = {
  summary = "IpGeolocationApi3 SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["ip-geolocation-api3_sdk"] = "ip-geolocation-api3_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
