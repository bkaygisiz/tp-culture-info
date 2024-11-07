import { MessageRepository } from "../../domain/interfaces/MessageRepository";

export class SendMessage {
  constructor(private messageRepository: MessageRepository) {}

  execute(message: string): Promise<string> {
    try {
      return this.messageRepository.sendMessage(message);
    } catch (error) {
      throw new Error();
    }
  }
}
