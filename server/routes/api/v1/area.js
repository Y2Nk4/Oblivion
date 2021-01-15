let manageArea = require('../../../controllers/api/v1/area/manageArea')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/getAllAreas', manageArea.listArea)
privateRouter.post('/editArea', manageArea.editArea)
privateRouter.post('/addArea', manageArea.addArea)
privateRouter.post('/editDataSource', manageArea.editDataSource)

router.use(privateRouter.routes())
module.exports = router
