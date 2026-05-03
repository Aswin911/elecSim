import { useState } from "react";
import { useNavigate } from "react-router-dom";

const phases = [
  { id:1, icon:"📢", title:"Election Announcement", duration:"Day 0", agency:"Election Commission of India", dotColor:"bg-purple-500", borderColor:"border-purple-500", bgColor:"bg-purple-900/20", stat:"MCC activates instantly", details:["CEC holds press conference announcing schedule","Model Code of Conduct activates immediately","Government cannot announce new schemes","Election schedule: notification, nomination, polling, counting dates"] },
  { id:2, icon:"📋", title:"Voter Roll Finalization", duration:"Week 1–2", agency:"Booth Level Officers", dotColor:"bg-blue-500", borderColor:"border-blue-500", bgColor:"bg-blue-900/20", stat:"97 crore+ voters in 2024", details:["Final Electoral Roll published publicly","Voters check name at voters.eci.gov.in","Last chance to add or correct entries","BLOs do door-to-door verification"] },
  { id:3, icon:"✍️", title:"Nomination Filing", duration:"Week 2–3", agency:"Returning Officers", dotColor:"bg-yellow-500", borderColor:"border-yellow-500", bgColor:"bg-yellow-900/20", stat:"8,360 candidates in 2024", details:["Candidates submit Form 2B + security deposit","₹25,000 deposit for general, ₹12,500 for SC/ST","Mandatory affidavit of assets and criminal record","Returning Officer scrutinises all nominations"] },
  { id:4, icon:"📣", title:"Campaign Period", duration:"Week 3–6", agency:"Candidates & Parties", dotColor:"bg-orange-500", borderColor:"border-orange-500", bgColor:"bg-orange-900/20", stat:"₹95 lakh expense cap per candidate", details:["Candidates campaign across constituencies","Expense cap: ₹95 lakh per Lok Sabha seat","No campaigning 48 hours before polling (silence period)","Paid news and hate speech strictly banned"] },
  { id:5, icon:"⚙️", title:"EVM Preparation", duration:"Week 4–6", agency:"District Election Officers", dotColor:"bg-cyan-500", borderColor:"border-cyan-500", bgColor:"bg-cyan-900/20", stat:"55 lakh+ EVMs deployed in 2024", details:["Mock polls done in presence of candidate agents","EVMs sealed and stored in strong rooms","CRPF + CCTV security 24/7","VVPAT units attached to every EVM"] },
  { id:6, icon:"🗳️", title:"Polling Day", duration:"Single day per phase", agency:"Presiding Officers", dotColor:"bg-green-500", borderColor:"border-green-500", bgColor:"bg-green-900/20", stat:"65.79% voter turnout in 2024", details:["Booths open 7AM–6PM","Voter shows ID → ink on finger → votes on EVM","VVPAT slip visible for 7 seconds","2024 had 7 phases across different dates"] },
  { id:7, icon:"🔒", title:"Strong Room Storage", duration:"Days after polling", agency:"District Administration", dotColor:"bg-red-500", borderColor:"border-red-500", bgColor:"bg-red-900/20", stat:"Multi-layer security till counting", details:["EVMs sealed and moved to counting centres","Armed guards + CCTV + candidate observers","Candidates can post their own agents outside","EVMs stored until official counting day"] },
  { id:8, icon:"🔢", title:"Vote Counting", duration:"Single day", agency:"Returning Officers", dotColor:"bg-pink-500", borderColor:"border-pink-500", bgColor:"bg-pink-900/20", stat:"Results in 8–12 hours", details:["Counting starts at 8AM at designated centres","Each round tallies votes from a batch of EVMs","Candidates and agents present in hall","Results announced round by round on ECI website"] },
  { id:9, icon:"🏆", title:"Result & Government Formation", duration:"Counting day onwards", agency:"Returning Officer + President", dotColor:"bg-yellow-400", borderColor:"border-yellow-400", bgColor:"bg-yellow-900/20", stat:"272 seats for Lok Sabha majority", details:["Returning Officer officially declares winner","Winner receives Certificate of Election","First Past The Post — highest votes wins","President invites majority party to form government"] },
];

export default function Roadmap() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-[#030712] text-white relative overflow-hidden dot-grid">
      <div className="orb orb-1" style={{ opacity: 0.15 }} />
      <div className="orb orb-2" style={{ opacity: 0.15 }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 page-enter">

        {/* Back button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mono text-xs text-slate-500 hover:text-slate-300 tracking-widest transition-colors flex items-center gap-2 mb-10"
        >
          ← BACK TO HOME
        </button>

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span className="mono text-indigo-300 text-xs tracking-widest">STATIC REFERENCE GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold grad-text mb-3">🗺️ Election Roadmap</h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            How an Indian General Election unfolds — from announcement to result
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gray-700" />

          <div className="space-y-4">
            {phases.map((phase, idx) => {
              const isOpen = expanded === phase.id;
              return (
                <div
                  key={phase.id}
                  className="card-enter-1"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <div className="flex items-start gap-5">
                    {/* Timeline dot */}
                    <div className="relative flex flex-col items-center shrink-0 mt-4">
                      <div className={`w-4 h-4 rounded-full border-2 ${phase.dotColor} border-white/20 z-10 transition-all duration-300 ${isOpen ? "scale-125 shadow-lg" : ""}`}
                        style={isOpen ? { boxShadow: `0 0 12px currentColor` } : {}}
                      />
                    </div>

                    {/* Card */}
                    <div
                      className={`flex-1 glass rounded-2xl border-l-2 ${phase.borderColor} overflow-hidden transition-all duration-300 cursor-pointer
                        ${isOpen ? `${phase.bgColor}` : "hover:bg-white/5"}`}
                      onClick={() => toggle(phase.id)}
                    >
                      {/* Collapsed row */}
                      <div className="flex items-center gap-4 px-5 py-4">
                        <span className="text-2xl shrink-0">{phase.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-semibold text-white text-base leading-tight">{phase.title}</h3>
                            <span className={`mono text-[10px] tracking-wide px-2 py-0.5 rounded border ${phase.borderColor} ${phase.bgColor} text-slate-300 shrink-0`}>
                              {phase.duration}
                            </span>
                          </div>
                          <p className="mono text-[11px] text-slate-500 tracking-wide mt-0.5">{phase.agency}</p>
                        </div>
                        {/* Chevron */}
                        <span
                          className="text-slate-500 text-sm shrink-0 transition-transform duration-300"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                          ▾
                        </span>
                      </div>

                      {/* Expanded content */}
                      <div
                        className="overflow-hidden transition-all duration-400"
                        style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0, transition: "max-height 0.35s ease, opacity 0.25s ease" }}
                      >
                        <div className="px-5 pb-5 border-t border-white/5">
                          <ul className="mt-4 space-y-2">
                            {phase.details.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(99,102,241,0.7)" }} />
                                {d}
                              </li>
                            ))}
                          </ul>

                          {/* Stat badge */}
                          <div
                            className={`inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-lg ${phase.bgColor} border ${phase.borderColor}`}
                          >
                            <span className="text-xs">📊</span>
                            <span className="mono text-xs text-slate-300 tracking-wide">{phase.stat}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-500 text-sm mb-5 mono tracking-wide">Ready to experience it yourself?</p>
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
