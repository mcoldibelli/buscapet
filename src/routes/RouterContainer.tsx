import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

export default function RouterContainer() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
}