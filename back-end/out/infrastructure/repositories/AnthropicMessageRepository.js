"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicMessageRepository = void 0;
const sdk_1 = __importDefault(require("@anthropic-ai/sdk"));
class AnthropicMessageRepository {
    sendMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const anthropic = new sdk_1.default({
                    apiKey: process.env.API_KEY,
                });
                const msg = yield anthropic.messages.create({
                    model: "claude-3-5-sonnet-20240620",
                    max_tokens: 1000,
                    temperature: 0,
                    system: "Respond only with short poems.",
                    messages: [
                        {
                            role: "user",
                            content: [
                                {
                                    type: "text",
                                    text: message,
                                },
                            ],
                        },
                    ],
                });
                return msg.content.toString();
            }
            catch (error) {
                console.log("Throwing error");
                return 'error';
            }
        });
    }
}
exports.AnthropicMessageRepository = AnthropicMessageRepository;
