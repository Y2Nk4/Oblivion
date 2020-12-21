module.exports = async function (ctx, next) {
    let start = new Date()
    await next()
    let ms = (new Date()) - start
    ctx.set('X-Response-Time', ms + 'ms')
}
