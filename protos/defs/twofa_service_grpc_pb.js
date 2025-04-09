// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var twofa_service_pb = require('./twofa_service_pb.js');

function serialize_backend_twofa_service_Create2faRequest(arg) {
  if (!(arg instanceof twofa_service_pb.Create2faRequest)) {
    throw new Error('Expected argument of type backend.twofa_service.Create2faRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Create2faRequest(buffer_arg) {
  return twofa_service_pb.Create2faRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_twofa_service_Create2faResponse(arg) {
  if (!(arg instanceof twofa_service_pb.Create2faResponse)) {
    throw new Error('Expected argument of type backend.twofa_service.Create2faResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Create2faResponse(buffer_arg) {
  return twofa_service_pb.Create2faResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_twofa_service_Generate2faRequest(arg) {
  if (!(arg instanceof twofa_service_pb.Generate2faRequest)) {
    throw new Error('Expected argument of type backend.twofa_service.Generate2faRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Generate2faRequest(buffer_arg) {
  return twofa_service_pb.Generate2faRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_twofa_service_Generate2faResponse(arg) {
  if (!(arg instanceof twofa_service_pb.Generate2faResponse)) {
    throw new Error('Expected argument of type backend.twofa_service.Generate2faResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Generate2faResponse(buffer_arg) {
  return twofa_service_pb.Generate2faResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_twofa_service_Validate2faRequest(arg) {
  if (!(arg instanceof twofa_service_pb.Validate2faRequest)) {
    throw new Error('Expected argument of type backend.twofa_service.Validate2faRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Validate2faRequest(buffer_arg) {
  return twofa_service_pb.Validate2faRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_twofa_service_Validate2faResponse(arg) {
  if (!(arg instanceof twofa_service_pb.Validate2faResponse)) {
    throw new Error('Expected argument of type backend.twofa_service.Validate2faResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_twofa_service_Validate2faResponse(buffer_arg) {
  return twofa_service_pb.Validate2faResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TwoFactorAuthenticationServiceService = exports.TwoFactorAuthenticationServiceService = {
  generateSetting: {
    path: '/backend.twofa_service.TwoFactorAuthenticationService/GenerateSetting',
    requestStream: false,
    responseStream: false,
    requestType: twofa_service_pb.Generate2faRequest,
    responseType: twofa_service_pb.Generate2faResponse,
    requestSerialize: serialize_backend_twofa_service_Generate2faRequest,
    requestDeserialize: deserialize_backend_twofa_service_Generate2faRequest,
    responseSerialize: serialize_backend_twofa_service_Generate2faResponse,
    responseDeserialize: deserialize_backend_twofa_service_Generate2faResponse,
  },
  createSetting: {
    path: '/backend.twofa_service.TwoFactorAuthenticationService/CreateSetting',
    requestStream: false,
    responseStream: false,
    requestType: twofa_service_pb.Create2faRequest,
    responseType: twofa_service_pb.Create2faResponse,
    requestSerialize: serialize_backend_twofa_service_Create2faRequest,
    requestDeserialize: deserialize_backend_twofa_service_Create2faRequest,
    responseSerialize: serialize_backend_twofa_service_Create2faResponse,
    responseDeserialize: deserialize_backend_twofa_service_Create2faResponse,
  },
  validateResource: {
    path: '/backend.twofa_service.TwoFactorAuthenticationService/ValidateResource',
    requestStream: false,
    responseStream: false,
    requestType: twofa_service_pb.Validate2faRequest,
    responseType: twofa_service_pb.Validate2faResponse,
    requestSerialize: serialize_backend_twofa_service_Validate2faRequest,
    requestDeserialize: deserialize_backend_twofa_service_Validate2faRequest,
    responseSerialize: serialize_backend_twofa_service_Validate2faResponse,
    responseDeserialize: deserialize_backend_twofa_service_Validate2faResponse,
  },
};

exports.TwoFactorAuthenticationServiceClient = grpc.makeGenericClientConstructor(TwoFactorAuthenticationServiceService);
