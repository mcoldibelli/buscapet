import { IoArrowUpSharp } from "react-icons/io5";
import { StyledFooter } from "./Footer.style";

export default function Footer() {
    return (
        <StyledFooter>
            <div>
                <h1>buscapet</h1>
                <a href="/"><IoArrowUpSharp /></a>
            </div>

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/search">Busca</a></li>
                <li><a href="/publish">Anunciar</a></li>
            </ul>

            <p>2024 &#169; Buscapet <span>Todos os direitos reservados</span></p>
        </StyledFooter>
    )
}
