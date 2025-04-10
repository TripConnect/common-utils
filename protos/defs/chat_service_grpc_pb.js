// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_service_pb = require('./chat_service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_backend_chat_service_ChatMessage(arg) {
  if (!(arg instanceof chat_service_pb.ChatMessage)) {
    throw new Error('Expected argument of type backend.chat_service.ChatMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_ChatMessage(buffer_arg) {
  return chat_service_pb.ChatMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_Conversation(arg) {
  if (!(arg instanceof chat_service_pb.Conversation)) {
    throw new Error('Expected argument of type backend.chat_service.Conversation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_Conversation(buffer_arg) {
  return chat_service_pb.Conversation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_CreateChatMessageRequest(arg) {
  if (!(arg instanceof chat_service_pb.CreateChatMessageRequest)) {
    throw new Error('Expected argument of type backend.chat_service.CreateChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_CreateChatMessageRequest(buffer_arg) {
  return chat_service_pb.CreateChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_CreateConversationRequest(arg) {
  if (!(arg instanceof chat_service_pb.CreateConversationRequest)) {
    throw new Error('Expected argument of type backend.chat_service.CreateConversationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_CreateConversationRequest(buffer_arg) {
  return chat_service_pb.CreateConversationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_FindConversationRequest(arg) {
  if (!(arg instanceof chat_service_pb.FindConversationRequest)) {
    throw new Error('Expected argument of type backend.chat_service.FindConversationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_FindConversationRequest(buffer_arg) {
  return chat_service_pb.FindConversationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_SearchConversationsPaginationResponse(arg) {
  if (!(arg instanceof chat_service_pb.SearchConversationsPaginationResponse)) {
    throw new Error('Expected argument of type backend.chat_service.SearchConversationsPaginationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_SearchConversationsPaginationResponse(buffer_arg) {
  return chat_service_pb.SearchConversationsPaginationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_backend_chat_service_SearchConversationsRequest(arg) {
  if (!(arg instanceof chat_service_pb.SearchConversationsRequest)) {
    throw new Error('Expected argument of type backend.chat_service.SearchConversationsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_backend_chat_service_SearchConversationsRequest(buffer_arg) {
  return chat_service_pb.SearchConversationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  createConversation: {
    path: '/backend.chat_service.ChatService/CreateConversation',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.CreateConversationRequest,
    responseType: chat_service_pb.Conversation,
    requestSerialize: serialize_backend_chat_service_CreateConversationRequest,
    requestDeserialize: deserialize_backend_chat_service_CreateConversationRequest,
    responseSerialize: serialize_backend_chat_service_Conversation,
    responseDeserialize: deserialize_backend_chat_service_Conversation,
  },
  createChatMessage: {
    path: '/backend.chat_service.ChatService/CreateChatMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.CreateChatMessageRequest,
    responseType: chat_service_pb.ChatMessage,
    requestSerialize: serialize_backend_chat_service_CreateChatMessageRequest,
    requestDeserialize: deserialize_backend_chat_service_CreateChatMessageRequest,
    responseSerialize: serialize_backend_chat_service_ChatMessage,
    responseDeserialize: deserialize_backend_chat_service_ChatMessage,
  },
  searchConversations: {
    path: '/backend.chat_service.ChatService/SearchConversations',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.SearchConversationsRequest,
    responseType: chat_service_pb.SearchConversationsPaginationResponse,
    requestSerialize: serialize_backend_chat_service_SearchConversationsRequest,
    requestDeserialize: deserialize_backend_chat_service_SearchConversationsRequest,
    responseSerialize: serialize_backend_chat_service_SearchConversationsPaginationResponse,
    responseDeserialize: deserialize_backend_chat_service_SearchConversationsPaginationResponse,
  },
  findConversation: {
    path: '/backend.chat_service.ChatService/FindConversation',
    requestStream: false,
    responseStream: false,
    requestType: chat_service_pb.FindConversationRequest,
    responseType: chat_service_pb.Conversation,
    requestSerialize: serialize_backend_chat_service_FindConversationRequest,
    requestDeserialize: deserialize_backend_chat_service_FindConversationRequest,
    responseSerialize: serialize_backend_chat_service_Conversation,
    responseDeserialize: deserialize_backend_chat_service_Conversation,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
