import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { journeySteps } from "../data/journeySteps";

const gradeMap = [
    { min: 100, label: "Perfect Score", emoji: "🏅", color: "#f59e0b" },
    { min: 70,  label: "Well Done",     emoji: "🎖️", color: "#06b6d4" },
    { min: 40,  label: "Keep Learning", emoji: "📚", color: "#6366f1" },
    { min: 0,   label: "Keep Trying",   emoji: "💡", color: "#8b5cf6" },
];

const roleCfg = {
    voter:     { color: "#06b6d4", border: "border-t-cyan-500",    label: "Voter" },
    candidate: { color: "#f97316", border: "border-t-orange-500",  label: "Candidate" },
    officer:   { color: "#10b981", border: "border-t-emerald-500", label: "Election Officer" },
};

/** Returns first sentence of a context string */
const firstSentence = (ctx) => ctx.split(/\.\s/)[0].replace(/\.$/, "") + ".";

/** Pick 3 random steps from the role's journey */
const getRandomFacts = (role) => {
    const steps = journeySteps[role] || [];
    const shuffled = [...steps].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3).map((s) => ({ icon: s.icon, title: s.title, fact: firstSentence(s.context) }));
};

export default function Result() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { role = "voter", score = 0, total = 6 } = state || {};
    const pct = Math.round((score / total) * 100);
    const cfg = roleCfg[role] || roleCfg.voter;
    const grade = gradeMap.find((g) => pct >= g.min) || gradeMap[3];

    const [name, setName] = useState("");
    const [nameSubmitted, setNameSubmitted] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [facts] = useState(() => getRandomFacts(role));
    const certRef = useRef(null);

    const linkedInText = encodeURIComponent(
        `🗳️ I, ${name}, just completed the ${role} simulation on ElecSim — a Gemini-powered Indian election simulator!\n\nScored ${score}/${total} (${pct}%) 🇮🇳\n\nBuilt with Google Antigravity + Gemini AI.\n#ElecSim #IndianElections #BuildWithAI #GoogleAntigravity`
    );

    useEffect(() => {
        if (!nameSubmitted) return;
        const save = async () => {
            try {
                await addDoc(collection(db, "scores"), {
                    role, score, total, name, timestamp: new Date().toISOString(),
                });
            } catch (e) { console.error("Firestore save error:", e); }
        };
        save();
    }, [nameSubmitted]);

    const handleNameSubmit = () => {
        const trimmed = nameInput.trim();
        if (!trimmed) return;
        setName(trimmed);
        setNameSubmitted(true);
    };

    const handlePrint = () => window.print();

    /* ── Name input screen ── */
    if (!nameSubmitted) {
        return (
            <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid flex items-center justify-center px-4 page-enter">
                <div className="orb orb-1" style={{ opacity: 0.15 }} />
                <div className="orb orb-2" style={{ opacity: 0.15 }} />

                <div
                    className="relative z-10 w-full max-w-sm glass rounded-2xl p-8 text-center"
                    style={{ border: "1px solid rgba(99,102,241,0.25)" }}
                >
                    <div className="text-4xl mb-4">🎓</div>
                    <h2 className="text-xl font-bold text-white mb-1">One last thing!</h2>
                    <p className="text-slate-400 text-sm mb-6">What's your name? We'll put it on your certificate.</p>

                    <input
                        type="text"
                        placeholder="Enter your name..."
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
                        autoFocus
                        className="w-full bg-transparent border border-indigo-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-400/60 transition-colors mb-4"
                    />

                    <button
                        onClick={handleNameSubmit}
                        disabled={!nameInput.trim()}
                        className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                            boxShadow: "0 4px 20px rgba(99,102,241,0.35)",
                        }}
                    >
                        Get My Certificate →
                    </button>
                </div>
            </div>
        );
    }

    /* ── Certificate / Result screen ── */
    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid flex flex-col items-center justify-center px-4 py-16 page-enter">
            <div className="orb orb-1" style={{ opacity: 0.15 }} />
            <div className="orb orb-2" style={{ opacity: 0.15 }} />

            <div className="relative z-10 w-full max-w-lg">

                {/* ── Certificate card ── */}
                <div
                    ref={certRef}
                    className="certificate glass rounded-2xl overflow-hidden shadow-2xl mb-6"
                    style={{ border: "1px solid rgba(212,170,60,0.3)" }}
                >
                    {/* Gold accent top bar */}
                    <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #b45309, #f59e0b, #fcd34d, #f59e0b, #b45309)" }} />

                    <div className="p-8 text-center">
                        {/* Grade badge */}
                        <div className="flex justify-center mb-5">
                            <div
                                className="text-4xl w-16 h-16 rounded-xl flex items-center justify-center"
                                style={{ background: `${grade.color}18`, border: `1px solid ${grade.color}40`, boxShadow: `0 0 25px ${grade.color}20` }}
                            >
                                {grade.emoji}
                            </div>
                        </div>

                        {/* Certificate text */}
                        <p className="mono text-[10px] tracking-widest text-yellow-600 mb-2">CERTIFICATE OF COMPLETION</p>
                        <p className="text-slate-400 text-sm mb-1">This certifies that</p>
                        <h1 className="text-3xl font-bold text-yellow-400 mb-1">{name}</h1>
                        <p className="text-slate-400 text-sm mb-5">
                            has completed the{" "}
                            <span className="text-white font-semibold">{cfg.label} Journey</span>{" "}
                            on ElecSim
                        </p>

                        {/* Decorative line */}
                        <div className="h-px w-24 mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)" }} />

                        {/* Score */}
                        <div
                            className="rounded-xl p-5 mb-2"
                            style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(99,102,241,0.15)" }}
                        >
                            <div className="flex items-end justify-center gap-1 mb-1">
                                <span className="text-5xl font-bold" style={{ color: grade.color }}>{score}</span>
                                <span className="text-xl text-slate-500 mb-1.5">/ {total}</span>
                            </div>
                            <p className="mono text-[11px] tracking-widest text-slate-500 mb-3">{pct}% ACCURACY · {grade.label.toUpperCase()}</p>

                            {/* Progress bar */}
                            <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${pct}%`,
                                        background: `linear-gradient(90deg, ${grade.color}, #6366f1)`,
                                        boxShadow: `0 0 10px ${grade.color}60`,
                                        transition: "width 1s ease",
                                    }}
                                />
                            </div>
                        </div>

                        <p className="mono text-[10px] text-slate-600 tracking-wider mt-3">
                            POWERED BY GEMINI AI · ELECSIM · {new Date().getFullYear()}
                        </p>
                    </div>
                </div>

                {/* ── Facts You Learned ── */}
                <div className="mb-6">
                    <p className="mono text-[11px] tracking-widest text-slate-500 mb-3 px-1">📚 FACTS YOU LEARNED</p>
                    <div className="space-y-2.5">
                        {facts.map((f, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 px-4 py-3 rounded-xl"
                                style={{ background: "rgba(15,23,42,0.7)", border: "1px solid rgba(99,102,241,0.12)" }}
                            >
                                <span className="text-xl shrink-0">{f.icon}</span>
                                <div>
                                    <p className="mono text-[10px] tracking-wide text-indigo-400 mb-0.5">{f.title.toUpperCase()}</p>
                                    <p className="text-slate-300 text-xs leading-relaxed">{f.fact}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Actions ── */}
                <div className="space-y-3">
                    <button
                        onClick={handlePrint}
                        className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 flex items-center justify-center gap-2"
                        style={{
                            background: "linear-gradient(135deg, #b45309, #f59e0b)",
                            boxShadow: "0 4px 20px rgba(245,158,11,0.3)",
                        }}
                    >
                        🖨️ Download Certificate
                    </button>

                    <button
                        onClick={() => navigate("/dashboard")}
                        className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
                        style={{
                            background: `linear-gradient(135deg, ${cfg.color}, #6366f1)`,
                            boxShadow: `0 4px 20px ${cfg.color}30`,
                        }}
                    >
                        Try Another Role
                    </button>

                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://elecsim-84bff.web.app&summary=${linkedInText}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:brightness-110"
                        style={{
                            background: "rgba(0,119,181,0.15)",
                            border: "1px solid rgba(0,119,181,0.35)",
                            color: "#60a5fa",
                        }}
                    >
                        Share on LinkedIn 🔗
                    </a>
                </div>

                <p className="mt-8 mono text-slate-600 text-[11px] tracking-widest text-center">
                    POWERED BY GEMINI AI · BUILT WITH GOOGLE ANTIGRAVITY
                </p>
            </div>
        </div>
    );
}