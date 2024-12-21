"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendProto = void 0;
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(require.resolve('../protos/backend.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
exports.backendProto = grpc.loadPackageDefinition(packageDefinition).backend;
