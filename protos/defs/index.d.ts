import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace backend. */
export namespace backend {

    /** Namespace discovery_service. */
    namespace discovery_service {

        /** Represents a DiscoveryService */
        class DiscoveryService extends $protobuf.rpc.Service {

            /**
             * Constructs a new DiscoveryService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new DiscoveryService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DiscoveryService;

            /**
             * Calls Discover.
             * @param request DiscoveryRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ServiceInstance
             */
            public discover(request: backend.discovery_service.IDiscoveryRequest, callback: backend.discovery_service.DiscoveryService.DiscoverCallback): void;

            /**
             * Calls Discover.
             * @param request DiscoveryRequest message or plain object
             * @returns Promise
             */
            public discover(request: backend.discovery_service.IDiscoveryRequest): Promise<backend.discovery_service.ServiceInstance>;
        }

        namespace DiscoveryService {

            /**
             * Callback as used by {@link backend.discovery_service.DiscoveryService#discover}.
             * @param error Error, if any
             * @param [response] ServiceInstance
             */
            type DiscoverCallback = (error: (Error|null), response?: backend.discovery_service.ServiceInstance) => void;
        }

        /** Properties of a DiscoveryRequest. */
        interface IDiscoveryRequest {

            /** DiscoveryRequest serviceName */
            serviceName: string;
        }

        /** Represents a DiscoveryRequest. */
        class DiscoveryRequest implements IDiscoveryRequest {

            /**
             * Constructs a new DiscoveryRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.discovery_service.IDiscoveryRequest);

            /** DiscoveryRequest serviceName. */
            public serviceName: string;

            /**
             * Creates a new DiscoveryRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DiscoveryRequest instance
             */
            public static create(properties?: backend.discovery_service.IDiscoveryRequest): backend.discovery_service.DiscoveryRequest;

            /**
             * Encodes the specified DiscoveryRequest message. Does not implicitly {@link backend.discovery_service.DiscoveryRequest.verify|verify} messages.
             * @param message DiscoveryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.discovery_service.IDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DiscoveryRequest message, length delimited. Does not implicitly {@link backend.discovery_service.DiscoveryRequest.verify|verify} messages.
             * @param message DiscoveryRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.discovery_service.IDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DiscoveryRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DiscoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.discovery_service.DiscoveryRequest;

            /**
             * Decodes a DiscoveryRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DiscoveryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.discovery_service.DiscoveryRequest;

            /**
             * Verifies a DiscoveryRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DiscoveryRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DiscoveryRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.discovery_service.DiscoveryRequest;

            /**
             * Creates a plain object from a DiscoveryRequest message. Also converts values to other types if specified.
             * @param message DiscoveryRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.discovery_service.DiscoveryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DiscoveryRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DiscoveryRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceInstance. */
        interface IServiceInstance {

            /** ServiceInstance host */
            host: string;

            /** ServiceInstance port */
            port: number;
        }

        /** Represents a ServiceInstance. */
        class ServiceInstance implements IServiceInstance {

            /**
             * Constructs a new ServiceInstance.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.discovery_service.IServiceInstance);

            /** ServiceInstance host. */
            public host: string;

            /** ServiceInstance port. */
            public port: number;

            /**
             * Creates a new ServiceInstance instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceInstance instance
             */
            public static create(properties?: backend.discovery_service.IServiceInstance): backend.discovery_service.ServiceInstance;

            /**
             * Encodes the specified ServiceInstance message. Does not implicitly {@link backend.discovery_service.ServiceInstance.verify|verify} messages.
             * @param message ServiceInstance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.discovery_service.IServiceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceInstance message, length delimited. Does not implicitly {@link backend.discovery_service.ServiceInstance.verify|verify} messages.
             * @param message ServiceInstance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.discovery_service.IServiceInstance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceInstance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.discovery_service.ServiceInstance;

            /**
             * Decodes a ServiceInstance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.discovery_service.ServiceInstance;

            /**
             * Verifies a ServiceInstance message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceInstance message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceInstance
             */
            public static fromObject(object: { [k: string]: any }): backend.discovery_service.ServiceInstance;

            /**
             * Creates a plain object from a ServiceInstance message. Also converts values to other types if specified.
             * @param message ServiceInstance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.discovery_service.ServiceInstance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceInstance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceInstance
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace user_service. */
    namespace user_service {

        /** Represents a UserService */
        class UserService extends $protobuf.rpc.Service {

            /**
             * Constructs a new UserService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new UserService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): UserService;

            /**
             * Calls SignIn.
             * @param request SignInRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AuthenticatedInfo
             */
            public signIn(request: backend.user_service.ISignInRequest, callback: backend.user_service.UserService.SignInCallback): void;

            /**
             * Calls SignIn.
             * @param request SignInRequest message or plain object
             * @returns Promise
             */
            public signIn(request: backend.user_service.ISignInRequest): Promise<backend.user_service.AuthenticatedInfo>;

            /**
             * Calls SignUp.
             * @param request SignUpRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and AuthenticatedInfo
             */
            public signUp(request: backend.user_service.ISignUpRequest, callback: backend.user_service.UserService.SignUpCallback): void;

            /**
             * Calls SignUp.
             * @param request SignUpRequest message or plain object
             * @returns Promise
             */
            public signUp(request: backend.user_service.ISignUpRequest): Promise<backend.user_service.AuthenticatedInfo>;

            /**
             * Calls FindUser.
             * @param request FindUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UserInfo
             */
            public findUser(request: backend.user_service.IFindUserRequest, callback: backend.user_service.UserService.FindUserCallback): void;

            /**
             * Calls FindUser.
             * @param request FindUserRequest message or plain object
             * @returns Promise
             */
            public findUser(request: backend.user_service.IFindUserRequest): Promise<backend.user_service.UserInfo>;

            /**
             * Calls GetUsers.
             * @param request GetUsersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UsersInfo
             */
            public getUsers(request: backend.user_service.IGetUsersRequest, callback: backend.user_service.UserService.GetUsersCallback): void;

