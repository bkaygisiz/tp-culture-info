import { Router, Request, Response } from "express"
import * as ChatController from "../../controller/chat/chat.controller"
export const chatRouter = Router()

chatRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from chat route')
})
chatRouter.post("/", (req: Request, res: Response) => {
    ChatController.postChat(req, res)
})