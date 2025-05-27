import { NextResponse , NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBrjNAMQdMztUGfXTDTtDEF78nSLkfvE9I" });

export async function POST(){
  const response = await ai.models.generateContentStream({
    model: "gemini-2.0-flash",
    contents: "Explain how AI works",
  });
  for await(const chunks of response){
    console.log(chunks.text)
  }
  
    return NextResponse.json({
        message:"check logs"
    })
}
