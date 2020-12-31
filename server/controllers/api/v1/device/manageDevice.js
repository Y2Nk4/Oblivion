let Device = require('../../../../models/Device')
let DeviceResource = require('../../../../resources/Device')

async function getAllDevices (ctx) {
    let devices = await Device.find()

    devices = devices.map(device => {
        device.is_active = ((Date.now() - device.last_received.getTime()) < 300000)
        return device
    })

    return ctx.success(DeviceResource(devices))
}

module.exports = {
    getAllDevices
}
