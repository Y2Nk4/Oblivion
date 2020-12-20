let auth = require('../controllers/auth.js')
let koaRouter = require('koa-router')
const router = koaRouter()

router.post('/login', auth.userLogin)
router.post('/register', auth.userRegister)

module.exports = router
