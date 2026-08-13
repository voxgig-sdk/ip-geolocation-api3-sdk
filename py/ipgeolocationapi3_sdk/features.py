# IpGeolocationApi3 SDK feature factory

from ipgeolocationapi3_sdk.feature.base_feature import IpGeolocationApi3BaseFeature
from ipgeolocationapi3_sdk.feature.test_feature import IpGeolocationApi3TestFeature


def _make_feature(name):
    features = {
        "base": lambda: IpGeolocationApi3BaseFeature(),
        "test": lambda: IpGeolocationApi3TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
