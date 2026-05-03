import { useState } from "react";

export default function QuizModal({ quiz, explainAnswer, roleColor = "#6366f1", onClose }) {
    const [selected, setSelected] = useState(null);
    const [explanation, setExplanation] = useState("");
    const [loading, setLoading] = useState(false);
    const correct = selected === quiz.answer;

    const handleSelect = async (opt) => {
        if (selected) return;
        setSelected(opt);
        setLoading(true);
        const exp = await explainAnswer(quiz.question, quiz.answer, opt);
        setExplanation(exp);
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
            style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(12px)" }}>

            <div
                className="relative w-full max-w-md rounded-2xl p-7 page-enter"
                style={{
                    background: "rgba(15,23,42,0.95)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    boxShadow: "0 0 60px rgba(99,102,241,0.15), 0 25px 60px rgba(0,0,0,0.6)",
                }}
            >
                {/* Header */}
                <div className="mb-1">
                    <span className="mono text-[10px] tracking-widest" style={{ color: roleColor }}>
                        KNOWLEDGE CHECK
                    </span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug mb-5">
                    {quiz.question}
                </h3>

                {/* Options */}
                <div className="space-y-2.5 mb-5">
                    {quiz.options.map((opt) => {
                        let borderColor = "rgba(99,102,241,0.2)";
                        let bg = "rgba(99,102,241,0.05)";
                        let textColor = "#94a3b8";
                        let opacity = "1";

                        if (selected) {
                            if (opt === quiz.answer) {
                                borderColor = "#10b981"; bg = "rgba(16,185,129,0.1)"; textColor = "#6ee7b7";
                            } else if (opt === selected) {
                                borderColor = "#ef4444"; bg = "rgba(239,68,68,0.1)"; textColor = "#fca5a5";
                            } else {
                                opacity = "0.4";
                            }
                        }

                        return (
                            <button
                                key={opt}
                                onClick={() => handleSelect(opt)}
                                disabled={!!selected}
                                className="w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 disabled:cursor-default"
                                style={{ background: bg, border: `1px solid ${borderColor}`, color: textColor, opacity }}
                                onMouseEnter={(e) => !selected && (e.currentTarget.style.background = "rgba(99,102,241,0.12)")}
                                onMouseLeave={(e) => !selected && (e.currentTarget.style.background = bg)}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {/* Explanation */}
                {loading && (
                    <div className="flex items-center gap-2 text-slate-400 text-xs mono tracking-wide mb-4">
                        <div className="w-3 h-3 border-2 rounded-full animate-spin" style={{ borderColor: roleColor, borderTopColor: "transparent" }} />
                        GEMINI EXPLAINING...
                    </div>
                )}
                {explanation && (
                    <div
                        className="rounded-xl px-4 py-3 text-sm leading-relaxed mb-5"
                        style={{
                            background: correct ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
                            border: `1px solid ${correct ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`,
                            color: correct ? "#6ee7b7" : "#fca5a5",
                        }}
                    >
                        <span className="font-medium">{correct ? "✓ Correct — " : "✗ Incorrect — "}</span>
                        {explanation}
                    </div>
                )}

                {/* Continue */}
                {selected && !loading && (
                    <button
                        onClick={() => onClose(correct)}
                        className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
                        style={{
                            background: `linear-gradient(135deg, ${roleColor}, #6366f1)`,
                            boxShadow: `0 4px 20px ${roleColor}40`,
                        }}
                    >
                        Continue →
                    </button>
                )}
            </div>
        </div>
    );
}