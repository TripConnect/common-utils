import { Kafka, Producer, Partitioners } from "kafkajs";

export type PublishPayload = {
    topic: string,
    message: string,
}

export default class KafkaProducer {
    private static producer: Producer | null = null;

    constructor(private kafka: Kafka) { }

    private async initialize(): Promise<void> {
        const producer = this.kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });
        await producer.connect();
        KafkaProducer.producer = producer;
    }

    public async publish(params: PublishPayload): Promise<void> {
        if (KafkaProducer.producer === null) {
            await this.initialize();
        }
        KafkaProducer.producer!.send({
            topic: params.topic,
            messages: [
                { value: params.message }
            ]
        });
    }
}
