"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRouter = void 0;
const express_1 = require("express");
const di_1 = require("../../../di");
const router = (0, express_1.Router)();
exports.messageRouter = router;
router.get('/', (req, res) => {
    res.send('Hello from chat route');
});
router.post("/", (req, res) => {
    di_1.messageController.postMessage(req, res);
});
