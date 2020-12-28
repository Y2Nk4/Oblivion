let mqtt = require('mqtt')
let SensorCenter = require('../SensorCenter')
let logger = require('../../../config/log4js').getLogger('application')

SensorCenter.prototype.connectServer = function () {
    return new Promise((resolve, reject) => {
        this.MQTT_CONN = mqtt.connect(`mqtt://localhost:${this.config.mqttBrokerPort}`)
        this.MQTT_CONN.on('connect', async () => {
            await this.subscribeDefaultTopics()
            logger.info('Successfully Connected to MQTT Broker')
            return resolve()
        })
    })
}

SensorCenter.prototype.subscribeDefaultTopics = function () {
    return new Promise((resolve, reject) => {
        if (this.defaultTopics && Object.keys(this.defaultTopics).length > 0) {
            logger.info('Subscribe to', Object.keys(this.defaultTopics))
            this.MQTT_CONN.subscribe(Object.keys(this.defaultTopics))
        }

        this.MQTT_CONN.on('message', (topic, message) => {
            // Receive message from default topics
            logger.info('received message', topic)
            if (Object.keys(this.defaultTopics).includes(topic)) {
                this.defaultTopics[topic].bind(this)(message)
            }
        })

        return resolve()
    })
}
