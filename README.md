# Introduction
The system utils package  

# Installation
```sh
npm install git+ssh://git@github.com:TripConnect/common-utils.git --force
```

# Release
## 1. Build the package resources
```sh
npm run build
```
## 2. Build gRPC static denifitions
Linux
```sh
npm install --save-dev grpc-tools grpc_tools_node_protoc_ts # Install related packages
npx grpc_tools_node_protoc --proto_path=./protos --js_out=import_style=commonjs,binary:./protos/defs --grpc_out=grpc_js:./protos/defs --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --ts_out=grpc_js:./protos/defs ./protos/*_service.proto # Build js and ts definitions
```
Window
```sh
npm install --save-dev grpc-tools@1.11.2 @grpc/grpc-js@1.6.6 grpc_tools_node_protoc_ts # Install related packages
npx grpc_tools_node_protoc --proto_path=./protos --js_out=import_style=commonjs,binary:./protos/defs --grpc_out=grpc_js:./protos/defs --plugin=protoc-gen-ts="%cd%/node_modules/.bin/protoc-gen-ts.cmd" --ts_out=grpc_js:./protos/defs ./protos/*_service.proto # Build js and ts definitions
```
## 3. Expose all gRPC definitions
```sh
npx ts-node tools/generate-grpc-index.ts
```
## 4. Release to github as registry
```sh
git push
```

# gRPC
## Convention
**Naming conventions**  
- Find: return one item by id
- Get: return multiple items by ids with pagination
- Search: return multiple items by combined non-id conditions
- Create: create new item and returns  

**Style guide**  
Following the official [documentation](https://protobuf.dev/programming-guides/style/)
