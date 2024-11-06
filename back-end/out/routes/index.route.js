"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const chat_route_1 = require("./chat/chat.route");
exports.router = (0, express_1.Router)();
exports.router.use('/chat', chat_route_1.chatRouter);
