let SensorCenter = require('../SensorCenter')
let DeviceDiscoverBuf = require('../protobuf/generated/device_discover')
let decodeMacFromLong = require('../helpers/decodeMacFromLong')

console.log('load defaultTopics')

SensorCenter.prototype.defaultTopics = {
    'oblivion/discover-device_register' (message) {
        try {
            console.log('received raw msg')
            console.log(message.toString('base64'))
            let data = DeviceDiscoverBuf.DeviceRegisterRequest.decode(message)
            console.log('received', data)
            let deviceMac = decodeMacFromLong(data.device_mac)
            console.log('IoT Mac:', deviceMac)
        } catch (e) {
            console.log(e)
        }
    },
    'oblivion/recorder-rec_temp_node' (message) {
        let data = DeviceDiscoverBuf.decode(message)
        console.log('received', data)
    }
}
