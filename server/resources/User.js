import ResourceResponse from './ResourceResponse'

module.exports = ResourceResponse(function (user) {
    return {
        id: user.id,
        username: user.username,
        balance: user.balance,
        email: user.email
    }
})
