import { generateText } from "ai";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function GET() {
  if (!process.env.AI_GATEWAY_API_KEY) {
    return Response.json(
      { error: "AI_GATEWAY_API_KEY is not configured for this deployment." },
      { status: 503 }
    );
  }

  try {
    const { text } = await generateText({
      model: "moonshotai/kimi-k3",
      prompt:
        "Invent a completely new holiday. Give it a memorable name, explain what it celebrates, and describe its traditions, food, decorations, and how people celebrate it.",
      maxOutputTokens: 256,
    });

    return Response.json({ ok: true, model: "moonshotai/kimi-k3", text });
  } catch {
    return Response.json(
      { error: "AI Gateway request failed. Check the Vercel deployment logs and AI Gateway key settings." },
      { status: 502 }
    );
  }
}
