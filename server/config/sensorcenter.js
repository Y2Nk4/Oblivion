let SensorCenter = require('../services/SensorCenter/SensorCenter')

let sensorCenter = new SensorCenter({
    mqttBrokerPort: process.env.MQTT_BROKER_PORT,
    udpDiscoverPort: process.env.UDP_DISCOVER_PORT
})

module.exports = sensorCenter