            /**
             * Calls GetUsers.
             * @param request GetUsersRequest message or plain object
             * @returns Promise
             */
            public getUsers(request: backend.user_service.IGetUsersRequest): Promise<backend.user_service.UsersInfo>;

            /**
             * Calls SearchUser.
             * @param request SearchUserRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and UsersInfo
             */
            public searchUser(request: backend.user_service.ISearchUserRequest, callback: backend.user_service.UserService.SearchUserCallback): void;

            /**
             * Calls SearchUser.
             * @param request SearchUserRequest message or plain object
             * @returns Promise
             */
            public searchUser(request: backend.user_service.ISearchUserRequest): Promise<backend.user_service.UsersInfo>;
        }

        namespace UserService {

            /**
             * Callback as used by {@link backend.user_service.UserService#signIn}.
             * @param error Error, if any
             * @param [response] AuthenticatedInfo
             */
            type SignInCallback = (error: (Error|null), response?: backend.user_service.AuthenticatedInfo) => void;

            /**
             * Callback as used by {@link backend.user_service.UserService#signUp}.
             * @param error Error, if any
             * @param [response] AuthenticatedInfo
             */
            type SignUpCallback = (error: (Error|null), response?: backend.user_service.AuthenticatedInfo) => void;

            /**
             * Callback as used by {@link backend.user_service.UserService#findUser}.
             * @param error Error, if any
             * @param [response] UserInfo
             */
            type FindUserCallback = (error: (Error|null), response?: backend.user_service.UserInfo) => void;

            /**
             * Callback as used by {@link backend.user_service.UserService#getUsers}.
             * @param error Error, if any
             * @param [response] UsersInfo
             */
            type GetUsersCallback = (error: (Error|null), response?: backend.user_service.UsersInfo) => void;

            /**
             * Callback as used by {@link backend.user_service.UserService#searchUser}.
             * @param error Error, if any
             * @param [response] UsersInfo
             */
            type SearchUserCallback = (error: (Error|null), response?: backend.user_service.UsersInfo) => void;
        }

        /** Properties of a Token. */
        interface IToken {

            /** Token accessToken */
            accessToken: string;

            /** Token refreshToken */
            refreshToken: string;
        }

        /** Represents a Token. */
        class Token implements IToken {

            /**
             * Constructs a new Token.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IToken);

            /** Token accessToken. */
            public accessToken: string;

            /** Token refreshToken. */
            public refreshToken: string;

            /**
             * Creates a new Token instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Token instance
             */
            public static create(properties?: backend.user_service.IToken): backend.user_service.Token;

            /**
             * Encodes the specified Token message. Does not implicitly {@link backend.user_service.Token.verify|verify} messages.
             * @param message Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Token message, length delimited. Does not implicitly {@link backend.user_service.Token.verify|verify} messages.
             * @param message Token message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IToken, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Token message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.Token;

            /**
             * Decodes a Token message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Token
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.Token;

            /**
             * Verifies a Token message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Token message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Token
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.Token;

            /**
             * Creates a plain object from a Token message. Also converts values to other types if specified.
             * @param message Token
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Token to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Token
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserInfo. */
        interface IUserInfo {

            /** UserInfo id */
            id: string;

            /** UserInfo avatar */
            avatar: string;

            /** UserInfo displayName */
            displayName: string;

            /** UserInfo enabledTwofa */
            enabledTwofa: boolean;
        }

        /** Represents a UserInfo. */
        class UserInfo implements IUserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IUserInfo);

            /** UserInfo id. */
            public id: string;

            /** UserInfo avatar. */
            public avatar: string;

            /** UserInfo displayName. */
            public displayName: string;

            /** UserInfo enabledTwofa. */
            public enabledTwofa: boolean;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfo instance
             */
            public static create(properties?: backend.user_service.IUserInfo): backend.user_service.UserInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link backend.user_service.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link backend.user_service.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.UserInfo;

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.UserInfo;

            /**
             * Verifies a UserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserInfo
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.UserInfo;

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @param message UserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AuthenticatedInfo. */
        interface IAuthenticatedInfo {

            /** AuthenticatedInfo userInfo */
            userInfo: backend.user_service.IUserInfo;

            /** AuthenticatedInfo token */
            token: backend.user_service.IToken;
        }

        /** Represents an AuthenticatedInfo. */
        class AuthenticatedInfo implements IAuthenticatedInfo {

            /**
             * Constructs a new AuthenticatedInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IAuthenticatedInfo);

            /** AuthenticatedInfo userInfo. */
            public userInfo: backend.user_service.IUserInfo;

            /** AuthenticatedInfo token. */
            public token: backend.user_service.IToken;

            /**
             * Creates a new AuthenticatedInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthenticatedInfo instance
             */
            public static create(properties?: backend.user_service.IAuthenticatedInfo): backend.user_service.AuthenticatedInfo;

            /**
             * Encodes the specified AuthenticatedInfo message. Does not implicitly {@link backend.user_service.AuthenticatedInfo.verify|verify} messages.
             * @param message AuthenticatedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IAuthenticatedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthenticatedInfo message, length delimited. Does not implicitly {@link backend.user_service.AuthenticatedInfo.verify|verify} messages.
             * @param message AuthenticatedInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IAuthenticatedInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthenticatedInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthenticatedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.AuthenticatedInfo;

            /**
             * Decodes an AuthenticatedInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthenticatedInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.AuthenticatedInfo;

            /**
             * Verifies an AuthenticatedInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthenticatedInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthenticatedInfo
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.AuthenticatedInfo;

            /**
             * Creates a plain object from an AuthenticatedInfo message. Also converts values to other types if specified.
             * @param message AuthenticatedInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.AuthenticatedInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthenticatedInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AuthenticatedInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SignInRequest. */
        interface ISignInRequest {

            /** SignInRequest username */
            username: string;

            /** SignInRequest password */
            password: string;
        }

        /** Represents a SignInRequest. */
        class SignInRequest implements ISignInRequest {

