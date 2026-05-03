import { useNavigate } from "react-router-dom";

const roles = [
    {
        id: "voter", label: "Voter", icon: "🗳️", tag: "CITIZEN ROLE",
        desc: "Experience your journey from voter registration to casting your ballot in Indian elections.",
        color: "#06b6d4", borderTop: "border-t-cyan-500",
        tagCls: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
        enter: "card-enter-1",
    },
    {
        id: "candidate", label: "Candidate", icon: "🏛️", tag: "CONTESTER ROLE",
        desc: "File nominations, run campaigns within ECI guidelines, and race to electoral victory.",
        color: "#f97316", borderTop: "border-t-orange-500",
        tagCls: "text-orange-400 border-orange-500/30 bg-orange-500/10",
        enter: "card-enter-2",
    },
    {
        id: "officer", label: "Election Officer", icon: "⚖️", tag: "OFFICIAL ROLE",
        desc: "Manage every phase of India's democratic process — from announcement to result archival.",
        color: "#10b981", borderTop: "border-t-emerald-500",
        tagCls: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        enter: "card-enter-3",
    },
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid">
            {/* Ambient orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 page-enter">

                {/* Badge */}
                <div className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="mono text-indigo-300 text-xs tracking-widest">INDIA ELECTION SIMULATOR</span>
                </div>

                {/* Title */}
                <h1 className="text-7xl md:text-8xl font-bold tracking-tight grad-text leading-none mb-4 text-center">
                    ElecSim
                </h1>
                <p className="text-slate-400 text-lg max-w-md mx-auto text-center leading-relaxed mb-10">
                    A gamified simulation of the Indian democratic process.{" "}
                    {/* <span className="text-indigo-400">Narrated by Gemini AI.</span> */}
                </p>

                {/* Divider */}
                <div className="flex items-center gap-4 w-full max-w-3xl mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-indigo-500/30" />
                    <span className="mono text-[11px] text-slate-500 tracking-widest">SELECT YOUR ROLE</span>
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-indigo-500/30" />
                </div>

                {/* Role Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl">
                    {roles.map((r) => (
                        <button
                            key={r.id}
                            onClick={() => navigate(`/journey/${r.id}`)}
                            className={`${r.enter} group glass border-t-2 ${r.borderTop} rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                            style={{ boxShadow: "none" }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 35px ${r.color}22`}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
                        >
                            {/* Tag */}
                            <span className={`mono inline-block text-[10px] tracking-widest px-2 py-1 rounded border ${r.tagCls} mb-5`}>
                                {r.tag}
                            </span>

                            {/* Icon */}
                            <div className="text-3xl mb-3">{r.icon}</div>

                            {/* Label */}
                            <h2 className="text-xl font-semibold mb-2 text-white">{r.label}</h2>

                            {/* Desc */}
                            <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>

                            {/* CTA */}
                            <div
                                className="mt-5 flex items-center gap-1 text-sm font-medium opacity-50 group-hover:opacity-100 transition-all duration-200 group-hover:gap-2"
                                style={{ color: r.color }}
                            >
                                <span>Begin simulation</span>
                                <span className="transition-transform group-hover:translate-x-1">→</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Secondary nav */}
                <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                    <button
                        onClick={() => navigate("/roadmap")}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-400/50 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        🗺️ Election Roadmap
                    </button>
                    <button
                        onClick={() => navigate("/ask")}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        💬 Ask AI About Elections
                    </button>
                    <button
                        onClick={() => navigate("/myths")}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-sm font-medium hover:bg-yellow-500/20 hover:border-yellow-400/50 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        💡 Myth vs Fact
                    </button>
                </div>

                {/* Footer */}
                <p className="mt-14 mono text-slate-600 text-[11px] tracking-widest">
                    POWERED BY GEMINI AI · BUILT WITH GOOGLE ANTIGRAVITY
                </p>
            </div>
        </div>
    );
}