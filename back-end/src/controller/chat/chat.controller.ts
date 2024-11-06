import { Request, Response } from "express";
import * as ClaudeService from "../../services/anthropic-api/claude.service";
export const postChat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const resp = await ClaudeService.postChat(message);
    console.log("Didnt catched error")
    res.json({
      message: resp,
    });
  } catch (error) {
    res.status(200).json({
        message: "Hello no more credits on the api key so here's a random message"
    });
  }
};
