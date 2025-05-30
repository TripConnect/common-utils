const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    require.resolve('../../protos/backend.proto'),
    {
        keepCase: false, // auto convert to camelCase
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

export const backendProto = grpc.loadPackageDefinition(packageDefinition).backend;
