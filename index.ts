import { generateText } from "ai";

async function main() {
  const { text } = await generateText({
    model: "moonshotai/kimi-k3",
    prompt:
      "Invent a completely new holiday. Give it a memorable name, explain what it celebrates, and describe its traditions, food, decorations, and how people celebrate it.",
  });

  console.log(text);
}

main().catch((error) => {
  console.error("AI Gateway example failed:", error);
  process.exitCode = 1;
});
