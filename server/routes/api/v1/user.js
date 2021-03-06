let user = require('../../../controllers/api/v1/user/user')
let userAuth = require('../../../middlewares/userAuth')
let koaRouter = require('koa-router')
const router = koaRouter()
const privateRouter = koaRouter()
privateRouter.use(userAuth())

privateRouter.get('/loggedInUserInfo', user.getUserInfo)

router.use(privateRouter.routes())
module.exports = router
