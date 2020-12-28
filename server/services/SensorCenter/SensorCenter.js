let { EventEmitter } = require('events')
const DEFAULT_VALUES = require('./data/default')

class SensorCenter extends EventEmitter {
    constructor (config = {}) {
        super()
        this.config = config || {}
        this.isConnected = false

        this.setDefaultProperties(config)

        // prepare services
        this.createServer()
            .then(this.connectServer.bind(this))
            .then(this.createUDPDiscoveryServer.bind(this))
    }

    setDefaultProperties (config) {
    }
}

module.exports = SensorCenter

require('./lib/discovery')
require('./lib/mqtt_broker')
require('./lib/mqtt')
require('./lib/topics')
