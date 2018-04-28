import DevicePlatform from '../src/main'

let Device = new DevicePlatform()

describe('#The Instance', function () {
  console.log('[#main] typeof Device', typeof Device);

  it('the created instance is an object', function () {
    expect(Device).to.be.an('object')
  })
})
