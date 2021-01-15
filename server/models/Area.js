let mongo = require('../config/db')
let mongoose = require('mongoose')

class Area {
}

let schema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    description: String,
    data: [
        new mongoose.Schema({
            data: mongoose.Schema.Types.Mixed,
            source: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'devices'
            },
            type: Number,
            updated_at: Date
        })
    ],
    created_at: Date
})
schema.plugin(mongo.AutoIncrement)
schema.loadClass(Area)

module.exports = mongo.model('areas', schema)

module.exports.createIndexes()
