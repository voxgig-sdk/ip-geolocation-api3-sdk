import { Context } from './Context';
declare class IpGeolocationApi3Error extends Error {
    isIpGeolocationApi3Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { IpGeolocationApi3Error };
