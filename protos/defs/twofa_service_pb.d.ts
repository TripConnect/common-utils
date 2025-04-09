// package: backend.twofa_service
// file: twofa_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Generate2faRequest extends jspb.Message { 
    getLabel(): string;
    setLabel(value: string): Generate2faRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Generate2faRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Generate2faRequest): Generate2faRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Generate2faRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Generate2faRequest;
    static deserializeBinaryFromReader(message: Generate2faRequest, reader: jspb.BinaryReader): Generate2faRequest;
}

export namespace Generate2faRequest {
    export type AsObject = {
        label: string,
    }
}

export class Generate2faResponse extends jspb.Message { 
    getSecret(): string;
    setSecret(value: string): Generate2faResponse;
    getQrCode(): string;
    setQrCode(value: string): Generate2faResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Generate2faResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Generate2faResponse): Generate2faResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Generate2faResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Generate2faResponse;
    static deserializeBinaryFromReader(message: Generate2faResponse, reader: jspb.BinaryReader): Generate2faResponse;
}

export namespace Generate2faResponse {
    export type AsObject = {
        secret: string,
        qrCode: string,
    }
}

export class Create2faRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): Create2faRequest;
    getLabel(): string;
    setLabel(value: string): Create2faRequest;
    getSecret(): string;
    setSecret(value: string): Create2faRequest;
    getOtp(): string;
    setOtp(value: string): Create2faRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Create2faRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Create2faRequest): Create2faRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Create2faRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Create2faRequest;
    static deserializeBinaryFromReader(message: Create2faRequest, reader: jspb.BinaryReader): Create2faRequest;
}

export namespace Create2faRequest {
    export type AsObject = {
        resourceId: string,
        label: string,
        secret: string,
        otp: string,
    }
}

export class Create2faResponse extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): Create2faResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Create2faResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Create2faResponse): Create2faResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Create2faResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Create2faResponse;
    static deserializeBinaryFromReader(message: Create2faResponse, reader: jspb.BinaryReader): Create2faResponse;
}

export namespace Create2faResponse {
    export type AsObject = {
        resourceId: string,
    }
}

export class Validate2faRequest extends jspb.Message { 
    getResourceId(): string;
    setResourceId(value: string): Validate2faRequest;
    getOtp(): string;
    setOtp(value: string): Validate2faRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validate2faRequest.AsObject;
    static toObject(includeInstance: boolean, msg: Validate2faRequest): Validate2faRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validate2faRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validate2faRequest;
    static deserializeBinaryFromReader(message: Validate2faRequest, reader: jspb.BinaryReader): Validate2faRequest;
}

export namespace Validate2faRequest {
    export type AsObject = {
        resourceId: string,
        otp: string,
    }
}

export class Validate2faResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): Validate2faResponse;
    getStatus(): string;
    setStatus(value: string): Validate2faResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validate2faResponse.AsObject;
    static toObject(includeInstance: boolean, msg: Validate2faResponse): Validate2faResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validate2faResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validate2faResponse;
    static deserializeBinaryFromReader(message: Validate2faResponse, reader: jspb.BinaryReader): Validate2faResponse;
}

export namespace Validate2faResponse {
    export type AsObject = {
        success: boolean,
        status: string,
    }
}
