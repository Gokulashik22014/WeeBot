import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


export const chat = async(req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.API as string);
  // const { desc } = req.body;
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction:
      "You like to chat but you answer only with 10 words and not more than that. Now your a character"+req.desc ,
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

    const result = await chatSession.sendMessage("Hi");
    return result.response.text();
  }
  const result=await run(req.message);
  res.json({success:true,message:result})
};
