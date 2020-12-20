let User = require('../models/User')

module.exports = async function (mode, ctx, next) {
    switch (mode) {
    case 'JWT':
        if (ctx.state.user && ctx.state.user.id) {
            ctx.state.jwtUser = ctx.state.user
            let user = await User.getUserById(ctx.state.user.id)
            if (user) ctx.state.user = user
        }

        await next()
        return Promise.resolve()
    case 'SESSION':
        let user = await User.getUserById(ctx.session.loggedInUserId)
        console.log('setLogged', user)
        if (user) {
            ctx.state.user = user
            return Promise.resolve()
        } else {
            return ctx.throw({
                status: 401
            })
        }
    }
}
