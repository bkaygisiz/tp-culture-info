"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMessage = void 0;
class SendMessage {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    execute(message) {
        try {
            return this.messageRepository.sendMessage(message);
        }
        catch (error) {
            throw new Error();
        }
    }
}
exports.SendMessage = SendMessage;
