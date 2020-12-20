let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')
let User = require('../models/User')
let UserResource = require('../resources/User')
let formatValidationError = require('../helpers/formatValidationError')

const userLogin = async function (ctx) {
    ctx.checkBody('username').notEmpty('Username must not be empty')
    ctx.checkBody('password').notEmpty('Password password must not be empty')
    if (ctx.errors) {
        return ctx.error(formatValidationError(ctx.errors), 400)
    }

    const data = ctx.request.body // post过来的数据存在request.body里
    const userInfo = await User.getUserByName(data.username)

    if (userInfo) {
        if (!bcrypt.compareSync(data.password, userInfo.password)) {
            ctx.body = {
                success: false, // success标志位是方便前端判断返回是正确与否
                error: 'Username does not match with the password'
            }
        } else {
            const userToken = {
                name: userInfo.username,
                id: userInfo.id
            }
            const token = jwt.sign(userToken, process.env.JWT_SECRET) // 签发token
            ctx.body = {
                success: true,
                token: token // 返回token
            }
        }
    } else {
        ctx.body = {
            success: false,
            error: 'Username does not match with the password' // 如果用户不存在返回用户不存在
        }
    }
}

async function userRegister (ctx) {
    ctx.checkBody('username').notEmpty('Username must not be empty')
    ctx.checkBody('email').isEmail('Email format invalid').notEmpty('Email must not be empty')
    ctx.checkBody('password')
        .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,50}$/, 'Password is not strong enough, requires to be at least 8 characters, 1 upper-case, 1 lower-case, and 1 number')
        .notEmpty('Password must not be empty')
    if (ctx.errors) {
        return ctx.error(formatValidationError(ctx.errors), 400)
    }

    const { username, password, email } = ctx.request.body

    // 检查用户名和邮箱是否已经被占用
    let chkResult = await Promise.all([
        User.count({ username }),
        User.count({ email })
    ])
    if (chkResult[0] > 0) {
        return ctx.error('用户名已被使用', 400)
    } else if (chkResult[1] > 0) {
        return ctx.error('邮箱已被使用', 400)
    }

    // 创建用户
    let user = await User.create({
        username,
        password: bcrypt.hashSync(password),
        email
    })

    if (process.env.AUTH_DRIVER === 'JWT') {
        return ctx.success(user.generateJWTToken()) // 签发token
    } else if (process.env.AUTH_DRIVER === 'SESSION') {
        ctx.session.loggedInUserId = user.id
        return ctx.success(UserResource(user))
    }
}

module.exports = {
    userLogin, userRegister
}
