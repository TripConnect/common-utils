"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backendProto = exports.KafkaProducer = exports.KafkaListener = void 0;
const definition_1 = require("./grpc/definition");
Object.defineProperty(exports, "backendProto", { enumerable: true, get: function () { return definition_1.backendProto; } });
const listener_1 = require("./kafka/listener");
exports.KafkaListener = listener_1.default;
const producer_1 = require("./kafka/producer");
exports.KafkaProducer = producer_1.default;
