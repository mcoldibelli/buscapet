import styled from 'styled-components';
import { FaArrowUp } from "react-icons/fa6";

const StyledHeader = styled.header`
    display: flex;
    padding: 1rem 5rem;    
    top: 0;
    height: 70px;

    /* button container */
    div {
        display: flex;
        justify-content: flex-end;

        > button {
            margin: 0 0.25rem;
            width: 9rem;
            font-weight: 600;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }
    }
    
    button:nth-of-type(1) {
        background-color: transparent;
        color: #000;
        border-bottom: 2px solid #7821ce;
        border-radius: 0;
        margin-right: 40px;
        width: 60px;
    }

    button:nth-of-type(2) {
        background-color: #7821ce;
        color: white;
        text-align: center;
    }

    button:nth-of-type(3) {
        background-color: transparent;
        color: #7821ce;
        border: 2px solid #7821ce;
        text-align: center;
    }
`;

const Logo = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;

    > span:nth-of-type(1) {
        color: #7821ce; // "busca"
    }

    > span:nth-of-type(2) {
        color: #fe5f12; // "pet"
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    padding: 5rem;

`;

const Hero = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    
    > div {
        max-width: 530px;

        h2 {
            font-weight: bold;
            line-height: 1;
            font-size: 5rem;
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
    
    img {
        max-width: 80%;
        border-radius: 10px;
    }
`;


const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    height: 25rem;
    background-color: #7821ce;
    color: white;
    text-align: center;
    justify-content: center;
    padding: 8rem 0;
    position: relative;

    h1 {
        font-size: 2.7rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }

    svg {
        position: absolute;
        bottom: 80%;
        right: 4%;
        background-color: white;
        border-radius: 4px;
        height: 40px;
        width: 40px;
        padding: 0.5rem;
        color: #7821ce;
        cursor: pointer;

        &:hover {
            background-color: #f7f7f7;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        margin: 2rem 0 1.5rem 0;
        list-style: none;
        gap: 2rem;
        
        li {
            font-size: 1.2rem;
        }

        a {
            text-decoration: none;
            position: relative;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    p {
        font-size: 1rem;
        padding: 2rem 0;
        color: #ddd;
    }
`;

export default function LandingPage() {
    return (
        <>
            <StyledHeader>
                <Logo>
                    <span>busca</span>
                    <span>pet</span>
                </Logo>
                <div>
                    <button>Busca</button>
                    <button>Anunciar</button>
                    <button>Entrar</button>
                </div>
            </StyledHeader>
            <Main>
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
                    <img src="https://placehold.co/600x600" alt="Hero Image" />
                </Hero>
                <section>
                    <div>
                        <h2>Como funciona o Buscapet</h2>
                        <p>No Buscapet, cada detalhe conta e cada esforço é valorizado. Estamos aqui para apoiar você, oferecendo uma ferramenta prática e confiável para que você possa se concentrar no que realmente importa: encontrar o seu amigo ou ajudar outro a encontrá-lo.</p>
                        <p>Obrigado por fazer parte dessa missão conosco. Juntos, podemos fazer a diferença.</p>
                    </div>
                    <img src="https://placehold.co/600x400" alt="About Image" />
                </section>
                <section className="highlighted-history">
                    <h2>Histórias em destaque</h2>
                    <div>
                        <article>
                            <div className="card-header">
                                <img src="https://placehold.co/60x60" alt="avatar" />
                                <h3>Estopinha</h3>
                            </div>
                            <h4>Leonardo ⭐️⭐️⭐️⭐️⭐️</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                        </article>
                    </div>
                </section>
                <section className="highlighted-lostfound">
                    <h2>Achados e perdidos</h2>
                    <p>Pets anunciados recentemente.</p>
                    <div>
                        <section>
                            <div className="card-header">
                                <p>Perdido</p>
                                <img src="https://placehold.co/140x140" alt="avatar" />
                                <div>
                                    <div>
                                        <h3>Nala</h3>
                                        <span>⭐️</span>
                                    </div>
                                    <p>Bauru, São Paulo</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <button>Ver mais</button>
                </section>
                <section>
                    <h2>FAQ</h2>
                </section>
            </Main>

            <Footer>
                <div>
                    <h1>buscapet</h1>
                    <FaArrowUp />
                </div>

                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Busca</a></li>
                    <li><a href="/publish">Anunciar</a></li>
                    <li><a href="/login">Entrar</a></li>
                </ul>

                <p>2024 &#169; Buscapet Todos os direitos reservados</p>
            </Footer>
        </>
    );
}