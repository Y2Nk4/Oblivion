/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
(function (global, factory) { /* global define, require, module */
    /* AMD */ if (typeof define === 'function' && define.amd) { define(['protobufjs/minimal'], factory) }

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports) { module.exports = factory(require('protobufjs/minimal')) }
})(this, function ($protobuf) {
    'use strict'

    // Common aliases
    var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

    // Exported root namespace
    var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

    $root.TemperatureNodeReport = (function () {
        /**
         * Properties of a TemperatureNodeReport.
         * @exports ITemperatureNodeReport
         * @interface ITemperatureNodeReport
         * @property {Array.<number>|null} [temperature] TemperatureNodeReport temperature
         * @property {Array.<number>|null} [humidity] TemperatureNodeReport humidity
         * @property {number|null} [battery_vcc] TemperatureNodeReport battery_vcc
         * @property {number|null} [rec_delta] TemperatureNodeReport rec_delta
         */

        /**
         * Constructs a new TemperatureNodeReport.
         * @exports TemperatureNodeReport
         * @classdesc Represents a TemperatureNodeReport.
         * @implements ITemperatureNodeReport
         * @constructor
         * @param {ITemperatureNodeReport=} [properties] Properties to set
         */
        function TemperatureNodeReport (properties) {
            this.temperature = []
            this.humidity = []
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * TemperatureNodeReport temperature.
         * @member {Array.<number>} temperature
         * @memberof TemperatureNodeReport
         * @instance
         */
        TemperatureNodeReport.prototype.temperature = $util.emptyArray

        /**
         * TemperatureNodeReport humidity.
         * @member {Array.<number>} humidity
         * @memberof TemperatureNodeReport
         * @instance
         */
        TemperatureNodeReport.prototype.humidity = $util.emptyArray

        /**
         * TemperatureNodeReport battery_vcc.
         * @member {number} battery_vcc
         * @memberof TemperatureNodeReport
         * @instance
         */
        TemperatureNodeReport.prototype.battery_vcc = 0

        /**
         * TemperatureNodeReport rec_delta.
         * @member {number} rec_delta
         * @memberof TemperatureNodeReport
         * @instance
         */
        TemperatureNodeReport.prototype.rec_delta = 0

        /**
         * Creates a new TemperatureNodeReport instance using the specified properties.
         * @function create
         * @memberof TemperatureNodeReport
         * @static
         * @param {ITemperatureNodeReport=} [properties] Properties to set
         * @returns {TemperatureNodeReport} TemperatureNodeReport instance
         */
        TemperatureNodeReport.create = function create (properties) {
            return new TemperatureNodeReport(properties)
        }

        /**
         * Encodes the specified TemperatureNodeReport message. Does not implicitly {@link TemperatureNodeReport.verify|verify} messages.
         * @function encode
         * @memberof TemperatureNodeReport
         * @static
         * @param {ITemperatureNodeReport} message TemperatureNodeReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemperatureNodeReport.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.temperature != null && message.temperature.length) {
                writer.uint32(/* id 1, wireType 2 = */10).fork()
                for (var i = 0; i < message.temperature.length; ++i) { writer.float(message.temperature[i]) }
                writer.ldelim()
            }
            if (message.humidity != null && message.humidity.length) {
                writer.uint32(/* id 2, wireType 2 = */18).fork()
                for (var i = 0; i < message.humidity.length; ++i) { writer.float(message.humidity[i]) }
                writer.ldelim()
            }
            if (message.battery_vcc != null && Object.hasOwnProperty.call(message, 'battery_vcc')) { writer.uint32(/* id 3, wireType 5 = */29).float(message.battery_vcc) }
            if (message.rec_delta != null && Object.hasOwnProperty.call(message, 'rec_delta')) { writer.uint32(/* id 4, wireType 0 = */32).uint32(message.rec_delta) }
            return writer
        }

        /**
         * Encodes the specified TemperatureNodeReport message, length delimited. Does not implicitly {@link TemperatureNodeReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TemperatureNodeReport
         * @static
         * @param {ITemperatureNodeReport} message TemperatureNodeReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TemperatureNodeReport.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a TemperatureNodeReport message from the specified reader or buffer.
         * @function decode
         * @memberof TemperatureNodeReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TemperatureNodeReport} TemperatureNodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemperatureNodeReport.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.TemperatureNodeReport()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    if (!(message.temperature && message.temperature.length)) { message.temperature = [] }
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos
                        while (reader.pos < end2) { message.temperature.push(reader.float()) }
                    } else { message.temperature.push(reader.float()) }
                    break
                case 2:
                    if (!(message.humidity && message.humidity.length)) { message.humidity = [] }
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos
                        while (reader.pos < end2) { message.humidity.push(reader.float()) }
                    } else { message.humidity.push(reader.float()) }
                    break
                case 3:
                    message.battery_vcc = reader.float()
                    break
                case 4:
                    message.rec_delta = reader.uint32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a TemperatureNodeReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TemperatureNodeReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TemperatureNodeReport} TemperatureNodeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TemperatureNodeReport.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a TemperatureNodeReport message.
         * @function verify
         * @memberof TemperatureNodeReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TemperatureNodeReport.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.temperature != null && message.hasOwnProperty('temperature')) {
                if (!Array.isArray(message.temperature)) { return 'temperature: array expected' }
                for (var i = 0; i < message.temperature.length; ++i) {
                    if (typeof message.temperature[i] !== 'number') { return 'temperature: number[] expected' }
                }
            }
            if (message.humidity != null && message.hasOwnProperty('humidity')) {
                if (!Array.isArray(message.humidity)) { return 'humidity: array expected' }
                for (var i = 0; i < message.humidity.length; ++i) {
                    if (typeof message.humidity[i] !== 'number') { return 'humidity: number[] expected' }
                }
            }
            if (message.battery_vcc != null && message.hasOwnProperty('battery_vcc')) {
                if (typeof message.battery_vcc !== 'number') { return 'battery_vcc: number expected' }
            }
            if (message.rec_delta != null && message.hasOwnProperty('rec_delta')) {
                if (!$util.isInteger(message.rec_delta)) { return 'rec_delta: integer expected' }
            }
            return null
        }

        /**
         * Creates a TemperatureNodeReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TemperatureNodeReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TemperatureNodeReport} TemperatureNodeReport
         */
        TemperatureNodeReport.fromObject = function fromObject (object) {
            if (object instanceof $root.TemperatureNodeReport) { return object }
            var message = new $root.TemperatureNodeReport()
            if (object.temperature) {
                if (!Array.isArray(object.temperature)) { throw TypeError('.TemperatureNodeReport.temperature: array expected') }
                message.temperature = []
                for (var i = 0; i < object.temperature.length; ++i) { message.temperature[i] = Number(object.temperature[i]) }
            }
            if (object.humidity) {
                if (!Array.isArray(object.humidity)) { throw TypeError('.TemperatureNodeReport.humidity: array expected') }
                message.humidity = []
                for (var i = 0; i < object.humidity.length; ++i) { message.humidity[i] = Number(object.humidity[i]) }
            }
            if (object.battery_vcc != null) { message.battery_vcc = Number(object.battery_vcc) }
            if (object.rec_delta != null) { message.rec_delta = object.rec_delta >>> 0 }
            return message
        }

        /**
         * Creates a plain object from a TemperatureNodeReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TemperatureNodeReport
         * @static
         * @param {TemperatureNodeReport} message TemperatureNodeReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TemperatureNodeReport.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.arrays || options.defaults) {
                object.temperature = []
                object.humidity = []
            }
            if (options.defaults) {
                object.battery_vcc = 0
                object.rec_delta = 0
            }
            if (message.temperature && message.temperature.length) {
                object.temperature = []
                for (var j = 0; j < message.temperature.length; ++j) { object.temperature[j] = options.json && !isFinite(message.temperature[j]) ? String(message.temperature[j]) : message.temperature[j] }
            }
            if (message.humidity && message.humidity.length) {
                object.humidity = []
                for (var j = 0; j < message.humidity.length; ++j) { object.humidity[j] = options.json && !isFinite(message.humidity[j]) ? String(message.humidity[j]) : message.humidity[j] }
            }
            if (message.battery_vcc != null && message.hasOwnProperty('battery_vcc')) { object.battery_vcc = options.json && !isFinite(message.battery_vcc) ? String(message.battery_vcc) : message.battery_vcc }
            if (message.rec_delta != null && message.hasOwnProperty('rec_delta')) { object.rec_delta = message.rec_delta }
            return object
        }

        /**
         * Converts this TemperatureNodeReport to JSON.
         * @function toJSON
         * @memberof TemperatureNodeReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TemperatureNodeReport.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return TemperatureNodeReport
    })()

    return $root
})
