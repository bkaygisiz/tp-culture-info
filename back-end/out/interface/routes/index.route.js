"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const MessageRoutes_1 = require("./message/MessageRoutes");
exports.router = (0, express_1.Router)();
exports.router.use('/message', MessageRoutes_1.messageRouter);
