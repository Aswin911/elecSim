export default function ProgressBar({ current, total, role }) {
    const pct = Math.round((current / total) * 100);
    const roleColors = { voter: "bg-blue-500", candidate: "bg-orange-500", officer: "bg-green-500" };
    return (
        <div>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
                <span className="capitalize font-medium">{role} Journey</span>
                <span>{current}/{total} steps</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
                <div
                    className={`${roleColors[role] || "bg-blue-500"} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                />
            </div>
        </div>
    );
}