import ResourceResponse from './ResourceResponse'

module.exports = ResourceResponse(function (sensorData) {
    return {
        _id: sensorData._id,
        value: sensorData.value,
        from_device_id: sensorData.from_device_id,
        device_mac: sensorData.device_mac,
        metas: sensorData.metas,
        data_type: sensorData.data_type,
        store_at: sensorData.store_at
    }
})
