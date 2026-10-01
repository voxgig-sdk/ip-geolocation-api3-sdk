"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpGeolocationApi3Error = void 0;
class IpGeolocationApi3Error extends Error {
    isIpGeolocationApi3Error = true;
    sdk = 'IpGeolocationApi3';
    code;
    ctx;
    status = -1;
    result;
    spec;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        // Reachable for a debugger, invisible to a serialiser: the context holds
        // the live spec and options, and an error is what gets logged.
        Object.defineProperty(this, 'ctx', { value: ctx, enumerable: false, writable: true });
    }
    // What makeError attached is already cleaned; the context is not part of
    // the record.
    toJSON() {
        return {
            sdk: this.sdk,
            code: this.code,
            message: this.message,
            status: this.status,
            result: this.result,
            spec: this.spec,
        };
    }
}
exports.IpGeolocationApi3Error = IpGeolocationApi3Error;
//# sourceMappingURL=IpGeolocationApi3Error.js.map