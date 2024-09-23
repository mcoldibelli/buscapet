import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../pages/Login/SignUp";
import NotFound from "../pages/NotFound";

export default function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth/register" element={ <SignUp/> } />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}