            /**
             * Constructs a new SignInRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.ISignInRequest);

            /** SignInRequest username. */
            public username: string;

            /** SignInRequest password. */
            public password: string;

            /**
             * Creates a new SignInRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignInRequest instance
             */
            public static create(properties?: backend.user_service.ISignInRequest): backend.user_service.SignInRequest;

            /**
             * Encodes the specified SignInRequest message. Does not implicitly {@link backend.user_service.SignInRequest.verify|verify} messages.
             * @param message SignInRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignInRequest message, length delimited. Does not implicitly {@link backend.user_service.SignInRequest.verify|verify} messages.
             * @param message SignInRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.ISignInRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignInRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignInRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.SignInRequest;

            /**
             * Decodes a SignInRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignInRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.SignInRequest;

            /**
             * Verifies a SignInRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignInRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignInRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.SignInRequest;

            /**
             * Creates a plain object from a SignInRequest message. Also converts values to other types if specified.
             * @param message SignInRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.SignInRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignInRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SignInRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SignUpRequest. */
        interface ISignUpRequest {

            /** SignUpRequest username */
            username: string;

            /** SignUpRequest password */
            password: string;

            /** SignUpRequest displayName */
            displayName: string;

            /** SignUpRequest avatarUrl */
            avatarUrl: string;
        }

        /** Represents a SignUpRequest. */
        class SignUpRequest implements ISignUpRequest {

            /**
             * Constructs a new SignUpRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.ISignUpRequest);

            /** SignUpRequest username. */
            public username: string;

            /** SignUpRequest password. */
            public password: string;

            /** SignUpRequest displayName. */
            public displayName: string;

            /** SignUpRequest avatarUrl. */
            public avatarUrl: string;

            /**
             * Creates a new SignUpRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SignUpRequest instance
             */
            public static create(properties?: backend.user_service.ISignUpRequest): backend.user_service.SignUpRequest;

            /**
             * Encodes the specified SignUpRequest message. Does not implicitly {@link backend.user_service.SignUpRequest.verify|verify} messages.
             * @param message SignUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.ISignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SignUpRequest message, length delimited. Does not implicitly {@link backend.user_service.SignUpRequest.verify|verify} messages.
             * @param message SignUpRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.ISignUpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SignUpRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.SignUpRequest;

            /**
             * Decodes a SignUpRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SignUpRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.SignUpRequest;

            /**
             * Verifies a SignUpRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SignUpRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SignUpRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.SignUpRequest;

            /**
             * Creates a plain object from a SignUpRequest message. Also converts values to other types if specified.
             * @param message SignUpRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.SignUpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SignUpRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SignUpRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GetUsersRequest. */
        interface IGetUsersRequest {

            /** GetUsersRequest userIds */
            userIds?: (string[]|null);
        }

        /** Represents a GetUsersRequest. */
        class GetUsersRequest implements IGetUsersRequest {

            /**
             * Constructs a new GetUsersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IGetUsersRequest);

            /** GetUsersRequest userIds. */
            public userIds: string[];

            /**
             * Creates a new GetUsersRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetUsersRequest instance
             */
            public static create(properties?: backend.user_service.IGetUsersRequest): backend.user_service.GetUsersRequest;

            /**
             * Encodes the specified GetUsersRequest message. Does not implicitly {@link backend.user_service.GetUsersRequest.verify|verify} messages.
             * @param message GetUsersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetUsersRequest message, length delimited. Does not implicitly {@link backend.user_service.GetUsersRequest.verify|verify} messages.
             * @param message GetUsersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IGetUsersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetUsersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetUsersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.GetUsersRequest;

            /**
             * Decodes a GetUsersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetUsersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.GetUsersRequest;

            /**
             * Verifies a GetUsersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetUsersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetUsersRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.GetUsersRequest;

            /**
             * Creates a plain object from a GetUsersRequest message. Also converts values to other types if specified.
             * @param message GetUsersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.GetUsersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetUsersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GetUsersRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FindUserRequest. */
        interface IFindUserRequest {

            /** FindUserRequest userId */
            userId: string;
        }

        /** Represents a FindUserRequest. */
        class FindUserRequest implements IFindUserRequest {

            /**
             * Constructs a new FindUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IFindUserRequest);

            /** FindUserRequest userId. */
            public userId: string;

            /**
             * Creates a new FindUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FindUserRequest instance
             */
            public static create(properties?: backend.user_service.IFindUserRequest): backend.user_service.FindUserRequest;

            /**
             * Encodes the specified FindUserRequest message. Does not implicitly {@link backend.user_service.FindUserRequest.verify|verify} messages.
             * @param message FindUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IFindUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FindUserRequest message, length delimited. Does not implicitly {@link backend.user_service.FindUserRequest.verify|verify} messages.
             * @param message FindUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IFindUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FindUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FindUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.FindUserRequest;

            /**
             * Decodes a FindUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FindUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.FindUserRequest;

            /**
             * Verifies a FindUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FindUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FindUserRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.FindUserRequest;

            /**
             * Creates a plain object from a FindUserRequest message. Also converts values to other types if specified.
             * @param message FindUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.FindUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FindUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FindUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchUserRequest. */
        interface ISearchUserRequest {

            /** SearchUserRequest term */
            term: string;

            /** SearchUserRequest pageNumber */
            pageNumber?: (number|null);

            /** SearchUserRequest pageSize */
            pageSize?: (number|null);
        }

        /** Represents a SearchUserRequest. */
        class SearchUserRequest implements ISearchUserRequest {

            /**
             * Constructs a new SearchUserRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.ISearchUserRequest);

            /** SearchUserRequest term. */
            public term: string;

            /** SearchUserRequest pageNumber. */
            public pageNumber?: (number|null);

            /** SearchUserRequest pageSize. */
            public pageSize?: (number|null);

            /**
             * Creates a new SearchUserRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchUserRequest instance
             */
            public static create(properties?: backend.user_service.ISearchUserRequest): backend.user_service.SearchUserRequest;

