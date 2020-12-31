let mongo = require('../config/db')
let mongoose = require('mongoose')
let beautifyUnique = require('mongoose-beautiful-unique-validation')

class Device {
    static getDeviceById (deviceId) {
        return this.findOne({
            id: deviceId
        })
    }
    static getDeviceByName (deviceName) {
        return this.findOne({
            device_name: deviceName
        })
    }
    static getDeviceByDeviceMacAddress (macAddress) {
        return this.findOne({
            device_mac: macAddress
        })
    }
}

let schema = new mongoose.Schema({
    device_name: {
        type: String,
        index: { unique: true },
        unique: 'device name duplicated',
        required: true
    },
    device_mac: {
        type: String,
        index: { unique: true },
        unique: 'device mac duplicated',
        required: true
    },
    metas: mongoose.Schema.Types.Mixed,
    device_type: String,
    last_received: Date,
    registered_at: Date
})
schema.plugin(mongo.AutoIncrement, {inc_field: 'deviceId'})
schema.plugin(beautifyUnique)
schema.loadClass(Device)
schema.index({ device_name: 1, device_mac: 1 }, { unique: true })

module.exports = mongo.model('devices', schema)

module.exports.createIndexes()
