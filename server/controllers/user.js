import user from '../models/User.js'
import userResource from '../resources/User'

const getUserInfo = async function (ctx) {
    console.log(ctx.state.user)
    console.log(ctx.session)
    ctx.success(userResource(ctx.state.user)) // Use response helper function and ResourceResponse to filter returning data
}

module.exports = {
    getUserInfo
}
