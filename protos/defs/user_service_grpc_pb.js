// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_service_pb = require('./user_service_pb.js');

function serialize_backend_user_service_AuthenticatedInfo(arg) {
  if (!(arg instanceof user_service_pb.AuthenticatedInfo)) {
    throw new Error('Expected argument of type backend.user_service.AuthenticatedInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_AuthenticatedInfo(buffer_arg) {
  return user_service_pb.AuthenticatedInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_FindUserRequest(arg) {
  if (!(arg instanceof user_service_pb.FindUserRequest)) {
    throw new Error('Expected argument of type backend.user_service.FindUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_FindUserRequest(buffer_arg) {
  return user_service_pb.FindUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_GetUsersRequest(arg) {
  if (!(arg instanceof user_service_pb.GetUsersRequest)) {
    throw new Error('Expected argument of type backend.user_service.GetUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_GetUsersRequest(buffer_arg) {
  return user_service_pb.GetUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_SearchUserRequest(arg) {
  if (!(arg instanceof user_service_pb.SearchUserRequest)) {
    throw new Error('Expected argument of type backend.user_service.SearchUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_SearchUserRequest(buffer_arg) {
  return user_service_pb.SearchUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_SignInRequest(arg) {
  if (!(arg instanceof user_service_pb.SignInRequest)) {
    throw new Error('Expected argument of type backend.user_service.SignInRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_SignInRequest(buffer_arg) {
  return user_service_pb.SignInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_SignUpRequest(arg) {
  if (!(arg instanceof user_service_pb.SignUpRequest)) {
    throw new Error('Expected argument of type backend.user_service.SignUpRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_SignUpRequest(buffer_arg) {
  return user_service_pb.SignUpRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_UserInfo(arg) {
  if (!(arg instanceof user_service_pb.UserInfo)) {
    throw new Error('Expected argument of type backend.user_service.UserInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_UserInfo(buffer_arg) {
  return user_service_pb.UserInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_user_service_UsersInfo(arg) {
  if (!(arg instanceof user_service_pb.UsersInfo)) {
    throw new Error('Expected argument of type backend.user_service.UsersInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_user_service_UsersInfo(buffer_arg) {
  return user_service_pb.UsersInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  signIn: {
    path: '/backend.user_service.UserService/SignIn',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.SignInRequest,
    responseType: user_service_pb.AuthenticatedInfo,
    requestSerialize: serialize_backend_user_service_SignInRequest,
    requestDeserialize: deserialize_backend_user_service_SignInRequest,
    responseSerialize: serialize_backend_user_service_AuthenticatedInfo,
    responseDeserialize: deserialize_backend_user_service_AuthenticatedInfo,
  },
  signUp: {
    path: '/backend.user_service.UserService/SignUp',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.SignUpRequest,
    responseType: user_service_pb.AuthenticatedInfo,
    requestSerialize: serialize_backend_user_service_SignUpRequest,
    requestDeserialize: deserialize_backend_user_service_SignUpRequest,
    responseSerialize: serialize_backend_user_service_AuthenticatedInfo,
    responseDeserialize: deserialize_backend_user_service_AuthenticatedInfo,
  },
  findUser: {
    path: '/backend.user_service.UserService/FindUser',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.FindUserRequest,
    responseType: user_service_pb.UserInfo,
    requestSerialize: serialize_backend_user_service_FindUserRequest,
    requestDeserialize: deserialize_backend_user_service_FindUserRequest,
    responseSerialize: serialize_backend_user_service_UserInfo,
    responseDeserialize: deserialize_backend_user_service_UserInfo,
  },
  getUsers: {
    path: '/backend.user_service.UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.GetUsersRequest,
    responseType: user_service_pb.UsersInfo,
    requestSerialize: serialize_backend_user_service_GetUsersRequest,
    requestDeserialize: deserialize_backend_user_service_GetUsersRequest,
    responseSerialize: serialize_backend_user_service_UsersInfo,
    responseDeserialize: deserialize_backend_user_service_UsersInfo,
  },
  searchUser: {
    path: '/backend.user_service.UserService/SearchUser',
    requestStream: false,
    responseStream: false,
    requestType: user_service_pb.SearchUserRequest,
    responseType: user_service_pb.UsersInfo,
    requestSerialize: serialize_backend_user_service_SearchUserRequest,
    requestDeserialize: deserialize_backend_user_service_SearchUserRequest,
    responseSerialize: serialize_backend_user_service_UsersInfo,
    responseDeserialize: deserialize_backend_user_service_UsersInfo,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
