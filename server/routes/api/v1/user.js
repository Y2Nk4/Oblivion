let user = require('../../../controllers/user.js')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/info', user.getUserInfo) // 定义url的参数是id

router.use(privateRouter.routes())
module.exports = router
