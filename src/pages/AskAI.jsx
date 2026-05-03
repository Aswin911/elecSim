import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { geminiFlash } from "../lib/gemini";

const SYSTEM_PROMPT = `You are a civic education expert on Indian elections. Answer questions clearly and factually about the Indian election process, ECI rules, voting rights, EVMs, candidates, timelines, and related topics. Keep answers under 4 sentences. Be friendly and educational. If the question is unrelated to elections, politely redirect.`;

const SUGGESTIONS = [
    "How do I register as a voter?",
    "What is the Model Code of Conduct?",
    "How does an EVM work?",
    "What is NOTA?",
];

export default function AskAI() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { role: "ai", text: "👋 Hello! I'm your Indian elections guide powered by Gemini AI. Ask me anything about voting, candidates, EVMs, the ECI, or the election process!" },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, typing]);

    const send = async (text) => {
        const trimmed = (text || input).trim();
        if (!trimmed || typing) return;
        setInput("");

        const userMsg = { role: "user", text: trimmed };
        const updatedMsgs = [...messages, userMsg];
        setMessages(updatedMsgs);
        setTyping(true);

        try {
            // Build history: all messages except the initial AI greeting
            const history = updatedMsgs.slice(1).map((m) => ({
                role: m.role === "user" ? "user" : "model",
                parts: [{ text: m.text }],
            }));

            // Prepend system instruction as first user/model exchange
            const fullHistory = [
                { role: "user",  parts: [{ text: SYSTEM_PROMPT }] },
                { role: "model", parts: [{ text: "Understood! I'll answer all questions as a civic education expert on Indian elections." }] },
                ...history,
            ];

            const chat = geminiFlash.startChat({ history: fullHistory.slice(0, -1) });
            const result = await chat.sendMessage(trimmed);
            const aiText = result.response.text();
            setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
        } catch (err) {
            console.error("Gemini error:", err);
            setMessages((prev) => [...prev, { role: "ai", text: "⚠️ Sorry, I couldn't get a response. Please try again." }]);
        } finally {
            setTyping(false);
            inputRef.current?.focus();
        }
    };

    const handleKey = (e) => {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid flex flex-col">
            <div className="orb orb-1" style={{ opacity: 0.13 }} />
            <div className="orb orb-2" style={{ opacity: 0.13 }} />

            <div className="relative z-10 flex flex-col flex-1 max-w-2xl w-full mx-auto px-4 py-8 page-enter">

                {/* Back */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="mono text-xs text-slate-500 hover:text-slate-300 tracking-widest transition-colors flex items-center gap-2 mb-8 self-start"
                >
                    ← BACK TO HOME
                </button>

                {/* Header */}
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-3">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        <span className="mono text-indigo-300 text-[11px] tracking-widest">GEMINI AI · ELECTION EXPERT</span>
                    </div>
                    <h1 className="text-3xl font-bold grad-text mb-1">💬 Ask About Elections</h1>
                    <p className="text-slate-400 text-sm">Ask anything about the Indian election process</p>
                </div>

                {/* Suggestion chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {SUGGESTIONS.map((s) => (
                        <button
                            key={s}
                            onClick={() => send(s)}
                            disabled={typing}
                            className="text-xs px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                {/* Message area */}
                <div
                    className="flex-1 overflow-y-auto space-y-4 pr-1 mb-4"
                    style={{ minHeight: 0, maxHeight: "calc(100vh - 380px)" }}
                >
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className="max-w-[80%]">
                                <div
                                    className={`px-4 py-3 text-sm leading-relaxed ${
                                        msg.role === "user"
                                            ? "rounded-2xl rounded-tr-sm text-white"
                                            : "rounded-2xl rounded-tl-sm text-slate-200"
                                    }`}
                                    style={msg.role === "user"
                                        ? { background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 4px 15px rgba(99,102,241,0.3)" }
                                        : { background: "rgba(30,41,59,0.9)", border: "1px solid rgba(99,102,241,0.15)" }
                                    }
                                >
                                    {msg.text}
                                </div>
                                {msg.role === "ai" && (
                                    <p className="mono text-[10px] text-slate-600 mt-1 ml-1 tracking-wider">GEMINI AI</p>
                                )}
                            </div>
                        </div>
                    ))}

                    {/* Typing indicator */}
                    {typing && (
                        <div className="flex justify-start">
                            <div
                                className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5"
                                style={{ background: "rgba(30,41,59,0.9)", border: "1px solid rgba(99,102,241,0.15)" }}
                            >
                                {[0, 1, 2].map((d) => (
                                    <span
                                        key={d}
                                        className="w-2 h-2 rounded-full bg-indigo-400"
                                        style={{ animation: `bounce 1.2s ease-in-out ${d * 0.2}s infinite` }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Input bar */}
                <div
                    className="flex items-center gap-3 p-3 rounded-2xl"
                    style={{ background: "rgba(15,23,42,0.9)", border: "1px solid rgba(99,102,241,0.2)" }}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        placeholder="Ask about Indian elections..."
                        disabled={typing}
                        className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none disabled:opacity-50"
                    />
                    <button
                        onClick={() => send()}
                        disabled={!input.trim() || typing}
                        className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:brightness-110"
                        style={{ background: "linear-gradient(135deg, #06b6d4, #6366f1)", boxShadow: "0 0 16px rgba(99,102,241,0.4)" }}
                    >
                        ↑
                    </button>
                </div>
            </div>

            {/* Bounce keyframes injected inline */}
            <style>{`
                @keyframes bounce {
                    0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
                    30% { transform: translateY(-6px); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
