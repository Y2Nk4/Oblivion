let dgram = require('dgram'),
    deviceDiscoverProtobuf = require('../../server/services/SensorCenter/protobuf/generated/device_discover')

let server = dgram.createSocket('udp4')

server.bind(12315)

server.on('listening', () => {
    console.log('listening')
})

server.on('message', (message) => {
    console.log('message', message, deviceDiscoverProtobuf.DiscoverResponse.decode(message))
})

let socket = dgram.createSocket('udp4')

let initMsg = deviceDiscoverProtobuf.DiscoverRequest.encode({
    req_flag: 0xFFC2,
    discovery_port: 12315
}).finish()

console.log('buffer', initMsg)

socket.send(initMsg, 1483, '192.168.50.255', () => {
    console.log('sent')
})
