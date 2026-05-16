<?php
declare(strict_types=1);

// IpGeolocationApi3 SDK base feature

class IpGeolocationApi3BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IpGeolocationApi3Context $ctx, array $options): void {}
    public function PostConstruct(IpGeolocationApi3Context $ctx): void {}
    public function PostConstructEntity(IpGeolocationApi3Context $ctx): void {}
    public function SetData(IpGeolocationApi3Context $ctx): void {}
    public function GetData(IpGeolocationApi3Context $ctx): void {}
    public function GetMatch(IpGeolocationApi3Context $ctx): void {}
    public function SetMatch(IpGeolocationApi3Context $ctx): void {}
    public function PrePoint(IpGeolocationApi3Context $ctx): void {}
    public function PreSpec(IpGeolocationApi3Context $ctx): void {}
    public function PreRequest(IpGeolocationApi3Context $ctx): void {}
    public function PreResponse(IpGeolocationApi3Context $ctx): void {}
    public function PreResult(IpGeolocationApi3Context $ctx): void {}
    public function PreDone(IpGeolocationApi3Context $ctx): void {}
    public function PreUnexpected(IpGeolocationApi3Context $ctx): void {}
}
