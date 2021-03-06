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
    this.hasFlash = this.hasFlashSupport()
  }

  isCookieEnabled () {
    let cookieEnabled = browserInfo.isCookieEnabled()
    return cookieEnabled ? cookieEnabled : null
  }

  hasFlashSupport () {
    let hasFlash = browserInfo.hasFlashSupport()
    return hasFlash ? hasFlash : null
  }
}

// console.log(new DevicePlatform());

export default DevicePlatform;
