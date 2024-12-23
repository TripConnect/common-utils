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
class KafkaListener {
    constructor(kafka, resolvers) {
        this.kafka = kafka;
        this.resolvers = resolvers;
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const resolver of this.resolvers) {
                const consumer = this.kafka.consumer({ groupId: resolver.groupId });
                yield consumer.connect();
                yield consumer.subscribe({ topic: resolver.topic });
                yield consumer.run({
                    eachMessage: (payload) => __awaiter(this, void 0, void 0, function* () {
                        let message = JSON.parse(payload.message.value.toString());
                        yield resolver.resolver(message);
                    }),
                });
            }
        });
    }
}
exports.default = KafkaListener;