            /**
             * Encodes the specified SearchUserRequest message. Does not implicitly {@link backend.user_service.SearchUserRequest.verify|verify} messages.
             * @param message SearchUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.ISearchUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchUserRequest message, length delimited. Does not implicitly {@link backend.user_service.SearchUserRequest.verify|verify} messages.
             * @param message SearchUserRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.ISearchUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchUserRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.SearchUserRequest;

            /**
             * Decodes a SearchUserRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.SearchUserRequest;

            /**
             * Verifies a SearchUserRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchUserRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchUserRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.SearchUserRequest;

            /**
             * Creates a plain object from a SearchUserRequest message. Also converts values to other types if specified.
             * @param message SearchUserRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.SearchUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchUserRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchUserRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UsersInfo. */
        interface IUsersInfo {

            /** UsersInfo users */
            users?: (backend.user_service.IUserInfo[]|null);
        }

        /** Represents a UsersInfo. */
        class UsersInfo implements IUsersInfo {

            /**
             * Constructs a new UsersInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.user_service.IUsersInfo);

            /** UsersInfo users. */
            public users: backend.user_service.IUserInfo[];

            /**
             * Creates a new UsersInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UsersInfo instance
             */
            public static create(properties?: backend.user_service.IUsersInfo): backend.user_service.UsersInfo;

            /**
             * Encodes the specified UsersInfo message. Does not implicitly {@link backend.user_service.UsersInfo.verify|verify} messages.
             * @param message UsersInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.user_service.IUsersInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UsersInfo message, length delimited. Does not implicitly {@link backend.user_service.UsersInfo.verify|verify} messages.
             * @param message UsersInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.user_service.IUsersInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UsersInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UsersInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.user_service.UsersInfo;

            /**
             * Decodes a UsersInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UsersInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.user_service.UsersInfo;

            /**
             * Verifies a UsersInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UsersInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UsersInfo
             */
            public static fromObject(object: { [k: string]: any }): backend.user_service.UsersInfo;

            /**
             * Creates a plain object from a UsersInfo message. Also converts values to other types if specified.
             * @param message UsersInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.user_service.UsersInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UsersInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UsersInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace twofa_service. */
    namespace twofa_service {

        /** Represents a TwoFactorAuthenticationService */
        class TwoFactorAuthenticationService extends $protobuf.rpc.Service {

            /**
             * Constructs a new TwoFactorAuthenticationService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new TwoFactorAuthenticationService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TwoFactorAuthenticationService;

            /**
             * Calls GenerateSetting.
             * @param request Generate2faRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Generate2faResponse
             */
            public generateSetting(request: backend.twofa_service.IGenerate2faRequest, callback: backend.twofa_service.TwoFactorAuthenticationService.GenerateSettingCallback): void;

            /**
             * Calls GenerateSetting.
             * @param request Generate2faRequest message or plain object
             * @returns Promise
             */
            public generateSetting(request: backend.twofa_service.IGenerate2faRequest): Promise<backend.twofa_service.Generate2faResponse>;

            /**
             * Calls CreateSetting.
             * @param request Create2faRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Create2faResponse
             */
            public createSetting(request: backend.twofa_service.ICreate2faRequest, callback: backend.twofa_service.TwoFactorAuthenticationService.CreateSettingCallback): void;

            /**
             * Calls CreateSetting.
             * @param request Create2faRequest message or plain object
             * @returns Promise
             */
            public createSetting(request: backend.twofa_service.ICreate2faRequest): Promise<backend.twofa_service.Create2faResponse>;

            /**
             * Calls ValidateResource.
             * @param request Validate2faRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Validate2faResponse
             */
            public validateResource(request: backend.twofa_service.IValidate2faRequest, callback: backend.twofa_service.TwoFactorAuthenticationService.ValidateResourceCallback): void;

            /**
             * Calls ValidateResource.
             * @param request Validate2faRequest message or plain object
             * @returns Promise
             */
            public validateResource(request: backend.twofa_service.IValidate2faRequest): Promise<backend.twofa_service.Validate2faResponse>;
        }

        namespace TwoFactorAuthenticationService {

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#generateSetting}.
             * @param error Error, if any
             * @param [response] Generate2faResponse
             */
            type GenerateSettingCallback = (error: (Error|null), response?: backend.twofa_service.Generate2faResponse) => void;

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#createSetting}.
             * @param error Error, if any
             * @param [response] Create2faResponse
             */
            type CreateSettingCallback = (error: (Error|null), response?: backend.twofa_service.Create2faResponse) => void;

            /**
             * Callback as used by {@link backend.twofa_service.TwoFactorAuthenticationService#validateResource}.
             * @param error Error, if any
             * @param [response] Validate2faResponse
             */
            type ValidateResourceCallback = (error: (Error|null), response?: backend.twofa_service.Validate2faResponse) => void;
        }

        /** Properties of a Generate2faRequest. */
        interface IGenerate2faRequest {

            /** Generate2faRequest label */
            label: string;
        }

        /** Represents a Generate2faRequest. */
        class Generate2faRequest implements IGenerate2faRequest {

            /**
             * Constructs a new Generate2faRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.IGenerate2faRequest);

            /** Generate2faRequest label. */
            public label: string;

            /**
             * Creates a new Generate2faRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Generate2faRequest instance
             */
            public static create(properties?: backend.twofa_service.IGenerate2faRequest): backend.twofa_service.Generate2faRequest;

            /**
             * Encodes the specified Generate2faRequest message. Does not implicitly {@link backend.twofa_service.Generate2faRequest.verify|verify} messages.
             * @param message Generate2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.IGenerate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Generate2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Generate2faRequest.verify|verify} messages.
             * @param message Generate2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.IGenerate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Generate2faRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Generate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Generate2faRequest;

            /**
             * Decodes a Generate2faRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Generate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Generate2faRequest;

            /**
             * Verifies a Generate2faRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Generate2faRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Generate2faRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Generate2faRequest;

            /**
             * Creates a plain object from a Generate2faRequest message. Also converts values to other types if specified.
             * @param message Generate2faRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Generate2faRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Generate2faRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Generate2faRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Generate2faResponse. */
        interface IGenerate2faResponse {

