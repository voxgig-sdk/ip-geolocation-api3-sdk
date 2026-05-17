package voxgigipgeolocationapi3sdk

import (
	"github.com/voxgig-sdk/ip-geolocation-api3-sdk/go/core"
	"github.com/voxgig-sdk/ip-geolocation-api3-sdk/go/entity"
	"github.com/voxgig-sdk/ip-geolocation-api3-sdk/go/feature"
	_ "github.com/voxgig-sdk/ip-geolocation-api3-sdk/go/utility"
)

// Type aliases preserve external API.
type IpGeolocationApi3SDK = core.IpGeolocationApi3SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IpGeolocationApi3Entity = core.IpGeolocationApi3Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IpGeolocationApi3Error = core.IpGeolocationApi3Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJsonEntityFunc = func(client *core.IpGeolocationApi3SDK, entopts map[string]any) core.IpGeolocationApi3Entity {
		return entity.NewJsonEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIpGeolocationApi3SDK = core.NewIpGeolocationApi3SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
