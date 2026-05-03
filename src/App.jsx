import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Result from "./pages/Result";
import Roadmap from "./pages/Roadmap";
import AskAI from "./pages/AskAI";
import MythFact from "./pages/MythFact";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/journey/:role" element={<Journey />} />
                <Route path="/result" element={<Result />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/ask" element={<AskAI />} />
                <Route path="/myths" element={<MythFact />} />
            </Routes>
        </BrowserRouter>
    );
}