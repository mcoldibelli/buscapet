import styled from 'styled-components';
import LostFoundCard from '../components/LostFoundCard';
import HighlightedCard from '../components/HighlightedCard';
import FAQ from '../components/Faq';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Hero = styled.section`
    display: flex;
    padding: 8rem;
    min-height: 90vh;
    align-items: center;
    justify-content: space-between;

    > div {
        max-width: 530px;
        display: flex;
        flex-direction: column;

        h2 {
            font-weight: bold;
            width: 400px;
            line-height: 1;
            font-size: 4rem;
            color: #fe5f12;
        }
        p {
            text-align: justify;
            margin: 1rem 0;
            font-size: 1.1rem;
        }
        button {
            font-size: 1.1rem;
            margin-right: 1rem;
            padding: 0.75rem 1.5rem;
            background-color: #7821ce;
            color: white;
            font-weight: 600;
            width: 15rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background-color: rgba(120, 33, 206, 0.8);
            }
        }
    }
`;

const HowItWorks = styled.section`
    display: flex;
    color: #f7f7f7;
    font-weight: 500;
    padding: 4rem 0 4rem 8rem;
    width: 100%;

    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    height: 400px;
    background-color: #7821ce;
    
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: white;
    }

    p {
        text-align: justify;
        margin: 1rem 0;
        padding-right: 3.5rem;
        line-height: 1.5;
    }

    p:last-of-type {
        text-align: right;
        margin-top: 4rem;
        font-weight: 600;
    }

`;

const HighlightedHistory = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4rem 8rem;

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
        color: #fe5f12;
    }

    article {
        display: flex;
        gap: 1.5rem;
    }
    
`;

const HighlightedLostFound = styled.section`
    display: flex;
    flex-direction: column;
    padding: 4rem 8rem;
    height: 900px;

    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        color: #7821ce;
    }

    p {
        font-size: 1.1rem;
        color: #666666;
    }

    div {
        display: flex;
        gap: 1.5rem;
    }

    button {
        background-color: #7821ce;
        color: white;
        font-weight: 600;
        border: none;
        border-radius: 4px;
        width: 16%;

        &:hover {
            background-color: rgba(120, 33, 206, 0.9);
        }

        padding: 0.75rem 3.5rem;
        margin: 0 auto;
        margin-top: 5rem;
    }

`;

export default function LandingPage() {
    return (
        <PageWrapper>
            <Header/>
            <main>
                <Hero>
                    <div>
                        <h2>Bem-vindo ao Buscapet!</h2>
                        <p>No Buscapet, entendemos a angústia e a esperança de quem está à procura de um amigo perdido. Criado com carinho pelos estudantes de <strong>Ciência da Computação da UNISAGRADO</strong>, nosso objetivo é ser um farol de esperança para donos de pets e amantes dos animais.</p>
                        <p>Aqui, você pode divulgar a busca por um pet perdido ou ajudar a reunir um animal encontrado com seu verdadeiro lar. Juntos, queremos tornar o mundo um lugar mais seguro e acolhedor.</p>

                        <div>
                            <button>Perdi meu pet</button>
                            <button>Achei um pet</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x600" alt="Hero Image" />
                    </div>
                </Hero>
                <HowItWorks>
                    <div>
                        <h2>Como funciona o Buscapet</h2>
                        <p>No Buscapet, cada detalhe conta e cada esforço é valorizado. Estamos aqui para apoiar você, oferecendo uma ferramenta prática e confiável para que você possa se concentrar no que realmente importa: encontrar o seu amigo ou ajudar outro a encontrá-lo.</p>
                        <p>Obrigado por fazer parte dessa missão conosco. <br/>Juntos, podemos fazer a diferença.</p>
                    </div>
                    <img src="https://placehold.co/600x400" alt="About Image" />
                </HowItWorks>
                <HighlightedHistory>
                    <h2>Histórias em destaque</h2>
                    <article>
                        <HighlightedCard />
                        <HighlightedCard />
                        <HighlightedCard />
                    </article>
                </HighlightedHistory>
                <HighlightedLostFound>
                    <h2>Achados e perdidos</h2>
                    <p>Pets anunciados recentemente.</p>
                    <div>
                        <LostFoundCard/>
                        <LostFoundCard/>
                        <LostFoundCard/>
                    </div>
                    <button>Ver mais</button>
                </HighlightedLostFound>
                <FAQ/>
                <Footer/>
            </main>
        </PageWrapper>
    );
}