
import { Context } from './Context'


class IpGeolocationApi3Error extends Error {

  isIpGeolocationApi3Error = true

  sdk = 'IpGeolocationApi3'

  code: string
  ctx: Context

  status: number = -1


  // `err.notFound` rather than a magic number at every call site.
  get notFound(): boolean { return 404 === this.status }

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IpGeolocationApi3Error
}

