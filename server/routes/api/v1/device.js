let manageDevice = require('../../../controllers/api/v1/device/manageDevice')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/getAllDevices', manageDevice.getAllDevices)

router.use(privateRouter.routes())
module.exports = router
