let SensorCenter = require('../SensorCenter')
let deviceDiscoverProtobuf = require('../protobuf/generated/device_discover')
let dgram = require('dgram')
let logger = require('koa-log4').getLogger('application')
let internalIP = require('internal-ip')

SensorCenter.prototype.createUDPDiscoveryServer = function () {
    return new Promise((resolve, reject) => {
        this.UDPDiscoveryServer = dgram.createSocket('udp4')
        this.UDPDiscoveryServer.on('error', (err) => {
            logger.error('UDP Server error:', err)
            this.UDPDiscoveryServer.close()
            return reject(err)
        })

        this.UDPDiscoveryServer.on('message', this.initUDPDiscoveryPacket.bind(this))

        this.UDPDiscoveryServer.on('listening', () => {
            const address = this.UDPDiscoveryServer.address()
            logger.info(`UDP Discover Server listening ${address.address}:${address.port}`)
            this.emit('UDP_DISCOVER_SERVER_ON')
            return resolve()
        })
        this.UDPDiscoveryServer.bind(this.config.udpDiscoverPort)
    })
}

SensorCenter.prototype.initUDPDiscoveryPacket = function (msg, rinfo) {
    logger.info(`Received packet`, msg)
    this.udpLocalIP = this.udpLocalIP || internalIP.v4.sync()
    let data
    try {
        data = deviceDiscoverProtobuf.DiscoverRequest.decode(msg)
    } catch (e) {
        console.log(e.message)
        return
    }
    if (data.req_flag === 0xFFC2) {
        logger.info('Flag PASSED', msg)
        let udpPort = data.discover_port
        let socket = dgram.createSocket('udp4')

        let msgBuff = deviceDiscoverProtobuf.DiscoverResponse.encode({
            response_flag: 0xFFC3,
            sensor_center_mqtt_port: this.config.mqttBrokerPort,
            register_topic: 'oblivion/recorder-rec_temp_node'
        }).finish()

        console.log('sendMsg', msgBuff)
        socket.send(msgBuff, udpPort, rinfo.address)
    }
}
