require('../../env')
let mongoose = require('mongoose')
let AutoIncrementFactory = require('mongoose-sequence')

let mongoConn = mongoose.createConnection(process.env.MONGODB_URL)

let AutoIncrement = AutoIncrementFactory(mongoConn)
mongoConn.AutoIncrement = AutoIncrement

module.exports = mongoConn
