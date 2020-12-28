let Long = require('long')
let DeviceDiscoverBuf = require('../../server/services/SensorCenter/protobuf/generated/device_discover')

let data = {
    device_name: 'temp-node-FC:F5:C4:AC:3F:8A',
    device_type: 'temp-sensor',
    device_mac: Long.fromString('152006086161916')
}

let encodedData = DeviceDiscoverBuf.DeviceRegisterRequest.encode(data).finish()

// let received = Buffer.from('Cht0ZW1wLW5vZGUtRkM6RjU6QzQ6QUM6M0Y6OEESC3RlbXAtc2Vuc29yGPzrk+b6xyL/Pw==', 'base64')
// let received = Buffer.from('Cht0ZW1wLW5vZGUtRkM6RjU6QzQ6QUM6M0Y6OEESC3RlbXAtc2Vuc29yGPzrk+b6xyL/Pw==', 'base64')
let received = Buffer.from('Cht0ZW1wLW5vZGUtRkM6RjU6QzQ6QUM6M0Y6OEESC3RlbXAtc2Vuc29yGPzrk+b6xyI=', 'base64')

console.log('encodedData: ', encodedData.toString('base64'))
console.log('Raw: ', encodedData)
console.log('Cmp: ', received)
console.log('Cmp: ', received.slice(10, -1))

console.log('decodedData: ', DeviceDiscoverBuf.DeviceRegisterRequest.decode(encodedData))
