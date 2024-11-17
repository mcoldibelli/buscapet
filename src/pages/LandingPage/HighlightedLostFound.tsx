import styled from "styled-components";
import LostFoundCard from "../../components/LostFoundCard";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import useDataFromDb from "../../hooks/useDataFromDb";
import { IMAGE_URL } from "../../utils/constants";

const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 3.625rem 11rem 0 11rem;
    width: 95rem;
    height: 50rem;

    > h2 {
        color: ${theme.colors.primary};
        font-size: 2.25rem;
        font-weight: 700;
    }

    > p {
        color: #222222;
        font-size: 1rem;
        font-weight: 400;
    }

    /* div: cards */
    div {
        display: flex;
        gap: 1rem;
    }

    /* button: ver mais */
    button:last-child {
        margin: 0 auto;
        background-color: ${theme.colors.primary};
        color: white;
        font-size: 1rem;
        font-weight: 600;
        width: 14.25rem;
        height: 3.5rem;
        border-radius: 0.5rem;
    }
`;

export default function HighlightedLostFound() {
    const navigate = useNavigate();
    const data = useDataFromDb();
    const recentPets = data ? (Array.isArray(data) ? data.slice(0,3) : []) : [];
    console.log(recentPets);

    return (
        <PageWrapper>
            <h2>Achados e perdidos</h2>
            <p>Pets anunciados recentemente.</p>
            <div>
                {recentPets ? recentPets.map((pet:any) => (
                    <LostFoundCard 
                        key={pet.idPost}
                        name={pet.petName}
                        location={`${pet.city}/${pet.state}`}
                        status={pet.status}
                        imageUrl={IMAGE_URL + pet.imageName}
                    />
                )) : <p>No pets found.</p>}
            </div>
            <button onClick={() => navigate("/search")}>Ver mais</button>
        </PageWrapper>
    );
}