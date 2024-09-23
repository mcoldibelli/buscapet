import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

const StyledHero = styled.section`
    display: flex;
    padding-left: 11rem;
    min-width: 95rem;

    max-height: 40rem;
    overflow: hidden;
    
    h2 {
        margin-top: 6rem;
        font-size: 4rem;
        color: ${theme.colors.secondary};
        font-weight: bold;
        width: 25rem;
        line-height: 4rem;
    }

    p {
        width: 30rem;
        text-align: justify;
        font-size: 1rem;
        letter-spacing: 0.2px;
        margin-top: 1.5rem;
    }

    .button-group {
        display: flex;
        gap: 1.25rem;
        margin-top: 2rem;
        height: 3.5rem;

        button {
            background-color: ${theme.colors.primary};
            color: white;
            border-radius: 6px;
            padding: 0.9rem 1rem;
            font-weight: 600;
            width: 14.5rem;
            height: 3.5rem;
        }
    }

    .hero-content {
        height: 34rem;
        width: 54rem;
    }

    .hero-image {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 34rem;
        min-height: 34rem;

        img {
            width: 650px;
            height: 650px;
            object-fit: fit;
            flex-shrink: 0;
        }
    }
`;

export default function Hero() {
    const navigate = useNavigate();
    return (
        <StyledHero>
            <div className="hero-content">
                <h2>Bem-vindo ao Buscapet!</h2>
                <p>No Buscapet, entendemos a angústia e a esperança de quem está à procura de um amigo perdido. Criado com carinho pelos estudantes de <strong>Ciência da Computação da UNISAGRADO</strong>, nosso objetivo é ser um farol de esperança para donos de pets e amantes dos animais.</p>
                <p>Aqui, você pode divulgar a busca por um pet perdido ou ajudar a reunir um animal encontrado com seu verdadeiro lar. Juntos, queremos tornar o mundo um lugar mais seguro e acolhedor.</p>

                <div className="button-group">
                    <button onClick={() => navigate("/search")}>Perdi meu pet</button>
                    <button onClick={() => navigate("/search")}>Achei um pet</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="hero.png" alt="Hero Image" />
            </div>
        </StyledHero>
    );
}
