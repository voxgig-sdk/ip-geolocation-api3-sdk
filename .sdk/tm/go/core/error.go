package core

import "encoding/json"

type IpGeolocationApi3Error struct {
	IsIpGeolocationApi3Error bool
	Sdk                string
	Code               string
	Msg                string
	// Reachable for a debugger, invisible to a serialiser: the context holds
	// the live spec and options, and an error is what gets logged.
	Ctx    *Context `json:"-"`
	Result any
	Spec   any
}

func NewIpGeolocationApi3Error(code string, msg string, ctx *Context) *IpGeolocationApi3Error {
	return &IpGeolocationApi3Error{
		IsIpGeolocationApi3Error: true,
		Sdk:                "IpGeolocationApi3",
		Code:               code,
		Msg:                msg,
		Ctx:                ctx,
	}
}

func (e *IpGeolocationApi3Error) Error() string {
	return e.Msg
}

// What makeError attached is already cleaned; the context is not part of
// the record.
func (e *IpGeolocationApi3Error) Record() map[string]any {
	return map[string]any{
		"sdk":     e.Sdk,
		"code":    e.Code,
		"message": e.Msg,
		"result":  e.Result,
		"spec":    e.Spec,
	}
}

func (e *IpGeolocationApi3Error) MarshalJSON() ([]byte, error) {
	return json.Marshal(e.Record())
}
