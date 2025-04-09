// package: backend.twofa_service
// file: twofa_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as twofa_service_pb from "./twofa_service_pb";

interface ITwoFactorAuthenticationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    generateSetting: ITwoFactorAuthenticationServiceService_IGenerateSetting;
    createSetting: ITwoFactorAuthenticationServiceService_ICreateSetting;
    validateResource: ITwoFactorAuthenticationServiceService_IValidateResource;
}

interface ITwoFactorAuthenticationServiceService_IGenerateSetting extends grpc.MethodDefinition<twofa_service_pb.Generate2faRequest, twofa_service_pb.Generate2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/GenerateSetting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<twofa_service_pb.Generate2faRequest>;
    requestDeserialize: grpc.deserialize<twofa_service_pb.Generate2faRequest>;
    responseSerialize: grpc.serialize<twofa_service_pb.Generate2faResponse>;
    responseDeserialize: grpc.deserialize<twofa_service_pb.Generate2faResponse>;
}
interface ITwoFactorAuthenticationServiceService_ICreateSetting extends grpc.MethodDefinition<twofa_service_pb.Create2faRequest, twofa_service_pb.Create2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/CreateSetting";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<twofa_service_pb.Create2faRequest>;
    requestDeserialize: grpc.deserialize<twofa_service_pb.Create2faRequest>;
    responseSerialize: grpc.serialize<twofa_service_pb.Create2faResponse>;
    responseDeserialize: grpc.deserialize<twofa_service_pb.Create2faResponse>;
}
interface ITwoFactorAuthenticationServiceService_IValidateResource extends grpc.MethodDefinition<twofa_service_pb.Validate2faRequest, twofa_service_pb.Validate2faResponse> {
    path: "/backend.twofa_service.TwoFactorAuthenticationService/ValidateResource";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<twofa_service_pb.Validate2faRequest>;
    requestDeserialize: grpc.deserialize<twofa_service_pb.Validate2faRequest>;
    responseSerialize: grpc.serialize<twofa_service_pb.Validate2faResponse>;
    responseDeserialize: grpc.deserialize<twofa_service_pb.Validate2faResponse>;
}

export const TwoFactorAuthenticationServiceService: ITwoFactorAuthenticationServiceService;

export interface ITwoFactorAuthenticationServiceServer extends grpc.UntypedServiceImplementation {
    generateSetting: grpc.handleUnaryCall<twofa_service_pb.Generate2faRequest, twofa_service_pb.Generate2faResponse>;
    createSetting: grpc.handleUnaryCall<twofa_service_pb.Create2faRequest, twofa_service_pb.Create2faResponse>;
    validateResource: grpc.handleUnaryCall<twofa_service_pb.Validate2faRequest, twofa_service_pb.Validate2faResponse>;
}

export interface ITwoFactorAuthenticationServiceClient {
    generateSetting(request: twofa_service_pb.Generate2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    generateSetting(request: twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    generateSetting(request: twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: twofa_service_pb.Create2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    createSetting(request: twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: twofa_service_pb.Validate2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    validateResource(request: twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
}

export class TwoFactorAuthenticationServiceClient extends grpc.Client implements ITwoFactorAuthenticationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public generateSetting(request: twofa_service_pb.Generate2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public generateSetting(request: twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public generateSetting(request: twofa_service_pb.Generate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Generate2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: twofa_service_pb.Create2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public createSetting(request: twofa_service_pb.Create2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Create2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: twofa_service_pb.Validate2faRequest, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
    public validateResource(request: twofa_service_pb.Validate2faRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: twofa_service_pb.Validate2faResponse) => void): grpc.ClientUnaryCall;
}
