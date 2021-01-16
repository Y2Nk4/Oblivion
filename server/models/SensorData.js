let mongo = require('../config/db')
let mongoose = require('mongoose')

class SensorData {
}

let schema = new mongoose.Schema({
    value: mongoose.Schema.Types.Mixed,
    from_device_id: mongoose.Schema.Types.ObjectId,
    device_mac: String,
    metas: mongoose.Schema.Types.Mixed,
    data_type: Number,
    store_at: Date
})
schema.plugin(mongo.AutoIncrement, {inc_field: 'sensorDataId'})
schema.loadClass(SensorData)

module.exports = mongo.model('sensor_data', schema)

module.exports.createIndexes()
