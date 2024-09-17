import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export default function RouterContainer() {
    return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
    </Routes>
    );
}