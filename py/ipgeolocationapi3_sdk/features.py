# IpGeolocationApi3 SDK feature factory

from ipgeolocationapi3_sdk.feature.base_feature import IpGeolocationApi3BaseFeature
from ipgeolocationapi3_sdk.feature.ratelimit_feature import IpGeolocationApi3RatelimitFeature
from ipgeolocationapi3_sdk.feature.retry_feature import IpGeolocationApi3RetryFeature
from ipgeolocationapi3_sdk.feature.test_feature import IpGeolocationApi3TestFeature
from ipgeolocationapi3_sdk.feature.timeout_feature import IpGeolocationApi3TimeoutFeature


_FEATURES = {
    "base": lambda: IpGeolocationApi3BaseFeature(),
    "ratelimit": lambda: IpGeolocationApi3RatelimitFeature(),
    "retry": lambda: IpGeolocationApi3RetryFeature(),
    "test": lambda: IpGeolocationApi3TestFeature(),
    "timeout": lambda: IpGeolocationApi3TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
