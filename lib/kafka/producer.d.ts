import { Kafka } from "kafkajs";
export type PublishPayload = {
    topic: string;
    message: string;
};
export default class KafkaProducer {
    private kafka;
    private static producer;
    constructor(kafka: Kafka);
    private initialize;
    publish(params: PublishPayload): Promise<void>;
}
