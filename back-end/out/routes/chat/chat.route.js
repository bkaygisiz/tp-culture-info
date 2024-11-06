"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRouter = void 0;
const express_1 = require("express");
exports.chatRouter = (0, express_1.Router)();
exports.chatRouter.get('/', (req, res) => {
    res.send('Hello from chat route');
});
exports.chatRouter.post("/", (req, res) => {
    res.send('hello from route');
});
