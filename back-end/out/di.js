"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageController = void 0;
const AnthropicMessageRepository_1 = require("./infrastructure/repositories/AnthropicMessageRepository");
const SendMessage_1 = require("./use-cases/message/SendMessage");
const MessageController_1 = require("./interface/controller/message/MessageController");
// Exporting the MessageController using the Anthropic service
const messageRepository = new AnthropicMessageRepository_1.AnthropicMessageRepository();
const sendMessage = new SendMessage_1.SendMessage(messageRepository);
exports.messageController = new MessageController_1.MessageController(sendMessage);
