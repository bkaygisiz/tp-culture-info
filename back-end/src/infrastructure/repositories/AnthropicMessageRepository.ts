import Anthropic from "@anthropic-ai/sdk";
import { ContentBlock } from "@anthropic-ai/sdk/resources";

export class AnthropicMessageRepository {
  async sendMessage(message: string): Promise<string> {
    try {
      const anthropic = new Anthropic({
        apiKey: process.env.API_KEY,
      });
      const msg = await anthropic.messages.create({
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
    } catch (error) {
      console.log("Throwing error");
      return 'error'
    }
  }
}
