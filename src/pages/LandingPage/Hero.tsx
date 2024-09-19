import styled from "styled-components";
import { theme } from "../../styles/theme";

const StyledHero = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

    @media (min-width: ${theme.breakpoints.tablet}) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 3rem;
    }

    @media (min-width: ${theme.breakpoints.laptop}) {
        padding: 0 5rem;
    }

    /* Left content (text and buttons) */
    .hero-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        padding-top: 1rem;

        @media (min-width: ${theme.breakpoints.tablet}) {
            align-items: flex-start;
            text-align: left;
            width: 50%;
            padding-right: 2rem;
        }

        h2 {
            color: ${theme.colors.secondary};
            font-weight: bold;
            font-size: 2.4rem;
            line-height: 1;
            padding: 0 1rem 1rem 0;


            @media (min-width: ${theme.breakpoints.mobile}) {
                font-size: 2.5rem;
            }

            @media (min-width: ${theme.breakpoints.tablet}) {
                font-size: 3rem;
                padding: 1rem;
                width: 800px;
            }

            @media (min-width: ${theme.breakpoints.laptop}) {
                font-size: 3.5rem;
                width: 600px;
            }

            @media (min-width: ${theme.breakpoints.desktop}) {
                font-size: 4rem;
            }
        }

        p {
            max-width: 100%;
            color: black;
            font-size: 0.8rem;
            text-align: justify;
            margin-bottom: 1.5rem;
            padding: 0 1rem;

            @media (min-width: ${theme.breakpoints.mobile}) {
                font-size: 1rem;
             
            }

        }

        .button-group {
            display: flex;
            gap: 1rem;
            width: 100%;
            align-items: center;
            justify-content: center;
            padding: 1rem 0 3rem;

            @media (min-width: ${theme.breakpoints.tablet}) {
                flex-direction: row;
                align-items: flex-start;
                gap: 1.5rem;
            }

            button {
                background-color: ${theme.colors.primary};
                color: white;
                border-radius: 6px;
                padding: 0.8rem 1rem;
                font-weight: 500;

                @media (min-width: ${theme.breakpoints.mobile}) {
                    width: 200px;
                }
                
                @media (min-width: ${theme.breakpoints.laptop}) {
                    padding: 1rem 2rem;
                }
            }
        }
    }

    /* Right side image */
    .hero-image {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;
        margin-top: 2rem;

        @media (min-width: ${theme.breakpoints.tablet}) {
            width: 50%;
            margin-top: 0;
            justify-content: flex-end;
            align-items: flex-end;
        }

        img {
            width: 100%;
            height: auto;
            max-width: 500px;

            @media (min-width: ${theme.breakpoints.laptop}) {
                max-width: 600px;
            }
        }
    }
`;

export default function Hero() {
    return (
        <StyledHero>
            <div className="hero-content">
                <h2>Bem-vindo ao Buscapet!</h2>
                <p>No Buscapet, entendemos a angústia e a esperança de quem está à procura de um amigo perdido. Criado com carinho pelos estudantes de <strong>Ciência da Computação da UNISAGRADO</strong>, nosso objetivo é ser um farol de esperança para donos de pets e amantes dos animais.</p>
                <p>Aqui, você pode divulgar a busca por um pet perdido ou ajudar a reunir um animal encontrado com seu verdadeiro lar. Juntos, queremos tornar o mundo um lugar mais seguro e acolhedor.</p>

                <div className="button-group">
                    <button>Perdi meu pet</button>
                    <button>Achei um pet</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="hero.png" alt="Hero Image" />
            </div>
        </StyledHero>
    );
}
