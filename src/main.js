import browserInfo from './modules/browser'
let browser = browserInfo.getBrowserInfo()

let browserName = browser.browserName ? browser.browserName : null
let browserVersion = browser.browserVersion ? browser.browserVersion : null
let browserMajorVersion = browser.browserMajorVersion ? browser.browserMajorVersion : null

class DevicePlatform {
  constructor() {
    this.browserName = browserName
    this.browserVersion = browserVersion
    this.browserMajorVersion = browserMajorVersion
    this.cookieEnabled = this.isCookieEnabled()
    this.flashSupport = this.hasFlash()
  }

  isCookieEnabled () {
    return browserInfo.isCookieEnabled()
  }

  hasFlash () {
    return browserInfo.hasFlash()
  }
}

// console.log(new DevicePlatform());

export default DevicePlatform;
