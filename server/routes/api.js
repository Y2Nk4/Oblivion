// import api from '../controllers/api.js'
let koaRouter = require('koa-router')
let user = require('./api/v1/user')
let device = require('./api/v1/device')
let sensorData = require('./api/v1/sensor_data')
let dataType = require('./api/v1/data_type')
let area = require('./api/v1/area')
let auth = require('./auth')
const router = koaRouter()

// Use api/user Routes
router.use('/auth', auth.routes())
router.use('/user', user.routes())
router.use('/device', device.routes())
router.use('/sensorData', sensorData.routes())
router.use('/dataType', dataType.routes())
router.use('/area', area.routes())

module.exports = router
