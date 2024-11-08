import { Request, Response } from "express";
import * as ClaudeService from "../../../infrastructure/repositories/AnthropicMessageRepository";
import { SendMessage } from "../../../use-cases/message/SendMessage";
import { Message } from "@anthropic-ai/sdk/resources";

export class MessageController {
  constructor(private sendMessage: SendMessage) {}

  postMessage(req: Request, res: Response) {
    try {
      const { message }: { message: string } = req.body;
      const responseMessage = this.sendMessage.execute(message);
      res.json({
        message: 'Sorry no more credits',
      });
    } catch (error) {
      res.status(500).json({
        error: "Sorry something went wrong"
      });
    }
  }
}
