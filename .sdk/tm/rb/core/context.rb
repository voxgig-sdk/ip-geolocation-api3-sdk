# IpGeolocationApi3 SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class IpGeolocationApi3Context
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = IpGeolocationApi3Control.new
    ctrl_raw = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
      @ctrl.actor = ctrl_raw["actor"] if ctrl_raw.key?("actor")
      @ctrl.paging = ctrl_raw["paging"] if ctrl_raw["paging"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = IpGeolocationApi3Helpers.to_map(IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = IpGeolocationApi3Helpers.to_map(IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = IpGeolocationApi3Helpers.to_map(IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = IpGeolocationApi3Helpers.to_map(IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(IpGeolocationApi3Spec) ? sp : basectx&.spec

    r = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(IpGeolocationApi3Result) ? r : basectx&.result

    rp = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(IpGeolocationApi3Response) ? rp : basectx&.response

    opname = IpGeolocationApi3Helpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    # Cache key is `<entity>:<opname>` so two entities with the same op
    # (e.g. both have a "list") get distinct cached Operations. Keying
    # on opname alone caused the first-resolved entity's points to be
    # served to every subsequent entity's call.
    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    cache_key = "#{entname}:#{opname}"
    return @opmap[cache_key] if @opmap[cache_key]
    return IpGeolocationApi3Operation.new({}) if opname.empty?

    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = IpGeolocationApi3Operation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[cache_key] = op
    op
  end

  def make_error(code, msg)
    IpGeolocationApi3Error.new(code, msg, self)
  end
end
