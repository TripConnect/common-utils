"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KafkaListener {
    constructor(kafka, resolvers) {
        this.kafka = kafka;
        this.resolvers = resolvers;
    }
    async listen() {
        for (const resolver of this.resolvers) {
            const consumer = this.kafka.consumer({ groupId: resolver.groupId });
            await consumer.connect();
            await consumer.subscribe({ topic: resolver.topic });
            await consumer.run({
                eachMessage: async (payload) => {
                    let message = JSON.parse(payload.message.value.toString());
                    await resolver.resolver(message);
                },
            });
        }
    }
}
exports.default = KafkaListener;
