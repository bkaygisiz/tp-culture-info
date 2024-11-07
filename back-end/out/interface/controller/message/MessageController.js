"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
class MessageController {
    constructor(sendMessage) {
        this.sendMessage = sendMessage;
    }
    postMessage(req, res) {
        try {
            const { message } = req.body;
            const responseMessage = this.sendMessage.execute(message);
            res.json({
                message: 'Sorry no more credits',
            });
        }
        catch (error) {
            res.status(500).json({
                error: "Sorry something went wrong"
            });
        }
    }
}
exports.MessageController = MessageController;
