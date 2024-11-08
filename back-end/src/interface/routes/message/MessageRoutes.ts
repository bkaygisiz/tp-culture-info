import { Router, Request, Response } from "express"
import { messageController } from "../../../di"
const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.send('Hello from chat route')
})
router.post("/", (req: Request, res: Response) => {
    messageController.postMessage(req, res)
})
export { router as messageRouter }