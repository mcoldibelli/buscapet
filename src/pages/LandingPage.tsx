export default function LandingPage() {
    return (
        <div>
            <header>
                <h1>Buscapet</h1>
                <div>
                    <button>Busca</button>
                    <button>Anunciar</button>
                    <button>Entrar</button>
                </div>
            </header>
            <main>
                <span className="hero">
                    <div>
                        <h2>Bem-vindo ao Buscapet!</h2>
                        <p>No Buscapet, entendemos a angústia e a esperança de quem está à procura de um amigo perdido. Criado com carinho pelos estudantes de <strong>Ciência da Computação da UNISAGRADO</strong>, nosso objetivo é ser um farol de esperança para donos de pets e amantes dos animais.</p>
                        <p>Aqui, você pode divulgar a busca por um pet perdido ou ajudar a reunir um animal encontrado com seu veradeiro lar. Juntos, queremos tornar o mundo um lugar mais seguro e acolhedor.</p>

                        <div>
                            <button>Perdi meu pet</button>
                            <button>Achei um pet</button>
                        </div>
                    </div>
                    <img src="https://placehold.co/600x600"/>
                </span>
                <span className="about">
                    <div>
                        <h2>Como funciona o Buscapet</h2>
                        <p>No Buscapet, cada detalhe conta e cada esforço é valorizado. Estamos aqui para apoiar você, oferencendo uma ferramenta prática e confiável para que você possa se concentrar no que realmente importa: encontrar o seu amigo ou ajudar outro a encontrá-lo.</p>
                        <p>Obrigado por fazer parte dessa missão conosco. Juntos, podemos fazer a diferença.</p>
                    </div>
                    <img src="https://placehold.co/600x400"/>
                </span>
                <span className="highlighted-history">
                    <h2>Histórias em destaque</h2>
                    {/* Will map 3 of the cards */}
                    <div className="card-container">
                        <div className="card-history">
                            <div className="card-header">
                                <img src="placehold.co/60x60" alt="avatar" />
                                <h3>Estopinha</h3>
                            </div>
                            {/* May be changed to non emoji */}
                            <h4>Leonardo ⭐️⭐️⭐️⭐️⭐️</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </span>
                <span className="highlted-lostfound">
                    <h2>Achados e perdidos</h2>
                    <p>Pets anunciados recentemente.</p>
                    <div className="card-container">
                        {/* Will map 3 of the cards */}
                        <div className="card-history">
                            <div className="card-header">
                                <p>Perdido</p>
                                <img src="placehold.co/140x140" alt="avatar" />
                                <div>
                                    <div>
                                        <h3>Nala</h3>
                                        <span>⭐️</span>
                                    </div>
                                    <p>Bauru, São Paulo</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button>Ver mais</button>
                </span>
                <span>
                    FAQ
                </span>
            </main>
            <footer>
                <div>
                    <h1>buscapet</h1>
                    <p>⬆️</p>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Busca</a></li>
                        <li><a href="#">Anunciar</a></li>
                        <li><a href="#">Entrar</a></li>
                    </ul>
                </nav>
                <p>2024 &#169; Buscapet Todos os direitos reservados</p>
            </footer>
        </div>
    );
}