let mongo = require('../config/db')
let mongoose = require('mongoose')

let User = mongo.model('users', mongoose.Schema({
    username: String,
    password: String,
    image_url: String,
    is_admin: Boolean,
    is_enabled: Boolean,
    start_at: Date,
    end_at: Date
}))

module.exports = User
