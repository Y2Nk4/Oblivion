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

    $root.DiscoverRequest = (function () {
        /**
         * Properties of a DiscoverRequest.
         * @exports IDiscoverRequest
         * @interface IDiscoverRequest
         * @property {number|null} [req_flag] DiscoverRequest req_flag
         * @property {number|null} [discover_port] DiscoverRequest discover_port
         */

        /**
         * Constructs a new DiscoverRequest.
         * @exports DiscoverRequest
         * @classdesc Represents a DiscoverRequest.
         * @implements IDiscoverRequest
         * @constructor
         * @param {IDiscoverRequest=} [properties] Properties to set
         */
        function DiscoverRequest (properties) {
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * DiscoverRequest req_flag.
         * @member {number} req_flag
         * @memberof DiscoverRequest
         * @instance
         */
        DiscoverRequest.prototype.req_flag = 0

        /**
         * DiscoverRequest discover_port.
         * @member {number} discover_port
         * @memberof DiscoverRequest
         * @instance
         */
        DiscoverRequest.prototype.discover_port = 0

        /**
         * Creates a new DiscoverRequest instance using the specified properties.
         * @function create
         * @memberof DiscoverRequest
         * @static
         * @param {IDiscoverRequest=} [properties] Properties to set
         * @returns {DiscoverRequest} DiscoverRequest instance
         */
        DiscoverRequest.create = function create (properties) {
            return new DiscoverRequest(properties)
        }

        /**
         * Encodes the specified DiscoverRequest message. Does not implicitly {@link DiscoverRequest.verify|verify} messages.
         * @function encode
         * @memberof DiscoverRequest
         * @static
         * @param {IDiscoverRequest} message DiscoverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverRequest.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.req_flag != null && Object.hasOwnProperty.call(message, 'req_flag')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.req_flag) }
            if (message.discover_port != null && Object.hasOwnProperty.call(message, 'discover_port')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.discover_port) }
            return writer
        }

        /**
         * Encodes the specified DiscoverRequest message, length delimited. Does not implicitly {@link DiscoverRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DiscoverRequest
         * @static
         * @param {IDiscoverRequest} message DiscoverRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverRequest.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DiscoverRequest message from the specified reader or buffer.
         * @function decode
         * @memberof DiscoverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DiscoverRequest} DiscoverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverRequest.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.DiscoverRequest()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.req_flag = reader.uint32()
                    break
                case 2:
                    message.discover_port = reader.uint32()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a DiscoverRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DiscoverRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DiscoverRequest} DiscoverRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverRequest.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DiscoverRequest message.
         * @function verify
         * @memberof DiscoverRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscoverRequest.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.req_flag != null && message.hasOwnProperty('req_flag')) {
                if (!$util.isInteger(message.req_flag)) { return 'req_flag: integer expected' }
            }
            if (message.discover_port != null && message.hasOwnProperty('discover_port')) {
                if (!$util.isInteger(message.discover_port)) { return 'discover_port: integer expected' }
            }
            return null
        }

        /**
         * Creates a DiscoverRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DiscoverRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DiscoverRequest} DiscoverRequest
         */
        DiscoverRequest.fromObject = function fromObject (object) {
            if (object instanceof $root.DiscoverRequest) { return object }
            var message = new $root.DiscoverRequest()
            if (object.req_flag != null) { message.req_flag = object.req_flag >>> 0 }
            if (object.discover_port != null) { message.discover_port = object.discover_port >>> 0 }
            return message
        }

        /**
         * Creates a plain object from a DiscoverRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DiscoverRequest
         * @static
         * @param {DiscoverRequest} message DiscoverRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscoverRequest.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.req_flag = 0
                object.discover_port = 0
            }
            if (message.req_flag != null && message.hasOwnProperty('req_flag')) { object.req_flag = message.req_flag }
            if (message.discover_port != null && message.hasOwnProperty('discover_port')) { object.discover_port = message.discover_port }
            return object
        }

        /**
         * Converts this DiscoverRequest to JSON.
         * @function toJSON
         * @memberof DiscoverRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscoverRequest.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DiscoverRequest
    })()

    $root.DiscoverResponse = (function () {
        /**
         * Properties of a DiscoverResponse.
         * @exports IDiscoverResponse
         * @interface IDiscoverResponse
         * @property {number|null} [response_flag] DiscoverResponse response_flag
         * @property {number|null} [sensor_center_mqtt_port] DiscoverResponse sensor_center_mqtt_port
         * @property {string|null} [register_topic] DiscoverResponse register_topic
         */

        /**
         * Constructs a new DiscoverResponse.
         * @exports DiscoverResponse
         * @classdesc Represents a DiscoverResponse.
         * @implements IDiscoverResponse
         * @constructor
         * @param {IDiscoverResponse=} [properties] Properties to set
         */
        function DiscoverResponse (properties) {
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * DiscoverResponse response_flag.
         * @member {number} response_flag
         * @memberof DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.response_flag = 0

        /**
         * DiscoverResponse sensor_center_mqtt_port.
         * @member {number} sensor_center_mqtt_port
         * @memberof DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.sensor_center_mqtt_port = 0

        /**
         * DiscoverResponse register_topic.
         * @member {string} register_topic
         * @memberof DiscoverResponse
         * @instance
         */
        DiscoverResponse.prototype.register_topic = ''

        /**
         * Creates a new DiscoverResponse instance using the specified properties.
         * @function create
         * @memberof DiscoverResponse
         * @static
         * @param {IDiscoverResponse=} [properties] Properties to set
         * @returns {DiscoverResponse} DiscoverResponse instance
         */
        DiscoverResponse.create = function create (properties) {
            return new DiscoverResponse(properties)
        }

        /**
         * Encodes the specified DiscoverResponse message. Does not implicitly {@link DiscoverResponse.verify|verify} messages.
         * @function encode
         * @memberof DiscoverResponse
         * @static
         * @param {IDiscoverResponse} message DiscoverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverResponse.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.response_flag != null && Object.hasOwnProperty.call(message, 'response_flag')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.response_flag) }
            if (message.sensor_center_mqtt_port != null && Object.hasOwnProperty.call(message, 'sensor_center_mqtt_port')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.sensor_center_mqtt_port) }
            if (message.register_topic != null && Object.hasOwnProperty.call(message, 'register_topic')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.register_topic) }
            return writer
        }

        /**
         * Encodes the specified DiscoverResponse message, length delimited. Does not implicitly {@link DiscoverResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DiscoverResponse
         * @static
         * @param {IDiscoverResponse} message DiscoverResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DiscoverResponse.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer.
         * @function decode
         * @memberof DiscoverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DiscoverResponse} DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverResponse.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.DiscoverResponse()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.response_flag = reader.uint32()
                    break
                case 2:
                    message.sensor_center_mqtt_port = reader.uint32()
                    break
                case 3:
                    message.register_topic = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a DiscoverResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DiscoverResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DiscoverResponse} DiscoverResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DiscoverResponse.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DiscoverResponse message.
         * @function verify
         * @memberof DiscoverResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DiscoverResponse.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.response_flag != null && message.hasOwnProperty('response_flag')) {
                if (!$util.isInteger(message.response_flag)) { return 'response_flag: integer expected' }
            }
            if (message.sensor_center_mqtt_port != null && message.hasOwnProperty('sensor_center_mqtt_port')) {
                if (!$util.isInteger(message.sensor_center_mqtt_port)) { return 'sensor_center_mqtt_port: integer expected' }
            }
            if (message.register_topic != null && message.hasOwnProperty('register_topic')) {
                if (!$util.isString(message.register_topic)) { return 'register_topic: string expected' }
            }
            return null
        }

        /**
         * Creates a DiscoverResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DiscoverResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DiscoverResponse} DiscoverResponse
         */
        DiscoverResponse.fromObject = function fromObject (object) {
            if (object instanceof $root.DiscoverResponse) { return object }
            var message = new $root.DiscoverResponse()
            if (object.response_flag != null) { message.response_flag = object.response_flag >>> 0 }
            if (object.sensor_center_mqtt_port != null) { message.sensor_center_mqtt_port = object.sensor_center_mqtt_port >>> 0 }
            if (object.register_topic != null) { message.register_topic = String(object.register_topic) }
            return message
        }

        /**
         * Creates a plain object from a DiscoverResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DiscoverResponse
         * @static
         * @param {DiscoverResponse} message DiscoverResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DiscoverResponse.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.response_flag = 0
                object.sensor_center_mqtt_port = 0
                object.register_topic = ''
            }
            if (message.response_flag != null && message.hasOwnProperty('response_flag')) { object.response_flag = message.response_flag }
            if (message.sensor_center_mqtt_port != null && message.hasOwnProperty('sensor_center_mqtt_port')) { object.sensor_center_mqtt_port = message.sensor_center_mqtt_port }
            if (message.register_topic != null && message.hasOwnProperty('register_topic')) { object.register_topic = message.register_topic }
            return object
        }

        /**
         * Converts this DiscoverResponse to JSON.
         * @function toJSON
         * @memberof DiscoverResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DiscoverResponse.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DiscoverResponse
    })()

    $root.DeviceRegisterRequest = (function () {
        /**
         * Properties of a DeviceRegisterRequest.
         * @exports IDeviceRegisterRequest
         * @interface IDeviceRegisterRequest
         * @property {string|null} [device_name] DeviceRegisterRequest device_name
         * @property {string|null} [device_type] DeviceRegisterRequest device_type
         * @property {number|Long|null} [device_mac] DeviceRegisterRequest device_mac
         */

        /**
         * Constructs a new DeviceRegisterRequest.
         * @exports DeviceRegisterRequest
         * @classdesc Represents a DeviceRegisterRequest.
         * @implements IDeviceRegisterRequest
         * @constructor
         * @param {IDeviceRegisterRequest=} [properties] Properties to set
         */
        function DeviceRegisterRequest (properties) {
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * DeviceRegisterRequest device_name.
         * @member {string} device_name
         * @memberof DeviceRegisterRequest
         * @instance
         */
        DeviceRegisterRequest.prototype.device_name = ''

        /**
         * DeviceRegisterRequest device_type.
         * @member {string} device_type
         * @memberof DeviceRegisterRequest
         * @instance
         */
        DeviceRegisterRequest.prototype.device_type = ''

        /**
         * DeviceRegisterRequest device_mac.
         * @member {number|Long} device_mac
         * @memberof DeviceRegisterRequest
         * @instance
         */
        DeviceRegisterRequest.prototype.device_mac = $util.Long ? $util.Long.fromBits(0, 0, true) : 0

        /**
         * Creates a new DeviceRegisterRequest instance using the specified properties.
         * @function create
         * @memberof DeviceRegisterRequest
         * @static
         * @param {IDeviceRegisterRequest=} [properties] Properties to set
         * @returns {DeviceRegisterRequest} DeviceRegisterRequest instance
         */
        DeviceRegisterRequest.create = function create (properties) {
            return new DeviceRegisterRequest(properties)
        }

        /**
         * Encodes the specified DeviceRegisterRequest message. Does not implicitly {@link DeviceRegisterRequest.verify|verify} messages.
         * @function encode
         * @memberof DeviceRegisterRequest
         * @static
         * @param {IDeviceRegisterRequest} message DeviceRegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRegisterRequest.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.device_name != null && Object.hasOwnProperty.call(message, 'device_name')) { writer.uint32(/* id 1, wireType 2 = */10).string(message.device_name) }
            if (message.device_type != null && Object.hasOwnProperty.call(message, 'device_type')) { writer.uint32(/* id 2, wireType 2 = */18).string(message.device_type) }
            if (message.device_mac != null && Object.hasOwnProperty.call(message, 'device_mac')) { writer.uint32(/* id 3, wireType 0 = */24).uint64(message.device_mac) }
            return writer
        }

        /**
         * Encodes the specified DeviceRegisterRequest message, length delimited. Does not implicitly {@link DeviceRegisterRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceRegisterRequest
         * @static
         * @param {IDeviceRegisterRequest} message DeviceRegisterRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRegisterRequest.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DeviceRegisterRequest message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceRegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceRegisterRequest} DeviceRegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRegisterRequest.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.DeviceRegisterRequest()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.device_name = reader.string()
                    break
                case 2:
                    message.device_type = reader.string()
                    break
                case 3:
                    message.device_mac = reader.uint64()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a DeviceRegisterRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceRegisterRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceRegisterRequest} DeviceRegisterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRegisterRequest.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DeviceRegisterRequest message.
         * @function verify
         * @memberof DeviceRegisterRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceRegisterRequest.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.device_name != null && message.hasOwnProperty('device_name')) {
                if (!$util.isString(message.device_name)) { return 'device_name: string expected' }
            }
            if (message.device_type != null && message.hasOwnProperty('device_type')) {
                if (!$util.isString(message.device_type)) { return 'device_type: string expected' }
            }
            if (message.device_mac != null && message.hasOwnProperty('device_mac')) {
                if (!$util.isInteger(message.device_mac) && !(message.device_mac && $util.isInteger(message.device_mac.low) && $util.isInteger(message.device_mac.high))) { return 'device_mac: integer|Long expected' }
            }
            return null
        }

        /**
         * Creates a DeviceRegisterRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceRegisterRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceRegisterRequest} DeviceRegisterRequest
         */
        DeviceRegisterRequest.fromObject = function fromObject (object) {
            if (object instanceof $root.DeviceRegisterRequest) { return object }
            var message = new $root.DeviceRegisterRequest()
            if (object.device_name != null) { message.device_name = String(object.device_name) }
            if (object.device_type != null) { message.device_type = String(object.device_type) }
            if (object.device_mac != null) {
                if ($util.Long) { (message.device_mac = $util.Long.fromValue(object.device_mac)).unsigned = true } else if (typeof object.device_mac === 'string') { message.device_mac = parseInt(object.device_mac, 10) } else if (typeof object.device_mac === 'number') { message.device_mac = object.device_mac } else if (typeof object.device_mac === 'object') { message.device_mac = new $util.LongBits(object.device_mac.low >>> 0, object.device_mac.high >>> 0).toNumber(true) }
            }
            return message
        }

        /**
         * Creates a plain object from a DeviceRegisterRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceRegisterRequest
         * @static
         * @param {DeviceRegisterRequest} message DeviceRegisterRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceRegisterRequest.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.device_name = ''
                object.device_type = ''
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true)
                    object.device_mac = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
                } else { object.device_mac = options.longs === String ? '0' : 0 }
            }
            if (message.device_name != null && message.hasOwnProperty('device_name')) { object.device_name = message.device_name }
            if (message.device_type != null && message.hasOwnProperty('device_type')) { object.device_type = message.device_type }
            if (message.device_mac != null && message.hasOwnProperty('device_mac')) {
                if (typeof message.device_mac === 'number') { object.device_mac = options.longs === String ? String(message.device_mac) : message.device_mac } else { object.device_mac = options.longs === String ? $util.Long.prototype.toString.call(message.device_mac) : options.longs === Number ? new $util.LongBits(message.device_mac.low >>> 0, message.device_mac.high >>> 0).toNumber(true) : message.device_mac }
            }
            return object
        }

        /**
         * Converts this DeviceRegisterRequest to JSON.
         * @function toJSON
         * @memberof DeviceRegisterRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceRegisterRequest.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DeviceRegisterRequest
    })()

    $root.DeviceRegisterResponse = (function () {
        /**
         * Properties of a DeviceRegisterResponse.
         * @exports IDeviceRegisterResponse
         * @interface IDeviceRegisterResponse
         * @property {boolean|null} [success] DeviceRegisterResponse success
         */

        /**
         * Constructs a new DeviceRegisterResponse.
         * @exports DeviceRegisterResponse
         * @classdesc Represents a DeviceRegisterResponse.
         * @implements IDeviceRegisterResponse
         * @constructor
         * @param {IDeviceRegisterResponse=} [properties] Properties to set
         */
        function DeviceRegisterResponse (properties) {
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * DeviceRegisterResponse success.
         * @member {boolean} success
         * @memberof DeviceRegisterResponse
         * @instance
         */
        DeviceRegisterResponse.prototype.success = false

        /**
         * Creates a new DeviceRegisterResponse instance using the specified properties.
         * @function create
         * @memberof DeviceRegisterResponse
         * @static
         * @param {IDeviceRegisterResponse=} [properties] Properties to set
         * @returns {DeviceRegisterResponse} DeviceRegisterResponse instance
         */
        DeviceRegisterResponse.create = function create (properties) {
            return new DeviceRegisterResponse(properties)
        }

        /**
         * Encodes the specified DeviceRegisterResponse message. Does not implicitly {@link DeviceRegisterResponse.verify|verify} messages.
         * @function encode
         * @memberof DeviceRegisterResponse
         * @static
         * @param {IDeviceRegisterResponse} message DeviceRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRegisterResponse.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.success != null && Object.hasOwnProperty.call(message, 'success')) { writer.uint32(/* id 1, wireType 0 = */8).bool(message.success) }
            return writer
        }

        /**
         * Encodes the specified DeviceRegisterResponse message, length delimited. Does not implicitly {@link DeviceRegisterResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceRegisterResponse
         * @static
         * @param {IDeviceRegisterResponse} message DeviceRegisterResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRegisterResponse.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DeviceRegisterResponse message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceRegisterResponse} DeviceRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRegisterResponse.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.DeviceRegisterResponse()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a DeviceRegisterResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceRegisterResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceRegisterResponse} DeviceRegisterResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRegisterResponse.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DeviceRegisterResponse message.
         * @function verify
         * @memberof DeviceRegisterResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceRegisterResponse.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.success != null && message.hasOwnProperty('success')) {
                if (typeof message.success !== 'boolean') { return 'success: boolean expected' }
            }
            return null
        }

        /**
         * Creates a DeviceRegisterResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceRegisterResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceRegisterResponse} DeviceRegisterResponse
         */
        DeviceRegisterResponse.fromObject = function fromObject (object) {
            if (object instanceof $root.DeviceRegisterResponse) { return object }
            var message = new $root.DeviceRegisterResponse()
            if (object.success != null) { message.success = Boolean(object.success) }
            return message
        }

        /**
         * Creates a plain object from a DeviceRegisterResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceRegisterResponse
         * @static
         * @param {DeviceRegisterResponse} message DeviceRegisterResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceRegisterResponse.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) { object.success = false }
            if (message.success != null && message.hasOwnProperty('success')) { object.success = message.success }
            return object
        }

        /**
         * Converts this DeviceRegisterResponse to JSON.
         * @function toJSON
         * @memberof DeviceRegisterResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceRegisterResponse.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DeviceRegisterResponse
    })()

    $root.DeviceConfig = (function () {
        /**
         * Properties of a DeviceConfig.
         * @exports IDeviceConfig
         * @interface IDeviceConfig
         * @property {number|null} [mqtt_ip] DeviceConfig mqtt_ip
         * @property {number|null} [mqtt_port] DeviceConfig mqtt_port
         * @property {string|null} [register_topic] DeviceConfig register_topic
         */

        /**
         * Constructs a new DeviceConfig.
         * @exports DeviceConfig
         * @classdesc Represents a DeviceConfig.
         * @implements IDeviceConfig
         * @constructor
         * @param {IDeviceConfig=} [properties] Properties to set
         */
        function DeviceConfig (properties) {
            if (properties) {
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
                    if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
                }
            }
        }

        /**
         * DeviceConfig mqtt_ip.
         * @member {number} mqtt_ip
         * @memberof DeviceConfig
         * @instance
         */
        DeviceConfig.prototype.mqtt_ip = 0

        /**
         * DeviceConfig mqtt_port.
         * @member {number} mqtt_port
         * @memberof DeviceConfig
         * @instance
         */
        DeviceConfig.prototype.mqtt_port = 0

        /**
         * DeviceConfig register_topic.
         * @member {string} register_topic
         * @memberof DeviceConfig
         * @instance
         */
        DeviceConfig.prototype.register_topic = ''

        /**
         * Creates a new DeviceConfig instance using the specified properties.
         * @function create
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig=} [properties] Properties to set
         * @returns {DeviceConfig} DeviceConfig instance
         */
        DeviceConfig.create = function create (properties) {
            return new DeviceConfig(properties)
        }

        /**
         * Encodes the specified DeviceConfig message. Does not implicitly {@link DeviceConfig.verify|verify} messages.
         * @function encode
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig} message DeviceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfig.encode = function encode (message, writer) {
            if (!writer) { writer = $Writer.create() }
            if (message.mqtt_ip != null && Object.hasOwnProperty.call(message, 'mqtt_ip')) { writer.uint32(/* id 1, wireType 0 = */8).uint32(message.mqtt_ip) }
            if (message.mqtt_port != null && Object.hasOwnProperty.call(message, 'mqtt_port')) { writer.uint32(/* id 2, wireType 0 = */16).uint32(message.mqtt_port) }
            if (message.register_topic != null && Object.hasOwnProperty.call(message, 'register_topic')) { writer.uint32(/* id 3, wireType 2 = */26).string(message.register_topic) }
            return writer
        }

        /**
         * Encodes the specified DeviceConfig message, length delimited. Does not implicitly {@link DeviceConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceConfig
         * @static
         * @param {IDeviceConfig} message DeviceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConfig.encodeDelimited = function encodeDelimited (message, writer) {
            return this.encode(message, writer).ldelim()
        }

        /**
         * Decodes a DeviceConfig message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceConfig} DeviceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfig.decode = function decode (reader, length) {
            if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
            var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.DeviceConfig()
            while (reader.pos < end) {
                var tag = reader.uint32()
                switch (tag >>> 3) {
                case 1:
                    message.mqtt_ip = reader.uint32()
                    break
                case 2:
                    message.mqtt_port = reader.uint32()
                    break
                case 3:
                    message.register_topic = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
                }
            }
            return message
        }

        /**
         * Decodes a DeviceConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceConfig} DeviceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConfig.decodeDelimited = function decodeDelimited (reader) {
            if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
            return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DeviceConfig message.
         * @function verify
         * @memberof DeviceConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceConfig.verify = function verify (message) {
            if (typeof message !== 'object' || message === null) { return 'object expected' }
            if (message.mqtt_ip != null && message.hasOwnProperty('mqtt_ip')) {
                if (!$util.isInteger(message.mqtt_ip)) { return 'mqtt_ip: integer expected' }
            }
            if (message.mqtt_port != null && message.hasOwnProperty('mqtt_port')) {
                if (!$util.isInteger(message.mqtt_port)) { return 'mqtt_port: integer expected' }
            }
            if (message.register_topic != null && message.hasOwnProperty('register_topic')) {
                if (!$util.isString(message.register_topic)) { return 'register_topic: string expected' }
            }
            return null
        }

        /**
         * Creates a DeviceConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceConfig} DeviceConfig
         */
        DeviceConfig.fromObject = function fromObject (object) {
            if (object instanceof $root.DeviceConfig) { return object }
            var message = new $root.DeviceConfig()
            if (object.mqtt_ip != null) { message.mqtt_ip = object.mqtt_ip >>> 0 }
            if (object.mqtt_port != null) { message.mqtt_port = object.mqtt_port >>> 0 }
            if (object.register_topic != null) { message.register_topic = String(object.register_topic) }
            return message
        }

        /**
         * Creates a plain object from a DeviceConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceConfig
         * @static
         * @param {DeviceConfig} message DeviceConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceConfig.toObject = function toObject (message, options) {
            if (!options) { options = {} }
            var object = {}
            if (options.defaults) {
                object.mqtt_ip = 0
                object.mqtt_port = 0
                object.register_topic = ''
            }
            if (message.mqtt_ip != null && message.hasOwnProperty('mqtt_ip')) { object.mqtt_ip = message.mqtt_ip }
            if (message.mqtt_port != null && message.hasOwnProperty('mqtt_port')) { object.mqtt_port = message.mqtt_port }
            if (message.register_topic != null && message.hasOwnProperty('register_topic')) { object.register_topic = message.register_topic }
            return object
        }

        /**
         * Converts this DeviceConfig to JSON.
         * @function toJSON
         * @memberof DeviceConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceConfig.prototype.toJSON = function toJSON () {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
        }

        return DeviceConfig
    })()

    return $root
})