            /** Generate2faResponse secret */
            secret: string;

            /** Generate2faResponse qrCode */
            qrCode: string;
        }

        /** Represents a Generate2faResponse. */
        class Generate2faResponse implements IGenerate2faResponse {

            /**
             * Constructs a new Generate2faResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.IGenerate2faResponse);

            /** Generate2faResponse secret. */
            public secret: string;

            /** Generate2faResponse qrCode. */
            public qrCode: string;

            /**
             * Creates a new Generate2faResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Generate2faResponse instance
             */
            public static create(properties?: backend.twofa_service.IGenerate2faResponse): backend.twofa_service.Generate2faResponse;

            /**
             * Encodes the specified Generate2faResponse message. Does not implicitly {@link backend.twofa_service.Generate2faResponse.verify|verify} messages.
             * @param message Generate2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.IGenerate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Generate2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Generate2faResponse.verify|verify} messages.
             * @param message Generate2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.IGenerate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Generate2faResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Generate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Generate2faResponse;

            /**
             * Decodes a Generate2faResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Generate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Generate2faResponse;

            /**
             * Verifies a Generate2faResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Generate2faResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Generate2faResponse
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Generate2faResponse;

            /**
             * Creates a plain object from a Generate2faResponse message. Also converts values to other types if specified.
             * @param message Generate2faResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Generate2faResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Generate2faResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Generate2faResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Create2faRequest. */
        interface ICreate2faRequest {

            /** Create2faRequest resourceId */
            resourceId: string;

            /** Create2faRequest label */
            label: string;

            /** Create2faRequest secret */
            secret: string;

            /** Create2faRequest otp */
            otp: string;
        }

        /** Represents a Create2faRequest. */
        class Create2faRequest implements ICreate2faRequest {

            /**
             * Constructs a new Create2faRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.ICreate2faRequest);

            /** Create2faRequest resourceId. */
            public resourceId: string;

            /** Create2faRequest label. */
            public label: string;

            /** Create2faRequest secret. */
            public secret: string;

            /** Create2faRequest otp. */
            public otp: string;

            /**
             * Creates a new Create2faRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Create2faRequest instance
             */
            public static create(properties?: backend.twofa_service.ICreate2faRequest): backend.twofa_service.Create2faRequest;

            /**
             * Encodes the specified Create2faRequest message. Does not implicitly {@link backend.twofa_service.Create2faRequest.verify|verify} messages.
             * @param message Create2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.ICreate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Create2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Create2faRequest.verify|verify} messages.
             * @param message Create2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.ICreate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Create2faRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Create2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Create2faRequest;

            /**
             * Decodes a Create2faRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Create2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Create2faRequest;

            /**
             * Verifies a Create2faRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Create2faRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Create2faRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Create2faRequest;

            /**
             * Creates a plain object from a Create2faRequest message. Also converts values to other types if specified.
             * @param message Create2faRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Create2faRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Create2faRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Create2faRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Create2faResponse. */
        interface ICreate2faResponse {

            /** Create2faResponse resourceId */
            resourceId: string;
        }

        /** Represents a Create2faResponse. */
        class Create2faResponse implements ICreate2faResponse {

            /**
             * Constructs a new Create2faResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.ICreate2faResponse);

            /** Create2faResponse resourceId. */
            public resourceId: string;

            /**
             * Creates a new Create2faResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Create2faResponse instance
             */
            public static create(properties?: backend.twofa_service.ICreate2faResponse): backend.twofa_service.Create2faResponse;

            /**
             * Encodes the specified Create2faResponse message. Does not implicitly {@link backend.twofa_service.Create2faResponse.verify|verify} messages.
             * @param message Create2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.ICreate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Create2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Create2faResponse.verify|verify} messages.
             * @param message Create2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.ICreate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Create2faResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Create2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Create2faResponse;

            /**
             * Decodes a Create2faResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Create2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Create2faResponse;

            /**
             * Verifies a Create2faResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Create2faResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Create2faResponse
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Create2faResponse;

            /**
             * Creates a plain object from a Create2faResponse message. Also converts values to other types if specified.
             * @param message Create2faResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Create2faResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Create2faResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Create2faResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Validate2faRequest. */
        interface IValidate2faRequest {

            /** Validate2faRequest resourceId */
            resourceId: string;

            /** Validate2faRequest otp */
            otp: string;
        }

        /** Represents a Validate2faRequest. */
        class Validate2faRequest implements IValidate2faRequest {

            /**
             * Constructs a new Validate2faRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.IValidate2faRequest);

            /** Validate2faRequest resourceId. */
            public resourceId: string;

            /** Validate2faRequest otp. */
            public otp: string;

            /**
             * Creates a new Validate2faRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validate2faRequest instance
             */
            public static create(properties?: backend.twofa_service.IValidate2faRequest): backend.twofa_service.Validate2faRequest;

            /**
             * Encodes the specified Validate2faRequest message. Does not implicitly {@link backend.twofa_service.Validate2faRequest.verify|verify} messages.
             * @param message Validate2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.IValidate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validate2faRequest message, length delimited. Does not implicitly {@link backend.twofa_service.Validate2faRequest.verify|verify} messages.
             * @param message Validate2faRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.IValidate2faRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validate2faRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Validate2faRequest;

            /**
             * Decodes a Validate2faRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validate2faRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Validate2faRequest;

            /**
             * Verifies a Validate2faRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validate2faRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validate2faRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Validate2faRequest;

            /**
             * Creates a plain object from a Validate2faRequest message. Also converts values to other types if specified.
             * @param message Validate2faRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Validate2faRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validate2faRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Validate2faRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Validate2faResponse. */
        interface IValidate2faResponse {

            /** Validate2faResponse success */
            success: boolean;

            /** Validate2faResponse status */
            status: string;
        }

        /** Represents a Validate2faResponse. */
        class Validate2faResponse implements IValidate2faResponse {

