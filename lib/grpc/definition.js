"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendProto = void 0;
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(require.resolve('../../protos/backend.proto'), {
    keepCase: false, // auto convert to camelCase
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
exports.backendProto = grpc.loadPackageDefinition(packageDefinition).backend;
