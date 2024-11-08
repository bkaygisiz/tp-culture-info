import { Router } from "express"
import { messageRouter } from "./message/MessageRoutes"
export const router = Router()

router.use('/message', messageRouter)