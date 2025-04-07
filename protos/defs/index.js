/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.backend = (function() {

    /**
     * Namespace backend.
     * @exports backend
     * @namespace
     */
    var backend = {};

    backend.discovery_service = (function() {

        /**
         * Namespace discovery_service.
         * @memberof backend
         * @namespace
         */
        var discovery_service = {};

        discovery_service.DiscoveryService = (function() {

            /**
             * Constructs a new DiscoveryService service.
             * @memberof backend.discovery_service
             * @classdesc Represents a DiscoveryService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function DiscoveryService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (DiscoveryService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DiscoveryService;

            /**
             * Creates new DiscoveryService service using the specified rpc implementation.
             * @function create
             * @memberof backend.discovery_service.DiscoveryService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {DiscoveryService} RPC service. Useful where requests and/or responses are streamed.
             */
            DiscoveryService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link backend.discovery_service.DiscoveryService#discover}.
             * @memberof backend.discovery_service.DiscoveryService
             * @typedef DiscoverCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.discovery_service.ServiceInstance} [response] ServiceInstance
             */

            /**
             * Calls Discover.
             * @function discover
             * @memberof backend.discovery_service.DiscoveryService
             * @instance
             * @param {backend.discovery_service.IDiscoveryRequest} request DiscoveryRequest message or plain object
             * @param {backend.discovery_service.DiscoveryService.DiscoverCallback} callback Node-style callback called with the error, if any, and ServiceInstance
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(DiscoveryService.prototype.discover = function discover(request, callback) {
                return this.rpcCall(discover, $root.backend.discovery_service.DiscoveryRequest, $root.backend.discovery_service.ServiceInstance, request, callback);
            }, "name", { value: "Discover" });

            /**
             * Calls Discover.
             * @function discover
             * @memberof backend.discovery_service.DiscoveryService
             * @instance
             * @param {backend.discovery_service.IDiscoveryRequest} request DiscoveryRequest message or plain object
             * @returns {Promise<backend.discovery_service.ServiceInstance>} Promise
             * @variation 2
             */

            return DiscoveryService;
        })();

        discovery_service.DiscoveryRequest = (function() {

            /**
             * Properties of a DiscoveryRequest.
             * @memberof backend.discovery_service
             * @interface IDiscoveryRequest
             * @property {string} serviceName DiscoveryRequest serviceName
             */

            /**
             * Constructs a new DiscoveryRequest.
             * @memberof backend.discovery_service
             * @classdesc Represents a DiscoveryRequest.
             * @implements IDiscoveryRequest
             * @constructor
             * @param {backend.discovery_service.IDiscoveryRequest=} [properties] Properties to set
             */
            function DiscoveryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DiscoveryRequest serviceName.
             * @member {string} serviceName
             * @memberof backend.discovery_service.DiscoveryRequest
             * @instance
             */
            DiscoveryRequest.prototype.serviceName = "";

            /**
             * Creates a new DiscoveryRequest instance using the specified properties.
             * @function create
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {backend.discovery_service.IDiscoveryRequest=} [properties] Properties to set
             * @returns {backend.discovery_service.DiscoveryRequest} DiscoveryRequest instance
             */
            DiscoveryRequest.create = function create(properties) {
                return new DiscoveryRequest(properties);
            };

            /**
             * Encodes the specified DiscoveryRequest message. Does not implicitly {@link backend.discovery_service.DiscoveryRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {backend.discovery_service.IDiscoveryRequest} message DiscoveryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscoveryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.serviceName);
                return writer;
            };

            /**
             * Encodes the specified DiscoveryRequest message, length delimited. Does not implicitly {@link backend.discovery_service.DiscoveryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {backend.discovery_service.IDiscoveryRequest} message DiscoveryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DiscoveryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DiscoveryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.discovery_service.DiscoveryRequest} DiscoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscoveryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.discovery_service.DiscoveryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.serviceName = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("serviceName"))
                    throw $util.ProtocolError("missing required 'serviceName'", { instance: message });
                return message;
            };

            /**
             * Decodes a DiscoveryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.discovery_service.DiscoveryRequest} DiscoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DiscoveryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DiscoveryRequest message.
             * @function verify
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DiscoveryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.serviceName))
                    return "serviceName: string expected";
                return null;
            };

            /**
             * Creates a DiscoveryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.discovery_service.DiscoveryRequest} DiscoveryRequest
             */
            DiscoveryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.discovery_service.DiscoveryRequest)
                    return object;
                var message = new $root.backend.discovery_service.DiscoveryRequest();
                if (object.serviceName != null)
                    message.serviceName = String(object.serviceName);
                return message;
            };

            /**
             * Creates a plain object from a DiscoveryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {backend.discovery_service.DiscoveryRequest} message DiscoveryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DiscoveryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.serviceName = "";
                if (message.serviceName != null && message.hasOwnProperty("serviceName"))
                    object.serviceName = message.serviceName;
                return object;
            };

            /**
             * Converts this DiscoveryRequest to JSON.
             * @function toJSON
             * @memberof backend.discovery_service.DiscoveryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DiscoveryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DiscoveryRequest
             * @function getTypeUrl
             * @memberof backend.discovery_service.DiscoveryRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DiscoveryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.discovery_service.DiscoveryRequest";
            };

            return DiscoveryRequest;
        })();

        discovery_service.ServiceInstance = (function() {

            /**
             * Properties of a ServiceInstance.
             * @memberof backend.discovery_service
             * @interface IServiceInstance
             * @property {string} host ServiceInstance host
             * @property {number} port ServiceInstance port
             */

            /**
             * Constructs a new ServiceInstance.
             * @memberof backend.discovery_service
             * @classdesc Represents a ServiceInstance.
             * @implements IServiceInstance
             * @constructor
             * @param {backend.discovery_service.IServiceInstance=} [properties] Properties to set
             */
            function ServiceInstance(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServiceInstance host.
             * @member {string} host
             * @memberof backend.discovery_service.ServiceInstance
             * @instance
             */
            ServiceInstance.prototype.host = "";

            /**
             * ServiceInstance port.
             * @member {number} port
             * @memberof backend.discovery_service.ServiceInstance
             * @instance
             */
            ServiceInstance.prototype.port = 0;

            /**
             * Creates a new ServiceInstance instance using the specified properties.
             * @function create
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {backend.discovery_service.IServiceInstance=} [properties] Properties to set
             * @returns {backend.discovery_service.ServiceInstance} ServiceInstance instance
             */
            ServiceInstance.create = function create(properties) {
                return new ServiceInstance(properties);
            };

            /**
             * Encodes the specified ServiceInstance message. Does not implicitly {@link backend.discovery_service.ServiceInstance.verify|verify} messages.
             * @function encode
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {backend.discovery_service.IServiceInstance} message ServiceInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceInstance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
                return writer;
            };

            /**
             * Encodes the specified ServiceInstance message, length delimited. Does not implicitly {@link backend.discovery_service.ServiceInstance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {backend.discovery_service.IServiceInstance} message ServiceInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServiceInstance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServiceInstance message from the specified reader or buffer.
             * @function decode
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.discovery_service.ServiceInstance} ServiceInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceInstance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.discovery_service.ServiceInstance();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.host = reader.string();
                            break;
                        }
                    case 2: {
                            message.port = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("host"))
                    throw $util.ProtocolError("missing required 'host'", { instance: message });
                if (!message.hasOwnProperty("port"))
                    throw $util.ProtocolError("missing required 'port'", { instance: message });
                return message;
            };

            /**
             * Decodes a ServiceInstance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.discovery_service.ServiceInstance} ServiceInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServiceInstance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServiceInstance message.
             * @function verify
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServiceInstance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.host))
                    return "host: string expected";
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
                return null;
            };

            /**
             * Creates a ServiceInstance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.discovery_service.ServiceInstance} ServiceInstance
             */
            ServiceInstance.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.discovery_service.ServiceInstance)
                    return object;
                var message = new $root.backend.discovery_service.ServiceInstance();
                if (object.host != null)
                    message.host = String(object.host);
                if (object.port != null)
                    message.port = object.port | 0;
                return message;
            };

            /**
             * Creates a plain object from a ServiceInstance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {backend.discovery_service.ServiceInstance} message ServiceInstance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServiceInstance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.host = "";
                    object.port = 0;
                }
                if (message.host != null && message.hasOwnProperty("host"))
                    object.host = message.host;
                if (message.port != null && message.hasOwnProperty("port"))
                    object.port = message.port;
                return object;
            };

            /**
             * Converts this ServiceInstance to JSON.
             * @function toJSON
             * @memberof backend.discovery_service.ServiceInstance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServiceInstance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServiceInstance
             * @function getTypeUrl
             * @memberof backend.discovery_service.ServiceInstance
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServiceInstance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.discovery_service.ServiceInstance";
            };

            return ServiceInstance;
        })();

        return discovery_service;
    })();

    backend.user_service = (function() {

        /**
         * Namespace user_service.
         * @memberof backend
         * @namespace
         */
        var user_service = {};

        user_service.UserService = (function() {

            /**
             * Constructs a new UserService service.
             * @memberof backend.user_service
             * @classdesc Represents a UserService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function UserService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

            /**
             * Creates new UserService service using the specified rpc implementation.
             * @function create
             * @memberof backend.user_service.UserService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
             */
            UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link backend.user_service.UserService#signIn}.
             * @memberof backend.user_service.UserService
             * @typedef SignInCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.user_service.AuthenticatedInfo} [response] AuthenticatedInfo
             */

            /**
             * Calls SignIn.
             * @function signIn
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISignInRequest} request SignInRequest message or plain object
             * @param {backend.user_service.UserService.SignInCallback} callback Node-style callback called with the error, if any, and AuthenticatedInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserService.prototype.signIn = function signIn(request, callback) {
                return this.rpcCall(signIn, $root.backend.user_service.SignInRequest, $root.backend.user_service.AuthenticatedInfo, request, callback);
            }, "name", { value: "SignIn" });

            /**
             * Calls SignIn.
             * @function signIn
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISignInRequest} request SignInRequest message or plain object
             * @returns {Promise<backend.user_service.AuthenticatedInfo>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.user_service.UserService#signUp}.
             * @memberof backend.user_service.UserService
             * @typedef SignUpCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.user_service.AuthenticatedInfo} [response] AuthenticatedInfo
             */

            /**
             * Calls SignUp.
             * @function signUp
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISignUpRequest} request SignUpRequest message or plain object
             * @param {backend.user_service.UserService.SignUpCallback} callback Node-style callback called with the error, if any, and AuthenticatedInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserService.prototype.signUp = function signUp(request, callback) {
                return this.rpcCall(signUp, $root.backend.user_service.SignUpRequest, $root.backend.user_service.AuthenticatedInfo, request, callback);
            }, "name", { value: "SignUp" });

            /**
             * Calls SignUp.
             * @function signUp
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISignUpRequest} request SignUpRequest message or plain object
             * @returns {Promise<backend.user_service.AuthenticatedInfo>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.user_service.UserService#findUser}.
             * @memberof backend.user_service.UserService
             * @typedef FindUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.user_service.UserInfo} [response] UserInfo
             */

            /**
             * Calls FindUser.
             * @function findUser
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.IFindUserRequest} request FindUserRequest message or plain object
             * @param {backend.user_service.UserService.FindUserCallback} callback Node-style callback called with the error, if any, and UserInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserService.prototype.findUser = function findUser(request, callback) {
                return this.rpcCall(findUser, $root.backend.user_service.FindUserRequest, $root.backend.user_service.UserInfo, request, callback);
            }, "name", { value: "FindUser" });

            /**
             * Calls FindUser.
             * @function findUser
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.IFindUserRequest} request FindUserRequest message or plain object
             * @returns {Promise<backend.user_service.UserInfo>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.user_service.UserService#getUsers}.
             * @memberof backend.user_service.UserService
             * @typedef GetUsersCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.user_service.UsersInfo} [response] UsersInfo
             */

            /**
             * Calls GetUsers.
             * @function getUsers
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.IGetUsersRequest} request GetUsersRequest message or plain object
             * @param {backend.user_service.UserService.GetUsersCallback} callback Node-style callback called with the error, if any, and UsersInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserService.prototype.getUsers = function getUsers(request, callback) {
                return this.rpcCall(getUsers, $root.backend.user_service.GetUsersRequest, $root.backend.user_service.UsersInfo, request, callback);
            }, "name", { value: "GetUsers" });

            /**
             * Calls GetUsers.
             * @function getUsers
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.IGetUsersRequest} request GetUsersRequest message or plain object
             * @returns {Promise<backend.user_service.UsersInfo>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.user_service.UserService#searchUser}.
             * @memberof backend.user_service.UserService
             * @typedef SearchUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.user_service.UsersInfo} [response] UsersInfo
             */

            /**
             * Calls SearchUser.
             * @function searchUser
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISearchUserRequest} request SearchUserRequest message or plain object
             * @param {backend.user_service.UserService.SearchUserCallback} callback Node-style callback called with the error, if any, and UsersInfo
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserService.prototype.searchUser = function searchUser(request, callback) {
                return this.rpcCall(searchUser, $root.backend.user_service.SearchUserRequest, $root.backend.user_service.UsersInfo, request, callback);
            }, "name", { value: "SearchUser" });

            /**
             * Calls SearchUser.
             * @function searchUser
             * @memberof backend.user_service.UserService
             * @instance
             * @param {backend.user_service.ISearchUserRequest} request SearchUserRequest message or plain object
             * @returns {Promise<backend.user_service.UsersInfo>} Promise
             * @variation 2
             */

            return UserService;
        })();

        user_service.Token = (function() {

            /**
             * Properties of a Token.
             * @memberof backend.user_service
             * @interface IToken
             * @property {string} accessToken Token accessToken
             * @property {string} refreshToken Token refreshToken
             */

            /**
             * Constructs a new Token.
             * @memberof backend.user_service
             * @classdesc Represents a Token.
             * @implements IToken
             * @constructor
             * @param {backend.user_service.IToken=} [properties] Properties to set
             */
            function Token(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Token accessToken.
             * @member {string} accessToken
             * @memberof backend.user_service.Token
             * @instance
             */
            Token.prototype.accessToken = "";

            /**
             * Token refreshToken.
             * @member {string} refreshToken
             * @memberof backend.user_service.Token
             * @instance
             */
            Token.prototype.refreshToken = "";

            /**
             * Creates a new Token instance using the specified properties.
             * @function create
             * @memberof backend.user_service.Token
             * @static
             * @param {backend.user_service.IToken=} [properties] Properties to set
             * @returns {backend.user_service.Token} Token instance
             */
            Token.create = function create(properties) {
                return new Token(properties);
            };

            /**
             * Encodes the specified Token message. Does not implicitly {@link backend.user_service.Token.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.Token
             * @static
             * @param {backend.user_service.IToken} message Token message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Token.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.accessToken);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.refreshToken);
                return writer;
            };

            /**
             * Encodes the specified Token message, length delimited. Does not implicitly {@link backend.user_service.Token.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.Token
             * @static
             * @param {backend.user_service.IToken} message Token message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Token.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Token message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.Token
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.Token} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Token.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.Token();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.accessToken = reader.string();
                            break;
                        }
                    case 2: {
                            message.refreshToken = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("accessToken"))
                    throw $util.ProtocolError("missing required 'accessToken'", { instance: message });
                if (!message.hasOwnProperty("refreshToken"))
                    throw $util.ProtocolError("missing required 'refreshToken'", { instance: message });
                return message;
            };

            /**
             * Decodes a Token message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.Token
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.Token} Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Token.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Token message.
             * @function verify
             * @memberof backend.user_service.Token
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Token.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.accessToken))
                    return "accessToken: string expected";
                if (!$util.isString(message.refreshToken))
                    return "refreshToken: string expected";
                return null;
            };

            /**
             * Creates a Token message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.Token
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.Token} Token
             */
            Token.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.Token)
                    return object;
                var message = new $root.backend.user_service.Token();
                if (object.accessToken != null)
                    message.accessToken = String(object.accessToken);
                if (object.refreshToken != null)
                    message.refreshToken = String(object.refreshToken);
                return message;
            };

            /**
             * Creates a plain object from a Token message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.Token
             * @static
             * @param {backend.user_service.Token} message Token
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Token.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.accessToken = "";
                    object.refreshToken = "";
                }
                if (message.accessToken != null && message.hasOwnProperty("accessToken"))
                    object.accessToken = message.accessToken;
                if (message.refreshToken != null && message.hasOwnProperty("refreshToken"))
                    object.refreshToken = message.refreshToken;
                return object;
            };

            /**
             * Converts this Token to JSON.
             * @function toJSON
             * @memberof backend.user_service.Token
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Token.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Token
             * @function getTypeUrl
             * @memberof backend.user_service.Token
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Token.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.Token";
            };

            return Token;
        })();

        user_service.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof backend.user_service
             * @interface IUserInfo
             * @property {string} id UserInfo id
             * @property {string} avatar UserInfo avatar
             * @property {string} displayName UserInfo displayName
             * @property {boolean} enabledTwofa UserInfo enabledTwofa
             */

            /**
             * Constructs a new UserInfo.
             * @memberof backend.user_service
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {backend.user_service.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo id.
             * @member {string} id
             * @memberof backend.user_service.UserInfo
             * @instance
             */
            UserInfo.prototype.id = "";

            /**
             * UserInfo avatar.
             * @member {string} avatar
             * @memberof backend.user_service.UserInfo
             * @instance
             */
            UserInfo.prototype.avatar = "";

            /**
             * UserInfo displayName.
             * @member {string} displayName
             * @memberof backend.user_service.UserInfo
             * @instance
             */
            UserInfo.prototype.displayName = "";

            /**
             * UserInfo enabledTwofa.
             * @member {boolean} enabledTwofa
             * @memberof backend.user_service.UserInfo
             * @instance
             */
            UserInfo.prototype.enabledTwofa = false;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {backend.user_service.IUserInfo=} [properties] Properties to set
             * @returns {backend.user_service.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link backend.user_service.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {backend.user_service.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.avatar);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.displayName);
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.enabledTwofa);
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link backend.user_service.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {backend.user_service.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.UserInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.avatar = reader.string();
                            break;
                        }
                    case 4: {
                            message.displayName = reader.string();
                            break;
                        }
                    case 5: {
                            message.enabledTwofa = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("avatar"))
                    throw $util.ProtocolError("missing required 'avatar'", { instance: message });
                if (!message.hasOwnProperty("displayName"))
                    throw $util.ProtocolError("missing required 'displayName'", { instance: message });
                if (!message.hasOwnProperty("enabledTwofa"))
                    throw $util.ProtocolError("missing required 'enabledTwofa'", { instance: message });
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
                if (typeof message.enabledTwofa !== "boolean")
                    return "enabledTwofa: boolean expected";
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.UserInfo)
                    return object;
                var message = new $root.backend.user_service.UserInfo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.avatar != null)
                    message.avatar = String(object.avatar);
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                if (object.enabledTwofa != null)
                    message.enabledTwofa = Boolean(object.enabledTwofa);
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {backend.user_service.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.avatar = "";
                    object.displayName = "";
                    object.enabledTwofa = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.avatar != null && message.hasOwnProperty("avatar"))
                    object.avatar = message.avatar;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.enabledTwofa != null && message.hasOwnProperty("enabledTwofa"))
                    object.enabledTwofa = message.enabledTwofa;
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof backend.user_service.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserInfo
             * @function getTypeUrl
             * @memberof backend.user_service.UserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.UserInfo";
            };

            return UserInfo;
        })();

        user_service.AuthenticatedInfo = (function() {

            /**
             * Properties of an AuthenticatedInfo.
             * @memberof backend.user_service
             * @interface IAuthenticatedInfo
             * @property {backend.user_service.IUserInfo} userInfo AuthenticatedInfo userInfo
             * @property {backend.user_service.IToken} token AuthenticatedInfo token
             */

            /**
             * Constructs a new AuthenticatedInfo.
             * @memberof backend.user_service
             * @classdesc Represents an AuthenticatedInfo.
             * @implements IAuthenticatedInfo
             * @constructor
             * @param {backend.user_service.IAuthenticatedInfo=} [properties] Properties to set
             */
            function AuthenticatedInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthenticatedInfo userInfo.
             * @member {backend.user_service.IUserInfo} userInfo
             * @memberof backend.user_service.AuthenticatedInfo
             * @instance
             */
            AuthenticatedInfo.prototype.userInfo = null;

            /**
             * AuthenticatedInfo token.
             * @member {backend.user_service.IToken} token
             * @memberof backend.user_service.AuthenticatedInfo
             * @instance
             */
            AuthenticatedInfo.prototype.token = null;

            /**
             * Creates a new AuthenticatedInfo instance using the specified properties.
             * @function create
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {backend.user_service.IAuthenticatedInfo=} [properties] Properties to set
             * @returns {backend.user_service.AuthenticatedInfo} AuthenticatedInfo instance
             */
            AuthenticatedInfo.create = function create(properties) {
                return new AuthenticatedInfo(properties);
            };

            /**
             * Encodes the specified AuthenticatedInfo message. Does not implicitly {@link backend.user_service.AuthenticatedInfo.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {backend.user_service.IAuthenticatedInfo} message AuthenticatedInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticatedInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                $root.backend.user_service.UserInfo.encode(message.userInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                $root.backend.user_service.Token.encode(message.token, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AuthenticatedInfo message, length delimited. Does not implicitly {@link backend.user_service.AuthenticatedInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {backend.user_service.IAuthenticatedInfo} message AuthenticatedInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthenticatedInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthenticatedInfo message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.AuthenticatedInfo} AuthenticatedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticatedInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.AuthenticatedInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userInfo = $root.backend.user_service.UserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.token = $root.backend.user_service.Token.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("userInfo"))
                    throw $util.ProtocolError("missing required 'userInfo'", { instance: message });
                if (!message.hasOwnProperty("token"))
                    throw $util.ProtocolError("missing required 'token'", { instance: message });
                return message;
            };

            /**
             * Decodes an AuthenticatedInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.AuthenticatedInfo} AuthenticatedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthenticatedInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthenticatedInfo message.
             * @function verify
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthenticatedInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                {
                    var error = $root.backend.user_service.UserInfo.verify(message.userInfo);
                    if (error)
                        return "userInfo." + error;
                }
                {
                    var error = $root.backend.user_service.Token.verify(message.token);
                    if (error)
                        return "token." + error;
                }
                return null;
            };

            /**
             * Creates an AuthenticatedInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.AuthenticatedInfo} AuthenticatedInfo
             */
            AuthenticatedInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.AuthenticatedInfo)
                    return object;
                var message = new $root.backend.user_service.AuthenticatedInfo();
                if (object.userInfo != null) {
                    if (typeof object.userInfo !== "object")
                        throw TypeError(".backend.user_service.AuthenticatedInfo.userInfo: object expected");
                    message.userInfo = $root.backend.user_service.UserInfo.fromObject(object.userInfo);
                }
                if (object.token != null) {
                    if (typeof object.token !== "object")
                        throw TypeError(".backend.user_service.AuthenticatedInfo.token: object expected");
                    message.token = $root.backend.user_service.Token.fromObject(object.token);
                }
                return message;
            };

            /**
             * Creates a plain object from an AuthenticatedInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {backend.user_service.AuthenticatedInfo} message AuthenticatedInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthenticatedInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userInfo = null;
                    object.token = null;
                }
                if (message.userInfo != null && message.hasOwnProperty("userInfo"))
                    object.userInfo = $root.backend.user_service.UserInfo.toObject(message.userInfo, options);
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = $root.backend.user_service.Token.toObject(message.token, options);
                return object;
            };

            /**
             * Converts this AuthenticatedInfo to JSON.
             * @function toJSON
             * @memberof backend.user_service.AuthenticatedInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthenticatedInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AuthenticatedInfo
             * @function getTypeUrl
             * @memberof backend.user_service.AuthenticatedInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AuthenticatedInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.AuthenticatedInfo";
            };

            return AuthenticatedInfo;
        })();

        user_service.SignInRequest = (function() {

            /**
             * Properties of a SignInRequest.
             * @memberof backend.user_service
             * @interface ISignInRequest
             * @property {string} username SignInRequest username
             * @property {string} password SignInRequest password
             */

            /**
             * Constructs a new SignInRequest.
             * @memberof backend.user_service
             * @classdesc Represents a SignInRequest.
             * @implements ISignInRequest
             * @constructor
             * @param {backend.user_service.ISignInRequest=} [properties] Properties to set
             */
            function SignInRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignInRequest username.
             * @member {string} username
             * @memberof backend.user_service.SignInRequest
             * @instance
             */
            SignInRequest.prototype.username = "";

            /**
             * SignInRequest password.
             * @member {string} password
             * @memberof backend.user_service.SignInRequest
             * @instance
             */
            SignInRequest.prototype.password = "";

            /**
             * Creates a new SignInRequest instance using the specified properties.
             * @function create
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {backend.user_service.ISignInRequest=} [properties] Properties to set
             * @returns {backend.user_service.SignInRequest} SignInRequest instance
             */
            SignInRequest.create = function create(properties) {
                return new SignInRequest(properties);
            };

            /**
             * Encodes the specified SignInRequest message. Does not implicitly {@link backend.user_service.SignInRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {backend.user_service.ISignInRequest} message SignInRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignInRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link backend.user_service.SignInRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {backend.user_service.ISignInRequest} message SignInRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignInRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignInRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.SignInRequest} SignInRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignInRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.SignInRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("username"))
                    throw $util.ProtocolError("missing required 'username'", { instance: message });
                if (!message.hasOwnProperty("password"))
                    throw $util.ProtocolError("missing required 'password'", { instance: message });
                return message;
            };

            /**
             * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.SignInRequest} SignInRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignInRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignInRequest message.
             * @function verify
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignInRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.username))
                    return "username: string expected";
                if (!$util.isString(message.password))
                    return "password: string expected";
                return null;
            };

            /**
             * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.SignInRequest} SignInRequest
             */
            SignInRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.SignInRequest)
                    return object;
                var message = new $root.backend.user_service.SignInRequest();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {backend.user_service.SignInRequest} message SignInRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignInRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this SignInRequest to JSON.
             * @function toJSON
             * @memberof backend.user_service.SignInRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignInRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignInRequest
             * @function getTypeUrl
             * @memberof backend.user_service.SignInRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignInRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.SignInRequest";
            };

            return SignInRequest;
        })();

        user_service.SignUpRequest = (function() {

            /**
             * Properties of a SignUpRequest.
             * @memberof backend.user_service
             * @interface ISignUpRequest
             * @property {string} username SignUpRequest username
             * @property {string} password SignUpRequest password
             * @property {string} displayName SignUpRequest displayName
             * @property {string} avatarUrl SignUpRequest avatarUrl
             */

            /**
             * Constructs a new SignUpRequest.
             * @memberof backend.user_service
             * @classdesc Represents a SignUpRequest.
             * @implements ISignUpRequest
             * @constructor
             * @param {backend.user_service.ISignUpRequest=} [properties] Properties to set
             */
            function SignUpRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SignUpRequest username.
             * @member {string} username
             * @memberof backend.user_service.SignUpRequest
             * @instance
             */
            SignUpRequest.prototype.username = "";

            /**
             * SignUpRequest password.
             * @member {string} password
             * @memberof backend.user_service.SignUpRequest
             * @instance
             */
            SignUpRequest.prototype.password = "";

            /**
             * SignUpRequest displayName.
             * @member {string} displayName
             * @memberof backend.user_service.SignUpRequest
             * @instance
             */
            SignUpRequest.prototype.displayName = "";

            /**
             * SignUpRequest avatarUrl.
             * @member {string} avatarUrl
             * @memberof backend.user_service.SignUpRequest
             * @instance
             */
            SignUpRequest.prototype.avatarUrl = "";

            /**
             * Creates a new SignUpRequest instance using the specified properties.
             * @function create
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {backend.user_service.ISignUpRequest=} [properties] Properties to set
             * @returns {backend.user_service.SignUpRequest} SignUpRequest instance
             */
            SignUpRequest.create = function create(properties) {
                return new SignUpRequest(properties);
            };

            /**
             * Encodes the specified SignUpRequest message. Does not implicitly {@link backend.user_service.SignUpRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {backend.user_service.ISignUpRequest} message SignUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignUpRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.displayName);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.avatarUrl);
                return writer;
            };

            /**
             * Encodes the specified SignUpRequest message, length delimited. Does not implicitly {@link backend.user_service.SignUpRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {backend.user_service.ISignUpRequest} message SignUpRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SignUpRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SignUpRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.SignUpRequest} SignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignUpRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.SignUpRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.username = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    case 3: {
                            message.displayName = reader.string();
                            break;
                        }
                    case 4: {
                            message.avatarUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("username"))
                    throw $util.ProtocolError("missing required 'username'", { instance: message });
                if (!message.hasOwnProperty("password"))
                    throw $util.ProtocolError("missing required 'password'", { instance: message });
                if (!message.hasOwnProperty("displayName"))
                    throw $util.ProtocolError("missing required 'displayName'", { instance: message });
                if (!message.hasOwnProperty("avatarUrl"))
                    throw $util.ProtocolError("missing required 'avatarUrl'", { instance: message });
                return message;
            };

            /**
             * Decodes a SignUpRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.SignUpRequest} SignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SignUpRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SignUpRequest message.
             * @function verify
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SignUpRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.username))
                    return "username: string expected";
                if (!$util.isString(message.password))
                    return "password: string expected";
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
                if (!$util.isString(message.avatarUrl))
                    return "avatarUrl: string expected";
                return null;
            };

            /**
             * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.SignUpRequest} SignUpRequest
             */
            SignUpRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.SignUpRequest)
                    return object;
                var message = new $root.backend.user_service.SignUpRequest();
                if (object.username != null)
                    message.username = String(object.username);
                if (object.password != null)
                    message.password = String(object.password);
                if (object.displayName != null)
                    message.displayName = String(object.displayName);
                if (object.avatarUrl != null)
                    message.avatarUrl = String(object.avatarUrl);
                return message;
            };

            /**
             * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {backend.user_service.SignUpRequest} message SignUpRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SignUpRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.username = "";
                    object.password = "";
                    object.displayName = "";
                    object.avatarUrl = "";
                }
                if (message.username != null && message.hasOwnProperty("username"))
                    object.username = message.username;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                if (message.displayName != null && message.hasOwnProperty("displayName"))
                    object.displayName = message.displayName;
                if (message.avatarUrl != null && message.hasOwnProperty("avatarUrl"))
                    object.avatarUrl = message.avatarUrl;
                return object;
            };

            /**
             * Converts this SignUpRequest to JSON.
             * @function toJSON
             * @memberof backend.user_service.SignUpRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SignUpRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SignUpRequest
             * @function getTypeUrl
             * @memberof backend.user_service.SignUpRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SignUpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.SignUpRequest";
            };

            return SignUpRequest;
        })();

        user_service.GetUsersRequest = (function() {

            /**
             * Properties of a GetUsersRequest.
             * @memberof backend.user_service
             * @interface IGetUsersRequest
             * @property {Array.<string>|null} [userIds] GetUsersRequest userIds
             */

            /**
             * Constructs a new GetUsersRequest.
             * @memberof backend.user_service
             * @classdesc Represents a GetUsersRequest.
             * @implements IGetUsersRequest
             * @constructor
             * @param {backend.user_service.IGetUsersRequest=} [properties] Properties to set
             */
            function GetUsersRequest(properties) {
                this.userIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GetUsersRequest userIds.
             * @member {Array.<string>} userIds
             * @memberof backend.user_service.GetUsersRequest
             * @instance
             */
            GetUsersRequest.prototype.userIds = $util.emptyArray;

            /**
             * Creates a new GetUsersRequest instance using the specified properties.
             * @function create
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {backend.user_service.IGetUsersRequest=} [properties] Properties to set
             * @returns {backend.user_service.GetUsersRequest} GetUsersRequest instance
             */
            GetUsersRequest.create = function create(properties) {
                return new GetUsersRequest(properties);
            };

            /**
             * Encodes the specified GetUsersRequest message. Does not implicitly {@link backend.user_service.GetUsersRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {backend.user_service.IGetUsersRequest} message GetUsersRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUsersRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userIds != null && message.userIds.length)
                    for (var i = 0; i < message.userIds.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.userIds[i]);
                return writer;
            };

            /**
             * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link backend.user_service.GetUsersRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {backend.user_service.IGetUsersRequest} message GetUsersRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GetUsersRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GetUsersRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.GetUsersRequest} GetUsersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUsersRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.GetUsersRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.userIds && message.userIds.length))
                                message.userIds = [];
                            message.userIds.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.GetUsersRequest} GetUsersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GetUsersRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GetUsersRequest message.
             * @function verify
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GetUsersRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userIds != null && message.hasOwnProperty("userIds")) {
                    if (!Array.isArray(message.userIds))
                        return "userIds: array expected";
                    for (var i = 0; i < message.userIds.length; ++i)
                        if (!$util.isString(message.userIds[i]))
                            return "userIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.GetUsersRequest} GetUsersRequest
             */
            GetUsersRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.GetUsersRequest)
                    return object;
                var message = new $root.backend.user_service.GetUsersRequest();
                if (object.userIds) {
                    if (!Array.isArray(object.userIds))
                        throw TypeError(".backend.user_service.GetUsersRequest.userIds: array expected");
                    message.userIds = [];
                    for (var i = 0; i < object.userIds.length; ++i)
                        message.userIds[i] = String(object.userIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {backend.user_service.GetUsersRequest} message GetUsersRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GetUsersRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.userIds = [];
                if (message.userIds && message.userIds.length) {
                    object.userIds = [];
                    for (var j = 0; j < message.userIds.length; ++j)
                        object.userIds[j] = message.userIds[j];
                }
                return object;
            };

            /**
             * Converts this GetUsersRequest to JSON.
             * @function toJSON
             * @memberof backend.user_service.GetUsersRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GetUsersRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GetUsersRequest
             * @function getTypeUrl
             * @memberof backend.user_service.GetUsersRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GetUsersRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.GetUsersRequest";
            };

            return GetUsersRequest;
        })();

        user_service.FindUserRequest = (function() {

            /**
             * Properties of a FindUserRequest.
             * @memberof backend.user_service
             * @interface IFindUserRequest
             * @property {string} userId FindUserRequest userId
             */

            /**
             * Constructs a new FindUserRequest.
             * @memberof backend.user_service
             * @classdesc Represents a FindUserRequest.
             * @implements IFindUserRequest
             * @constructor
             * @param {backend.user_service.IFindUserRequest=} [properties] Properties to set
             */
            function FindUserRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FindUserRequest userId.
             * @member {string} userId
             * @memberof backend.user_service.FindUserRequest
             * @instance
             */
            FindUserRequest.prototype.userId = "";

            /**
             * Creates a new FindUserRequest instance using the specified properties.
             * @function create
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {backend.user_service.IFindUserRequest=} [properties] Properties to set
             * @returns {backend.user_service.FindUserRequest} FindUserRequest instance
             */
            FindUserRequest.create = function create(properties) {
                return new FindUserRequest(properties);
            };

            /**
             * Encodes the specified FindUserRequest message. Does not implicitly {@link backend.user_service.FindUserRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {backend.user_service.IFindUserRequest} message FindUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindUserRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
                return writer;
            };

            /**
             * Encodes the specified FindUserRequest message, length delimited. Does not implicitly {@link backend.user_service.FindUserRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {backend.user_service.IFindUserRequest} message FindUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FindUserRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.FindUserRequest} FindUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindUserRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.FindUserRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("userId"))
                    throw $util.ProtocolError("missing required 'userId'", { instance: message });
                return message;
            };

            /**
             * Decodes a FindUserRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.FindUserRequest} FindUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindUserRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FindUserRequest message.
             * @function verify
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FindUserRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.userId))
                    return "userId: string expected";
                return null;
            };

            /**
             * Creates a FindUserRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.FindUserRequest} FindUserRequest
             */
            FindUserRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.FindUserRequest)
                    return object;
                var message = new $root.backend.user_service.FindUserRequest();
                if (object.userId != null)
                    message.userId = String(object.userId);
                return message;
            };

            /**
             * Creates a plain object from a FindUserRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {backend.user_service.FindUserRequest} message FindUserRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FindUserRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.userId = "";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                return object;
            };

            /**
             * Converts this FindUserRequest to JSON.
             * @function toJSON
             * @memberof backend.user_service.FindUserRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FindUserRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FindUserRequest
             * @function getTypeUrl
             * @memberof backend.user_service.FindUserRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FindUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.FindUserRequest";
            };

            return FindUserRequest;
        })();

        user_service.SearchUserRequest = (function() {

            /**
             * Properties of a SearchUserRequest.
             * @memberof backend.user_service
             * @interface ISearchUserRequest
             * @property {string} term SearchUserRequest term
             * @property {number|null} [pageNumber] SearchUserRequest pageNumber
             * @property {number|null} [pageSize] SearchUserRequest pageSize
             */

            /**
             * Constructs a new SearchUserRequest.
             * @memberof backend.user_service
             * @classdesc Represents a SearchUserRequest.
             * @implements ISearchUserRequest
             * @constructor
             * @param {backend.user_service.ISearchUserRequest=} [properties] Properties to set
             */
            function SearchUserRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchUserRequest term.
             * @member {string} term
             * @memberof backend.user_service.SearchUserRequest
             * @instance
             */
            SearchUserRequest.prototype.term = "";

            /**
             * SearchUserRequest pageNumber.
             * @member {number|null|undefined} pageNumber
             * @memberof backend.user_service.SearchUserRequest
             * @instance
             */
            SearchUserRequest.prototype.pageNumber = null;

            /**
             * SearchUserRequest pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof backend.user_service.SearchUserRequest
             * @instance
             */
            SearchUserRequest.prototype.pageSize = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchUserRequest.prototype, "_pageNumber", {
                get: $util.oneOfGetter($oneOfFields = ["pageNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchUserRequest.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SearchUserRequest instance using the specified properties.
             * @function create
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {backend.user_service.ISearchUserRequest=} [properties] Properties to set
             * @returns {backend.user_service.SearchUserRequest} SearchUserRequest instance
             */
            SearchUserRequest.create = function create(properties) {
                return new SearchUserRequest(properties);
            };

            /**
             * Encodes the specified SearchUserRequest message. Does not implicitly {@link backend.user_service.SearchUserRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {backend.user_service.ISearchUserRequest} message SearchUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchUserRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.term);
                if (message.pageNumber != null && Object.hasOwnProperty.call(message, "pageNumber"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageNumber);
                if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
                return writer;
            };

            /**
             * Encodes the specified SearchUserRequest message, length delimited. Does not implicitly {@link backend.user_service.SearchUserRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {backend.user_service.ISearchUserRequest} message SearchUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchUserRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.SearchUserRequest} SearchUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchUserRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.SearchUserRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.term = reader.string();
                            break;
                        }
                    case 2: {
                            message.pageNumber = reader.int32();
                            break;
                        }
                    case 3: {
                            message.pageSize = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("term"))
                    throw $util.ProtocolError("missing required 'term'", { instance: message });
                return message;
            };

            /**
             * Decodes a SearchUserRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.SearchUserRequest} SearchUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchUserRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchUserRequest message.
             * @function verify
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchUserRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (!$util.isString(message.term))
                    return "term: string expected";
                if (message.pageNumber != null && message.hasOwnProperty("pageNumber")) {
                    properties._pageNumber = 1;
                    if (!$util.isInteger(message.pageNumber))
                        return "pageNumber: integer expected";
                }
                if (message.pageSize != null && message.hasOwnProperty("pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                return null;
            };

            /**
             * Creates a SearchUserRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.SearchUserRequest} SearchUserRequest
             */
            SearchUserRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.SearchUserRequest)
                    return object;
                var message = new $root.backend.user_service.SearchUserRequest();
                if (object.term != null)
                    message.term = String(object.term);
                if (object.pageNumber != null)
                    message.pageNumber = object.pageNumber | 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize | 0;
                return message;
            };

            /**
             * Creates a plain object from a SearchUserRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {backend.user_service.SearchUserRequest} message SearchUserRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchUserRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.term = "";
                if (message.term != null && message.hasOwnProperty("term"))
                    object.term = message.term;
                if (message.pageNumber != null && message.hasOwnProperty("pageNumber")) {
                    object.pageNumber = message.pageNumber;
                    if (options.oneofs)
                        object._pageNumber = "pageNumber";
                }
                if (message.pageSize != null && message.hasOwnProperty("pageSize")) {
                    object.pageSize = message.pageSize;
                    if (options.oneofs)
                        object._pageSize = "pageSize";
                }
                return object;
            };

            /**
             * Converts this SearchUserRequest to JSON.
             * @function toJSON
             * @memberof backend.user_service.SearchUserRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchUserRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchUserRequest
             * @function getTypeUrl
             * @memberof backend.user_service.SearchUserRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.SearchUserRequest";
            };

            return SearchUserRequest;
        })();

        user_service.UsersInfo = (function() {

            /**
             * Properties of a UsersInfo.
             * @memberof backend.user_service
             * @interface IUsersInfo
             * @property {Array.<backend.user_service.IUserInfo>|null} [users] UsersInfo users
             */

            /**
             * Constructs a new UsersInfo.
             * @memberof backend.user_service
             * @classdesc Represents a UsersInfo.
             * @implements IUsersInfo
             * @constructor
             * @param {backend.user_service.IUsersInfo=} [properties] Properties to set
             */
            function UsersInfo(properties) {
                this.users = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UsersInfo users.
             * @member {Array.<backend.user_service.IUserInfo>} users
             * @memberof backend.user_service.UsersInfo
             * @instance
             */
            UsersInfo.prototype.users = $util.emptyArray;

            /**
             * Creates a new UsersInfo instance using the specified properties.
             * @function create
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {backend.user_service.IUsersInfo=} [properties] Properties to set
             * @returns {backend.user_service.UsersInfo} UsersInfo instance
             */
            UsersInfo.create = function create(properties) {
                return new UsersInfo(properties);
            };

            /**
             * Encodes the specified UsersInfo message. Does not implicitly {@link backend.user_service.UsersInfo.verify|verify} messages.
             * @function encode
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {backend.user_service.IUsersInfo} message UsersInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UsersInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.users != null && message.users.length)
                    for (var i = 0; i < message.users.length; ++i)
                        $root.backend.user_service.UserInfo.encode(message.users[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UsersInfo message, length delimited. Does not implicitly {@link backend.user_service.UsersInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {backend.user_service.IUsersInfo} message UsersInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UsersInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UsersInfo message from the specified reader or buffer.
             * @function decode
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.user_service.UsersInfo} UsersInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UsersInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.user_service.UsersInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.users && message.users.length))
                                message.users = [];
                            message.users.push($root.backend.user_service.UserInfo.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UsersInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.user_service.UsersInfo} UsersInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UsersInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UsersInfo message.
             * @function verify
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UsersInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.users != null && message.hasOwnProperty("users")) {
                    if (!Array.isArray(message.users))
                        return "users: array expected";
                    for (var i = 0; i < message.users.length; ++i) {
                        var error = $root.backend.user_service.UserInfo.verify(message.users[i]);
                        if (error)
                            return "users." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a UsersInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.user_service.UsersInfo} UsersInfo
             */
            UsersInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.user_service.UsersInfo)
                    return object;
                var message = new $root.backend.user_service.UsersInfo();
                if (object.users) {
                    if (!Array.isArray(object.users))
                        throw TypeError(".backend.user_service.UsersInfo.users: array expected");
                    message.users = [];
                    for (var i = 0; i < object.users.length; ++i) {
                        if (typeof object.users[i] !== "object")
                            throw TypeError(".backend.user_service.UsersInfo.users: object expected");
                        message.users[i] = $root.backend.user_service.UserInfo.fromObject(object.users[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a UsersInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {backend.user_service.UsersInfo} message UsersInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UsersInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.users = [];
                if (message.users && message.users.length) {
                    object.users = [];
                    for (var j = 0; j < message.users.length; ++j)
                        object.users[j] = $root.backend.user_service.UserInfo.toObject(message.users[j], options);
                }
                return object;
            };

            /**
             * Converts this UsersInfo to JSON.
             * @function toJSON
             * @memberof backend.user_service.UsersInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UsersInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UsersInfo
             * @function getTypeUrl
             * @memberof backend.user_service.UsersInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UsersInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.user_service.UsersInfo";
            };

            return UsersInfo;
        })();

        return user_service;
    })();

    backend.twofa_service = (function() {

        /**
         * Namespace twofa_service.
         * @memberof backend
         * @namespace
         */
        var twofa_service = {};

        twofa_service.TwoFactorAuthenticationService = (function() {

            /**
             * Constructs a new TwoFactorAuthenticationService service.
             * @memberof backend.twofa_service
             * @classdesc Represents a TwoFactorAuthenticationService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function TwoFactorAuthenticationService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (TwoFactorAuthenticationService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TwoFactorAuthenticationService;

            /**
             * Creates new TwoFactorAuthenticationService service using the specified rpc implementation.
             * @function create
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {TwoFactorAuthenticationService} RPC service. Useful where requests and/or responses are streamed.
             */
            TwoFactorAuthenticationService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#generateSetting}.
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @typedef GenerateSettingCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.twofa_service.Generate2faResponse} [response] Generate2faResponse
             */

            /**
             * Calls GenerateSetting.
             * @function generateSetting
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.IGenerate2faRequest} request Generate2faRequest message or plain object
             * @param {backend.twofa_service.TwoFactorAuthenticationService.GenerateSettingCallback} callback Node-style callback called with the error, if any, and Generate2faResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(TwoFactorAuthenticationService.prototype.generateSetting = function generateSetting(request, callback) {
                return this.rpcCall(generateSetting, $root.backend.twofa_service.Generate2faRequest, $root.backend.twofa_service.Generate2faResponse, request, callback);
            }, "name", { value: "GenerateSetting" });

            /**
             * Calls GenerateSetting.
             * @function generateSetting
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.IGenerate2faRequest} request Generate2faRequest message or plain object
             * @returns {Promise<backend.twofa_service.Generate2faResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#createSetting}.
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @typedef CreateSettingCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.twofa_service.Create2faResponse} [response] Create2faResponse
             */

            /**
             * Calls CreateSetting.
             * @function createSetting
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.ICreate2faRequest} request Create2faRequest message or plain object
             * @param {backend.twofa_service.TwoFactorAuthenticationService.CreateSettingCallback} callback Node-style callback called with the error, if any, and Create2faResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(TwoFactorAuthenticationService.prototype.createSetting = function createSetting(request, callback) {
                return this.rpcCall(createSetting, $root.backend.twofa_service.Create2faRequest, $root.backend.twofa_service.Create2faResponse, request, callback);
            }, "name", { value: "CreateSetting" });

            /**
             * Calls CreateSetting.
             * @function createSetting
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.ICreate2faRequest} request Create2faRequest message or plain object
             * @returns {Promise<backend.twofa_service.Create2faResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#validateResource}.
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @typedef ValidateResourceCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.twofa_service.Validate2faResponse} [response] Validate2faResponse
             */

            /**
             * Calls ValidateResource.
             * @function validateResource
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.IValidate2faRequest} request Validate2faRequest message or plain object
             * @param {backend.twofa_service.TwoFactorAuthenticationService.ValidateResourceCallback} callback Node-style callback called with the error, if any, and Validate2faResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(TwoFactorAuthenticationService.prototype.validateResource = function validateResource(request, callback) {
                return this.rpcCall(validateResource, $root.backend.twofa_service.Validate2faRequest, $root.backend.twofa_service.Validate2faResponse, request, callback);
            }, "name", { value: "ValidateResource" });

            /**
             * Calls ValidateResource.
             * @function validateResource
             * @memberof backend.twofa_service.TwoFactorAuthenticationService
             * @instance
             * @param {backend.twofa_service.IValidate2faRequest} request Validate2faRequest message or plain object
             * @returns {Promise<backend.twofa_service.Validate2faResponse>} Promise
             * @variation 2
             */

            return TwoFactorAuthenticationService;
        })();

        twofa_service.Generate2faRequest = (function() {

            /**
             * Properties of a Generate2faRequest.
             * @memberof backend.twofa_service
             * @interface IGenerate2faRequest
             * @property {string} label Generate2faRequest label
             */

            /**
             * Constructs a new Generate2faRequest.
             * @memberof backend.twofa_service
             * @classdesc Represents a Generate2faRequest.
             * @implements IGenerate2faRequest
             * @constructor
             * @param {backend.twofa_service.IGenerate2faRequest=} [properties] Properties to set
             */
            function Generate2faRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Generate2faRequest label.
             * @member {string} label
             * @memberof backend.twofa_service.Generate2faRequest
             * @instance
             */
            Generate2faRequest.prototype.label = "";

            /**
             * Creates a new Generate2faRequest instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {backend.twofa_service.IGenerate2faRequest=} [properties] Properties to set
             * @returns {backend.twofa_service.Generate2faRequest} Generate2faRequest instance
             */
            Generate2faRequest.create = function create(properties) {
                return new Generate2faRequest(properties);
            };

            /**
             * Encodes the specified Generate2faRequest message. Does not implicitly {@link backend.twofa_service.Generate2faRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {backend.twofa_service.IGenerate2faRequest} message Generate2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Generate2faRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
                return writer;
            };

            /**
             * Encodes the specified Generate2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Generate2faRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {backend.twofa_service.IGenerate2faRequest} message Generate2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Generate2faRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Generate2faRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Generate2faRequest} Generate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Generate2faRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Generate2faRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.label = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("label"))
                    throw $util.ProtocolError("missing required 'label'", { instance: message });
                return message;
            };

            /**
             * Decodes a Generate2faRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Generate2faRequest} Generate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Generate2faRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Generate2faRequest message.
             * @function verify
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Generate2faRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.label))
                    return "label: string expected";
                return null;
            };

            /**
             * Creates a Generate2faRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Generate2faRequest} Generate2faRequest
             */
            Generate2faRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Generate2faRequest)
                    return object;
                var message = new $root.backend.twofa_service.Generate2faRequest();
                if (object.label != null)
                    message.label = String(object.label);
                return message;
            };

            /**
             * Creates a plain object from a Generate2faRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {backend.twofa_service.Generate2faRequest} message Generate2faRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Generate2faRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.label = "";
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                return object;
            };

            /**
             * Converts this Generate2faRequest to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Generate2faRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Generate2faRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Generate2faRequest
             * @function getTypeUrl
             * @memberof backend.twofa_service.Generate2faRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Generate2faRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Generate2faRequest";
            };

            return Generate2faRequest;
        })();

        twofa_service.Generate2faResponse = (function() {

            /**
             * Properties of a Generate2faResponse.
             * @memberof backend.twofa_service
             * @interface IGenerate2faResponse
             * @property {string} secret Generate2faResponse secret
             * @property {string} qrCode Generate2faResponse qrCode
             */

            /**
             * Constructs a new Generate2faResponse.
             * @memberof backend.twofa_service
             * @classdesc Represents a Generate2faResponse.
             * @implements IGenerate2faResponse
             * @constructor
             * @param {backend.twofa_service.IGenerate2faResponse=} [properties] Properties to set
             */
            function Generate2faResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Generate2faResponse secret.
             * @member {string} secret
             * @memberof backend.twofa_service.Generate2faResponse
             * @instance
             */
            Generate2faResponse.prototype.secret = "";

            /**
             * Generate2faResponse qrCode.
             * @member {string} qrCode
             * @memberof backend.twofa_service.Generate2faResponse
             * @instance
             */
            Generate2faResponse.prototype.qrCode = "";

            /**
             * Creates a new Generate2faResponse instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {backend.twofa_service.IGenerate2faResponse=} [properties] Properties to set
             * @returns {backend.twofa_service.Generate2faResponse} Generate2faResponse instance
             */
            Generate2faResponse.create = function create(properties) {
                return new Generate2faResponse(properties);
            };

            /**
             * Encodes the specified Generate2faResponse message. Does not implicitly {@link backend.twofa_service.Generate2faResponse.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {backend.twofa_service.IGenerate2faResponse} message Generate2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Generate2faResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.secret);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.qrCode);
                return writer;
            };

            /**
             * Encodes the specified Generate2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Generate2faResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {backend.twofa_service.IGenerate2faResponse} message Generate2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Generate2faResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Generate2faResponse message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Generate2faResponse} Generate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Generate2faResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Generate2faResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.secret = reader.string();
                            break;
                        }
                    case 2: {
                            message.qrCode = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("secret"))
                    throw $util.ProtocolError("missing required 'secret'", { instance: message });
                if (!message.hasOwnProperty("qrCode"))
                    throw $util.ProtocolError("missing required 'qrCode'", { instance: message });
                return message;
            };

            /**
             * Decodes a Generate2faResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Generate2faResponse} Generate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Generate2faResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Generate2faResponse message.
             * @function verify
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Generate2faResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.secret))
                    return "secret: string expected";
                if (!$util.isString(message.qrCode))
                    return "qrCode: string expected";
                return null;
            };

            /**
             * Creates a Generate2faResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Generate2faResponse} Generate2faResponse
             */
            Generate2faResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Generate2faResponse)
                    return object;
                var message = new $root.backend.twofa_service.Generate2faResponse();
                if (object.secret != null)
                    message.secret = String(object.secret);
                if (object.qrCode != null)
                    message.qrCode = String(object.qrCode);
                return message;
            };

            /**
             * Creates a plain object from a Generate2faResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {backend.twofa_service.Generate2faResponse} message Generate2faResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Generate2faResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.secret = "";
                    object.qrCode = "";
                }
                if (message.secret != null && message.hasOwnProperty("secret"))
                    object.secret = message.secret;
                if (message.qrCode != null && message.hasOwnProperty("qrCode"))
                    object.qrCode = message.qrCode;
                return object;
            };

            /**
             * Converts this Generate2faResponse to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Generate2faResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Generate2faResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Generate2faResponse
             * @function getTypeUrl
             * @memberof backend.twofa_service.Generate2faResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Generate2faResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Generate2faResponse";
            };

            return Generate2faResponse;
        })();

        twofa_service.Create2faRequest = (function() {

            /**
             * Properties of a Create2faRequest.
             * @memberof backend.twofa_service
             * @interface ICreate2faRequest
             * @property {string} resourceId Create2faRequest resourceId
             * @property {string} label Create2faRequest label
             * @property {string} secret Create2faRequest secret
             * @property {string} otp Create2faRequest otp
             */

            /**
             * Constructs a new Create2faRequest.
             * @memberof backend.twofa_service
             * @classdesc Represents a Create2faRequest.
             * @implements ICreate2faRequest
             * @constructor
             * @param {backend.twofa_service.ICreate2faRequest=} [properties] Properties to set
             */
            function Create2faRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Create2faRequest resourceId.
             * @member {string} resourceId
             * @memberof backend.twofa_service.Create2faRequest
             * @instance
             */
            Create2faRequest.prototype.resourceId = "";

            /**
             * Create2faRequest label.
             * @member {string} label
             * @memberof backend.twofa_service.Create2faRequest
             * @instance
             */
            Create2faRequest.prototype.label = "";

            /**
             * Create2faRequest secret.
             * @member {string} secret
             * @memberof backend.twofa_service.Create2faRequest
             * @instance
             */
            Create2faRequest.prototype.secret = "";

            /**
             * Create2faRequest otp.
             * @member {string} otp
             * @memberof backend.twofa_service.Create2faRequest
             * @instance
             */
            Create2faRequest.prototype.otp = "";

            /**
             * Creates a new Create2faRequest instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {backend.twofa_service.ICreate2faRequest=} [properties] Properties to set
             * @returns {backend.twofa_service.Create2faRequest} Create2faRequest instance
             */
            Create2faRequest.create = function create(properties) {
                return new Create2faRequest(properties);
            };

            /**
             * Encodes the specified Create2faRequest message. Does not implicitly {@link backend.twofa_service.Create2faRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {backend.twofa_service.ICreate2faRequest} message Create2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create2faRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.secret);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.otp);
                return writer;
            };

            /**
             * Encodes the specified Create2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Create2faRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {backend.twofa_service.ICreate2faRequest} message Create2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create2faRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Create2faRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Create2faRequest} Create2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create2faRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Create2faRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 2: {
                            message.label = reader.string();
                            break;
                        }
                    case 3: {
                            message.secret = reader.string();
                            break;
                        }
                    case 4: {
                            message.otp = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("resourceId"))
                    throw $util.ProtocolError("missing required 'resourceId'", { instance: message });
                if (!message.hasOwnProperty("label"))
                    throw $util.ProtocolError("missing required 'label'", { instance: message });
                if (!message.hasOwnProperty("secret"))
                    throw $util.ProtocolError("missing required 'secret'", { instance: message });
                if (!message.hasOwnProperty("otp"))
                    throw $util.ProtocolError("missing required 'otp'", { instance: message });
                return message;
            };

            /**
             * Decodes a Create2faRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Create2faRequest} Create2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create2faRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Create2faRequest message.
             * @function verify
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Create2faRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
                if (!$util.isString(message.label))
                    return "label: string expected";
                if (!$util.isString(message.secret))
                    return "secret: string expected";
                if (!$util.isString(message.otp))
                    return "otp: string expected";
                return null;
            };

            /**
             * Creates a Create2faRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Create2faRequest} Create2faRequest
             */
            Create2faRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Create2faRequest)
                    return object;
                var message = new $root.backend.twofa_service.Create2faRequest();
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.label != null)
                    message.label = String(object.label);
                if (object.secret != null)
                    message.secret = String(object.secret);
                if (object.otp != null)
                    message.otp = String(object.otp);
                return message;
            };

            /**
             * Creates a plain object from a Create2faRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {backend.twofa_service.Create2faRequest} message Create2faRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Create2faRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.resourceId = "";
                    object.label = "";
                    object.secret = "";
                    object.otp = "";
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.label != null && message.hasOwnProperty("label"))
                    object.label = message.label;
                if (message.secret != null && message.hasOwnProperty("secret"))
                    object.secret = message.secret;
                if (message.otp != null && message.hasOwnProperty("otp"))
                    object.otp = message.otp;
                return object;
            };

            /**
             * Converts this Create2faRequest to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Create2faRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Create2faRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Create2faRequest
             * @function getTypeUrl
             * @memberof backend.twofa_service.Create2faRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Create2faRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Create2faRequest";
            };

            return Create2faRequest;
        })();

        twofa_service.Create2faResponse = (function() {

            /**
             * Properties of a Create2faResponse.
             * @memberof backend.twofa_service
             * @interface ICreate2faResponse
             * @property {string} resourceId Create2faResponse resourceId
             */

            /**
             * Constructs a new Create2faResponse.
             * @memberof backend.twofa_service
             * @classdesc Represents a Create2faResponse.
             * @implements ICreate2faResponse
             * @constructor
             * @param {backend.twofa_service.ICreate2faResponse=} [properties] Properties to set
             */
            function Create2faResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Create2faResponse resourceId.
             * @member {string} resourceId
             * @memberof backend.twofa_service.Create2faResponse
             * @instance
             */
            Create2faResponse.prototype.resourceId = "";

            /**
             * Creates a new Create2faResponse instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {backend.twofa_service.ICreate2faResponse=} [properties] Properties to set
             * @returns {backend.twofa_service.Create2faResponse} Create2faResponse instance
             */
            Create2faResponse.create = function create(properties) {
                return new Create2faResponse(properties);
            };

            /**
             * Encodes the specified Create2faResponse message. Does not implicitly {@link backend.twofa_service.Create2faResponse.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {backend.twofa_service.ICreate2faResponse} message Create2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create2faResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
                return writer;
            };

            /**
             * Encodes the specified Create2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Create2faResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {backend.twofa_service.ICreate2faResponse} message Create2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Create2faResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Create2faResponse message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Create2faResponse} Create2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create2faResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Create2faResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("resourceId"))
                    throw $util.ProtocolError("missing required 'resourceId'", { instance: message });
                return message;
            };

            /**
             * Decodes a Create2faResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Create2faResponse} Create2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Create2faResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Create2faResponse message.
             * @function verify
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Create2faResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
                return null;
            };

            /**
             * Creates a Create2faResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Create2faResponse} Create2faResponse
             */
            Create2faResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Create2faResponse)
                    return object;
                var message = new $root.backend.twofa_service.Create2faResponse();
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                return message;
            };

            /**
             * Creates a plain object from a Create2faResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {backend.twofa_service.Create2faResponse} message Create2faResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Create2faResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.resourceId = "";
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                return object;
            };

            /**
             * Converts this Create2faResponse to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Create2faResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Create2faResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Create2faResponse
             * @function getTypeUrl
             * @memberof backend.twofa_service.Create2faResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Create2faResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Create2faResponse";
            };

            return Create2faResponse;
        })();

        twofa_service.Validate2faRequest = (function() {

            /**
             * Properties of a Validate2faRequest.
             * @memberof backend.twofa_service
             * @interface IValidate2faRequest
             * @property {string} resourceId Validate2faRequest resourceId
             * @property {string} otp Validate2faRequest otp
             */

            /**
             * Constructs a new Validate2faRequest.
             * @memberof backend.twofa_service
             * @classdesc Represents a Validate2faRequest.
             * @implements IValidate2faRequest
             * @constructor
             * @param {backend.twofa_service.IValidate2faRequest=} [properties] Properties to set
             */
            function Validate2faRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Validate2faRequest resourceId.
             * @member {string} resourceId
             * @memberof backend.twofa_service.Validate2faRequest
             * @instance
             */
            Validate2faRequest.prototype.resourceId = "";

            /**
             * Validate2faRequest otp.
             * @member {string} otp
             * @memberof backend.twofa_service.Validate2faRequest
             * @instance
             */
            Validate2faRequest.prototype.otp = "";

            /**
             * Creates a new Validate2faRequest instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {backend.twofa_service.IValidate2faRequest=} [properties] Properties to set
             * @returns {backend.twofa_service.Validate2faRequest} Validate2faRequest instance
             */
            Validate2faRequest.create = function create(properties) {
                return new Validate2faRequest(properties);
            };

            /**
             * Encodes the specified Validate2faRequest message. Does not implicitly {@link backend.twofa_service.Validate2faRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {backend.twofa_service.IValidate2faRequest} message Validate2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validate2faRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.otp);
                return writer;
            };

            /**
             * Encodes the specified Validate2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Validate2faRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {backend.twofa_service.IValidate2faRequest} message Validate2faRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validate2faRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Validate2faRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Validate2faRequest} Validate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validate2faRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Validate2faRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceId = reader.string();
                            break;
                        }
                    case 2: {
                            message.otp = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("resourceId"))
                    throw $util.ProtocolError("missing required 'resourceId'", { instance: message });
                if (!message.hasOwnProperty("otp"))
                    throw $util.ProtocolError("missing required 'otp'", { instance: message });
                return message;
            };

            /**
             * Decodes a Validate2faRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Validate2faRequest} Validate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validate2faRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Validate2faRequest message.
             * @function verify
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Validate2faRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.resourceId))
                    return "resourceId: string expected";
                if (!$util.isString(message.otp))
                    return "otp: string expected";
                return null;
            };

            /**
             * Creates a Validate2faRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Validate2faRequest} Validate2faRequest
             */
            Validate2faRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Validate2faRequest)
                    return object;
                var message = new $root.backend.twofa_service.Validate2faRequest();
                if (object.resourceId != null)
                    message.resourceId = String(object.resourceId);
                if (object.otp != null)
                    message.otp = String(object.otp);
                return message;
            };

            /**
             * Creates a plain object from a Validate2faRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {backend.twofa_service.Validate2faRequest} message Validate2faRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Validate2faRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.resourceId = "";
                    object.otp = "";
                }
                if (message.resourceId != null && message.hasOwnProperty("resourceId"))
                    object.resourceId = message.resourceId;
                if (message.otp != null && message.hasOwnProperty("otp"))
                    object.otp = message.otp;
                return object;
            };

            /**
             * Converts this Validate2faRequest to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Validate2faRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Validate2faRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Validate2faRequest
             * @function getTypeUrl
             * @memberof backend.twofa_service.Validate2faRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Validate2faRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Validate2faRequest";
            };

            return Validate2faRequest;
        })();

        twofa_service.Validate2faResponse = (function() {

            /**
             * Properties of a Validate2faResponse.
             * @memberof backend.twofa_service
             * @interface IValidate2faResponse
             * @property {boolean} success Validate2faResponse success
             * @property {string} status Validate2faResponse status
             */

            /**
             * Constructs a new Validate2faResponse.
             * @memberof backend.twofa_service
             * @classdesc Represents a Validate2faResponse.
             * @implements IValidate2faResponse
             * @constructor
             * @param {backend.twofa_service.IValidate2faResponse=} [properties] Properties to set
             */
            function Validate2faResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Validate2faResponse success.
             * @member {boolean} success
             * @memberof backend.twofa_service.Validate2faResponse
             * @instance
             */
            Validate2faResponse.prototype.success = false;

            /**
             * Validate2faResponse status.
             * @member {string} status
             * @memberof backend.twofa_service.Validate2faResponse
             * @instance
             */
            Validate2faResponse.prototype.status = "";

            /**
             * Creates a new Validate2faResponse instance using the specified properties.
             * @function create
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {backend.twofa_service.IValidate2faResponse=} [properties] Properties to set
             * @returns {backend.twofa_service.Validate2faResponse} Validate2faResponse instance
             */
            Validate2faResponse.create = function create(properties) {
                return new Validate2faResponse(properties);
            };

            /**
             * Encodes the specified Validate2faResponse message. Does not implicitly {@link backend.twofa_service.Validate2faResponse.verify|verify} messages.
             * @function encode
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {backend.twofa_service.IValidate2faResponse} message Validate2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validate2faResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
                return writer;
            };

            /**
             * Encodes the specified Validate2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Validate2faResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {backend.twofa_service.IValidate2faResponse} message Validate2faResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Validate2faResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Validate2faResponse message from the specified reader or buffer.
             * @function decode
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.twofa_service.Validate2faResponse} Validate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validate2faResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.twofa_service.Validate2faResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.success = reader.bool();
                            break;
                        }
                    case 2: {
                            message.status = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("success"))
                    throw $util.ProtocolError("missing required 'success'", { instance: message });
                if (!message.hasOwnProperty("status"))
                    throw $util.ProtocolError("missing required 'status'", { instance: message });
                return message;
            };

            /**
             * Decodes a Validate2faResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.twofa_service.Validate2faResponse} Validate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Validate2faResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Validate2faResponse message.
             * @function verify
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Validate2faResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
                if (!$util.isString(message.status))
                    return "status: string expected";
                return null;
            };

            /**
             * Creates a Validate2faResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.twofa_service.Validate2faResponse} Validate2faResponse
             */
            Validate2faResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.twofa_service.Validate2faResponse)
                    return object;
                var message = new $root.backend.twofa_service.Validate2faResponse();
                if (object.success != null)
                    message.success = Boolean(object.success);
                if (object.status != null)
                    message.status = String(object.status);
                return message;
            };

            /**
             * Creates a plain object from a Validate2faResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {backend.twofa_service.Validate2faResponse} message Validate2faResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Validate2faResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.success = false;
                    object.status = "";
                }
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                return object;
            };

            /**
             * Converts this Validate2faResponse to JSON.
             * @function toJSON
             * @memberof backend.twofa_service.Validate2faResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Validate2faResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Validate2faResponse
             * @function getTypeUrl
             * @memberof backend.twofa_service.Validate2faResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Validate2faResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.twofa_service.Validate2faResponse";
            };

            return Validate2faResponse;
        })();

        return twofa_service;
    })();

    backend.chat_service = (function() {

        /**
         * Namespace chat_service.
         * @memberof backend
         * @namespace
         */
        var chat_service = {};

        chat_service.ChatService = (function() {

            /**
             * Constructs a new ChatService service.
             * @memberof backend.chat_service
             * @classdesc Represents a ChatService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function ChatService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (ChatService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChatService;

            /**
             * Creates new ChatService service using the specified rpc implementation.
             * @function create
             * @memberof backend.chat_service.ChatService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {ChatService} RPC service. Useful where requests and/or responses are streamed.
             */
            ChatService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link backend.chat_service.ChatService#createConversation}.
             * @memberof backend.chat_service.ChatService
             * @typedef CreateConversationCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.chat_service.Conversation} [response] Conversation
             */

            /**
             * Calls CreateConversation.
             * @function createConversation
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ICreateConversationRequest} request CreateConversationRequest message or plain object
             * @param {backend.chat_service.ChatService.CreateConversationCallback} callback Node-style callback called with the error, if any, and Conversation
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChatService.prototype.createConversation = function createConversation(request, callback) {
                return this.rpcCall(createConversation, $root.backend.chat_service.CreateConversationRequest, $root.backend.chat_service.Conversation, request, callback);
            }, "name", { value: "CreateConversation" });

            /**
             * Calls CreateConversation.
             * @function createConversation
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ICreateConversationRequest} request CreateConversationRequest message or plain object
             * @returns {Promise<backend.chat_service.Conversation>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.chat_service.ChatService#createChatMessage}.
             * @memberof backend.chat_service.ChatService
             * @typedef CreateChatMessageCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.chat_service.ChatMessage} [response] ChatMessage
             */

            /**
             * Calls CreateChatMessage.
             * @function createChatMessage
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ICreateChatMessageRequest} request CreateChatMessageRequest message or plain object
             * @param {backend.chat_service.ChatService.CreateChatMessageCallback} callback Node-style callback called with the error, if any, and ChatMessage
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChatService.prototype.createChatMessage = function createChatMessage(request, callback) {
                return this.rpcCall(createChatMessage, $root.backend.chat_service.CreateChatMessageRequest, $root.backend.chat_service.ChatMessage, request, callback);
            }, "name", { value: "CreateChatMessage" });

            /**
             * Calls CreateChatMessage.
             * @function createChatMessage
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ICreateChatMessageRequest} request CreateChatMessageRequest message or plain object
             * @returns {Promise<backend.chat_service.ChatMessage>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.chat_service.ChatService#searchConversations}.
             * @memberof backend.chat_service.ChatService
             * @typedef SearchConversationsCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.chat_service.SearchConversationsPaginationResponse} [response] SearchConversationsPaginationResponse
             */

            /**
             * Calls SearchConversations.
             * @function searchConversations
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ISearchConversationsRequest} request SearchConversationsRequest message or plain object
             * @param {backend.chat_service.ChatService.SearchConversationsCallback} callback Node-style callback called with the error, if any, and SearchConversationsPaginationResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChatService.prototype.searchConversations = function searchConversations(request, callback) {
                return this.rpcCall(searchConversations, $root.backend.chat_service.SearchConversationsRequest, $root.backend.chat_service.SearchConversationsPaginationResponse, request, callback);
            }, "name", { value: "SearchConversations" });

            /**
             * Calls SearchConversations.
             * @function searchConversations
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.ISearchConversationsRequest} request SearchConversationsRequest message or plain object
             * @returns {Promise<backend.chat_service.SearchConversationsPaginationResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link backend.chat_service.ChatService#findConversation}.
             * @memberof backend.chat_service.ChatService
             * @typedef FindConversationCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {backend.chat_service.Conversation} [response] Conversation
             */

            /**
             * Calls FindConversation.
             * @function findConversation
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.IFindConversationRequest} request FindConversationRequest message or plain object
             * @param {backend.chat_service.ChatService.FindConversationCallback} callback Node-style callback called with the error, if any, and Conversation
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(ChatService.prototype.findConversation = function findConversation(request, callback) {
                return this.rpcCall(findConversation, $root.backend.chat_service.FindConversationRequest, $root.backend.chat_service.Conversation, request, callback);
            }, "name", { value: "FindConversation" });

            /**
             * Calls FindConversation.
             * @function findConversation
             * @memberof backend.chat_service.ChatService
             * @instance
             * @param {backend.chat_service.IFindConversationRequest} request FindConversationRequest message or plain object
             * @returns {Promise<backend.chat_service.Conversation>} Promise
             * @variation 2
             */

            return ChatService;
        })();

        chat_service.ChatMessage = (function() {

            /**
             * Properties of a ChatMessage.
             * @memberof backend.chat_service
             * @interface IChatMessage
             * @property {string} id ChatMessage id
             * @property {string} conversationId ChatMessage conversationId
             * @property {string} fromUserId ChatMessage fromUserId
             * @property {string} messageContent ChatMessage messageContent
             * @property {google.protobuf.ITimestamp} createdAt ChatMessage createdAt
             */

            /**
             * Constructs a new ChatMessage.
             * @memberof backend.chat_service
             * @classdesc Represents a ChatMessage.
             * @implements IChatMessage
             * @constructor
             * @param {backend.chat_service.IChatMessage=} [properties] Properties to set
             */
            function ChatMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatMessage id.
             * @member {string} id
             * @memberof backend.chat_service.ChatMessage
             * @instance
             */
            ChatMessage.prototype.id = "";

            /**
             * ChatMessage conversationId.
             * @member {string} conversationId
             * @memberof backend.chat_service.ChatMessage
             * @instance
             */
            ChatMessage.prototype.conversationId = "";

            /**
             * ChatMessage fromUserId.
             * @member {string} fromUserId
             * @memberof backend.chat_service.ChatMessage
             * @instance
             */
            ChatMessage.prototype.fromUserId = "";

            /**
             * ChatMessage messageContent.
             * @member {string} messageContent
             * @memberof backend.chat_service.ChatMessage
             * @instance
             */
            ChatMessage.prototype.messageContent = "";

            /**
             * ChatMessage createdAt.
             * @member {google.protobuf.ITimestamp} createdAt
             * @memberof backend.chat_service.ChatMessage
             * @instance
             */
            ChatMessage.prototype.createdAt = null;

            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {backend.chat_service.IChatMessage=} [properties] Properties to set
             * @returns {backend.chat_service.ChatMessage} ChatMessage instance
             */
            ChatMessage.create = function create(properties) {
                return new ChatMessage(properties);
            };

            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link backend.chat_service.ChatMessage.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {backend.chat_service.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.conversationId);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromUserId);
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.messageContent);
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link backend.chat_service.ChatMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {backend.chat_service.IChatMessage} message ChatMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.ChatMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.conversationId = reader.string();
                            break;
                        }
                    case 3: {
                            message.fromUserId = reader.string();
                            break;
                        }
                    case 4: {
                            message.messageContent = reader.string();
                            break;
                        }
                    case 5: {
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("conversationId"))
                    throw $util.ProtocolError("missing required 'conversationId'", { instance: message });
                if (!message.hasOwnProperty("fromUserId"))
                    throw $util.ProtocolError("missing required 'fromUserId'", { instance: message });
                if (!message.hasOwnProperty("messageContent"))
                    throw $util.ProtocolError("missing required 'messageContent'", { instance: message });
                if (!message.hasOwnProperty("createdAt"))
                    throw $util.ProtocolError("missing required 'createdAt'", { instance: message });
                return message;
            };

            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.ChatMessage} ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatMessage message.
             * @function verify
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
                if (!$util.isString(message.fromUserId))
                    return "fromUserId: string expected";
                if (!$util.isString(message.messageContent))
                    return "messageContent: string expected";
                {
                    var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                    if (error)
                        return "createdAt." + error;
                }
                return null;
            };

            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.ChatMessage} ChatMessage
             */
            ChatMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.ChatMessage)
                    return object;
                var message = new $root.backend.chat_service.ChatMessage();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.conversationId != null)
                    message.conversationId = String(object.conversationId);
                if (object.fromUserId != null)
                    message.fromUserId = String(object.fromUserId);
                if (object.messageContent != null)
                    message.messageContent = String(object.messageContent);
                if (object.createdAt != null) {
                    if (typeof object.createdAt !== "object")
                        throw TypeError(".backend.chat_service.ChatMessage.createdAt: object expected");
                    message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                }
                return message;
            };

            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {backend.chat_service.ChatMessage} message ChatMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = "";
                    object.conversationId = "";
                    object.fromUserId = "";
                    object.messageContent = "";
                    object.createdAt = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                    object.conversationId = message.conversationId;
                if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                    object.fromUserId = message.fromUserId;
                if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                    object.messageContent = message.messageContent;
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                return object;
            };

            /**
             * Converts this ChatMessage to JSON.
             * @function toJSON
             * @memberof backend.chat_service.ChatMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ChatMessage
             * @function getTypeUrl
             * @memberof backend.chat_service.ChatMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ChatMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.ChatMessage";
            };

            return ChatMessage;
        })();

        /**
         * ConversationType enum.
         * @name backend.chat_service.ConversationType
         * @enum {number}
         * @property {number} PRIVATE=1 PRIVATE value
         * @property {number} GROUP=2 GROUP value
         */
        chat_service.ConversationType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "PRIVATE"] = 1;
            values[valuesById[2] = "GROUP"] = 2;
            return values;
        })();

        chat_service.FindConversationRequest = (function() {

            /**
             * Properties of a FindConversationRequest.
             * @memberof backend.chat_service
             * @interface IFindConversationRequest
             * @property {string} conversationId FindConversationRequest conversationId
             * @property {number} messagePageNumber FindConversationRequest messagePageNumber
             * @property {number} messagePageSize FindConversationRequest messagePageSize
             */

            /**
             * Constructs a new FindConversationRequest.
             * @memberof backend.chat_service
             * @classdesc Represents a FindConversationRequest.
             * @implements IFindConversationRequest
             * @constructor
             * @param {backend.chat_service.IFindConversationRequest=} [properties] Properties to set
             */
            function FindConversationRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FindConversationRequest conversationId.
             * @member {string} conversationId
             * @memberof backend.chat_service.FindConversationRequest
             * @instance
             */
            FindConversationRequest.prototype.conversationId = "";

            /**
             * FindConversationRequest messagePageNumber.
             * @member {number} messagePageNumber
             * @memberof backend.chat_service.FindConversationRequest
             * @instance
             */
            FindConversationRequest.prototype.messagePageNumber = 0;

            /**
             * FindConversationRequest messagePageSize.
             * @member {number} messagePageSize
             * @memberof backend.chat_service.FindConversationRequest
             * @instance
             */
            FindConversationRequest.prototype.messagePageSize = 0;

            /**
             * Creates a new FindConversationRequest instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {backend.chat_service.IFindConversationRequest=} [properties] Properties to set
             * @returns {backend.chat_service.FindConversationRequest} FindConversationRequest instance
             */
            FindConversationRequest.create = function create(properties) {
                return new FindConversationRequest(properties);
            };

            /**
             * Encodes the specified FindConversationRequest message. Does not implicitly {@link backend.chat_service.FindConversationRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {backend.chat_service.IFindConversationRequest} message FindConversationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindConversationRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.messagePageNumber);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.messagePageSize);
                return writer;
            };

            /**
             * Encodes the specified FindConversationRequest message, length delimited. Does not implicitly {@link backend.chat_service.FindConversationRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {backend.chat_service.IFindConversationRequest} message FindConversationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FindConversationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FindConversationRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.FindConversationRequest} FindConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindConversationRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.FindConversationRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.conversationId = reader.string();
                            break;
                        }
                    case 2: {
                            message.messagePageNumber = reader.int32();
                            break;
                        }
                    case 3: {
                            message.messagePageSize = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("conversationId"))
                    throw $util.ProtocolError("missing required 'conversationId'", { instance: message });
                if (!message.hasOwnProperty("messagePageNumber"))
                    throw $util.ProtocolError("missing required 'messagePageNumber'", { instance: message });
                if (!message.hasOwnProperty("messagePageSize"))
                    throw $util.ProtocolError("missing required 'messagePageSize'", { instance: message });
                return message;
            };

            /**
             * Decodes a FindConversationRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.FindConversationRequest} FindConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FindConversationRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FindConversationRequest message.
             * @function verify
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FindConversationRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
                if (!$util.isInteger(message.messagePageNumber))
                    return "messagePageNumber: integer expected";
                if (!$util.isInteger(message.messagePageSize))
                    return "messagePageSize: integer expected";
                return null;
            };

            /**
             * Creates a FindConversationRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.FindConversationRequest} FindConversationRequest
             */
            FindConversationRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.FindConversationRequest)
                    return object;
                var message = new $root.backend.chat_service.FindConversationRequest();
                if (object.conversationId != null)
                    message.conversationId = String(object.conversationId);
                if (object.messagePageNumber != null)
                    message.messagePageNumber = object.messagePageNumber | 0;
                if (object.messagePageSize != null)
                    message.messagePageSize = object.messagePageSize | 0;
                return message;
            };

            /**
             * Creates a plain object from a FindConversationRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {backend.chat_service.FindConversationRequest} message FindConversationRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FindConversationRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.conversationId = "";
                    object.messagePageNumber = 0;
                    object.messagePageSize = 0;
                }
                if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                    object.conversationId = message.conversationId;
                if (message.messagePageNumber != null && message.hasOwnProperty("messagePageNumber"))
                    object.messagePageNumber = message.messagePageNumber;
                if (message.messagePageSize != null && message.hasOwnProperty("messagePageSize"))
                    object.messagePageSize = message.messagePageSize;
                return object;
            };

            /**
             * Converts this FindConversationRequest to JSON.
             * @function toJSON
             * @memberof backend.chat_service.FindConversationRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FindConversationRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FindConversationRequest
             * @function getTypeUrl
             * @memberof backend.chat_service.FindConversationRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FindConversationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.FindConversationRequest";
            };

            return FindConversationRequest;
        })();

        chat_service.CreateConversationRequest = (function() {

            /**
             * Properties of a CreateConversationRequest.
             * @memberof backend.chat_service
             * @interface ICreateConversationRequest
             * @property {string|null} [ownerId] CreateConversationRequest ownerId
             * @property {string|null} [name] CreateConversationRequest name
             * @property {backend.chat_service.ConversationType} type CreateConversationRequest type
             * @property {Array.<string>|null} [memberIds] CreateConversationRequest memberIds
             */

            /**
             * Constructs a new CreateConversationRequest.
             * @memberof backend.chat_service
             * @classdesc Represents a CreateConversationRequest.
             * @implements ICreateConversationRequest
             * @constructor
             * @param {backend.chat_service.ICreateConversationRequest=} [properties] Properties to set
             */
            function CreateConversationRequest(properties) {
                this.memberIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateConversationRequest ownerId.
             * @member {string|null|undefined} ownerId
             * @memberof backend.chat_service.CreateConversationRequest
             * @instance
             */
            CreateConversationRequest.prototype.ownerId = null;

            /**
             * CreateConversationRequest name.
             * @member {string|null|undefined} name
             * @memberof backend.chat_service.CreateConversationRequest
             * @instance
             */
            CreateConversationRequest.prototype.name = null;

            /**
             * CreateConversationRequest type.
             * @member {backend.chat_service.ConversationType} type
             * @memberof backend.chat_service.CreateConversationRequest
             * @instance
             */
            CreateConversationRequest.prototype.type = 1;

            /**
             * CreateConversationRequest memberIds.
             * @member {Array.<string>} memberIds
             * @memberof backend.chat_service.CreateConversationRequest
             * @instance
             */
            CreateConversationRequest.prototype.memberIds = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CreateConversationRequest.prototype, "_ownerId", {
                get: $util.oneOfGetter($oneOfFields = ["ownerId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(CreateConversationRequest.prototype, "_name", {
                get: $util.oneOfGetter($oneOfFields = ["name"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new CreateConversationRequest instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {backend.chat_service.ICreateConversationRequest=} [properties] Properties to set
             * @returns {backend.chat_service.CreateConversationRequest} CreateConversationRequest instance
             */
            CreateConversationRequest.create = function create(properties) {
                return new CreateConversationRequest(properties);
            };

            /**
             * Encodes the specified CreateConversationRequest message. Does not implicitly {@link backend.chat_service.CreateConversationRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {backend.chat_service.ICreateConversationRequest} message CreateConversationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateConversationRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ownerId);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
                if (message.memberIds != null && message.memberIds.length)
                    for (var i = 0; i < message.memberIds.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.memberIds[i]);
                return writer;
            };

            /**
             * Encodes the specified CreateConversationRequest message, length delimited. Does not implicitly {@link backend.chat_service.CreateConversationRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {backend.chat_service.ICreateConversationRequest} message CreateConversationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateConversationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateConversationRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.CreateConversationRequest} CreateConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateConversationRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.CreateConversationRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ownerId = reader.string();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.type = reader.int32();
                            break;
                        }
                    case 4: {
                            if (!(message.memberIds && message.memberIds.length))
                                message.memberIds = [];
                            message.memberIds.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreateConversationRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.CreateConversationRequest} CreateConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateConversationRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateConversationRequest message.
             * @function verify
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateConversationRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.ownerId != null && message.hasOwnProperty("ownerId")) {
                    properties._ownerId = 1;
                    if (!$util.isString(message.ownerId))
                        return "ownerId: string expected";
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                    properties._name = 1;
                    if (!$util.isString(message.name))
                        return "name: string expected";
                }
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                    break;
                }
                if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                    if (!Array.isArray(message.memberIds))
                        return "memberIds: array expected";
                    for (var i = 0; i < message.memberIds.length; ++i)
                        if (!$util.isString(message.memberIds[i]))
                            return "memberIds: string[] expected";
                }
                return null;
            };

            /**
             * Creates a CreateConversationRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.CreateConversationRequest} CreateConversationRequest
             */
            CreateConversationRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.CreateConversationRequest)
                    return object;
                var message = new $root.backend.chat_service.CreateConversationRequest();
                if (object.ownerId != null)
                    message.ownerId = String(object.ownerId);
                if (object.name != null)
                    message.name = String(object.name);
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "PRIVATE":
                case 1:
                    message.type = 1;
                    break;
                case "GROUP":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.memberIds) {
                    if (!Array.isArray(object.memberIds))
                        throw TypeError(".backend.chat_service.CreateConversationRequest.memberIds: array expected");
                    message.memberIds = [];
                    for (var i = 0; i < object.memberIds.length; ++i)
                        message.memberIds[i] = String(object.memberIds[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateConversationRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {backend.chat_service.CreateConversationRequest} message CreateConversationRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateConversationRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.memberIds = [];
                if (options.defaults)
                    object.type = options.enums === String ? "PRIVATE" : 1;
                if (message.ownerId != null && message.hasOwnProperty("ownerId")) {
                    object.ownerId = message.ownerId;
                    if (options.oneofs)
                        object._ownerId = "ownerId";
                }
                if (message.name != null && message.hasOwnProperty("name")) {
                    object.name = message.name;
                    if (options.oneofs)
                        object._name = "name";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.backend.chat_service.ConversationType[message.type] === undefined ? message.type : $root.backend.chat_service.ConversationType[message.type] : message.type;
                if (message.memberIds && message.memberIds.length) {
                    object.memberIds = [];
                    for (var j = 0; j < message.memberIds.length; ++j)
                        object.memberIds[j] = message.memberIds[j];
                }
                return object;
            };

            /**
             * Converts this CreateConversationRequest to JSON.
             * @function toJSON
             * @memberof backend.chat_service.CreateConversationRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateConversationRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateConversationRequest
             * @function getTypeUrl
             * @memberof backend.chat_service.CreateConversationRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateConversationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.CreateConversationRequest";
            };

            return CreateConversationRequest;
        })();

        chat_service.CreateChatMessageRequest = (function() {

            /**
             * Properties of a CreateChatMessageRequest.
             * @memberof backend.chat_service
             * @interface ICreateChatMessageRequest
             * @property {string} conversationId CreateChatMessageRequest conversationId
             * @property {string} fromUserId CreateChatMessageRequest fromUserId
             * @property {string} messageContent CreateChatMessageRequest messageContent
             */

            /**
             * Constructs a new CreateChatMessageRequest.
             * @memberof backend.chat_service
             * @classdesc Represents a CreateChatMessageRequest.
             * @implements ICreateChatMessageRequest
             * @constructor
             * @param {backend.chat_service.ICreateChatMessageRequest=} [properties] Properties to set
             */
            function CreateChatMessageRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateChatMessageRequest conversationId.
             * @member {string} conversationId
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @instance
             */
            CreateChatMessageRequest.prototype.conversationId = "";

            /**
             * CreateChatMessageRequest fromUserId.
             * @member {string} fromUserId
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @instance
             */
            CreateChatMessageRequest.prototype.fromUserId = "";

            /**
             * CreateChatMessageRequest messageContent.
             * @member {string} messageContent
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @instance
             */
            CreateChatMessageRequest.prototype.messageContent = "";

            /**
             * Creates a new CreateChatMessageRequest instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {backend.chat_service.ICreateChatMessageRequest=} [properties] Properties to set
             * @returns {backend.chat_service.CreateChatMessageRequest} CreateChatMessageRequest instance
             */
            CreateChatMessageRequest.create = function create(properties) {
                return new CreateChatMessageRequest(properties);
            };

            /**
             * Encodes the specified CreateChatMessageRequest message. Does not implicitly {@link backend.chat_service.CreateChatMessageRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {backend.chat_service.ICreateChatMessageRequest} message CreateChatMessageRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateChatMessageRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversationId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fromUserId);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.messageContent);
                return writer;
            };

            /**
             * Encodes the specified CreateChatMessageRequest message, length delimited. Does not implicitly {@link backend.chat_service.CreateChatMessageRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {backend.chat_service.ICreateChatMessageRequest} message CreateChatMessageRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateChatMessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateChatMessageRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.CreateChatMessageRequest} CreateChatMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateChatMessageRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.CreateChatMessageRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.conversationId = reader.string();
                            break;
                        }
                    case 2: {
                            message.fromUserId = reader.string();
                            break;
                        }
                    case 3: {
                            message.messageContent = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("conversationId"))
                    throw $util.ProtocolError("missing required 'conversationId'", { instance: message });
                if (!message.hasOwnProperty("fromUserId"))
                    throw $util.ProtocolError("missing required 'fromUserId'", { instance: message });
                if (!message.hasOwnProperty("messageContent"))
                    throw $util.ProtocolError("missing required 'messageContent'", { instance: message });
                return message;
            };

            /**
             * Decodes a CreateChatMessageRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.CreateChatMessageRequest} CreateChatMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateChatMessageRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateChatMessageRequest message.
             * @function verify
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateChatMessageRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
                if (!$util.isString(message.fromUserId))
                    return "fromUserId: string expected";
                if (!$util.isString(message.messageContent))
                    return "messageContent: string expected";
                return null;
            };

            /**
             * Creates a CreateChatMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.CreateChatMessageRequest} CreateChatMessageRequest
             */
            CreateChatMessageRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.CreateChatMessageRequest)
                    return object;
                var message = new $root.backend.chat_service.CreateChatMessageRequest();
                if (object.conversationId != null)
                    message.conversationId = String(object.conversationId);
                if (object.fromUserId != null)
                    message.fromUserId = String(object.fromUserId);
                if (object.messageContent != null)
                    message.messageContent = String(object.messageContent);
                return message;
            };

            /**
             * Creates a plain object from a CreateChatMessageRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {backend.chat_service.CreateChatMessageRequest} message CreateChatMessageRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateChatMessageRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.conversationId = "";
                    object.fromUserId = "";
                    object.messageContent = "";
                }
                if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                    object.conversationId = message.conversationId;
                if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                    object.fromUserId = message.fromUserId;
                if (message.messageContent != null && message.hasOwnProperty("messageContent"))
                    object.messageContent = message.messageContent;
                return object;
            };

            /**
             * Converts this CreateChatMessageRequest to JSON.
             * @function toJSON
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateChatMessageRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateChatMessageRequest
             * @function getTypeUrl
             * @memberof backend.chat_service.CreateChatMessageRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateChatMessageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.CreateChatMessageRequest";
            };

            return CreateChatMessageRequest;
        })();

        chat_service.Conversation = (function() {

            /**
             * Properties of a Conversation.
             * @memberof backend.chat_service
             * @interface IConversation
             * @property {string} id Conversation id
             * @property {backend.chat_service.ConversationType} type Conversation type
             * @property {string} name Conversation name
             * @property {Array.<string>|null} [memberIds] Conversation memberIds
             * @property {Array.<backend.chat_service.IChatMessage>|null} [messages] Conversation messages
             * @property {google.protobuf.ITimestamp} createdAt Conversation createdAt
             */

            /**
             * Constructs a new Conversation.
             * @memberof backend.chat_service
             * @classdesc Represents a Conversation.
             * @implements IConversation
             * @constructor
             * @param {backend.chat_service.IConversation=} [properties] Properties to set
             */
            function Conversation(properties) {
                this.memberIds = [];
                this.messages = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Conversation id.
             * @member {string} id
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.id = "";

            /**
             * Conversation type.
             * @member {backend.chat_service.ConversationType} type
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.type = 1;

            /**
             * Conversation name.
             * @member {string} name
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.name = "";

            /**
             * Conversation memberIds.
             * @member {Array.<string>} memberIds
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.memberIds = $util.emptyArray;

            /**
             * Conversation messages.
             * @member {Array.<backend.chat_service.IChatMessage>} messages
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.messages = $util.emptyArray;

            /**
             * Conversation createdAt.
             * @member {google.protobuf.ITimestamp} createdAt
             * @memberof backend.chat_service.Conversation
             * @instance
             */
            Conversation.prototype.createdAt = null;

            /**
             * Creates a new Conversation instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {backend.chat_service.IConversation=} [properties] Properties to set
             * @returns {backend.chat_service.Conversation} Conversation instance
             */
            Conversation.create = function create(properties) {
                return new Conversation(properties);
            };

            /**
             * Encodes the specified Conversation message. Does not implicitly {@link backend.chat_service.Conversation.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {backend.chat_service.IConversation} message Conversation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Conversation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                if (message.memberIds != null && message.memberIds.length)
                    for (var i = 0; i < message.memberIds.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.memberIds[i]);
                if (message.messages != null && message.messages.length)
                    for (var i = 0; i < message.messages.length; ++i)
                        $root.backend.chat_service.ChatMessage.encode(message.messages[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Conversation message, length delimited. Does not implicitly {@link backend.chat_service.Conversation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {backend.chat_service.IConversation} message Conversation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Conversation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Conversation message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.Conversation} Conversation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Conversation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.Conversation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.type = reader.int32();
                            break;
                        }
                    case 3: {
                            message.name = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.memberIds && message.memberIds.length))
                                message.memberIds = [];
                            message.memberIds.push(reader.string());
                            break;
                        }
                    case 5: {
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.backend.chat_service.ChatMessage.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("name"))
                    throw $util.ProtocolError("missing required 'name'", { instance: message });
                if (!message.hasOwnProperty("createdAt"))
                    throw $util.ProtocolError("missing required 'createdAt'", { instance: message });
                return message;
            };

            /**
             * Decodes a Conversation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.Conversation} Conversation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Conversation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Conversation message.
             * @function verify
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Conversation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isString(message.id))
                    return "id: string expected";
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 1:
                case 2:
                    break;
                }
                if (!$util.isString(message.name))
                    return "name: string expected";
                if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                    if (!Array.isArray(message.memberIds))
                        return "memberIds: array expected";
                    for (var i = 0; i < message.memberIds.length; ++i)
                        if (!$util.isString(message.memberIds[i]))
                            return "memberIds: string[] expected";
                }
                if (message.messages != null && message.hasOwnProperty("messages")) {
                    if (!Array.isArray(message.messages))
                        return "messages: array expected";
                    for (var i = 0; i < message.messages.length; ++i) {
                        var error = $root.backend.chat_service.ChatMessage.verify(message.messages[i]);
                        if (error)
                            return "messages." + error;
                    }
                }
                {
                    var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                    if (error)
                        return "createdAt." + error;
                }
                return null;
            };

            /**
             * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.Conversation} Conversation
             */
            Conversation.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.Conversation)
                    return object;
                var message = new $root.backend.chat_service.Conversation();
                if (object.id != null)
                    message.id = String(object.id);
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "PRIVATE":
                case 1:
                    message.type = 1;
                    break;
                case "GROUP":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.name != null)
                    message.name = String(object.name);
                if (object.memberIds) {
                    if (!Array.isArray(object.memberIds))
                        throw TypeError(".backend.chat_service.Conversation.memberIds: array expected");
                    message.memberIds = [];
                    for (var i = 0; i < object.memberIds.length; ++i)
                        message.memberIds[i] = String(object.memberIds[i]);
                }
                if (object.messages) {
                    if (!Array.isArray(object.messages))
                        throw TypeError(".backend.chat_service.Conversation.messages: array expected");
                    message.messages = [];
                    for (var i = 0; i < object.messages.length; ++i) {
                        if (typeof object.messages[i] !== "object")
                            throw TypeError(".backend.chat_service.Conversation.messages: object expected");
                        message.messages[i] = $root.backend.chat_service.ChatMessage.fromObject(object.messages[i]);
                    }
                }
                if (object.createdAt != null) {
                    if (typeof object.createdAt !== "object")
                        throw TypeError(".backend.chat_service.Conversation.createdAt: object expected");
                    message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                }
                return message;
            };

            /**
             * Creates a plain object from a Conversation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {backend.chat_service.Conversation} message Conversation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Conversation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.memberIds = [];
                    object.messages = [];
                }
                if (options.defaults) {
                    object.id = "";
                    object.type = options.enums === String ? "PRIVATE" : 1;
                    object.name = "";
                    object.createdAt = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.backend.chat_service.ConversationType[message.type] === undefined ? message.type : $root.backend.chat_service.ConversationType[message.type] : message.type;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.memberIds && message.memberIds.length) {
                    object.memberIds = [];
                    for (var j = 0; j < message.memberIds.length; ++j)
                        object.memberIds[j] = message.memberIds[j];
                }
                if (message.messages && message.messages.length) {
                    object.messages = [];
                    for (var j = 0; j < message.messages.length; ++j)
                        object.messages[j] = $root.backend.chat_service.ChatMessage.toObject(message.messages[j], options);
                }
                if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                    object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                return object;
            };

            /**
             * Converts this Conversation to JSON.
             * @function toJSON
             * @memberof backend.chat_service.Conversation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Conversation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Conversation
             * @function getTypeUrl
             * @memberof backend.chat_service.Conversation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Conversation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.Conversation";
            };

            return Conversation;
        })();

        chat_service.SearchConversationsRequest = (function() {

            /**
             * Properties of a SearchConversationsRequest.
             * @memberof backend.chat_service
             * @interface ISearchConversationsRequest
             * @property {backend.chat_service.ConversationType|null} [type] SearchConversationsRequest type
             * @property {Array.<string>|null} [memberIds] SearchConversationsRequest memberIds
             * @property {string|null} [term] SearchConversationsRequest term
             * @property {number|null} [pageNumber] SearchConversationsRequest pageNumber
             * @property {number|null} [pageSize] SearchConversationsRequest pageSize
             * @property {number} messagePageSize SearchConversationsRequest messagePageSize
             */

            /**
             * Constructs a new SearchConversationsRequest.
             * @memberof backend.chat_service
             * @classdesc Represents a SearchConversationsRequest.
             * @implements ISearchConversationsRequest
             * @constructor
             * @param {backend.chat_service.ISearchConversationsRequest=} [properties] Properties to set
             */
            function SearchConversationsRequest(properties) {
                this.memberIds = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchConversationsRequest type.
             * @member {backend.chat_service.ConversationType|null|undefined} type
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.type = null;

            /**
             * SearchConversationsRequest memberIds.
             * @member {Array.<string>} memberIds
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.memberIds = $util.emptyArray;

            /**
             * SearchConversationsRequest term.
             * @member {string|null|undefined} term
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.term = null;

            /**
             * SearchConversationsRequest pageNumber.
             * @member {number|null|undefined} pageNumber
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.pageNumber = null;

            /**
             * SearchConversationsRequest pageSize.
             * @member {number|null|undefined} pageSize
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.pageSize = null;

            /**
             * SearchConversationsRequest messagePageSize.
             * @member {number} messagePageSize
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             */
            SearchConversationsRequest.prototype.messagePageSize = 0;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchConversationsRequest.prototype, "_type", {
                get: $util.oneOfGetter($oneOfFields = ["type"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchConversationsRequest.prototype, "_term", {
                get: $util.oneOfGetter($oneOfFields = ["term"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchConversationsRequest.prototype, "_pageNumber", {
                get: $util.oneOfGetter($oneOfFields = ["pageNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(SearchConversationsRequest.prototype, "_pageSize", {
                get: $util.oneOfGetter($oneOfFields = ["pageSize"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SearchConversationsRequest instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {backend.chat_service.ISearchConversationsRequest=} [properties] Properties to set
             * @returns {backend.chat_service.SearchConversationsRequest} SearchConversationsRequest instance
             */
            SearchConversationsRequest.create = function create(properties) {
                return new SearchConversationsRequest(properties);
            };

            /**
             * Encodes the specified SearchConversationsRequest message. Does not implicitly {@link backend.chat_service.SearchConversationsRequest.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {backend.chat_service.ISearchConversationsRequest} message SearchConversationsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchConversationsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.memberIds != null && message.memberIds.length)
                    for (var i = 0; i < message.memberIds.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.memberIds[i]);
                if (message.term != null && Object.hasOwnProperty.call(message, "term"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.term);
                if (message.pageNumber != null && Object.hasOwnProperty.call(message, "pageNumber"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageNumber);
                if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pageSize);
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.messagePageSize);
                return writer;
            };

            /**
             * Encodes the specified SearchConversationsRequest message, length delimited. Does not implicitly {@link backend.chat_service.SearchConversationsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {backend.chat_service.ISearchConversationsRequest} message SearchConversationsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchConversationsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchConversationsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.SearchConversationsRequest} SearchConversationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchConversationsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.SearchConversationsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type = reader.int32();
                            break;
                        }
                    case 2: {
                            if (!(message.memberIds && message.memberIds.length))
                                message.memberIds = [];
                            message.memberIds.push(reader.string());
                            break;
                        }
                    case 3: {
                            message.term = reader.string();
                            break;
                        }
                    case 4: {
                            message.pageNumber = reader.int32();
                            break;
                        }
                    case 5: {
                            message.pageSize = reader.int32();
                            break;
                        }
                    case 6: {
                            message.messagePageSize = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("messagePageSize"))
                    throw $util.ProtocolError("missing required 'messagePageSize'", { instance: message });
                return message;
            };

            /**
             * Decodes a SearchConversationsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.SearchConversationsRequest} SearchConversationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchConversationsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchConversationsRequest message.
             * @function verify
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchConversationsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.type != null && message.hasOwnProperty("type")) {
                    properties._type = 1;
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 1:
                    case 2:
                        break;
                    }
                }
                if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                    if (!Array.isArray(message.memberIds))
                        return "memberIds: array expected";
                    for (var i = 0; i < message.memberIds.length; ++i)
                        if (!$util.isString(message.memberIds[i]))
                            return "memberIds: string[] expected";
                }
                if (message.term != null && message.hasOwnProperty("term")) {
                    properties._term = 1;
                    if (!$util.isString(message.term))
                        return "term: string expected";
                }
                if (message.pageNumber != null && message.hasOwnProperty("pageNumber")) {
                    properties._pageNumber = 1;
                    if (!$util.isInteger(message.pageNumber))
                        return "pageNumber: integer expected";
                }
                if (message.pageSize != null && message.hasOwnProperty("pageSize")) {
                    properties._pageSize = 1;
                    if (!$util.isInteger(message.pageSize))
                        return "pageSize: integer expected";
                }
                if (!$util.isInteger(message.messagePageSize))
                    return "messagePageSize: integer expected";
                return null;
            };

            /**
             * Creates a SearchConversationsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.SearchConversationsRequest} SearchConversationsRequest
             */
            SearchConversationsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.SearchConversationsRequest)
                    return object;
                var message = new $root.backend.chat_service.SearchConversationsRequest();
                switch (object.type) {
                default:
                    if (typeof object.type === "number") {
                        message.type = object.type;
                        break;
                    }
                    break;
                case "PRIVATE":
                case 1:
                    message.type = 1;
                    break;
                case "GROUP":
                case 2:
                    message.type = 2;
                    break;
                }
                if (object.memberIds) {
                    if (!Array.isArray(object.memberIds))
                        throw TypeError(".backend.chat_service.SearchConversationsRequest.memberIds: array expected");
                    message.memberIds = [];
                    for (var i = 0; i < object.memberIds.length; ++i)
                        message.memberIds[i] = String(object.memberIds[i]);
                }
                if (object.term != null)
                    message.term = String(object.term);
                if (object.pageNumber != null)
                    message.pageNumber = object.pageNumber | 0;
                if (object.pageSize != null)
                    message.pageSize = object.pageSize | 0;
                if (object.messagePageSize != null)
                    message.messagePageSize = object.messagePageSize | 0;
                return message;
            };

            /**
             * Creates a plain object from a SearchConversationsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {backend.chat_service.SearchConversationsRequest} message SearchConversationsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchConversationsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.memberIds = [];
                if (options.defaults)
                    object.messagePageSize = 0;
                if (message.type != null && message.hasOwnProperty("type")) {
                    object.type = options.enums === String ? $root.backend.chat_service.ConversationType[message.type] === undefined ? message.type : $root.backend.chat_service.ConversationType[message.type] : message.type;
                    if (options.oneofs)
                        object._type = "type";
                }
                if (message.memberIds && message.memberIds.length) {
                    object.memberIds = [];
                    for (var j = 0; j < message.memberIds.length; ++j)
                        object.memberIds[j] = message.memberIds[j];
                }
                if (message.term != null && message.hasOwnProperty("term")) {
                    object.term = message.term;
                    if (options.oneofs)
                        object._term = "term";
                }
                if (message.pageNumber != null && message.hasOwnProperty("pageNumber")) {
                    object.pageNumber = message.pageNumber;
                    if (options.oneofs)
                        object._pageNumber = "pageNumber";
                }
                if (message.pageSize != null && message.hasOwnProperty("pageSize")) {
                    object.pageSize = message.pageSize;
                    if (options.oneofs)
                        object._pageSize = "pageSize";
                }
                if (message.messagePageSize != null && message.hasOwnProperty("messagePageSize"))
                    object.messagePageSize = message.messagePageSize;
                return object;
            };

            /**
             * Converts this SearchConversationsRequest to JSON.
             * @function toJSON
             * @memberof backend.chat_service.SearchConversationsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchConversationsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchConversationsRequest
             * @function getTypeUrl
             * @memberof backend.chat_service.SearchConversationsRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchConversationsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.SearchConversationsRequest";
            };

            return SearchConversationsRequest;
        })();

        chat_service.SearchConversationsPaginationResponse = (function() {

            /**
             * Properties of a SearchConversationsPaginationResponse.
             * @memberof backend.chat_service
             * @interface ISearchConversationsPaginationResponse
             * @property {Array.<backend.chat_service.IConversation>|null} [conversations] SearchConversationsPaginationResponse conversations
             */

            /**
             * Constructs a new SearchConversationsPaginationResponse.
             * @memberof backend.chat_service
             * @classdesc Represents a SearchConversationsPaginationResponse.
             * @implements ISearchConversationsPaginationResponse
             * @constructor
             * @param {backend.chat_service.ISearchConversationsPaginationResponse=} [properties] Properties to set
             */
            function SearchConversationsPaginationResponse(properties) {
                this.conversations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SearchConversationsPaginationResponse conversations.
             * @member {Array.<backend.chat_service.IConversation>} conversations
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @instance
             */
            SearchConversationsPaginationResponse.prototype.conversations = $util.emptyArray;

            /**
             * Creates a new SearchConversationsPaginationResponse instance using the specified properties.
             * @function create
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {backend.chat_service.ISearchConversationsPaginationResponse=} [properties] Properties to set
             * @returns {backend.chat_service.SearchConversationsPaginationResponse} SearchConversationsPaginationResponse instance
             */
            SearchConversationsPaginationResponse.create = function create(properties) {
                return new SearchConversationsPaginationResponse(properties);
            };

            /**
             * Encodes the specified SearchConversationsPaginationResponse message. Does not implicitly {@link backend.chat_service.SearchConversationsPaginationResponse.verify|verify} messages.
             * @function encode
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {backend.chat_service.ISearchConversationsPaginationResponse} message SearchConversationsPaginationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchConversationsPaginationResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.conversations != null && message.conversations.length)
                    for (var i = 0; i < message.conversations.length; ++i)
                        $root.backend.chat_service.Conversation.encode(message.conversations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SearchConversationsPaginationResponse message, length delimited. Does not implicitly {@link backend.chat_service.SearchConversationsPaginationResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {backend.chat_service.ISearchConversationsPaginationResponse} message SearchConversationsPaginationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SearchConversationsPaginationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SearchConversationsPaginationResponse message from the specified reader or buffer.
             * @function decode
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {backend.chat_service.SearchConversationsPaginationResponse} SearchConversationsPaginationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchConversationsPaginationResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.backend.chat_service.SearchConversationsPaginationResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.conversations && message.conversations.length))
                                message.conversations = [];
                            message.conversations.push($root.backend.chat_service.Conversation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SearchConversationsPaginationResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {backend.chat_service.SearchConversationsPaginationResponse} SearchConversationsPaginationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SearchConversationsPaginationResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SearchConversationsPaginationResponse message.
             * @function verify
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SearchConversationsPaginationResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.conversations != null && message.hasOwnProperty("conversations")) {
                    if (!Array.isArray(message.conversations))
                        return "conversations: array expected";
                    for (var i = 0; i < message.conversations.length; ++i) {
                        var error = $root.backend.chat_service.Conversation.verify(message.conversations[i]);
                        if (error)
                            return "conversations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SearchConversationsPaginationResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {backend.chat_service.SearchConversationsPaginationResponse} SearchConversationsPaginationResponse
             */
            SearchConversationsPaginationResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.backend.chat_service.SearchConversationsPaginationResponse)
                    return object;
                var message = new $root.backend.chat_service.SearchConversationsPaginationResponse();
                if (object.conversations) {
                    if (!Array.isArray(object.conversations))
                        throw TypeError(".backend.chat_service.SearchConversationsPaginationResponse.conversations: array expected");
                    message.conversations = [];
                    for (var i = 0; i < object.conversations.length; ++i) {
                        if (typeof object.conversations[i] !== "object")
                            throw TypeError(".backend.chat_service.SearchConversationsPaginationResponse.conversations: object expected");
                        message.conversations[i] = $root.backend.chat_service.Conversation.fromObject(object.conversations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SearchConversationsPaginationResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {backend.chat_service.SearchConversationsPaginationResponse} message SearchConversationsPaginationResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SearchConversationsPaginationResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.conversations = [];
                if (message.conversations && message.conversations.length) {
                    object.conversations = [];
                    for (var j = 0; j < message.conversations.length; ++j)
                        object.conversations[j] = $root.backend.chat_service.Conversation.toObject(message.conversations[j], options);
                }
                return object;
            };

            /**
             * Converts this SearchConversationsPaginationResponse to JSON.
             * @function toJSON
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SearchConversationsPaginationResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SearchConversationsPaginationResponse
             * @function getTypeUrl
             * @memberof backend.chat_service.SearchConversationsPaginationResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchConversationsPaginationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/backend.chat_service.SearchConversationsPaginationResponse";
            };

            return SearchConversationsPaginationResponse;
        })();

        return chat_service;
    })();

    return backend;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Timestamp
             * @function getTypeUrl
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Timestamp";
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
