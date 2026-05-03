import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { journeySteps } from "../data/journeySteps";
import { useGemini } from "../hooks/useGemini";
import ProgressBar from "../components/ProgressBar";
import QuizModal from "../components/QuizModal";

export default function Journey() {
    const { role } = useParams();
    const navigate = useNavigate();
    const steps = journeySteps[role] || [];
    const { narrate, explainAnswer, loading } = useGemini();

    const [currentStep, setCurrentStep] = useState(0);
    const [narration, setNarration] = useState("");
    const [showQuiz, setShowQuiz] = useState(false);
    const [score, setScore] = useState(0);
    const [quizDone, setQuizDone] = useState(false);

    const step = steps[currentStep];

    useEffect(() => {
        if (step) {
            setNarration("");
            setQuizDone(false);
            narrate(step.context, role).then(setNarration);
        }
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep + 1 >= steps.length) {
            navigate("/result", { state: { role, score, total: steps.length } });
        } else {
            setCurrentStep((s) => s + 1);
        }
    };

    if (!step) return null;

    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-4 py-8">
            <div className="w-full max-w-2xl">
                <ProgressBar current={currentStep + 1} total={steps.length} role={role} />

                <div className="mt-8 bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-800">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{step.icon}</span>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest">Step {currentStep + 1}</p>
                            <h2 className="text-2xl font-bold">{step.title}</h2>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.brief}</p>

                    <div className="bg-gray-800 rounded-xl p-4 min-h-[80px] border border-gray-700">
                        {loading && !narration ? (
                            <div className="flex items-center gap-2 text-gray-400">
                                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                                <span className="text-sm">Gemini is narrating...</span>
                            </div>
                        ) : (
                            <p className="text-blue-100 leading-relaxed">{narration}</p>
                        )}
                    </div>

                    <div className="mt-6 flex gap-3">
                        {!quizDone && (
                            <button
                                onClick={() => setShowQuiz(true)}
                                className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
                            >
                                🧠 Take Quiz
                            </button>
                        )}
                        {quizDone && (
                            <button
                                onClick={handleNext}
                                className="flex-1 bg-blue-600 hover:bg-blue-500 font-semibold py-3 rounded-xl transition"
                            >
                                {currentStep + 1 >= steps.length ? "🏆 See Results" : "Next Step →"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {showQuiz && (
                <QuizModal
                    quiz={step.quiz}
                    explainAnswer={explainAnswer}
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