package core

type IpGeolocationApi3Error struct {
	IsIpGeolocationApi3Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewIpGeolocationApi3Error(code string, msg string, ctx *Context) *IpGeolocationApi3Error {
	return &IpGeolocationApi3Error{
		IsIpGeolocationApi3Error: true,
		Sdk:              "IpGeolocationApi3",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *IpGeolocationApi3Error) Error() string {
	return e.Msg
}
