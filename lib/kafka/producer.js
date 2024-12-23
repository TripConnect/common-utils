"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
class KafkaProducer {
    constructor(kafka) {
        this.kafka = kafka;
    }
    async initialize() {
        const producer = this.kafka.producer({ createPartitioner: kafkajs_1.Partitioners.LegacyPartitioner });
        await producer.connect();
        KafkaProducer.producer = producer;
    }
    async publish(params) {
        if (KafkaProducer.producer === null) {
            await this.initialize();
        }
        KafkaProducer.producer.send({
            topic: params.topic,
            messages: [
                { value: params.message }
            ]
        });
    }
}
KafkaProducer.producer = null;
exports.default = KafkaProducer;
