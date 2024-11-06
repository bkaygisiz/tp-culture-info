"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postChat = void 0;
const postChat = (req, res) => {
    const { message } = req.body;
    console.log(message);
};
exports.postChat = postChat;
