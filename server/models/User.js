let mongo = require('../config/db')
let mongoose = require('mongoose')
let beautifyUnique = require('mongoose-beautiful-unique-validation')

class User {
    static getUserById (userId) {
        return this.findOne({
            id: userId
        })
    }
    static getUserByName (username) {
        return this.findOne({
            username
        })
    }
    static getUserByEmail (email) {
        return this.findOne({
            email
        })
    }
}

let schema = new mongoose.Schema({
    username: {
        type: String,
        index: { unique: true },
        unique: 'username duplicated',
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: { unique: true },
        unique: 'email duplicated',
        required: true
    },
    is_admin: Boolean,
    is_enabled: Boolean,
    start_at: Date,
    end_at: Date
})
schema.plugin(mongo.AutoIncrement, {inc_field: 'id'})
schema.plugin(beautifyUnique)
schema.loadClass(User)
schema.index({ username: 1, email: 1 }, { unique: true })

module.exports = mongo.model('users', schema)

module.exports.createIndexes()
