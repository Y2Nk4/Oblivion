let manageDevice = require('../../../controllers/api/v1/device/manageDevice')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/getAllDevices', manageDevice.getAllDevices)
privateRouter.post('/editDeviceDescription', manageDevice.editDeviceDescription)

router.use(privateRouter.routes())
module.exports = router
