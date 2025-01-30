import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load API key from .env file

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function handleMessage(query) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(query);
    const response = result.response.text();

    return response;
  } catch (error) {
    return "Sorry, I encountered an error while processing your request.";
  }
}

export default handleMessage;
