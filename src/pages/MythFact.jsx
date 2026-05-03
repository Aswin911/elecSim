import { useState } from "react";
import { useNavigate } from "react-router-dom";

const myths = [
    { myth: "EVMs can be hacked remotely", fact: "EVMs are standalone devices with no WiFi, Bluetooth, or internet — physically impossible to hack remotely. They are tested by IIT professors and international observers." },
    { myth: "You need a Voter ID card to vote", fact: "You can vote using 12 alternative documents including Aadhaar, Passport, PAN card, Bank Passbook, or MNREGA job card." },
    { myth: "NOTA cancels all votes and triggers re-election", fact: "NOTA is just recorded as a preference. Even if NOTA gets the most votes, the candidate with the next highest votes wins. It has no re-election trigger." },
    { myth: "Candidates with criminal cases cannot contest", fact: "Candidates with criminal charges (even serious ones) can contest unless convicted and sentenced to 2+ years imprisonment." },
    { myth: "The President of India appoints the PM directly", fact: "The President invites the leader of the majority party or coalition in Lok Sabha to form the government and become PM." },
    { myth: "Voting is compulsory in India", fact: "Voting is a right, not a legal obligation in India. Only Gujarat has a local body law mandating voting, but there is no national compulsory voting law." },
    { myth: "Election Commission is under the government", fact: "The ECI is a constitutional body fully independent of the government. The CEC can only be removed through a process like a Supreme Court judge." },
    { myth: "Rich candidates always win because of money", fact: "The ECI caps election spending and deploys flying squads to seize undeclared cash. Many well-funded candidates have lost to grassroots campaigns." },
];

export default function MythFact() {
    const navigate = useNavigate();
    const [revealed, setRevealed] = useState(Array(myths.length).fill(false));

    const toggle = (i) =>
        setRevealed((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

    const revealedCount = revealed.filter(Boolean).length;

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid">
            <div className="orb orb-1" style={{ opacity: 0.14 }} />
            <div className="orb orb-2" style={{ opacity: 0.14 }} />

            <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 page-enter">

                {/* Back */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="mono text-xs text-slate-500 hover:text-slate-300 tracking-widest transition-colors flex items-center gap-2 mb-10"
                >
                    ← BACK TO HOME
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-5">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="mono text-yellow-300 text-[11px] tracking-widest">ELECTION MYTH BUSTERS</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold grad-text mb-3">💡 Myth vs Fact</h1>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Busting common misconceptions about Indian elections
                    </p>
                </div>

                {/* Progress tracker */}
                <div
                    className="flex items-center justify-between px-5 py-3 rounded-xl mb-8"
                    style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(99,102,241,0.18)" }}
                >
                    <span className="mono text-xs tracking-widest text-slate-400">FACTS REVEALED</span>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                            {myths.map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2 h-2 rounded-full transition-all duration-300"
                                    style={{ background: revealed[i] ? "#10b981" : "rgba(99,102,241,0.25)" }}
                                />
                            ))}
                        </div>
                        <span className="mono text-xs font-semibold" style={{ color: revealedCount === myths.length ? "#10b981" : "#6366f1" }}>
                            {revealedCount}/{myths.length}
                        </span>
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                    {myths.map((item, i) => {
                        const isRevealed = revealed[i];
                        return (
                            <div
                                key={i}
                                className="glass rounded-2xl overflow-hidden transition-all duration-300"
                                style={{
                                    border: isRevealed
                                        ? "1px solid rgba(16,185,129,0.3)"
                                        : "1px solid rgba(239,68,68,0.2)",
                                    boxShadow: isRevealed
                                        ? "0 0 20px rgba(16,185,129,0.08)"
                                        : "0 0 20px rgba(239,68,68,0.05)",
                                }}
                            >
                                {/* Top colour bar */}
                                <div
                                    className="h-0.5 w-full transition-all duration-500"
                                    style={{ background: isRevealed ? "#10b981" : "#ef4444" }}
                                />

                                <div className="p-5">
                                    {/* Badge + number */}
                                    <div className="flex items-center justify-between mb-3">
                                        <span
                                            className="mono text-[10px] tracking-widest px-2.5 py-1 rounded-full transition-all duration-300"
                                            style={isRevealed
                                                ? { background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#6ee7b7" }
                                                : { background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", color: "#fca5a5" }
                                            }
                                        >
                                            {isRevealed ? "FACT ✅" : "MYTH 🚫"}
                                        </span>
                                        <span className="mono text-[11px] text-slate-600">#{String(i + 1).padStart(2, "0")}</span>
                                    </div>

                                    {/* Text content */}
                                    <div className="min-h-[52px] transition-all duration-300">
                                        {!isRevealed ? (
                                            <p className="text-white font-semibold text-base leading-snug">
                                                "{item.myth}"
                                            </p>
                                        ) : (
                                            <p className="text-slate-200 text-sm leading-relaxed">
                                                {item.fact}
                                            </p>
                                        )}
                                    </div>

                                    {/* Myth label shown under myth text */}
                                    {!isRevealed && (
                                        <p className="mono text-[10px] text-slate-600 tracking-wide mt-2">
                                            ↑ COMMON MISCONCEPTION
                                        </p>
                                    )}

                                    {/* Action button */}
                                    <button
                                        onClick={() => toggle(i)}
                                        className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:brightness-110"
                                        style={isRevealed
                                            ? { background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)", color: "#6ee7b7" }
                                            : { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", color: "#fca5a5" }
                                        }
                                    >
                                        {isRevealed ? "← See Myth" : "Reveal Fact →"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* All revealed celebration */}
                {revealedCount === myths.length && (
                    <div
                        className="mt-8 text-center p-6 rounded-2xl page-enter"
                        style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)" }}
                    >
                        <p className="text-2xl mb-2">🎉</p>
                        <p className="text-emerald-400 font-semibold text-sm mb-1">All myths busted!</p>
                        <p className="text-slate-400 text-xs">You're now an informed Indian citizen.</p>
                    </div>
                )}

                {/* CTA */}
                <div className="mt-10 text-center">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
                        style={{
                            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                            boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
                        }}
                    >
                        Start Simulation →
                    </button>
                </div>

                <p className="mt-10 mono text-slate-700 text-[11px] tracking-widest text-center">
                    POWERED BY GEMINI AI · BUILT WITH GOOGLE ANTIGRAVITY
                </p>
            </div>
        </div>
    );
}
