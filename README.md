# Introduction
The system utils package  

# Installation
```sh
npm install git+ssh://git@github.com:TripConnect/common-utils.git --force
```

# Release
```sh
npm run build # Build the package resources
git push # Release to github as registry
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
## Generate static definition
Install related packages
```sh
npm install protobufjs --save
npm install protobufjs-cli --save-dev
```
Build js and ts definitions
```sh
npx pbjs -t static-module -w commonjs -o ./protos/defs/index.js ./protos/backend.proto
npx pbts -o ./protos/defs/index.d.ts ./protos/defs/index.js
```
