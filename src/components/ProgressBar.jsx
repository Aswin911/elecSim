export default function ProgressBar({ current, total, role }) {
    const pct = Math.round((current / total) * 100);
    const cfg = {
        voter:     { color: "#06b6d4", glow: "rgba(6,182,212,0.5)" },
        candidate: { color: "#f97316", glow: "rgba(249,115,22,0.5)" },
        officer:   { color: "#10b981", glow: "rgba(16,185,129,0.5)" },
    }[role] || { color: "#6366f1", glow: "rgba(99,102,241,0.5)" };

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="mono text-[11px] tracking-widest text-slate-500">
                    {role?.toUpperCase()} JOURNEY
                </span>
                <span className="mono text-[11px] tracking-widest" style={{ color: cfg.color }}>
                    {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
            </div>
            <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${cfg.color}, #6366f1)`,
                        boxShadow: `0 0 12px ${cfg.glow}`,
                    }}
                />
            </div>
        </div>
    );
}