import express from "express"
import run from './test';
import dotenv from "dotenv";
import { chat } from "./src/chat";
const app = express();
dotenv.config();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello NOD Readers!');
});

app.get("/api/chat",chat)

app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});