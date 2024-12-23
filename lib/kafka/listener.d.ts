import { Kafka } from "kafkajs";
export type TopicResolver = {
    groupId: string;
    topic: string;
    resolver: (message: Record<string, string>) => Promise<void>;
};
export default class KafkaListener {
    private kafka;
    private resolvers;
    constructor(kafka: Kafka, resolvers: TopicResolver[]);
    listen(): Promise<void>;
}
//# sourceMappingURL=listener.d.ts.map