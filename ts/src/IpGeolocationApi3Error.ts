
import { Context } from './Context'


class IpGeolocationApi3Error extends Error {

  isIpGeolocationApi3Error = true

  sdk = 'IpGeolocationApi3'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpGeolocationApi3Error
}

