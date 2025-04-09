// package: backend.discovery_service
// file: discovery_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DiscoveryRequest extends jspb.Message { 
    getServiceName(): string;
    setServiceName(value: string): DiscoveryRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DiscoveryRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DiscoveryRequest): DiscoveryRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DiscoveryRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DiscoveryRequest;
    static deserializeBinaryFromReader(message: DiscoveryRequest, reader: jspb.BinaryReader): DiscoveryRequest;
}

export namespace DiscoveryRequest {
    export type AsObject = {
        serviceName: string,
    }
}

export class ServiceInstance extends jspb.Message { 
    getHost(): string;
    setHost(value: string): ServiceInstance;
    getPort(): number;
    setPort(value: number): ServiceInstance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ServiceInstance.AsObject;
    static toObject(includeInstance: boolean, msg: ServiceInstance): ServiceInstance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ServiceInstance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ServiceInstance;
    static deserializeBinaryFromReader(message: ServiceInstance, reader: jspb.BinaryReader): ServiceInstance;
}

export namespace ServiceInstance {
    export type AsObject = {
        host: string,
        port: number,
    }
}
