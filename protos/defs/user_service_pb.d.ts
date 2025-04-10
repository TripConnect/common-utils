// package: backend.user_service
// file: user_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Token extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): Token;
    getRefreshToken(): string;
    setRefreshToken(value: string): Token;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Token.AsObject;
    static toObject(includeInstance: boolean, msg: Token): Token.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Token, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Token;
    static deserializeBinaryFromReader(message: Token, reader: jspb.BinaryReader): Token;
}

export namespace Token {
    export type AsObject = {
        accessToken: string,
        refreshToken: string,
    }
}

export class UserInfo extends jspb.Message { 
    getId(): string;
    setId(value: string): UserInfo;
    getAvatar(): string;
    setAvatar(value: string): UserInfo;
    getDisplayName(): string;
    setDisplayName(value: string): UserInfo;
    getEnabledTwofa(): boolean;
    setEnabledTwofa(value: boolean): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
}

export namespace UserInfo {
    export type AsObject = {
        id: string,
        avatar: string,
        displayName: string,
        enabledTwofa: boolean,
    }
}

export class AuthenticatedInfo extends jspb.Message { 

    hasUserInfo(): boolean;
    clearUserInfo(): void;
    getUserInfo(): UserInfo | undefined;
    setUserInfo(value?: UserInfo): AuthenticatedInfo;

    hasToken(): boolean;
    clearToken(): void;
    getToken(): Token | undefined;
    setToken(value?: Token): AuthenticatedInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthenticatedInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AuthenticatedInfo): AuthenticatedInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthenticatedInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthenticatedInfo;
    static deserializeBinaryFromReader(message: AuthenticatedInfo, reader: jspb.BinaryReader): AuthenticatedInfo;
}

export namespace AuthenticatedInfo {
    export type AsObject = {
        userInfo?: UserInfo.AsObject,
        token?: Token.AsObject,
    }
}

export class SignInRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignInRequest;
    getPassword(): string;
    setPassword(value: string): SignInRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignInRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignInRequest): SignInRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignInRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignInRequest;
    static deserializeBinaryFromReader(message: SignInRequest, reader: jspb.BinaryReader): SignInRequest;
}

export namespace SignInRequest {
    export type AsObject = {
        username: string,
        password: string,
    }
}

export class SignUpRequest extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): SignUpRequest;
    getPassword(): string;
    setPassword(value: string): SignUpRequest;
    getDisplayName(): string;
    setDisplayName(value: string): SignUpRequest;
    getAvatarUrl(): string;
    setAvatarUrl(value: string): SignUpRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SignUpRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SignUpRequest): SignUpRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SignUpRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SignUpRequest;
    static deserializeBinaryFromReader(message: SignUpRequest, reader: jspb.BinaryReader): SignUpRequest;
}

export namespace SignUpRequest {
    export type AsObject = {
        username: string,
        password: string,
        displayName: string,
        avatarUrl: string,
    }
}

export class GetUsersRequest extends jspb.Message { 
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): GetUsersRequest;
    addUserIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
    static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
    export type AsObject = {
        userIdsList: Array<string>,
    }
}

export class FindUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): FindUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindUserRequest): FindUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindUserRequest;
    static deserializeBinaryFromReader(message: FindUserRequest, reader: jspb.BinaryReader): FindUserRequest;
}

export namespace FindUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class SearchUserRequest extends jspb.Message { 
    getTerm(): string;
    setTerm(value: string): SearchUserRequest;

    hasPageNumber(): boolean;
    clearPageNumber(): void;
    getPageNumber(): number | undefined;
    setPageNumber(value: number): SearchUserRequest;

    hasPageSize(): boolean;
    clearPageSize(): void;
    getPageSize(): number | undefined;
    setPageSize(value: number): SearchUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchUserRequest): SearchUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchUserRequest;
    static deserializeBinaryFromReader(message: SearchUserRequest, reader: jspb.BinaryReader): SearchUserRequest;
}

export namespace SearchUserRequest {
    export type AsObject = {
        term: string,
        pageNumber?: number,
        pageSize?: number,
    }
}

export class UsersInfo extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserInfo>;
    setUsersList(value: Array<UserInfo>): UsersInfo;
    addUsers(value?: UserInfo, index?: number): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UsersInfo): UsersInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersInfo;
    static deserializeBinaryFromReader(message: UsersInfo, reader: jspb.BinaryReader): UsersInfo;
}

export namespace UsersInfo {
    export type AsObject = {
        usersList: Array<UserInfo.AsObject>,
    }
}
