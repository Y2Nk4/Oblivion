let DataType = require('../../../../models/DataType')

async function getAllDataTypes (ctx) {
    let data = await DataType.find()

    return ctx.success(data)
}

async function addDataType (ctx) {
    ctx.checkBody('typeName').notEmpty()

    if (ctx.errors) {
        return ctx.error(ctx.formatValidationError(ctx.errors), 400)
    }

    let { typeName, unit = '' } = ctx.request.body

    let type = await DataType.create({
        type_name: typeName,
        unit
    })

    return ctx.success(type)
}

module.exports = {
    getAllDataTypes, addDataType
}
