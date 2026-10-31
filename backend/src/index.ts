import express, { type Request, type Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
  console.log("[SUCCESS] DB connected successfully.");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", (request: Request, response: Response) => {
  response.json({ message: "Hello!" });
});

const runningPort = process.env.PORT || 8088;

app.listen(runningPort, () => {
  console.log(`[LISTENING] Server Listening to PORT: ${runningPort}.`);
});
