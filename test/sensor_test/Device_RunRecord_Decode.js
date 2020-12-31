let DeviceDiscoverBuf = require('../../server/services/SensorCenter/protobuf/generated/device_discover')
let buf = Buffer.from('080312070DCDCCBC412002', 'hex')

console.log(DeviceDiscoverBuf.RunRecord.decode(buf))
