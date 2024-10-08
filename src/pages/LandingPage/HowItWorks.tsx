import styled from "styled-components";
import { theme } from "../../styles/theme";

const SectionWrapper = styled.section`
    display: flex;
    height: 28rem;
    background-color: ${theme.colors.primary};
    flex-shrink: 0;
    min-width: 50rem;
    
    .text-container {
        padding-top: 5rem;
        width: 50rem;

        color: white;
        font-weight: 500;
        padding-left: 11rem;
        flex-shrink: 0;

        h2 {
            font-size: 2.5rem;
            font-weight: bold;
        }

        p {
            text-align: justify;
            margin: 2rem 0;
            padding-right: 3.5rem;
            line-height: 1.5;
        }

        p:last-of-type {
            text-align: right;
            margin-top: 4rem;
            font-weight: 600;
        }
    }

    .howitworks-image {
        position: relative;
        background-color: ${theme.colors.secondary};
        overflow: hidden;
        width: 45rem;
        flex-shrink: 0;

        img {
            position: absolute;
            top: 8%;
            left: 18%;
            object-fit: contain;
        }
    }
`;

export default function HowItWorks() {
    return (
        <SectionWrapper>
            <div className="text-container">
                <h2>Como funciona o Buscapet</h2>
                <p>No Buscapet, cada detalhe conta e cada esforço é valorizado. Estamos aqui para apoiar você, oferecendo uma ferramenta prática e confiável para que você possa se concentrar no que realmente importa: encontrar o seu amigo ou ajudar outro a encontrá-lo.</p>
                <p>Obrigado por fazer parte dessa missão conosco. <br/>Juntos, podemos fazer a diferença.</p>
            </div>
            <div className="howitworks-image">
                <img src="beagle.png" alt="About Image" />
            </div>
        </SectionWrapper>
    );
}
