import browserInfo from './modules/browser';

class DevicePlatform {
  constructor() {
    this.browser = browserInfo.getBrowserInfo();
  }

  get browserName () {
    return this.browser.browserName;
  }

  get browserVersion () {
    return this.browser.browserVersion;
  }

  get browserMajorVersion () {
    return this.browser.browserMajorVersion;
  }

  get cookiesEnabled () {
    return browserInfo.isCookiesEnabled();
  }

  get hasFlash () {
    return browserInfo.hasFlash();
  }
}

export default DevicePlatform;
