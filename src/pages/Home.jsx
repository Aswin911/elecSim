import { useNavigate } from "react-router-dom";

const roles = [
    { id: "voter", label: "Voter", icon: "🗳️", desc: "Experience your journey from registration to casting your vote.", color: "from-blue-500 to-blue-700" },
    { id: "candidate", label: "Candidate", icon: "🏛️", desc: "File nominations, campaign, and race to victory.", color: "from-orange-500 to-orange-700" },
    { id: "officer", label: "Election Officer", icon: "⚖️", desc: "Manage elections from announcement to result archival.", color: "from-green-500 to-green-700" },
];

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
            <div className="mb-10 text-center">
                <div className="text-5xl mb-3">🇮🇳</div>
                <h1 className="text-4xl font-bold mb-2">ElecSim</h1>
                <p className="text-gray-400 text-lg">Experience an Indian election. Pick your role.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                {roles.map((r) => (
                    <button
                        key={r.id}
                        onClick={() => navigate(`/journey/${r.id}`)}
                        className={`bg-gradient-to-br ${r.color} rounded-2xl p-6 text-left hover:scale-105 transition-transform shadow-xl`}
                    >
                        <div className="text-4xl mb-3">{r.icon}</div>
                        <h2 className="text-xl font-bold mb-1">{r.label}</h2>
                        <p className="text-white/80 text-sm">{r.desc}</p>
                    </button>
                ))}
            </div>
            <p className="mt-8 text-gray-600 text-sm">Powered by Gemini AI · Built with Google Antigravity</p>
        </div>
    );
}