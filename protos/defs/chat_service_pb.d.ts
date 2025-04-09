// package: backend.chat_service
// file: chat_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class ChatMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): ChatMessage;
    getConversationId(): string;
    setConversationId(value: string): ChatMessage;
    getFromUserId(): string;
    setFromUserId(value: string): ChatMessage;
    getMessageContent(): string;
    setMessageContent(value: string): ChatMessage;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ChatMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatMessage;
    static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
    export type AsObject = {
        id: string,
        conversationId: string,
        fromUserId: string,
        messageContent: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class FindConversationRequest extends jspb.Message { 
    getConversationId(): string;
    setConversationId(value: string): FindConversationRequest;
    getMessagePageNumber(): number;
    setMessagePageNumber(value: number): FindConversationRequest;
    getMessagePageSize(): number;
    setMessagePageSize(value: number): FindConversationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindConversationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindConversationRequest): FindConversationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindConversationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindConversationRequest;
    static deserializeBinaryFromReader(message: FindConversationRequest, reader: jspb.BinaryReader): FindConversationRequest;
}

export namespace FindConversationRequest {
    export type AsObject = {
        conversationId: string,
        messagePageNumber: number,
        messagePageSize: number,
    }
}

export class CreateConversationRequest extends jspb.Message { 

    hasOwnerId(): boolean;
    clearOwnerId(): void;
    getOwnerId(): string | undefined;
    setOwnerId(value: string): CreateConversationRequest;

    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): CreateConversationRequest;
    getType(): ConversationType;
    setType(value: ConversationType): CreateConversationRequest;
    clearMemberIdsList(): void;
    getMemberIdsList(): Array<string>;
    setMemberIdsList(value: Array<string>): CreateConversationRequest;
    addMemberIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateConversationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateConversationRequest): CreateConversationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateConversationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateConversationRequest;
    static deserializeBinaryFromReader(message: CreateConversationRequest, reader: jspb.BinaryReader): CreateConversationRequest;
}

export namespace CreateConversationRequest {
    export type AsObject = {
        ownerId?: string,
        name?: string,
        type: ConversationType,
        memberIdsList: Array<string>,
    }
}

export class CreateChatMessageRequest extends jspb.Message { 
    getConversationId(): string;
    setConversationId(value: string): CreateChatMessageRequest;
    getFromUserId(): string;
    setFromUserId(value: string): CreateChatMessageRequest;
    getMessageContent(): string;
    setMessageContent(value: string): CreateChatMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateChatMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateChatMessageRequest): CreateChatMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateChatMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateChatMessageRequest;
    static deserializeBinaryFromReader(message: CreateChatMessageRequest, reader: jspb.BinaryReader): CreateChatMessageRequest;
}

export namespace CreateChatMessageRequest {
    export type AsObject = {
        conversationId: string,
        fromUserId: string,
        messageContent: string,
    }
}

export class Conversation extends jspb.Message { 
    getId(): string;
    setId(value: string): Conversation;
    getType(): ConversationType;
    setType(value: ConversationType): Conversation;
    getName(): string;
    setName(value: string): Conversation;
    clearMemberIdsList(): void;
    getMemberIdsList(): Array<string>;
    setMemberIdsList(value: Array<string>): Conversation;
    addMemberIds(value: string, index?: number): string;
    clearMessagesList(): void;
    getMessagesList(): Array<ChatMessage>;
    setMessagesList(value: Array<ChatMessage>): Conversation;
    addMessages(value?: ChatMessage, index?: number): ChatMessage;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Conversation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Conversation.AsObject;
    static toObject(includeInstance: boolean, msg: Conversation): Conversation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Conversation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Conversation;
    static deserializeBinaryFromReader(message: Conversation, reader: jspb.BinaryReader): Conversation;
}

export namespace Conversation {
    export type AsObject = {
        id: string,
        type: ConversationType,
        name: string,
        memberIdsList: Array<string>,
        messagesList: Array<ChatMessage.AsObject>,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SearchConversationsRequest extends jspb.Message { 

    hasType(): boolean;
    clearType(): void;
    getType(): ConversationType | undefined;
    setType(value: ConversationType): SearchConversationsRequest;
    clearMemberIdsList(): void;
    getMemberIdsList(): Array<string>;
    setMemberIdsList(value: Array<string>): SearchConversationsRequest;
    addMemberIds(value: string, index?: number): string;

    hasTerm(): boolean;
    clearTerm(): void;
    getTerm(): string | undefined;
    setTerm(value: string): SearchConversationsRequest;

    hasPageNumber(): boolean;
    clearPageNumber(): void;
    getPageNumber(): number | undefined;
    setPageNumber(value: number): SearchConversationsRequest;

    hasPageSize(): boolean;
    clearPageSize(): void;
    getPageSize(): number | undefined;
    setPageSize(value: number): SearchConversationsRequest;
    getMessagePageSize(): number;
    setMessagePageSize(value: number): SearchConversationsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchConversationsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SearchConversationsRequest): SearchConversationsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchConversationsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchConversationsRequest;
    static deserializeBinaryFromReader(message: SearchConversationsRequest, reader: jspb.BinaryReader): SearchConversationsRequest;
}

export namespace SearchConversationsRequest {
    export type AsObject = {
        type?: ConversationType,
        memberIdsList: Array<string>,
        term?: string,
        pageNumber?: number,
        pageSize?: number,
        messagePageSize: number,
    }
}

export class SearchConversationsPaginationResponse extends jspb.Message { 
    clearConversationsList(): void;
    getConversationsList(): Array<Conversation>;
    setConversationsList(value: Array<Conversation>): SearchConversationsPaginationResponse;
    addConversations(value?: Conversation, index?: number): Conversation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SearchConversationsPaginationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SearchConversationsPaginationResponse): SearchConversationsPaginationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SearchConversationsPaginationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SearchConversationsPaginationResponse;
    static deserializeBinaryFromReader(message: SearchConversationsPaginationResponse, reader: jspb.BinaryReader): SearchConversationsPaginationResponse;
}

export namespace SearchConversationsPaginationResponse {
    export type AsObject = {
        conversationsList: Array<Conversation.AsObject>,
    }
}

export enum ConversationType {
    PRIVATE = 0,
    GROUP = 1,
}
