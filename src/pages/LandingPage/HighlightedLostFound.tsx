import styled from "styled-components";
import LostFoundCard from "../../components/LostFoundCard";
import { theme } from "../../styles/theme";

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
    return (
        <PageWrapper>
            <h2>Achados e perdidos</h2>
            <p>Pets anunciados recentemente.</p>
            <div>
                <LostFoundCard />
                <LostFoundCard />
                <LostFoundCard />
            </div>
            <button>Ver mais</button>
        </PageWrapper>
    );
}