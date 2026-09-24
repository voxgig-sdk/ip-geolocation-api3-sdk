"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('JsonEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when IP_GEOLOCATION_API3_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('IP_GEOLOCATION_API3_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IpGeolocationApi3SDK.test();
        const ent = testsdk.Json();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.IP_GEOLOCATION_API3_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'json.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "as": { "a": true, "h": "As", "n": "as", "r": false, "sh": "AS number and organization, separated by space (RIR).", "t": "`$STRING`", "key$": "as", "index$": 0 }, "asname": { "a": true, "h": "Asname", "n": "asname", "r": false, "sh": "AS name (RIR).", "t": "`$STRING`", "key$": "asname", "index$": 1 }, "city": { "a": true, "h": "City", "n": "city", "r": false, "sh": "City name", "t": "`$STRING`", "key$": "city", "index$": 2 }, "continent": { "a": true, "h": "Continent", "n": "continent", "r": false, "sh": "Continent name", "t": "`$STRING`", "key$": "continent", "index$": 3 }, "continentCode": { "a": true, "h": "Continent Code", "n": "continentCode", "r": false, "sh": "Two-letter continent code", "t": "`$STRING`", "key$": "continentCode", "index$": 4 }, "country": { "a": true, "h": "Country", "n": "country", "r": false, "sh": "Country name", "t": "`$STRING`", "key$": "country", "index$": 5 }, "countryCode": { "a": true, "h": "Country Code", "n": "countryCode", "r": false, "sh": "Two-letter country code (ISO 3166-1 alpha-2)", "t": "`$STRING`", "key$": "countryCode", "index$": 6 }, "currency": { "a": true, "h": "Currency", "n": "currency", "r": false, "sh": "National currency code", "t": "`$STRING`", "key$": "currency", "index$": 7 }, "district": { "a": true, "h": "District", "n": "district", "r": false, "sh": "District (subdivision of city)", "t": "`$STRING`", "key$": "district", "index$": 8 }, "hosting": { "a": true, "h": "Hosting", "n": "hosting", "r": false, "sh": "Hosting, colocated or data center", "t": "`$BOOLEAN`", "key$": "hosting", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 10 }, "isp": { "a": true, "h": "Isp", "n": "isp", "r": false, "sh": "ISP name", "t": "`$STRING`", "key$": "isp", "index$": 11 }, "lat": { "a": true, "fo": "float", "h": "Lat", "n": "lat", "r": false, "sh": "Latitude", "t": "`$NUMBER`", "key$": "lat", "index$": 12 }, "lon": { "a": true, "fo": "float", "h": "Lon", "n": "lon", "r": false, "sh": "Longitude", "t": "`$NUMBER`", "key$": "lon", "index$": 13 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "sh": "Error message, included only when status is fail.", "t": "`$STRING`", "key$": "message", "index$": 14 }, "mobile": { "a": true, "h": "Mobile", "n": "mobile", "r": false, "sh": "Mobile (cellular) connection", "t": "`$BOOLEAN`", "key$": "mobile", "index$": 15 }, "offset": { "a": true, "h": "Offset", "n": "offset", "r": false, "sh": "Timezone UTC DST offset in seconds", "t": "`$INTEGER`", "key$": "offset", "index$": 16 }, "org": { "a": true, "h": "Org", "n": "org", "r": false, "sh": "Organization name", "t": "`$STRING`", "key$": "org", "index$": 17 }, "proxy": { "a": true, "h": "Proxy", "n": "proxy", "r": false, "sh": "Proxy, VPN or Tor exit address", "t": "`$BOOLEAN`", "key$": "proxy", "index$": 18 }, "query": { "a": true, "h": "Query", "n": "query", "r": false, "sh": "IP address or domain used for the query", "t": "`$STRING`", "key$": "query", "index$": 19 }, "region": { "a": true, "h": "Region", "n": "region", "r": false, "sh": "Region/state short code (FIPS or ISO)", "t": "`$STRING`", "key$": "region", "index$": 20 }, "regionName": { "a": true, "h": "Region Name", "n": "regionName", "r": false, "sh": "Region/state name", "t": "`$STRING`", "key$": "regionName", "index$": 21 }, "reverse": { "a": true, "h": "Reverse", "n": "reverse", "r": false, "sh": "Reverse DNS of the IP (can delay response)", "t": "`$STRING`", "key$": "reverse", "index$": 22 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Status of the query", "t": "`$STRING`", "key$": "status", "index$": 23 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "r": false, "sh": "Timezone (tz database format)", "t": "`$STRING`", "key$": "timezone", "index$": 24 }, "zip": { "a": true, "h": "Zip", "n": "zip", "r": false, "sh": "Zip/postal code", "t": "`$STRING`", "key$": "zip", "index$": 25 } }, "id": { "field": "id", "name": "id" }, "name": "json", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /json/{query}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "8.8.8.8", "k": "param", "n": "id", "or": "query", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "callback", "or": "callback", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "status,message,country,city,lat,lon", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/json/{query}", "q": { "exist": ["callback", "field", "id", "lang"] }, "r": { "param": { "query": "id" } }, "s": [{ "lit": "json" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /json/", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "callback", "or": "callback", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "status,message,country,city,lat,lon", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "en", "k": "query", "n": "lang", "or": "lang", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/json/", "q": { "exist": ["callback", "field", "lang"] }, "r": {}, "s": [{ "lit": "json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "json", "name__orig": "json", "Name": "Json", "name_": "json", "name-": "json", "NAME": "JSON", "index$": 0 }, { "active": true, "entity": "json", "key$": "BasicJsonFlow", "kind": "basic", "name": "BasicJsonFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "json_ref01", "srcdatavar": "json_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-json_ref01" } }], "index$": 0 }] }, 'Json', { "GET /json/{query}": { "protocol": "http", "operationId": "getGeolocationByQuery", "responses": { "200": { "description": "Successful geolocation lookup", "headers": { "X-Rl": { "description": "Number of requests remaining in the current rate limit window", "schema": { "type": "integer" } }, "X-Ttl": { "description": "Seconds until the rate limit is reset", "schema": { "type": "integer" } } }, "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "description": "Status of the query", "enum": ["success", "fail"], "key$": "status", "type": "string" }, "message": { "description": "Error message, included only when status is fail. Can be 'private range', 'reserved range', or 'invalid query'", "enum": ["private range", "reserved range", "invalid query"], "key$": "message", "type": "string" }, "continent": { "description": "Continent name", "example": "North America", "key$": "continent", "type": "string" }, "continentCode": { "description": "Two-letter continent code", "example": "NA", "key$": "continentCode", "type": "string" }, "country": { "description": "Country name", "example": "United States", "key$": "country", "type": "string" }, "countryCode": { "description": "Two-letter country code (ISO 3166-1 alpha-2)", "example": "US", "key$": "countryCode", "type": "string" }, "region": { "description": "Region/state short code (FIPS or ISO)", "example": "CA", "key$": "region", "type": "string" }, "regionName": { "description": "Region/state name", "example": "California", "key$": "regionName", "type": "string" }, "city": { "description": "City name", "example": "Mountain View", "key$": "city", "type": "string" }, "district": { "description": "District (subdivision of city)", "example": "Old Farm District", "key$": "district", "type": "string" }, "zip": { "description": "Zip/postal code", "example": "94043", "key$": "zip", "type": "string" }, "lat": { "description": "Latitude", "example": 37.4192, "format": "float", "key$": "lat", "type": "number" }, "lon": { "description": "Longitude", "example": -122.0574, "format": "float", "key$": "lon", "type": "number" }, "timezone": { "description": "Timezone (tz database format)", "example": "America/Los_Angeles", "key$": "timezone", "type": "string" }, "offset": { "description": "Timezone UTC DST offset in seconds", "example": -25200, "key$": "offset", "type": "integer" }, "currency": { "description": "National currency code", "example": "USD", "key$": "currency", "type": "string" }, "isp": { "description": "ISP name", "example": "Google", "key$": "isp", "type": "string" }, "org": { "description": "Organization name", "example": "Google", "key$": "org", "type": "string" }, "as": { "description": "AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables", "example": "AS15169 Google Inc.", "key$": "as", "type": "string" }, "asname": { "description": "AS name (RIR). Empty for IP blocks not being announced in BGP tables", "example": "GOOGLE", "key$": "asname", "type": "string" }, "reverse": { "description": "Reverse DNS of the IP (can delay response)", "example": "wi-in-f94.1e100.net", "key$": "reverse", "type": "string" }, "mobile": { "description": "Mobile (cellular) connection", "example": false, "key$": "mobile", "type": "boolean" }, "proxy": { "description": "Proxy, VPN or Tor exit address", "example": false, "key$": "proxy", "type": "boolean" }, "hosting": { "description": "Hosting, colocated or data center", "example": true, "key$": "hosting", "type": "boolean" }, "query": { "description": "IP address or domain used for the query", "example": "173.194.67.94", "key$": "query", "type": "string" } }, "required": ["status"], "x-ref": "#/components/schemas/GeolocationResponse", "index$": 0 }, "examples": { "success": { "value": { "status": "success", "continent": "North America", "continentCode": "NA", "country": "United States", "countryCode": "US", "region": "CA", "regionName": "California", "city": "Mountain View", "district": "Old Farm District", "zip": "94043", "lat": 37.4192, "lon": -122.0574, "timezone": "America/Los_Angeles", "offset": -25200, "currency": "USD", "isp": "Google", "org": "Google", "as": "AS15169 Google Inc.", "asname": "GOOGLE", "reverse": "wi-in-f94.1e100.net", "mobile": false, "proxy": false, "hosting": true, "query": "173.194.67.94" } }, "fail_private": { "value": { "status": "fail", "message": "private range", "query": "192.168.1.1" } }, "fail_reserved": { "value": { "status": "fail", "message": "reserved range", "query": "0.0.0.0" } }, "fail_invalid": { "value": { "status": "fail", "message": "invalid query", "query": "not-an-ip" } } } } } }, "429": { "description": "Rate limit exceeded - requests are throttled (45 requests per minute limit)", "headers": { "X-Rl": { "description": "Number of requests remaining (0 when rate limited)", "schema": { "type": "integer" } }, "X-Ttl": { "description": "Seconds until the rate limit is reset", "schema": { "type": "integer" } } } } }, "parameters": [{ "name": "query", "in": "path", "description": "IPv4/IPv6 address or domain name to lookup", "required": true, "schema": { "type": "string" }, "examples": { "ipv4": { "value": "8.8.8.8", "summary": "IPv4 address" }, "ipv6": { "value": "2001:4860:4860::8888", "summary": "IPv6 address" }, "domain": { "value": "google.com", "summary": "Domain name" } }, "index$": 0 }, { "name": "fields", "in": "query", "description": "Comma-separated list of fields to return (e.g., 'status,message,query,country,city') or a numeric value representing combined fields", "required": false, "schema": { "type": "string" }, "example": "status,message,country,city,lat,lon", "index$": 1 }, { "name": "lang", "in": "query", "description": "Response language for localized city, regionName and country fields", "required": false, "schema": { "type": "string", "enum": ["en", "de", "es", "pt-BR", "fr", "ja", "zh-CN", "ru"], "default": "en" }, "index$": 2 }, { "name": "callback", "in": "query", "description": "JSONP callback function name to wrap the response", "required": false, "schema": { "type": "string" }, "index$": 3 }], "securitySource": "unspecified" }, "GET /json/": { "protocol": "http", "operationId": "getGeolocationCurrent", "responses": { "200": { "description": "Successful geolocation lookup", "headers": { "X-Rl": { "description": "Number of requests remaining in the current rate limit window", "schema": { "type": "integer" } }, "X-Ttl": { "description": "Seconds until the rate limit is reset", "schema": { "type": "integer" } } }, "content": { "application/json": { "schema": { "type": "object", "properties": { "status": { "description": "Status of the query", "enum": ["success", "fail"], "key$": "status", "type": "string" }, "message": { "description": "Error message, included only when status is fail. Can be 'private range', 'reserved range', or 'invalid query'", "enum": ["private range", "reserved range", "invalid query"], "key$": "message", "type": "string" }, "continent": { "description": "Continent name", "example": "North America", "key$": "continent", "type": "string" }, "continentCode": { "description": "Two-letter continent code", "example": "NA", "key$": "continentCode", "type": "string" }, "country": { "description": "Country name", "example": "United States", "key$": "country", "type": "string" }, "countryCode": { "description": "Two-letter country code (ISO 3166-1 alpha-2)", "example": "US", "key$": "countryCode", "type": "string" }, "region": { "description": "Region/state short code (FIPS or ISO)", "example": "CA", "key$": "region", "type": "string" }, "regionName": { "description": "Region/state name", "example": "California", "key$": "regionName", "type": "string" }, "city": { "description": "City name", "example": "Mountain View", "key$": "city", "type": "string" }, "district": { "description": "District (subdivision of city)", "example": "Old Farm District", "key$": "district", "type": "string" }, "zip": { "description": "Zip/postal code", "example": "94043", "key$": "zip", "type": "string" }, "lat": { "description": "Latitude", "example": 37.4192, "format": "float", "key$": "lat", "type": "number" }, "lon": { "description": "Longitude", "example": -122.0574, "format": "float", "key$": "lon", "type": "number" }, "timezone": { "description": "Timezone (tz database format)", "example": "America/Los_Angeles", "key$": "timezone", "type": "string" }, "offset": { "description": "Timezone UTC DST offset in seconds", "example": -25200, "key$": "offset", "type": "integer" }, "currency": { "description": "National currency code", "example": "USD", "key$": "currency", "type": "string" }, "isp": { "description": "ISP name", "example": "Google", "key$": "isp", "type": "string" }, "org": { "description": "Organization name", "example": "Google", "key$": "org", "type": "string" }, "as": { "description": "AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables", "example": "AS15169 Google Inc.", "key$": "as", "type": "string" }, "asname": { "description": "AS name (RIR). Empty for IP blocks not being announced in BGP tables", "example": "GOOGLE", "key$": "asname", "type": "string" }, "reverse": { "description": "Reverse DNS of the IP (can delay response)", "example": "wi-in-f94.1e100.net", "key$": "reverse", "type": "string" }, "mobile": { "description": "Mobile (cellular) connection", "example": false, "key$": "mobile", "type": "boolean" }, "proxy": { "description": "Proxy, VPN or Tor exit address", "example": false, "key$": "proxy", "type": "boolean" }, "hosting": { "description": "Hosting, colocated or data center", "example": true, "key$": "hosting", "type": "boolean" }, "query": { "description": "IP address or domain used for the query", "example": "173.194.67.94", "key$": "query", "type": "string" } }, "required": ["status"], "x-ref": "#/components/schemas/GeolocationResponse", "index$": 0 }, "examples": { "success": { "value": { "status": "success", "continent": "North America", "continentCode": "NA", "country": "United States", "countryCode": "US", "region": "CA", "regionName": "California", "city": "Mountain View", "district": "Old Farm District", "zip": "94043", "lat": 37.4192, "lon": -122.0574, "timezone": "America/Los_Angeles", "offset": -25200, "currency": "USD", "isp": "Google", "org": "Google", "as": "AS15169 Google Inc.", "asname": "GOOGLE", "reverse": "wi-in-f94.1e100.net", "mobile": false, "proxy": false, "hosting": true, "query": "173.194.67.94" } }, "fail": { "value": { "status": "fail", "message": "invalid query", "query": "invalid" } } } } } }, "429": { "description": "Rate limit exceeded - requests are throttled (45 requests per minute limit)", "headers": { "X-Rl": { "description": "Number of requests remaining (0 when rate limited)", "schema": { "type": "integer" } }, "X-Ttl": { "description": "Seconds until the rate limit is reset", "schema": { "type": "integer" } } } } }, "parameters": [{ "name": "fields", "in": "query", "description": "Comma-separated list of fields to return (e.g., 'status,message,query,country,city') or a numeric value representing combined fields", "required": false, "schema": { "type": "string" }, "example": "status,message,country,city,lat,lon", "index$": 0 }, { "name": "lang", "in": "query", "description": "Response language for localized city, regionName and country fields", "required": false, "schema": { "type": "string", "enum": ["en", "de", "es", "pt-BR", "fr", "ja", "zh-CN", "ru"], "default": "en" }, "index$": 1 }, { "name": "callback", "in": "query", "description": "JSONP callback function name to wrap the response", "required": false, "schema": { "type": "string" }, "index$": 2 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let json_ref01_data = Object.values(setup.data.existing.json)[0];
        // LOAD
        const json_ref01_ent = client.Json();
        const json_ref01_match_dt0 = {};
        json_ref01_match_dt0.id = json_ref01_data.id;
        const json_ref01_data_dt0 = (await json_ref01_ent.load(json_ref01_match_dt0)).data();
        (0, node_assert_1.default)(json_ref01_data_dt0.id === json_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/json/JsonTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IpGeolocationApi3SDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['json01', 'json02', 'json03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'IP_GEOLOCATION_API3_TEST_JSON_ENTID': idmap,
        'IP_GEOLOCATION_API3_TEST_LIVE': 'FALSE',
        'IP_GEOLOCATION_API3_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['IP_GEOLOCATION_API3_TEST_JSON_ENTID'];
    const live = 'TRUE' === env.IP_GEOLOCATION_API3_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['IP_GEOLOCATION_API3_TEST_JSON_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IpGeolocationApi3SDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.IP_GEOLOCATION_API3_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=JsonEntity.test.js.map