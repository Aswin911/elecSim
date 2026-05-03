import { useState } from "react";
import { geminiFlash } from "../lib/gemini";

export function useGemini() {
    const [loading, setLoading] = useState(false);

    const narrate = async (stepContext, role) => {
        setLoading(true);
        try {
            const prompt = `You are an engaging civic education guide for Indian elections.
Role: ${role}
Step context: ${stepContext}
In 2-3 sentences, explain this step in simple, engaging English like you're talking to a first-time voter. 
Be factual, warm, and use one relevant emoji. Do NOT repeat the context word for word.`;

            const result = await geminiFlash.generateContent(prompt);
            return result.response.text();
        } catch (err) {
            console.error("Gemini narrate error:", err);
            return "📖 " + stepContext; // Graceful fallback: show raw context
        } finally {
            setLoading(false);
        }
    };

    const explainAnswer = async (question, correctAnswer, chosenAnswer) => {
        setLoading(true);
        try {
            const prompt = `Indian election quiz:
Question: ${question}
Correct answer: ${correctAnswer}
User chose: ${chosenAnswer}
In 1-2 sentences, explain why "${correctAnswer}" is correct. Be concise and educational.`;

            const result = await geminiFlash.generateContent(prompt);
            return result.response.text();
        } catch (err) {
            console.error("Gemini explainAnswer error:", err);
            return `The correct answer is "${correctAnswer}".`; // Graceful fallback
        } finally {
            setLoading(false);
        }
    };

    return { narrate, explainAnswer, loading };
}