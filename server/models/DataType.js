let mongo = require('../config/db')
let mongoose = require('mongoose')

class DataType {
}

let schema = new mongoose.Schema({
    type_id: Number,
    type_name: {
        type: String,
        required: true
    },
    unit: String,
    created_at: Date
})
schema.plugin(mongo.AutoIncrement, { inc_field: 'type_id', start_seq: 100 })
schema.loadClass(DataType)

module.exports = mongo.model('data_types', schema)

module.exports.createIndexes()
