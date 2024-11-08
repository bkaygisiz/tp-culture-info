import { Message } from "../entities/Message";

export interface MessageRepository {
    sendMessage(message: string): Promise<string>;
}