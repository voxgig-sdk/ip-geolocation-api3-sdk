"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "json",
        "accessor": "Json",
        "op": "load",
        "method": "GET",
        "path": "/json/{query}",
        "args": [
            {
                "name": "id",
                "wire": "query",
                "value": "p1"
            }
        ],
        "select": {
            "callback": "v1",
            "field": "v1",
            "lang": "v1"
        },
        "headers": [],
        "query": [
            "fields",
            "lang",
            "callback"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "continent": "North America",
            "continentCode": "NA",
            "country": "United States",
            "countryCode": "US",
            "region": "CA",
            "regionName": "California",
            "city": "Mountain View",
            "district": "Old Farm District",
            "zip": "94043",
            "lat": 37.4192,
            "lon": -122.0574,
            "timezone": "America/Los_Angeles",
            "offset": -25200,
            "currency": "USD",
            "isp": "Google",
            "org": "Google",
            "as": "AS15169 Google Inc.",
            "asname": "GOOGLE",
            "reverse": "wi-in-f94.1e100.net",
            "mobile": false,
            "proxy": false,
            "hosting": true,
            "query": "173.194.67.94"
        },
        "idField": "id"
    },
    {
        "entity": "json",
        "accessor": "Json",
        "op": "load",
        "method": "GET",
        "path": "/json/",
        "args": [],
        "select": {
            "callback": "v1",
            "field": "v1",
            "lang": "v1"
        },
        "headers": [],
        "query": [
            "fields",
            "lang",
            "callback"
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "status": "success",
            "continent": "North America",
            "continentCode": "NA",
            "country": "United States",
            "countryCode": "US",
            "region": "CA",
            "regionName": "California",
            "city": "Mountain View",
            "district": "Old Farm District",
            "zip": "94043",
            "lat": 37.4192,
            "lon": -122.0574,
            "timezone": "America/Los_Angeles",
            "offset": -25200,
            "currency": "USD",
            "isp": "Google",
            "org": "Google",
            "as": "AS15169 Google Inc.",
            "asname": "GOOGLE",
            "reverse": "wi-in-f94.1e100.net",
            "mobile": false,
            "proxy": false,
            "hosting": true,
            "query": "173.194.67.94"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map