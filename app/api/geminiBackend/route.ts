import { NextResponse , NextRequest } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { GenerateContentResponse } from "@google/generative-ai"; // Import for type checking

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_KEY! });

export async function POST(req:NextRequest) {
  const body = await req.json()
  try {
    const response = await ai.models.generateContentStream({
      model: "gemini-1.5-flash",
      contents:body.body,
    });
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of response) {
            let text = "";
            if (typeof (chunk as any).text === 'function') {
              text = (chunk as any).text();
            } else if (chunk.candidates && chunk.candidates[0] && chunk.candidates[0].content && chunk.candidates[0].content.parts) {
              text = chunk.candidates[0].content.parts.map(part => 'text' in part ? part.text : '').join('');
            } else {
              console.warn("Unexpected chunk structure or no text found:", chunk);
              text = "";
            }

            const bytes = new TextEncoder().encode(text);
            controller.enqueue(bytes);
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to generate content" }, { status: 500 });
  }
}