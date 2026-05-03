import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { journeySteps } from "../data/journeySteps";
import { useGemini } from "../hooks/useGemini";
import ProgressBar from "../components/ProgressBar";
import QuizModal from "../components/QuizModal";

const roleCfg = {
    voter:     { color: "#06b6d4", label: "Voter",            border: "border-t-cyan-500" },
    candidate: { color: "#f97316", label: "Candidate",        border: "border-t-orange-500" },
    officer:   { color: "#10b981", label: "Election Officer", border: "border-t-emerald-500" },
};

export default function Journey() {
    const { role } = useParams();
    const navigate = useNavigate();
    const steps = journeySteps[role] || [];
    const { narrate, explainAnswer } = useGemini();
    const cfg = roleCfg[role] || roleCfg.voter;

    const [currentStep, setCurrentStep] = useState(0);
    const [narration, setNarration] = useState("");
    const [narrationLoading, setNarrationLoading] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [score, setScore] = useState(0);
    const [quizDone, setQuizDone] = useState(false);
    const [visible, setVisible] = useState(true);

    const step = steps[currentStep];

    useEffect(() => {
        if (step) {
            setNarration("");
            setNarrationLoading(true);
            setQuizDone(false);
            narrate(step.context, role).then((text) => {
                setNarration(text);
                setNarrationLoading(false);
            });
        }
    }, [currentStep, role]);

    const handleNext = () => {
        setVisible(false);
        setTimeout(() => {
            if (currentStep + 1 >= steps.length) {
                navigate("/result", { state: { role, score, total: steps.length } });
            } else {
                setCurrentStep((s) => s + 1);
                setVisible(true);
            }
        }, 280);
    };

    if (!step) return null;

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid">
            <div className="orb orb-1" style={{ opacity: 0.18 }} />
            <div className="orb orb-2" style={{ opacity: 0.18 }} />

            <div className="relative z-10 flex flex-col items-center px-4 py-8 page-enter">
                {/* Top bar */}
                <div className="w-full max-w-2xl mb-8">
                    <div className="flex items-center justify-between mb-5">
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="mono text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-2 tracking-wider"
                        >
                            ← BACK
                        </button>
                        <span className="mono text-xs tracking-widest" style={{ color: cfg.color }}>
                            {cfg.label.toUpperCase()} SIMULATION
                        </span>
                    </div>
                    <ProgressBar current={currentStep + 1} total={steps.length} role={role} />
                </div>

                {/* Step card */}
                <div
                    className={`w-full max-w-2xl glass border-t-2 ${cfg.border} rounded-2xl p-8 shadow-2xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                            <p className="mono text-[10px] tracking-widest mb-1" style={{ color: cfg.color }}>
                                STEP {String(currentStep + 1).padStart(2, "0")} OF {String(steps.length).padStart(2, "0")}
                            </p>
                            <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
                        </div>
                        <span className="text-4xl shrink-0">{step.icon}</span>
                    </div>

                    {/* Brief */}
                    <p
                        className="text-slate-400 text-sm leading-relaxed mb-6 pl-4 border-l-2"
                        style={{ borderColor: cfg.color + "55" }}
                    >
                        {step.brief}
                    </p>

                    {/* Narration box */}
                    <div
                        className={`relative rounded-xl p-5 mb-6 ${narrationLoading ? "shimmer" : ""}`}
                        style={{
                            background: "rgba(15,23,42,0.85)",
                            border: `1px solid ${narrationLoading ? cfg.color + "44" : "rgba(99,102,241,0.15)"}`,
                            transition: "border-color 0.4s",
                        }}
                    >
                        {narrationLoading ? (
                            <div className="flex items-center gap-3 text-slate-400 py-1">
                                <div
                                    className="w-4 h-4 rounded-full border-2 animate-spin shrink-0"
                                    style={{ borderColor: cfg.color, borderTopColor: "transparent" }}
                                />
                                <span className="mono text-xs tracking-wide">GEMINI IS NARRATING...</span>
                            </div>
                        ) : (
                            <p className="text-slate-200 leading-relaxed text-sm">{narration}</p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        {!quizDone && (
                            <button
                                onClick={() => setShowQuiz(true)}
                                disabled={narrationLoading}
                                className="flex-1 py-3 rounded-xl font-medium text-sm transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                                style={{
                                    background: `${cfg.color}18`,
                                    border: `1px solid ${cfg.color}44`,
                                    color: cfg.color,
                                    boxShadow: narrationLoading ? "none" : `0 0 20px ${cfg.color}18`,
                                }}
                                onMouseEnter={(e) => !narrationLoading && (e.currentTarget.style.background = `${cfg.color}28`)}
                                onMouseLeave={(e) => (e.currentTarget.style.background = `${cfg.color}18`)}
                            >
                                🧠 Take Quiz
                            </button>
                        )}
                        {quizDone && (
                            <button
                                onClick={handleNext}
                                className="flex-1 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110"
                                style={{
                                    background: `linear-gradient(135deg, ${cfg.color}, #6366f1)`,
                                    boxShadow: `0 4px 24px ${cfg.color}40`,
                                }}
                            >
                                {currentStep + 1 >= steps.length ? "🏆 View Results" : "Continue →"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showQuiz && (
                <QuizModal
                    quiz={step.quiz}
                    explainAnswer={explainAnswer}
                    roleColor={cfg.color}
                    onClose={(correct) => {
                        if (correct) setScore((s) => s + 1);
                        setQuizDone(true);
                        setShowQuiz(false);
                    }}
                />
            )}
        </div>
    );
}