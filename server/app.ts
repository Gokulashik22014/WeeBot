import express from "express"
import run from './test';
import dotenv from "dotenv";
import { chat } from "./src/chat";
const app = express();
dotenv.config();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  console.log("i ran");
  res.send('Hello NOD Readers!');
});

app.post("/api/chat",chat)

app.listen(port, () => {
  return console.log(`Express server is listening at http://localhost:${port} 🚀`);
});