let sensorData = require('../../../controllers/api/v1/sensorData/sensorData')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/readSensorData', sensorData.readSensorData)

router.use(privateRouter.routes())
module.exports = router
