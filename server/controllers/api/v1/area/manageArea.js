let Area = require('../../../../models/Area')
let _ = require('lodash')

async function listArea (ctx) {
    let areas = await Area.find().populate('data.source')
    return ctx.success(areas)
}

async function editArea (ctx) {
    ctx.checkBody('areaId').notEmpty('areaId cannot be empty').toInt()
    if (ctx.errors) {
        return ctx.error(ctx.formatValidationError(ctx.errors), 400)
    }

    let { areaId } = ctx.request.body

    let updateFields = _.pick(ctx.request.body, [
        'description', 'name'
    ])

    if (Object.keys(updateFields).length <= 0) {
        return ctx.error('Please specify a field')
    }

    let area = await Area.findOne({
        _id: areaId
    })

    if (!area) {
        return ctx.error('Area Not Exist')
    }

    await area.update(updateFields)

    return ctx.success()
}

async function addArea (ctx) {
    let addFields = _.pick(ctx.request.body, [
        'description', 'name'
    ])

    if (Object.keys(addFields).length <= 0) {
        return ctx.error('Please specify a field')
    }

    await Area.create(addFields)

    return ctx.success()
}

async function editDataSource (ctx) {
    ctx.checkBody('dataId').notEmpty()
    ctx.checkBody('deviceId').notEmpty()
    if (ctx.errors) {
        return ctx.error(ctx.formatValidationError(ctx.errors), 400)
    }

    let { dataId, deviceId } = ctx.request.body

    let result = await Area.update({
        'data._id': dataId
    }, {
        '$set': {
            'data.$.source': deviceId
        }
    })

    if (!result) return ctx.error('Data Does Not Exist')

    return ctx.success()
}

async function removeArea (ctx) {
    ctx.checkBody('areaId').notEmpty()
    if (ctx.errors) {
        return ctx.error(ctx.formatValidationError(ctx.errors), 400)
    }

    let result = await Area.deleteOne({
        _id: ctx.request.body.areaId
    })

    return ctx.success(result)
}

module.exports = {
    listArea, editArea, addArea, editDataSource, removeArea
}
