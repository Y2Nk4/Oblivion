const dgram = require('dgram')
const server = dgram.createSocket('udp4')
const fs = require('fs')

const data = []

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`)
    server.close()
})

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
    data.push(parseFloat(msg))
    fs.writeFileSync('./data/datachart.json', JSON.stingify(data))
})

server.on('listening', () => {
    const address = server.address()
    console.log(`server listening ${address.address}:${address.port}`)
})

server.bind(1122)
