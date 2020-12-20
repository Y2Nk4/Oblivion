require('../../env')
let mongoose = require('mongoose')

let mongoConn = mongoose.createConnection(process.env.MONGODB_URL)

module.exports = mongoConn
