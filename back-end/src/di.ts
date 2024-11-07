import { MessageRepository } from "./domain/interfaces/MessageRepository";
import { AnthropicMessageRepository } from "./infrastructure/repositories/AnthropicMessageRepository";
import { SendMessage } from "./use-cases/message/SendMessage";
import { MessageController } from "./interface/controller/message/MessageController";

// Exporting the MessageController using the Anthropic service
const messageRepository: MessageRepository = new AnthropicMessageRepository()
const sendMessage = new SendMessage(messageRepository)
export const messageController = new MessageController(sendMessage)