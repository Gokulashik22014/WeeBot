import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { Request, Response } from "express";

export const chat = async (req, res) => {
  console.log(req.body);
  const genAI = new GoogleGenerativeAI(process.env.API as string);
  const { desc, message } = req.body;
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: desc,
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  async function run(message: string) {
    const chatSession = model.startChat({
      generationConfig,
    });

    const result = await chatSession.sendMessage(message);
    return result.response.text();
  }
  const result = await run(message);
  res.json({ success: true, message: result });
};
