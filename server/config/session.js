/* let taggedRedisCache = require('./taggedRedisCache') */
let flatted = require('flatted')

// One Day in ms
const ONE_DAY = 1000 * 60 * 60 * 24

/* let store = {
    async get (key, maxAge, { rolling, ctx }) {
        console.log('get:', key)
        let rawData = await taggedRedisCache.get(['session', key].join(':'))
        if (!rawData) return null
        return flatted.parse(rawData)
    },
    async set (key, value, maxAge) {
        console.log('store:', key, value, typeof maxAge, maxAge)
        maxAge = typeof maxAge === 'number' ? maxAge : ONE_DAY
        maxAge = Math.round(maxAge / 1000) // convert to s
        let storeData = flatted.stringify(value)
        await taggedRedisCache.tags(['session']).put(['session', key].join(':'), storeData, maxAge)
    },
    async destroy (key) {
        await taggedRedisCache.forget(['session', key].join(':'))
    }
} */

console.log('max-age', parseInt(process.env.SESSION_MAX_AGE))

module.exports = {
    key: process.env.SESSION_KEY || 'koa.sess', /** (string) cookie key (default is koa.sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: parseInt(process.env.SESSION_MAX_AGE) || ONE_DAY,
    autoCommit: true, /** (boolean) automatically commit headers (default true) */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    // Not use httpOnly while under developing
    httpOnly: (!(process.env.ENV && process.env.ENV.indexOf('DEV') !== -1)), /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: process.env.SESSION_AUTO_RENEW || false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false) */
    secure: process.env.ENV !== 'LOCALDEV', /** (boolean) secure cookie */
    sameSite: null /** (string) session cookie sameSite options (default null, don't set it) */
}
