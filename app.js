require('./env')
let Koa = require('koa')
let json = require('koa-json')
let api = require('./server/routes/api.js')
let log4js = require('./server/config/log4js')
let path = require('path')
let serve = require('koa-static')
let historyApiFallback = require('koa2-history-api-fallback')
let koaRouter = require('koa-router')
let koaBodyparser = require('koa-bodyparser')
let formidable = require('koa2-formidable')
let KoaValidate = require('koa-validate')
let responses = require('./server/helpers/responses')
let accessLogger = require('./server/middlewares/accessLogger')
let setResponseTimeHeader = require('./server/middlewares/setResponseTimeHeader')
let jwt = require('koa-jwt')
let formatValidationError = require('./server/helpers/formatValidationError')
let session = require('koa-session')
let sessionConfig = require('./server/config/session')
let { levels } = require('koa-log4')

// cors
const cors = require('@koa/cors')

// 加载sequelize的关联
require('./server/config/db')

const app = new Koa()
const router = koaRouter()
KoaValidate(app)

let port = process.env.PORT

// Cookie Keys
app.keys = process.env.COOKIE_KEYS.split(',')

app.proxy = process.env.ENV === 'LOCALDEV'

app.use(setResponseTimeHeader)
    .use(formidable())
    .use(koaBodyparser())
    .use(json())
    .use(accessLogger) // 美化访问日志(logger是middleware)
    // 记录访问日志
    .use(log4js.koaLogger(log4js.getLogger('access'), {
        level: 'auto',
        levelMapper: function (statusCode) {
            if (statusCode >= 400) return levels.ERROR
            if (statusCode >= 300) return levels.WARN
            return levels.INFO
        }
    }))
    .use(async function (ctx, next) {
        ctx.success = responses.success.bind(ctx)
        ctx.formatValidationError = formatValidationError.bind(ctx)
        ctx.error = responses.error.bind(ctx)
        ctx._logger = log4js.getLogger('application')
        await next()
    })
    .use(async function (ctx, next) {
        // 错误处理
        try {
            await next()
        } catch (err) {
            //  如果JWT验证失败，返回验证失败信息
            if (err.status === 401) {
                ctx.status = 401
                ctx.body = {
                    success: false,
                    token: null,
                    error: 'Unauthorized Access'
                }
            } else {
                ctx._logger.error(err)
                ctx.error(process.env.ENV === 'DEV' ? err.message : 'Internal Server Error', 500)
            }
        }
    })
    .use(async (ctx, next) => {
        ctx.set('X-Powered-By', process.env.X_POWERED_BY || 'koa')
        await next()
    })
    .use(cors({
        origin (ctx) {
            // When the project is in development mode, it will accepts all origins
            if (process.env.ENV === 'DEV') {
                return ctx.get('Origin')
            } else {
                return process.env.CROS_ORIGINS || ''
            }
        }
    }))
    .use(session(sessionConfig, app))

app.on('error', function (err, ctx) {
    console.log('server error', err)
    ctx.response.body = {
        success: false,
        error: err.message
    }
})

router.use('/api', api.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。

app.use(router.routes()) // 将路由规则挂载到Koa上。
app.use(historyApiFallback())
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录

module.exports = app.listen(port, () => {
    console.log(`Koa is listening in ${port}`)
})

// Start MQTT Broker
require('./server/services/MQTTBroker/MQTTBroker')
