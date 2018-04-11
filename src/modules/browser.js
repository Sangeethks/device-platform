let browser = {
  appVersion: navigator.appVersion,
  userAgent: navigator.userAgent,
  appName: navigator.appName,
  getBrowserInfo () {
    // Values will be assigned later
    let browserName, browserVersion, nameOffset, versionOffset, ix;
    // Browser Major Version
    let browserMajorVersion = parseInt(this.appVersion, 10);

    // Opera
    if ((versionOffset = this.userAgent.indexOf('Opera')) != -1) {
      browserName = 'Opera';
      browserVersion = this.userAgent.substring(versionOffset + 6);
      if ((versionOffset = this.userAgent.indexOf('Version')) != -1) {
        browserVersion = this.userAgent.substring(versionOffset + 8);
      }
    }
    // Edge
    else if ((versionOffset = this.userAgent.indexOf('Edge')) != -1) {
      browserName = 'Microsoft Edge';
      browserVersion = this.userAgent.substring(versionOffset + 5);
    }
    // MSIE
    else if ((versionOffset = this.userAgent.indexOf('MSIE')) != -1) {
      browserName = 'Microsoft Internet Explorer';
      browserVersion = this.userAgent.substring(versionOffset + 5);
    }
    // Chrome
    else if ((versionOffset = this.userAgent.indexOf('Chrome')) != -1) {
      browserName = 'Chrome';
      browserVersion = this.userAgent.substring(versionOffset + 7);
    }
    // Safari
    else if ((versionOffset = this.userAgent.indexOf('Safari')) != -1) {
      browserName = 'Safari';
      browserVersion = this.userAgent.substring(versionOffset + 7);
      if ((versionOffset = this.userAgent.indexOf('Version')) != -1) {
        browserVersion = this.userAgent.substring(versionOffset + 8);
      }
    }
    // Firefox
    else if ((versionOffset = this.userAgent.indexOf('Firefox')) != -1) {
      browserName = 'Firefox';
      browserVersion = this.userAgent.substring(versionOffset + 8);
    }
    // MSIE 11+
    else if (this.userAgent.indexOf('Trident/') != -1) {
      browserName = 'Microsoft Internet Explorer';
      browserVersion = this.userAgent.substring(this.userAgent.indexOf('rv:') + 3);
    }
    // Other browsers
    else if ((nameOffset = this.userAgent.lastIndexOf(' ') + 1) < (versionOffset = this.userAgent.lastIndexOf('/'))) {
      browserName = this.userAgent.substring(nameOffset, versionOffset);
      browserVersion = this.userAgent.substring(versionOffset + 1);
      if (browserName.toLowerCase() == browserName.toUpperCase()) {
        browserName = this.appName;
      }
    }
    // trim the browserVersion string
    if ((ix = browserVersion.indexOf(';')) != -1) browserVersion = browserVersion.substring(0, ix);
    if ((ix = browserVersion.indexOf(' ')) != -1) browserVersion = browserVersion.substring(0, ix);
    if ((ix = browserVersion.indexOf(')')) != -1) browserVersion = browserVersion.substring(0, ix);

    browserMajorVersion = parseInt('' + browserVersion, 10);
    if (isNaN(browserMajorVersion)) {
      browserVersion = '' + parseFloat(this.appVersion);
      browserMajorVersion = parseInt(this.appVersion, 10);
    }

    // DEBUG:
    // console.log('[browser -> browserName ]', browserName);
    // console.log('[browser -> browserVersion ]', browserVersion);
    // console.log('[browser -> browserMajorVersion ]', browserMajorVersion);

    return { browserName, browserVersion, browserMajorVersion };
  },
  // Checks whether cookies are enabled or not
  isCookiesEnabled () {
    let cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }
    return cookieEnabled;
  },
  // Checks the browser supports flash
  hasFlash () {
    let hasFlash = false;
    try {
        let ao = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (ao) {
            hasFlash = !hasFlash;
        }
    } catch (e) {
        if (navigator.mimeTypes
            && navigator.mimeTypes['application/x-shockwave-flash'] != undefined
            && navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
            hasFlash = !hasFlash;
        }
    }
    return hasFlash;
  }
}

export default browser;
