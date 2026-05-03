import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Result() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role, score, total } = state || { role: "voter", score: 0, total: 6 };
    const pct = Math.round((score / total) * 100);

    const grade = pct === 100 ? "🏅 Perfect Score!" : pct >= 70 ? "🎖️ Well Done!" : "📚 Keep Learning!";

    const linkedInText = encodeURIComponent(
        `🗳️ I just completed the ${role} journey on ElecSim — a Gemini-powered election education simulator!\n\nScored ${score}/${total} on Indian election knowledge. 🇮🇳\n\nBuilt with Google Antigravity + Gemini AI. Try it yourself 👇\n#ElecSim #IndianElections #BuildWithAI #GoogleAntigravity`
    );

    useEffect(() => {
        const saveScore = async () => {
            try {
                await addDoc(collection(db, "scores"), {
                    role,
                    score,
                    total,
                    timestamp: new Date().toISOString()
                });
            } catch (error) {
                console.error("Error saving score to Firebase:", error);
            }
        };
        saveScore();
    }, [role, score, total]);

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full text-center border border-gray-800 shadow-2xl">
                <div className="text-6xl mb-4">🇮🇳</div>
                <h1 className="text-3xl font-bold mb-1">{grade}</h1>
                <p className="text-gray-400 mb-6 capitalize">{role} Journey Complete</p>

                <div className="bg-gray-800 rounded-xl p-6 mb-6">
                    <p className="text-5xl font-bold text-blue-400">{score}<span className="text-2xl text-gray-400">/{total}</span></p>
                    <p className="text-gray-400 text-sm mt-1">Quiz Score</p>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={() => navigate("/")}
                        className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold transition"
                    >
                        Try Another Role
                    </button>

                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://elecsim.web.app&summary=${linkedInText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="block w-full bg-[#0077b5] hover:bg-[#006097] py-3 rounded-xl font-semibold transition"
                    >
                        Share on LinkedIn 🔗
                    </a>
                </div>

                <p className="mt-6 text-gray-600 text-xs">Powered by Gemini AI · Built with Google Antigravity</p>
            </div>
        </div>
    );
}