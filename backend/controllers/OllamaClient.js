import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const ollama = axios.create({
  baseURL: "https://ollama.com/api",
  timeout: 600000,
  headers: {
    Authorization: `Bearer ${process.env.OLLAMA_API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function generateAI(prompt) {
  const response = await ollama.post("/generate", {
    model: process.env.OLLAMA_MODEL,
    prompt: prompt,
    stream: false,
    temperature: 0,
  });

  return response;
}
