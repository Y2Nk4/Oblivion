import ResourceResponse from './ResourceResponse'

module.exports = ResourceResponse(function (device) {
    return {
        _id: device._id,
        device_mac: device.device_mac,
        device_name: device.device_name,
        deviceId: device.deviceId,
        last_received: device.last_received,
        is_active: device.is_active,
        device_type: device.device_type
    }
})
