"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
class KafkaProducer {
    constructor(kafka) {
        this.kafka = kafka;
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const producer = this.kafka.producer({ createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner });
            yield producer.connect();
            KafkaProducer.producer = producer;
        });
    }
    publish(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (KafkaProducer.producer === null) {
                yield this.initialize();
            }
            KafkaProducer.producer.send({
                topic: params.topic,
                messages: [
                    { value: params.message }
                ]
            });
        });
    }
}
KafkaProducer.producer = null;
exports.default = KafkaProducer;
