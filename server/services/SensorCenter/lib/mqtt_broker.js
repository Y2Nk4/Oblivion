let Aedes = require('aedes')
let net = require('net')
let SensorCenter = require('../SensorCenter')
let logger = require('koa-log4').getLogger('application')

SensorCenter.prototype.createServer = function () {
    return new Promise((resolve, reject) => {
        this.MQTT_Broker = Aedes()
        this.MQTT_Broker_Server = net.createServer(this.MQTT_Broker.handle)

        this.MQTT_Broker.on('client', (client) => {
            logger.info('New Client connected to the server: ', client.id)
        })

        this.MQTT_Broker_Server.listen(this.config.mqttBrokerPort, () => {
            this.emit('MQTT_BROKER_ON', this.config.mqttBrokerPort)
            logger.info('MQTT Broker listening on port', this.config.mqttBrokerPort)
            return resolve()
        })
    })
}
