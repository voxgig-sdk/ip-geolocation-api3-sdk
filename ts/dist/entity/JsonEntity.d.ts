import { IpGeolocationApi3EntityBase } from '../IpGeolocationApi3EntityBase';
import type { IpGeolocationApi3SDK } from '../IpGeolocationApi3SDK';
import type { Control } from '../types';
import type { Json, JsonLoadMatch } from '../IpGeolocationApi3Types';
declare class JsonEntity extends IpGeolocationApi3EntityBase<Json> {
    constructor(client: IpGeolocationApi3SDK, entopts: any);
    make(this: JsonEntity): JsonEntity;
    load(this: any, reqmatch?: JsonLoadMatch, ctrl?: Control): Promise<JsonEntity>;
}
export { JsonEntity };
