let user = require('../../../controllers/user.js')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/loggedInUserInfo', user.getUserInfo)

router.use(privateRouter.routes())
module.exports = router
