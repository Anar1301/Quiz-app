import { query } from "@/lib/connectDb";
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { Title, content } = await body;

    const prompt = `Please provide a concise summary of the following article: ${content}`;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    await query(
      `INSERT INTO articles (title, content, summery ) VALUES ($1,$2, $3)`,
      [Title, content, response.text]
    );
    const id = await query("SELECT id FROM articles ORDER BY id DESC LIMIT 1");
    console.log({ id });
    return NextResponse.json({
      data: (response as any).text ?? response,
      id: id,
    });
  } catch (err: any) {
    console.error("POST /api/generate error:", err);
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
