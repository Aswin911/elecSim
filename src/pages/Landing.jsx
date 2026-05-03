import { useNavigate } from "react-router-dom";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 dot-grid opacity-50" />

            {/* Giant glowing orbs for that beautiful UI overlay effect */}
            <div className="orb orb-1" style={{ width: '800px', height: '800px', top: '-20%', right: '-10%', opacity: 0.15 }} />
            <div className="orb orb-2" style={{ width: '600px', height: '600px', bottom: '-20%', left: '-10%', opacity: 0.15 }} />
            <div className="orb orb-3" style={{ width: '500px', height: '500px', top: '40%', left: '30%', opacity: 0.1 }} />

            {/* Animated Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 py-20">

                {/* Left Content: Text & CTA */}
                <div className="flex-1 text-left page-enter max-w-2xl">
                    <div className="inline-flex items-center gap-2">
                        {/* <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" /> */}
                        {/* <span className="mono text-indigo-300 text-xs tracking-widest">v2.0 LIVE · AI POWERED</span> */}
                    </div>

                    <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Experience <br />
                        <span className="grad-text">Indian Democracy</span>
                    </h1>

                    <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl">
                        A gamified simulation of the world's largest democratic process.
                        Step into the shoes of a Voter, Candidate, or Election Officer,
                        fully narrated by Gemini AI.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="group relative px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #06b6d4, #6366f1)",
                                boxShadow: "0 10px 40px -10px rgba(99,102,241,0.5)",
                            }}
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center gap-2">
                                Get Started <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </span>
                        </button>

                        <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                            <div className="flex -space-x-3">
                                <div className="w-12 h-12 rounded-full border-2 border-[#030712] bg-cyan-900/80 flex items-center justify-center text-xl shadow-lg backdrop-blur-sm">🗳️</div>
                                <div className="w-12 h-12 rounded-full border-2 border-[#030712] bg-orange-900/80 flex items-center justify-center text-xl shadow-lg backdrop-blur-sm">🏛️</div>
                                <div className="w-12 h-12 rounded-full border-2 border-[#030712] bg-emerald-900/80 flex items-center justify-center text-xl shadow-lg backdrop-blur-sm">⚖️</div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white">3 Unique Roles</span>
                                <span className="text-xs text-slate-400">Interactive Journeys</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content: Floating UI Overlay */}
                <div className="hidden lg:flex flex-1 relative h-[600px] w-full items-center justify-center perspective-1000">
                    {/* Glowing center behind cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full" />

                    {/* Floating elements container */}
                    <div className="relative w-full h-full preserve-3d animate-float-slow">

                        {/* Card 1: Voter */}
                        <div
                            className="absolute top-[10%] right-[10%] glass border-t-2 border-t-cyan-500 rounded-2xl p-6 w-64 shadow-2xl animate-float"
                            style={{ animationDelay: '0s', transform: 'rotate(-5deg) translateZ(30px)' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-2xl border border-cyan-500/30">🗳️</div>
                                <div>
                                    <p className="text-white font-bold text-sm">Voter Journey</p>
                                    <p className="text-slate-400 text-xs">97 crore+ citizens</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-3/4 rounded-full shadow-[0_0_10px_#06b6d4]" />
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500/50 w-1/2 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Candidate */}
                        <div
                            className="absolute top-[40%] left-[5%] glass border-t-2 border-t-orange-500 rounded-2xl p-6 w-72 shadow-2xl animate-float"
                            style={{ animationDelay: '-2s', transform: 'rotate(4deg) translateZ(60px)' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-2xl border border-orange-500/30">🏛️</div>
                                <div>
                                    <p className="text-white font-bold text-sm">Candidate Race</p>
                                    <p className="text-slate-400 text-xs">Campaign & Win</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-10 flex-1 bg-white/5 rounded-xl border border-white/10 flex items-end p-1">
                                    <div className="w-full bg-orange-500/40 rounded-md h-1/2" />
                                </div>
                                <div className="h-10 flex-1 bg-white/5 rounded-xl border border-white/10 flex items-end p-1">
                                    <div className="w-full bg-orange-500/70 rounded-md h-3/4 shadow-[0_0_10px_#f97316]" />
                                </div>
                                <div className="h-10 flex-1 bg-white/5 rounded-xl border border-white/10 flex items-end p-1">
                                    <div className="w-full bg-orange-500/30 rounded-md h-1/3" />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Officer */}
                        <div
                            className="absolute bottom-[10%] right-[15%] glass border-t-2 border-t-emerald-500 rounded-2xl p-6 w-64 shadow-2xl animate-float"
                            style={{ animationDelay: '-4s', transform: 'rotate(-3deg) translateZ(20px)' }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-2xl border border-emerald-500/30">⚖️</div>
                                <div>
                                    <p className="text-white font-bold text-sm">Election Officer</p>
                                    <p className="text-slate-400 text-xs">Manage the process</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-xs text-slate-400 bg-white/5 p-2 rounded-lg border border-white/10">
                                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Status</span>
                                <span className="text-emerald-400 font-medium">All systems nominal</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .preserve-3d { transform-style: preserve-3d; }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotateX(2deg) rotateY(-2deg); }
                    50% { transform: translateY(-15px) rotateX(-2deg) rotateY(2deg); }
                }
                .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </div>
    );
}
