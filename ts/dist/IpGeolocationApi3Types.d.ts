export interface Json {
    as?: string;
    asname?: string;
    city?: string;
    continent?: string;
    continentCode?: string;
    country?: string;
    countryCode?: string;
    currency?: string;
    district?: string;
    hosting?: boolean;
    id?: string;
    isp?: string;
    lat?: number;
    lon?: number;
    message?: string;
    mobile?: boolean;
    offset?: number;
    org?: string;
    proxy?: boolean;
    query?: string;
    region?: string;
    regionName?: string;
    reverse?: string;
    status: string;
    timezone?: string;
    zip?: string;
}
export interface JsonLoadMatch {
    id: string;
    callback?: string;
    field?: string;
    lang?: string;
}