            /**
             * Constructs a new Validate2faResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.twofa_service.IValidate2faResponse);

            /** Validate2faResponse success. */
            public success: boolean;

            /** Validate2faResponse status. */
            public status: string;

            /**
             * Creates a new Validate2faResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validate2faResponse instance
             */
            public static create(properties?: backend.twofa_service.IValidate2faResponse): backend.twofa_service.Validate2faResponse;

            /**
             * Encodes the specified Validate2faResponse message. Does not implicitly {@link backend.twofa_service.Validate2faResponse.verify|verify} messages.
             * @param message Validate2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.twofa_service.IValidate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validate2faResponse message, length delimited. Does not implicitly {@link backend.twofa_service.Validate2faResponse.verify|verify} messages.
             * @param message Validate2faResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.twofa_service.IValidate2faResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validate2faResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.twofa_service.Validate2faResponse;

            /**
             * Decodes a Validate2faResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validate2faResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.twofa_service.Validate2faResponse;

            /**
             * Verifies a Validate2faResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validate2faResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validate2faResponse
             */
            public static fromObject(object: { [k: string]: any }): backend.twofa_service.Validate2faResponse;

            /**
             * Creates a plain object from a Validate2faResponse message. Also converts values to other types if specified.
             * @param message Validate2faResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.twofa_service.Validate2faResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validate2faResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Validate2faResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace chat_service. */
    namespace chat_service {

        /** Represents a ChatService */
        class ChatService extends $protobuf.rpc.Service {

            /**
             * Constructs a new ChatService service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new ChatService service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ChatService;

            /**
             * Calls CreateConversation.
             * @param request CreateConversationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Conversation
             */
            public createConversation(request: backend.chat_service.ICreateConversationRequest, callback: backend.chat_service.ChatService.CreateConversationCallback): void;

            /**
             * Calls CreateConversation.
             * @param request CreateConversationRequest message or plain object
             * @returns Promise
             */
            public createConversation(request: backend.chat_service.ICreateConversationRequest): Promise<backend.chat_service.Conversation>;

            /**
             * Calls CreateChatMessage.
             * @param request CreateChatMessageRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ChatMessage
             */
            public createChatMessage(request: backend.chat_service.ICreateChatMessageRequest, callback: backend.chat_service.ChatService.CreateChatMessageCallback): void;

            /**
             * Calls CreateChatMessage.
             * @param request CreateChatMessageRequest message or plain object
             * @returns Promise
             */
            public createChatMessage(request: backend.chat_service.ICreateChatMessageRequest): Promise<backend.chat_service.ChatMessage>;

            /**
             * Calls SearchConversations.
             * @param request SearchConversationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and SearchConversationsPaginationResponse
             */
            public searchConversations(request: backend.chat_service.ISearchConversationsRequest, callback: backend.chat_service.ChatService.SearchConversationsCallback): void;

            /**
             * Calls SearchConversations.
             * @param request SearchConversationsRequest message or plain object
             * @returns Promise
             */
            public searchConversations(request: backend.chat_service.ISearchConversationsRequest): Promise<backend.chat_service.SearchConversationsPaginationResponse>;

            /**
             * Calls FindConversation.
             * @param request FindConversationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Conversation
             */
            public findConversation(request: backend.chat_service.IFindConversationRequest, callback: backend.chat_service.ChatService.FindConversationCallback): void;

            /**
             * Calls FindConversation.
             * @param request FindConversationRequest message or plain object
             * @returns Promise
             */
            public findConversation(request: backend.chat_service.IFindConversationRequest): Promise<backend.chat_service.Conversation>;
        }

        namespace ChatService {

            /**
             * Callback as used by {@link backend.chat_service.ChatService#createConversation}.
             * @param error Error, if any
             * @param [response] Conversation
             */
            type CreateConversationCallback = (error: (Error|null), response?: backend.chat_service.Conversation) => void;

            /**
             * Callback as used by {@link backend.chat_service.ChatService#createChatMessage}.
             * @param error Error, if any
             * @param [response] ChatMessage
             */
            type CreateChatMessageCallback = (error: (Error|null), response?: backend.chat_service.ChatMessage) => void;

            /**
             * Callback as used by {@link backend.chat_service.ChatService#searchConversations}.
             * @param error Error, if any
             * @param [response] SearchConversationsPaginationResponse
             */
            type SearchConversationsCallback = (error: (Error|null), response?: backend.chat_service.SearchConversationsPaginationResponse) => void;

            /**
             * Callback as used by {@link backend.chat_service.ChatService#findConversation}.
             * @param error Error, if any
             * @param [response] Conversation
             */
            type FindConversationCallback = (error: (Error|null), response?: backend.chat_service.Conversation) => void;
        }

        /** Properties of a ChatMessage. */
        interface IChatMessage {

            /** ChatMessage id */
            id: string;

            /** ChatMessage conversationId */
            conversationId: string;

            /** ChatMessage fromUserId */
            fromUserId: string;

            /** ChatMessage messageContent */
            messageContent: string;

            /** ChatMessage createdAt */
            createdAt: google.protobuf.ITimestamp;
        }

        /** Represents a ChatMessage. */
        class ChatMessage implements IChatMessage {

            /**
             * Constructs a new ChatMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.IChatMessage);

            /** ChatMessage id. */
            public id: string;

            /** ChatMessage conversationId. */
            public conversationId: string;

            /** ChatMessage fromUserId. */
            public fromUserId: string;

            /** ChatMessage messageContent. */
            public messageContent: string;

            /** ChatMessage createdAt. */
            public createdAt: google.protobuf.ITimestamp;

            /**
             * Creates a new ChatMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatMessage instance
             */
            public static create(properties?: backend.chat_service.IChatMessage): backend.chat_service.ChatMessage;

