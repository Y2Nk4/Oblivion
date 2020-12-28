module.exports = function decodeMacFromLong (long, isLittleEndian = true) {
    let buf = Buffer.alloc(8)

    if (isLittleEndian) {
        // LE
        buf.writeInt32LE(long.low, 0)
        buf.writeInt32LE(long.high, 4)
    } else {
        // BE
        buf.writeInt32BE(long.high, 0)
        buf.writeInt32BE(long.low, 4)
    }
    buf = buf.slice(0, 6)

    let tmp = []
    buf.forEach((slice) => {
        tmp.push(slice.toString(16).toUpperCase())
    })

    return tmp.join(':')
}
