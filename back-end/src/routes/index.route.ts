import { Router } from "express"
import { chatRouter } from "./chat/chat.route"
export const router = Router()

router.use('/chat', chatRouter)