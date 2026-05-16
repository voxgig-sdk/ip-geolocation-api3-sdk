# IpGeolocationApi3 SDK utility: make_context

from core.context import IpGeolocationApi3Context


def make_context_util(ctxmap, basectx):
    return IpGeolocationApi3Context(ctxmap, basectx)
