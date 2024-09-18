import { FaArrowUp } from "react-icons/fa6";
import styled from "styled-components";
import { theme } from "../../styles/theme";


const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    height: 25rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textLight};
    text-align: center;
    justify-content: center;
    padding: 4rem 0;
    position: relative;

    h1 {
        font-size: 3.5rem;
        font-weight: bold;

        @media (max-width: ${theme.breakpoints.tablet}) {
            font-size: 3.25rem;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
            font-size: 3rem;
            margin-top: 2rem;
        }
    }

    svg {
        position: absolute;
        bottom: 80%;
        right: 5%;
        background-color: ${theme.colors.textLight};
        border-radius: 6px;
        height: 3rem;
        width: 3rem;
        padding: ${theme.spacing.small};
        color: ${theme.colors.primary};
        cursor: pointer;

        &:hover {
            background-color: ${theme.colors.background};
        }

        @media (max-width: ${theme.breakpoints.laptop}) {
            height: 2.8rem;
            width: 2.8rem;
            right: 4%;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
            height: 2rem;
            width: 2rem;
            bottom: 85%;
            right: 3%;
        }
    }

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: ${theme.spacing.medium};
        margin: 2rem;

        li {
            font-size: 1.2rem;

            @media (max-width: ${theme.breakpoints.tablet}) {
                font-size: 1.1rem;
            }

            @media (max-width: ${theme.breakpoints.mobile}) {
                font-size: 1rem;
            }
        }

        a {
            text-decoration: none;
            position: relative;
            color: ${theme.colors.textLight};

            &:hover {
                text-decoration: underline;
            }
        }
    }

    p {
        font-size: 1rem;
        padding: 2rem 0;
        color: #ddd;

        @media (max-width: ${theme.breakpoints.mobile}) {
            font-size: 0.9rem;
            padding: ${theme.spacing.medium} 0;
        }
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
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
        </StyledFooter>
    )
}
