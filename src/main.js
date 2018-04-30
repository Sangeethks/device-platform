import browserInfo from './modules/browser'
let browser = browserInfo.getBrowserInfo()

class DevicePlatform {
  constructor() {
  }

  get browserName () {
    return browser.browserName;
  }

  get browserVersion () {
    return browser.browserVersion;
  }

  get browserMajorVersion () {
    return browser.browserMajorVersion;
  }

  get cookiesEnabled () {
    return browserInfo.isCookiesEnabled();
  }

  get hasFlash () {
    return browserInfo.hasFlash();
  }
}

export default DevicePlatform;
