let aedes = require('aedes')()
let server = require('net').createServer(aedes.handle)
let logger = require('koa-log4').getLogger('application')

let port = process.env.MQTT_BROKER_PORT

server.listen(process.env.MQTT_BROKER_PORT, function () {
    logger.info('MQTT Broker listening on port', port)
})

module.exports = server
