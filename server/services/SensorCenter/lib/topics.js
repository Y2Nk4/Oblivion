let SensorCenter = require('../SensorCenter')
let DeviceDiscoverBuf = require('../protobuf/generated/device_discover')
let TemperatureNode = require('../protobuf/generated/temperature_node')
let decodeMacFromLong = require('../helpers/decodeMacFromLong')
let Device = require('../../../models/Device')
let SensorData = require('../../../models/SensorData')
let dataTypes = require('../data/data_types')

SensorCenter.prototype.defaultTopics = {
    async 'oblivion/discover-device_register' (message) {
        try {
            let data = DeviceDiscoverBuf.DeviceRegisterRequest.decode(message)
            console.log('received', data)
            let deviceMac = decodeMacFromLong(data.device_mac)
            console.log('IoT Mac:', deviceMac)
            // 检查服务是否存在，若不存在则在系统中注册

            let device = await Device.getDeviceByDeviceMacAddress(deviceMac)
            if (!device) {
                device = await Device.create({
                    device_mac: deviceMac,
                    device_name: data.device_name,
                    device_type: data.device_type
                })
            }
            await this.MQTT_CONN.publish(`oblivion/discover-device_register_response-${data.device_name}`, DeviceDiscoverBuf.DeviceRegisterResponse.encode({
                success: true
            }).finish())
            console.log(`Published to oblivion/discover-device_register_response-${data.device_name}`)
        } catch (e) {
            console.log(e)
        }
    },
    async 'oblivion/temperature_report' (message) {
        try {
            let data = TemperatureNode.TemperatureNodeReport.decode(message)
            console.log('received', data)
            let clientMacAddr = decodeMacFromLong(data.device_mac)
            console.log('from', clientMacAddr)
            let receivedDate = new Date()
            let device = await Device.getDeviceByDeviceMacAddress(clientMacAddr)
            await device.update({
                last_received: receivedDate
            })
            if (data.temperature_record && data.temperature_record.length > 0) {
                let task = Promise.resolve()
                let length = data.temperature_record.length
                data.temperature_record.reverse().forEach(record => {
                    let recDate = (!record.delta && record.delta !== 0) ? receivedDate : new Date(receivedDate.getTime() + ((record.delta + 1 - length) * data.measure_interval * 1000))
                    task.then(SensorData.create({
                        value: record.temperature_value,
                        device_mac: clientMacAddr,
                        from_device_id: device._id,
                        data_type: dataTypes.TEMPERATURE,
                        store_at: recDate
                    })).then(SensorData.create({
                        value: record.humidity_value,
                        device_mac: clientMacAddr,
                        from_device_id: device._id,
                        data_type: dataTypes.HUMIDITY,
                        store_at: recDate
                    }))
                    if (record.pressure_value !== -1) {
                        task.then(SensorData.create({
                            value: record.pressure_value,
                            device_mac: clientMacAddr,
                            from_device_id: device._id,
                            data_type: dataTypes.PRESSURE,
                            store_at: recDate
                        }))
                    }
                    if (data.battery_vcc > 0) {
                        task.then(SensorData.create({
                            value: data.battery_vcc,
                            device_mac: clientMacAddr,
                            from_device_id: device._id,
                            data_type: dataTypes.VOLTAGE,
                            store_at: recDate
                        }))
                    }
                })
                await task
            }
        } catch (e) {
            console.log(e)
        }
    }
}
