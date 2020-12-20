let path = require('path')
const log4js = require('koa-log4')

log4js.configure({
    appenders: {
        access: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log', // 生成文件的规则
            filename: path.join('logs/', 'access.log') // 生成文件名
        },
        application: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            filename: path.join('logs/', 'application.log')
        },
        database: {
            type: 'dateFile',
            pattern: '-yyyy-MM-dd.log',
            filename: path.join('logs/', 'database.log')
        },
        out: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: [ 'out' ], level: 'WARN' },
        access: { appenders: [ 'access' ], level: 'ALL' },
        middleware: { appenders: [ 'out' ], level: 'ALL' },
        database: { appenders: [ 'database' ], level: 'ALL' },
        application: { appenders: [ 'application', 'out' ], level: 'ALL' }
    },
    replaceConsole: true
})

module.exports = log4js
