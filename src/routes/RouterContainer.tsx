import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import SignUp from "../pages/Login/SignUp";
import NotFound from "../pages/NotFound/NotFound";
import SearchPets from "../pages/Search/SearchPets";
import PetForm from "../components/forms/PetForm";

export default function RouterContainer() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<SearchPets />} />
            <Route path="/publish" element={ <PetForm/> } />
            <Route path="/auth/register" element={ <SignUp/> } />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}