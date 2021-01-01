let SensorData = require('../../../../models/SensorData')
let SensorDataResource = require('../../../../resources/SensorData')
let formatValidationError = require('../../../../helpers/formatValidationError')

async function readSensorData (ctx) {
    ctx.checkQuery('type').notEmpty('Type cannot be empty').toInt()
    ctx.checkQuery('count').toInt()
    if (ctx.errors) {
        return ctx.error(formatValidationError(ctx.errors), 400)
    }

    let count = ctx.query.count || 100
    let lastId = ctx.query.last_id
    let page = ctx.query.page || 1

    let deviceIds = ctx.query.device_ids
        ? ctx.query.device_ids.split(',')
        : await SensorData.distinct('from_device_id')

    console.log(count, lastId)

    let filter = {}
    if (ctx.query.type) filter.data_type = ctx.query.type
    // if (lastId) filter['_id'] = { $gt: lastId }

    let data = {}

    await Promise.all(deviceIds.map((deviceId) => {
        return SensorData.find(Object.assign(filter, {
            from_device_id: deviceId
        }), { device_mac: 0 })
            .sort({store_at: -1}).skip((page - 1) * count).limit(count)
            .then(result => {
                if (result) {
                    data[deviceId] = data[deviceId] || {}
                    data[deviceId].data = SensorDataResource(result)
                }
            })
    }))


    return ctx.success({
        data: data,
        paginate: {
            page,
            deviceIds
        }
    })
}

module.exports = {
    readSensorData
}
