import express from "express";
import { router } from "./interface/routes/index.route";
import cors from "cors"
import { config } from "dotenv";

config()
const app = express();

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(3000, () => {
  console.log("Listening on 3000");
});
