let manageDataType = require('../../../controllers/api/v1/dataType/manageDataType')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/getAllDataTypes', manageDataType.getAllDataTypes)
privateRouter.post('/addDataType', manageDataType.addDataType)

router.use(privateRouter.routes())
module.exports = router
