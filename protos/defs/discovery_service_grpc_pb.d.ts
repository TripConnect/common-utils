// package: backend.discovery_service
// file: discovery_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as discovery_service_pb from "./discovery_service_pb";

interface IDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    discover: IDiscoveryServiceService_IDiscover;
}

interface IDiscoveryServiceService_IDiscover extends grpc.MethodDefinition<discovery_service_pb.DiscoveryRequest, discovery_service_pb.ServiceInstance> {
    path: "/backend.discovery_service.DiscoveryService/Discover";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<discovery_service_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<discovery_service_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<discovery_service_pb.ServiceInstance>;
    responseDeserialize: grpc.deserialize<discovery_service_pb.ServiceInstance>;
}

export const DiscoveryServiceService: IDiscoveryServiceService;

export interface IDiscoveryServiceServer extends grpc.UntypedServiceImplementation {
    discover: grpc.handleUnaryCall<discovery_service_pb.DiscoveryRequest, discovery_service_pb.ServiceInstance>;
}

export interface IDiscoveryServiceClient {
    discover(request: discovery_service_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
    discover(request: discovery_service_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
    discover(request: discovery_service_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
}

export class DiscoveryServiceClient extends grpc.Client implements IDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public discover(request: discovery_service_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
    public discover(request: discovery_service_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
    public discover(request: discovery_service_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: discovery_service_pb.ServiceInstance) => void): grpc.ClientUnaryCall;
}
