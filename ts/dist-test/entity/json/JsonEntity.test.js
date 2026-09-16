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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "as", "req": false, "short": "AS number and organization, separated by space (RIR).", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "asname", "req": false, "short": "AS name (RIR).", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "city", "req": false, "short": "City name", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "continent", "req": false, "short": "Continent name", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "continentCode", "req": false, "short": "Two-letter continent code", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "country", "req": false, "short": "Country name", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "countryCode", "req": false, "short": "Two-letter country code (ISO 3166-1 alpha-2)", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "currency", "req": false, "short": "National currency code", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "district", "req": false, "short": "District (subdivision of city)", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "hosting", "req": false, "short": "Hosting, colocated or data center", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "isp", "req": false, "short": "ISP name", "type": "`$STRING`", "index$": 11 }, { "active": true, "format": "float", "name": "lat", "req": false, "short": "Latitude", "type": "`$NUMBER`", "index$": 12 }, { "active": true, "format": "float", "name": "lon", "req": false, "short": "Longitude", "type": "`$NUMBER`", "index$": 13 }, { "active": true, "name": "message", "req": false, "short": "Error message, included only when status is fail.", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "mobile", "req": false, "short": "Mobile (cellular) connection", "type": "`$BOOLEAN`", "index$": 15 }, { "active": true, "name": "offset", "req": false, "short": "Timezone UTC DST offset in seconds", "type": "`$INTEGER`", "index$": 16 }, { "active": true, "name": "org", "req": false, "short": "Organization name", "type": "`$STRING`", "index$": 17 }, { "active": true, "name": "proxy", "req": false, "short": "Proxy, VPN or Tor exit address", "type": "`$BOOLEAN`", "index$": 18 }, { "active": true, "name": "query", "req": false, "short": "IP address or domain used for the query", "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "region", "req": false, "short": "Region/state short code (FIPS or ISO)", "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "regionName", "req": false, "short": "Region/state name", "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "reverse", "req": false, "short": "Reverse DNS of the IP (can delay response)", "type": "`$STRING`", "index$": 22 }, { "active": true, "name": "status", "req": true, "short": "Status of the query", "type": "`$STRING`", "index$": 23 }, { "active": true, "name": "timezone", "req": false, "short": "Timezone (tz database format)", "type": "`$STRING`", "index$": 24 }, { "active": true, "name": "zip", "req": false, "short": "Zip/postal code", "type": "`$STRING`", "index$": 25 }], "id": { "field": "id", "name": "id" }, "name": "json", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "8.8.8.8", "kind": "param", "name": "id", "orig": "query", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "callback", "orig": "callback", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "status,message,country,city,lat,lon", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "en", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /json/{query}", "json": "{\"operationId\":\"getGeolocationByQuery\",\"parameters\":[{\"description\":\"IPv4/IPv6 address or domain name to lookup\",\"examples\":{\"domain\":{\"summary\":\"Domain name\",\"value\":\"google.com\"},\"ipv4\":{\"summary\":\"IPv4 address\",\"value\":\"8.8.8.8\"},\"ipv6\":{\"summary\":\"IPv6 address\",\"value\":\"2001:4860:4860::8888\"}},\"in\":\"path\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Comma-separated list of fields to return (e.g., 'status,message,query,country,city') or a numeric value representing combined fields\",\"example\":\"status,message,country,city,lat,lon\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response language for localized city, regionName and country fields\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"de\",\"es\",\"pt-BR\",\"fr\",\"ja\",\"zh-CN\",\"ru\"],\"type\":\"string\"}},{\"description\":\"JSONP callback function name to wrap the response\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"fail_invalid\":{\"value\":{\"message\":\"invalid query\",\"query\":\"not-an-ip\",\"status\":\"fail\"}},\"fail_private\":{\"value\":{\"message\":\"private range\",\"query\":\"192.168.1.1\",\"status\":\"fail\"}},\"fail_reserved\":{\"value\":{\"message\":\"reserved range\",\"query\":\"0.0.0.0\",\"status\":\"fail\"}},\"success\":{\"value\":{\"as\":\"AS15169 Google Inc.\",\"asname\":\"GOOGLE\",\"city\":\"Mountain View\",\"continent\":\"North America\",\"continentCode\":\"NA\",\"country\":\"United States\",\"countryCode\":\"US\",\"currency\":\"USD\",\"district\":\"Old Farm District\",\"hosting\":true,\"isp\":\"Google\",\"lat\":37.4192,\"lon\":-122.0574,\"mobile\":false,\"offset\":-25200,\"org\":\"Google\",\"proxy\":false,\"query\":\"173.194.67.94\",\"region\":\"CA\",\"regionName\":\"California\",\"reverse\":\"wi-in-f94.1e100.net\",\"status\":\"success\",\"timezone\":\"America/Los_Angeles\",\"zip\":\"94043\"}}},\"schema\":{\"properties\":{\"as\":{\"description\":\"AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables\",\"example\":\"AS15169 Google Inc.\",\"type\":\"string\"},\"asname\":{\"description\":\"AS name (RIR). Empty for IP blocks not being announced in BGP tables\",\"example\":\"GOOGLE\",\"type\":\"string\"},\"city\":{\"description\":\"City name\",\"example\":\"Mountain View\",\"type\":\"string\"},\"continent\":{\"description\":\"Continent name\",\"example\":\"North America\",\"type\":\"string\"},\"continentCode\":{\"description\":\"Two-letter continent code\",\"example\":\"NA\",\"type\":\"string\"},\"country\":{\"description\":\"Country name\",\"example\":\"United States\",\"type\":\"string\"},\"countryCode\":{\"description\":\"Two-letter country code (ISO 3166-1 alpha-2)\",\"example\":\"US\",\"type\":\"string\"},\"currency\":{\"description\":\"National currency code\",\"example\":\"USD\",\"type\":\"string\"},\"district\":{\"description\":\"District (subdivision of city)\",\"example\":\"Old Farm District\",\"type\":\"string\"},\"hosting\":{\"description\":\"Hosting, colocated or data center\",\"example\":true,\"type\":\"boolean\"},\"isp\":{\"description\":\"ISP name\",\"example\":\"Google\",\"type\":\"string\"},\"lat\":{\"description\":\"Latitude\",\"example\":37.4192,\"format\":\"float\",\"type\":\"number\"},\"lon\":{\"description\":\"Longitude\",\"example\":-122.0574,\"format\":\"float\",\"type\":\"number\"},\"message\":{\"description\":\"Error message, included only when status is fail. Can be 'private range', 'reserved range', or 'invalid query'\",\"enum\":[\"private range\",\"reserved range\",\"invalid query\"],\"type\":\"string\"},\"mobile\":{\"description\":\"Mobile (cellular) connection\",\"example\":false,\"type\":\"boolean\"},\"offset\":{\"description\":\"Timezone UTC DST offset in seconds\",\"example\":-25200,\"type\":\"integer\"},\"org\":{\"description\":\"Organization name\",\"example\":\"Google\",\"type\":\"string\"},\"proxy\":{\"description\":\"Proxy, VPN or Tor exit address\",\"example\":false,\"type\":\"boolean\"},\"query\":{\"description\":\"IP address or domain used for the query\",\"example\":\"173.194.67.94\",\"type\":\"string\"},\"region\":{\"description\":\"Region/state short code (FIPS or ISO)\",\"example\":\"CA\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region/state name\",\"example\":\"California\",\"type\":\"string\"},\"reverse\":{\"description\":\"Reverse DNS of the IP (can delay response)\",\"example\":\"wi-in-f94.1e100.net\",\"type\":\"string\"},\"status\":{\"description\":\"Status of the query\",\"enum\":[\"success\",\"fail\"],\"type\":\"string\"},\"timezone\":{\"description\":\"Timezone (tz database format)\",\"example\":\"America/Los_Angeles\",\"type\":\"string\"},\"zip\":{\"description\":\"Zip/postal code\",\"example\":\"94043\",\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}}},\"description\":\"Successful geolocation lookup\",\"headers\":{\"X-Rl\":{\"description\":\"Number of requests remaining in the current rate limit window\",\"schema\":{\"type\":\"integer\"}},\"X-Ttl\":{\"description\":\"Seconds until the rate limit is reset\",\"schema\":{\"type\":\"integer\"}}}},\"429\":{\"description\":\"Rate limit exceeded - requests are throttled (45 requests per minute limit)\",\"headers\":{\"X-Rl\":{\"description\":\"Number of requests remaining (0 when rate limited)\",\"schema\":{\"type\":\"integer\"}},\"X-Ttl\":{\"description\":\"Seconds until the rate limit is reset\",\"schema\":{\"type\":\"integer\"}}}}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json/{query}", "rename": { "param": { "query": "id" } }, "segments": [{ "lit": "json" }, { "var": "id" }], "select": { "exist": ["callback", "field", "id", "lang"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "callback", "orig": "callback", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "status,message,country,city,lat,lon", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "en", "kind": "query", "name": "lang", "orig": "lang", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /json/", "json": "{\"operationId\":\"getGeolocationCurrent\",\"parameters\":[{\"description\":\"Comma-separated list of fields to return (e.g., 'status,message,query,country,city') or a numeric value representing combined fields\",\"example\":\"status,message,country,city,lat,lon\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Response language for localized city, regionName and country fields\",\"in\":\"query\",\"name\":\"lang\",\"required\":false,\"schema\":{\"default\":\"en\",\"enum\":[\"en\",\"de\",\"es\",\"pt-BR\",\"fr\",\"ja\",\"zh-CN\",\"ru\"],\"type\":\"string\"}},{\"description\":\"JSONP callback function name to wrap the response\",\"in\":\"query\",\"name\":\"callback\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"fail\":{\"value\":{\"message\":\"invalid query\",\"query\":\"invalid\",\"status\":\"fail\"}},\"success\":{\"value\":{\"as\":\"AS15169 Google Inc.\",\"asname\":\"GOOGLE\",\"city\":\"Mountain View\",\"continent\":\"North America\",\"continentCode\":\"NA\",\"country\":\"United States\",\"countryCode\":\"US\",\"currency\":\"USD\",\"district\":\"Old Farm District\",\"hosting\":true,\"isp\":\"Google\",\"lat\":37.4192,\"lon\":-122.0574,\"mobile\":false,\"offset\":-25200,\"org\":\"Google\",\"proxy\":false,\"query\":\"173.194.67.94\",\"region\":\"CA\",\"regionName\":\"California\",\"reverse\":\"wi-in-f94.1e100.net\",\"status\":\"success\",\"timezone\":\"America/Los_Angeles\",\"zip\":\"94043\"}}},\"schema\":{\"properties\":{\"as\":{\"description\":\"AS number and organization, separated by space (RIR). Empty for IP blocks not being announced in BGP tables\",\"example\":\"AS15169 Google Inc.\",\"type\":\"string\"},\"asname\":{\"description\":\"AS name (RIR). Empty for IP blocks not being announced in BGP tables\",\"example\":\"GOOGLE\",\"type\":\"string\"},\"city\":{\"description\":\"City name\",\"example\":\"Mountain View\",\"type\":\"string\"},\"continent\":{\"description\":\"Continent name\",\"example\":\"North America\",\"type\":\"string\"},\"continentCode\":{\"description\":\"Two-letter continent code\",\"example\":\"NA\",\"type\":\"string\"},\"country\":{\"description\":\"Country name\",\"example\":\"United States\",\"type\":\"string\"},\"countryCode\":{\"description\":\"Two-letter country code (ISO 3166-1 alpha-2)\",\"example\":\"US\",\"type\":\"string\"},\"currency\":{\"description\":\"National currency code\",\"example\":\"USD\",\"type\":\"string\"},\"district\":{\"description\":\"District (subdivision of city)\",\"example\":\"Old Farm District\",\"type\":\"string\"},\"hosting\":{\"description\":\"Hosting, colocated or data center\",\"example\":true,\"type\":\"boolean\"},\"isp\":{\"description\":\"ISP name\",\"example\":\"Google\",\"type\":\"string\"},\"lat\":{\"description\":\"Latitude\",\"example\":37.4192,\"format\":\"float\",\"type\":\"number\"},\"lon\":{\"description\":\"Longitude\",\"example\":-122.0574,\"format\":\"float\",\"type\":\"number\"},\"message\":{\"description\":\"Error message, included only when status is fail. Can be 'private range', 'reserved range', or 'invalid query'\",\"enum\":[\"private range\",\"reserved range\",\"invalid query\"],\"type\":\"string\"},\"mobile\":{\"description\":\"Mobile (cellular) connection\",\"example\":false,\"type\":\"boolean\"},\"offset\":{\"description\":\"Timezone UTC DST offset in seconds\",\"example\":-25200,\"type\":\"integer\"},\"org\":{\"description\":\"Organization name\",\"example\":\"Google\",\"type\":\"string\"},\"proxy\":{\"description\":\"Proxy, VPN or Tor exit address\",\"example\":false,\"type\":\"boolean\"},\"query\":{\"description\":\"IP address or domain used for the query\",\"example\":\"173.194.67.94\",\"type\":\"string\"},\"region\":{\"description\":\"Region/state short code (FIPS or ISO)\",\"example\":\"CA\",\"type\":\"string\"},\"regionName\":{\"description\":\"Region/state name\",\"example\":\"California\",\"type\":\"string\"},\"reverse\":{\"description\":\"Reverse DNS of the IP (can delay response)\",\"example\":\"wi-in-f94.1e100.net\",\"type\":\"string\"},\"status\":{\"description\":\"Status of the query\",\"enum\":[\"success\",\"fail\"],\"type\":\"string\"},\"timezone\":{\"description\":\"Timezone (tz database format)\",\"example\":\"America/Los_Angeles\",\"type\":\"string\"},\"zip\":{\"description\":\"Zip/postal code\",\"example\":\"94043\",\"type\":\"string\"}},\"required\":[\"status\"],\"type\":\"object\"}}},\"description\":\"Successful geolocation lookup\",\"headers\":{\"X-Rl\":{\"description\":\"Number of requests remaining in the current rate limit window\",\"schema\":{\"type\":\"integer\"}},\"X-Ttl\":{\"description\":\"Seconds until the rate limit is reset\",\"schema\":{\"type\":\"integer\"}}}},\"429\":{\"description\":\"Rate limit exceeded - requests are throttled (45 requests per minute limit)\",\"headers\":{\"X-Rl\":{\"description\":\"Number of requests remaining (0 when rate limited)\",\"schema\":{\"type\":\"integer\"}},\"X-Ttl\":{\"description\":\"Seconds until the rate limit is reset\",\"schema\":{\"type\":\"integer\"}}}}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/json/", "segments": [{ "lit": "json" }], "select": { "exist": ["callback", "field", "lang"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "json", "name__orig": "json", "Name": "Json", "name_": "json", "name-": "json", "NAME": "JSON", "index$": 0 }, { "active": true, "entity": "json", "key$": "BasicJsonFlow", "kind": "basic", "name": "BasicJsonFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "json_ref01", "srcdatavar": "json_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-json_ref01" } }], "index$": 0 }] }, 'Json');
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