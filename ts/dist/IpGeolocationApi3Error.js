"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpGeolocationApi3Error = void 0;
class IpGeolocationApi3Error extends Error {
    isIpGeolocationApi3Error = true;
    sdk = 'IpGeolocationApi3';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.IpGeolocationApi3Error = IpGeolocationApi3Error;
//# sourceMappingURL=IpGeolocationApi3Error.js.map