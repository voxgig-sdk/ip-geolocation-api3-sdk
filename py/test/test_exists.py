# ProjectName SDK exists test

import pytest
from ipgeolocationapi3_sdk import IpGeolocationApi3SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IpGeolocationApi3SDK.test(None, None)
        assert testsdk is not None