            /**
             * Encodes the specified ChatMessage message. Does not implicitly {@link backend.chat_service.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link backend.chat_service.ChatMessage.verify|verify} messages.
             * @param message ChatMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.ChatMessage;

            /**
             * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.ChatMessage;

            /**
             * Verifies a ChatMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatMessage
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.ChatMessage;

            /**
             * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
             * @param message ChatMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ChatMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ConversationType enum. */
        enum ConversationType {
            PRIVATE = 1,
            GROUP = 2
        }

        /** Properties of a FindConversationRequest. */
        interface IFindConversationRequest {

            /** FindConversationRequest conversationId */
            conversationId: string;

            /** FindConversationRequest messagePageNumber */
            messagePageNumber: number;

            /** FindConversationRequest messagePageSize */
            messagePageSize: number;
        }

        /** Represents a FindConversationRequest. */
        class FindConversationRequest implements IFindConversationRequest {

            /**
             * Constructs a new FindConversationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.IFindConversationRequest);

            /** FindConversationRequest conversationId. */
            public conversationId: string;

            /** FindConversationRequest messagePageNumber. */
            public messagePageNumber: number;

            /** FindConversationRequest messagePageSize. */
            public messagePageSize: number;

            /**
             * Creates a new FindConversationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FindConversationRequest instance
             */
            public static create(properties?: backend.chat_service.IFindConversationRequest): backend.chat_service.FindConversationRequest;

            /**
             * Encodes the specified FindConversationRequest message. Does not implicitly {@link backend.chat_service.FindConversationRequest.verify|verify} messages.
             * @param message FindConversationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.IFindConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FindConversationRequest message, length delimited. Does not implicitly {@link backend.chat_service.FindConversationRequest.verify|verify} messages.
             * @param message FindConversationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.IFindConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FindConversationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FindConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.FindConversationRequest;

            /**
             * Decodes a FindConversationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FindConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.FindConversationRequest;

            /**
             * Verifies a FindConversationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FindConversationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FindConversationRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.FindConversationRequest;

            /**
             * Creates a plain object from a FindConversationRequest message. Also converts values to other types if specified.
             * @param message FindConversationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.FindConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FindConversationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FindConversationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateConversationRequest. */
        interface ICreateConversationRequest {

            /** CreateConversationRequest ownerId */
            ownerId?: (string|null);

            /** CreateConversationRequest name */
            name?: (string|null);

            /** CreateConversationRequest type */
            type: backend.chat_service.ConversationType;

            /** CreateConversationRequest memberIds */
            memberIds?: (string[]|null);
        }

        /** Represents a CreateConversationRequest. */
        class CreateConversationRequest implements ICreateConversationRequest {

            /**
             * Constructs a new CreateConversationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.ICreateConversationRequest);

            /** CreateConversationRequest ownerId. */
            public ownerId?: (string|null);

            /** CreateConversationRequest name. */
            public name?: (string|null);

            /** CreateConversationRequest type. */
            public type: backend.chat_service.ConversationType;

            /** CreateConversationRequest memberIds. */
            public memberIds: string[];

            /**
             * Creates a new CreateConversationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateConversationRequest instance
             */
            public static create(properties?: backend.chat_service.ICreateConversationRequest): backend.chat_service.CreateConversationRequest;

            /**
             * Encodes the specified CreateConversationRequest message. Does not implicitly {@link backend.chat_service.CreateConversationRequest.verify|verify} messages.
             * @param message CreateConversationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateConversationRequest message, length delimited. Does not implicitly {@link backend.chat_service.CreateConversationRequest.verify|verify} messages.
             * @param message CreateConversationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.ICreateConversationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateConversationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.CreateConversationRequest;

            /**
             * Decodes a CreateConversationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateConversationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.CreateConversationRequest;

            /**
             * Verifies a CreateConversationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateConversationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateConversationRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.CreateConversationRequest;

            /**
             * Creates a plain object from a CreateConversationRequest message. Also converts values to other types if specified.
             * @param message CreateConversationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.CreateConversationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateConversationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateConversationRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CreateChatMessageRequest. */
        interface ICreateChatMessageRequest {

            /** CreateChatMessageRequest conversationId */
            conversationId: string;

            /** CreateChatMessageRequest fromUserId */
            fromUserId: string;

            /** CreateChatMessageRequest messageContent */
            messageContent: string;
        }

        /** Represents a CreateChatMessageRequest. */
        class CreateChatMessageRequest implements ICreateChatMessageRequest {

            /**
             * Constructs a new CreateChatMessageRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.ICreateChatMessageRequest);

            /** CreateChatMessageRequest conversationId. */
            public conversationId: string;

            /** CreateChatMessageRequest fromUserId. */
            public fromUserId: string;

            /** CreateChatMessageRequest messageContent. */
            public messageContent: string;

            /**
             * Creates a new CreateChatMessageRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateChatMessageRequest instance
             */
            public static create(properties?: backend.chat_service.ICreateChatMessageRequest): backend.chat_service.CreateChatMessageRequest;

            /**
             * Encodes the specified CreateChatMessageRequest message. Does not implicitly {@link backend.chat_service.CreateChatMessageRequest.verify|verify} messages.
             * @param message CreateChatMessageRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.ICreateChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateChatMessageRequest message, length delimited. Does not implicitly {@link backend.chat_service.CreateChatMessageRequest.verify|verify} messages.
             * @param message CreateChatMessageRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.ICreateChatMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateChatMessageRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateChatMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.CreateChatMessageRequest;

            /**
             * Decodes a CreateChatMessageRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateChatMessageRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.CreateChatMessageRequest;

            /**
             * Verifies a CreateChatMessageRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateChatMessageRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateChatMessageRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.CreateChatMessageRequest;

            /**
             * Creates a plain object from a CreateChatMessageRequest message. Also converts values to other types if specified.
             * @param message CreateChatMessageRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.CreateChatMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateChatMessageRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CreateChatMessageRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Conversation. */
        interface IConversation {

            /** Conversation id */
            id: string;

            /** Conversation type */
            type: backend.chat_service.ConversationType;

            /** Conversation name */
            name: string;

            /** Conversation memberIds */
            memberIds?: (string[]|null);

