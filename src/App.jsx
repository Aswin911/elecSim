import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journey from "./pages/Journey";
import Result from "./pages/Result";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/journey/:role" element={<Journey />} />
                <Route path="/result" element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}