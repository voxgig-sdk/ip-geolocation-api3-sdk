package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJsonEntityFunc func(client *IpGeolocationApi3SDK, entopts map[string]any) IpGeolocationApi3Entity