            /** Conversation messages */
            messages?: (backend.chat_service.IChatMessage[]|null);

            /** Conversation createdAt */
            createdAt: google.protobuf.ITimestamp;
        }

        /** Represents a Conversation. */
        class Conversation implements IConversation {

            /**
             * Constructs a new Conversation.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.IConversation);

            /** Conversation id. */
            public id: string;

            /** Conversation type. */
            public type: backend.chat_service.ConversationType;

            /** Conversation name. */
            public name: string;

            /** Conversation memberIds. */
            public memberIds: string[];

            /** Conversation messages. */
            public messages: backend.chat_service.IChatMessage[];

            /** Conversation createdAt. */
            public createdAt: google.protobuf.ITimestamp;

            /**
             * Creates a new Conversation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Conversation instance
             */
            public static create(properties?: backend.chat_service.IConversation): backend.chat_service.Conversation;

            /**
             * Encodes the specified Conversation message. Does not implicitly {@link backend.chat_service.Conversation.verify|verify} messages.
             * @param message Conversation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Conversation message, length delimited. Does not implicitly {@link backend.chat_service.Conversation.verify|verify} messages.
             * @param message Conversation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.IConversation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Conversation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Conversation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.Conversation;

            /**
             * Decodes a Conversation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Conversation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.Conversation;

            /**
             * Verifies a Conversation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Conversation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Conversation
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.Conversation;

            /**
             * Creates a plain object from a Conversation message. Also converts values to other types if specified.
             * @param message Conversation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.Conversation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Conversation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Conversation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchConversationsRequest. */
        interface ISearchConversationsRequest {

            /** SearchConversationsRequest type */
            type?: (backend.chat_service.ConversationType|null);

            /** SearchConversationsRequest memberIds */
            memberIds?: (string[]|null);

            /** SearchConversationsRequest term */
            term?: (string|null);

            /** SearchConversationsRequest pageNumber */
            pageNumber?: (number|null);

            /** SearchConversationsRequest pageSize */
            pageSize?: (number|null);

            /** SearchConversationsRequest messagePageSize */
            messagePageSize: number;
        }

        /** Represents a SearchConversationsRequest. */
        class SearchConversationsRequest implements ISearchConversationsRequest {

            /**
             * Constructs a new SearchConversationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.ISearchConversationsRequest);

            /** SearchConversationsRequest type. */
            public type?: (backend.chat_service.ConversationType|null);

            /** SearchConversationsRequest memberIds. */
            public memberIds: string[];

            /** SearchConversationsRequest term. */
            public term?: (string|null);

            /** SearchConversationsRequest pageNumber. */
            public pageNumber?: (number|null);

            /** SearchConversationsRequest pageSize. */
            public pageSize?: (number|null);

            /** SearchConversationsRequest messagePageSize. */
            public messagePageSize: number;

            /**
             * Creates a new SearchConversationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchConversationsRequest instance
             */
            public static create(properties?: backend.chat_service.ISearchConversationsRequest): backend.chat_service.SearchConversationsRequest;

            /**
             * Encodes the specified SearchConversationsRequest message. Does not implicitly {@link backend.chat_service.SearchConversationsRequest.verify|verify} messages.
             * @param message SearchConversationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.ISearchConversationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchConversationsRequest message, length delimited. Does not implicitly {@link backend.chat_service.SearchConversationsRequest.verify|verify} messages.
             * @param message SearchConversationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.ISearchConversationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchConversationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchConversationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.SearchConversationsRequest;

            /**
             * Decodes a SearchConversationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchConversationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.SearchConversationsRequest;

            /**
             * Verifies a SearchConversationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchConversationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchConversationsRequest
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.SearchConversationsRequest;

            /**
             * Creates a plain object from a SearchConversationsRequest message. Also converts values to other types if specified.
             * @param message SearchConversationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.SearchConversationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchConversationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchConversationsRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SearchConversationsPaginationResponse. */
        interface ISearchConversationsPaginationResponse {

            /** SearchConversationsPaginationResponse conversations */
            conversations?: (backend.chat_service.IConversation[]|null);
        }

        /** Represents a SearchConversationsPaginationResponse. */
        class SearchConversationsPaginationResponse implements ISearchConversationsPaginationResponse {

            /**
             * Constructs a new SearchConversationsPaginationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: backend.chat_service.ISearchConversationsPaginationResponse);

            /** SearchConversationsPaginationResponse conversations. */
            public conversations: backend.chat_service.IConversation[];

            /**
             * Creates a new SearchConversationsPaginationResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SearchConversationsPaginationResponse instance
             */
            public static create(properties?: backend.chat_service.ISearchConversationsPaginationResponse): backend.chat_service.SearchConversationsPaginationResponse;

            /**
             * Encodes the specified SearchConversationsPaginationResponse message. Does not implicitly {@link backend.chat_service.SearchConversationsPaginationResponse.verify|verify} messages.
             * @param message SearchConversationsPaginationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: backend.chat_service.ISearchConversationsPaginationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SearchConversationsPaginationResponse message, length delimited. Does not implicitly {@link backend.chat_service.SearchConversationsPaginationResponse.verify|verify} messages.
             * @param message SearchConversationsPaginationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: backend.chat_service.ISearchConversationsPaginationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SearchConversationsPaginationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SearchConversationsPaginationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): backend.chat_service.SearchConversationsPaginationResponse;

            /**
             * Decodes a SearchConversationsPaginationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SearchConversationsPaginationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): backend.chat_service.SearchConversationsPaginationResponse;

            /**
             * Verifies a SearchConversationsPaginationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SearchConversationsPaginationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SearchConversationsPaginationResponse
             */
            public static fromObject(object: { [k: string]: any }): backend.chat_service.SearchConversationsPaginationResponse;

            /**
             * Creates a plain object from a SearchConversationsPaginationResponse message. Also converts values to other types if specified.
             * @param message SearchConversationsPaginationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: backend.chat_service.SearchConversationsPaginationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SearchConversationsPaginationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SearchConversationsPaginationResponse
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
