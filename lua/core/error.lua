-- IpGeolocationApi3 SDK error

local IpGeolocationApi3Error = {}
IpGeolocationApi3Error.__index = IpGeolocationApi3Error


function IpGeolocationApi3Error.new(code, msg, ctx)
  local self = setmetatable({}, IpGeolocationApi3Error)
  self.is_sdk_error = true
  self.sdk = "IpGeolocationApi3"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IpGeolocationApi3Error:error()
  return self.msg
end


function IpGeolocationApi3Error:__tostring()
  return self.msg
end


return IpGeolocationApi3Error
