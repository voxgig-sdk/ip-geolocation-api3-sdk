
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IpGeolocationApi3SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IpGeolocationApi3SDK.test()
    equal(testsdk instanceof IpGeolocationApi3SDK, true,
      'IpGeolocationApi3SDK.test() must return a client synchronously')
  })

})
