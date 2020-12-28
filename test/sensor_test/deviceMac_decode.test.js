let Long = require('long')
let DeviceDiscoverBuf = require('../../server/services/SensorCenter/protobuf/generated/device_discover')

let receivedMac = new Long(-1396378116, 1073646143, true)

let buf = Buffer.alloc(8)

// BE
buf.writeInt32BE(receivedMac.high, 0)
buf.writeInt32BE(receivedMac.low, 4)
console.log('BE', buf)

// or LE
buf.writeInt32LE(receivedMac.low, 0)
buf.writeInt32LE(receivedMac.high, 4)
console.log('LE', buf)

let data = Buffer.from('Cht0ZW1wLW5vZGUtRkM6RjU6QzQ6QUM6M0Y6OEESC3RlbXAtc2Vuc29yGPzrk+b6xyI=', 'base64')

console.log(data)
console.log(DeviceDiscoverBuf.DeviceRegisterRequest.decode(data))

buf = buf.slice(0, 6)

let tmp = []
buf.forEach((slice) => {
    tmp.push(slice.toString(16).toUpperCase())
})

console.log(tmp.join(':'))
