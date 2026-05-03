import { useState } from "react";

export default function QuizModal({ quiz, explainAnswer, onClose }) {
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
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <div className="bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-700 shadow-2xl">
                <h3 className="text-lg font-semibold mb-4">🧠 {quiz.question}</h3>
                <div className="space-y-3 mb-4">
                    {quiz.options.map((opt) => {
                        let cls = "border border-gray-700 bg-gray-800 hover:bg-gray-700";
                        if (selected) {
                            if (opt === quiz.answer) cls = "border border-green-500 bg-green-900/40";
                            else if (opt === selected) cls = "border border-red-500 bg-red-900/40";
                            else cls = "border border-gray-700 bg-gray-800 opacity-50";
                        }
                        return (
                            <button
                                key={opt}
                                onClick={() => handleSelect(opt)}
                                className={`w-full text-left px-4 py-3 rounded-xl transition text-sm ${cls}`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>

                {loading && <p className="text-gray-400 text-sm mb-3">Gemini is explaining...</p>}
                {explanation && (
                    <div className={`rounded-xl p-3 text-sm mb-4 ${correct ? "bg-green-900/30 text-green-300" : "bg-red-900/30 text-red-300"}`}>
                        {correct ? "✅ " : "❌ "}{explanation}
                    </div>
                )}

                {selected && !loading && (
                    <button
                        onClick={() => onClose(correct)}
                        className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold transition"
                    >
                        Continue →
                    </button>
                )}
            </div>
        </div>
    );
}