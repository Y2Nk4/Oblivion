// import api from '../controllers/api.js'
let koaRouter = require('koa-router')
let user = require('./api/v1/user')
let device = require('./api/v1/device')
let auth = require('./auth')
const router = koaRouter()

// Use api/user Routes
router.use('/auth', auth.routes())
router.use('/user', user.routes())
router.use('/device', device.routes())

module.exports = router
