let Device = require('../../../../models/Device')
let DeviceResource = require('../../../../resources/Device')
let ObjectId = require('mongoose').Types.ObjectId

async function getAllDevices (ctx) {
    let devices = await Device.find()

    devices = devices.map(device => {
        device.is_active = ((Date.now() - device.last_received.getTime()) < 300000)
        return device
    })

    return ctx.success(DeviceResource(devices))
}

async function editDeviceDescription (ctx) {
    ctx.checkBody('deviceId').notEmpty()
    if (ctx.errors) {
        return ctx.error(ctx.formatValidationError(ctx.errors), 400)
    }
    let { deviceId } = ctx.request.body
    if (!ObjectId.isValid(deviceId)) {
        return ctx.error('deviceId is invalid')
    }

    let result = await Device.findOneAndUpdate({
        _id: ctx.request.body.deviceId
    }, {
        description: ctx.request.body.description || ''
    })

    if (!result) return ctx.error('Device does Not Exist')

    return ctx.success()
}

module.exports = {
    getAllDevices, editDeviceDescription
}
