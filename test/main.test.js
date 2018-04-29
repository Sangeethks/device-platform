import DevicePlatform from '../src/main'

let Device = new DevicePlatform()

describe('#The Instance', function () {
  it('the created instance is an object', function () {
    expect(Device).to.be.an('object')
  })
})

describe('#Browser', () => {
  describe('browserName', () => {
    // console.log('[TEST] PhantomJS ', JSON.stringify(PhantomJS));

    let browserName = Device.browserName;

    it('browser name should be a string', () => {
      expect(browserName).to.be.a('string')
    })
  })

  describe('browserVersion', () => {
    let browserVersion = Device.browserVersion;

    it('browser version should be a string', () => {
      expect(browserVersion).to.be.a('string')
    })
  })

  describe('browserMajorVersion', () => {
    let browserMajorVersion = Device.browserMajorVersion;

    it('browser major version should be a number', () => {
      expect(browserMajorVersion).to.be.a('number')
    })
  })

  describe('cookiesEnabled', () => {
    let cookiesEnabled = Device.cookiesEnabled;

    it('cookiesEnabled property should be of type boolean', () => {
      expect(cookiesEnabled).to.be.a('boolean')
    })
    it('cookies are enabled in the browser', () => {
      expect(cookiesEnabled).to.equal(true)
    })
  })

  describe('hasFlash', () => {
    let hasFlash = Device.hasFlash;

    it('hasFlash property should be of type boolean', () => {
      expect(hasFlash).to.be.a('boolean')
    })
    it('browser supports flash', () => {
      expect(hasFlash).to.equal(true)
    })
  })

})
