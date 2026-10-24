import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
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
      "field": "status,message,country,city,lat,lon",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "fields",
      "lang",
      "callback"
    ],
    "queryArgs": [
      {
        "name": "callback",
        "wire": "callback"
      },
      {
        "name": "field",
        "wire": "fields"
      },
      {
        "name": "lang",
        "wire": "lang"
      }
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
      "field": "status,message,country,city,lat,lon",
      "lang": "en"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "fields",
      "lang",
      "callback"
    ],
    "queryArgs": [
      {
        "name": "callback",
        "wire": "callback"
      },
      {
        "name": "field",
        "wire": "fields"
      },
      {
        "name": "lang",
        "wire": "lang"
      }
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
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
