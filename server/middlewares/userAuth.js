let jwt = require('koa-jwt')
let setLoggedInUser = require('./setLoggedInUser')
// let userEncryptedToken = require('../utils/userEncryptedToken/userEncryptedToken')
// let taggedRedisCache = require('../config/taggedRedisCache')
let User = require('../models/User')

function sessionUserAuth (allowPassthrough = false) {
    return async (ctx, next) => {
        if (ctx.session.loggedInUserId) {
            await setLoggedInUser('SESSION', ctx, next)
        } else {
            if (!allowPassthrough) {
                return ctx.throw(401, 'Unauthorized Access')
            }
        }
        await next()
    }
}

function jwtUserAuth (allowPassthrough = false) {
    let jwtMiddleware = jwt({secret: process.env.JWT_SECRET, passthrough: allowPassthrough, isRevoked: jwtIsRevoked})

    return async (ctx, next) => {
        return jwtMiddleware(ctx, async () => {
            await setLoggedInUser('JWT', ctx, next)
            return Promise.resolve()
        })
    }
}

async function jwtIsRevoked (ctx, decodedToken, token) {
    let start = Date.now()
    let result = await _jwtIsRevoked(ctx, decodedToken, token)
    console.log('spent:', Date.now() - start, 'result:', result)
    return result
}

async function _jwtIsRevoked (ctx, decodedToken, token) {
    if (!decodedToken.token) return true
    let encryptedToken
    // 解密token payload
    try {
        encryptedToken = userEncryptedToken.decrypt(decodedToken.token)
        decodedToken.token = encryptedToken
    } catch (e) {
        return true
    }
    if (!encryptedToken.u) return true

    if (await taggedRedisCache.get(['revokeToken', decodedToken.id, encryptedToken.u].join(':'))) return true

    let userTokenVersion = await User.getUserTokenVersion(decodedToken.id)
    if (userTokenVersion !== encryptedToken.v) return true

    ctx.state.decodedToken = decodedToken
    return false
}

switch (process.env.AUTH_DRIVER) {
case 'JWT':
    module.exports = jwtUserAuth
    break
case 'SESSION':
default:
    module.exports = sessionUserAuth
    break
}
