import styled from 'styled-components';
import { theme } from '../styles/theme';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    
    max-height: 5rem;
    height: 5rem;

    max-width: ${theme.breakpoints.desktop};
    margin: 0 auto;

    padding: 0.5rem 4rem;
    font-weight: 600;

    @media (max-width: ${theme.breakpoints.laptop}) {
        padding: 0.5rem 3rem;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 0.5rem 2rem;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 0.5rem 1rem;
        justify-content: center;
        margin: 0 auto;
    }

    /* button container */
    div {
        display: flex;
        justify-content: flex-end;

        > button {
            margin: 0.25rem;
            width: 9.5rem;
            border-radius: 6px;
            cursor: pointer;
        }

        @media (max-width: ${theme.breakpoints.mobile}) {
            justify-content: center;
            align-items: center;

            > button:nth-of-type(1), /* Busca */
            > button:nth-of-type(2) { /* Anunciar */
                display: none;
            }
        }
    }

    // Botão Busca
    button:nth-of-type(1) {
        color: ${theme.colors.textDark};
        border-bottom: 3px solid ${theme.colors.primary};
        border-radius: 0;
        margin-right: 40px;
        width: 50px;

        @media (max-width: ${theme.breakpoints.tablet}) {
            display: none;
        }
    }

    // Botão Anunciar
    button:nth-of-type(2) {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textLight};
        text-align: center;

        @media (max-width: 640px) {
            display: none;
        }
    }

    // Botão Entrar
    button:nth-of-type(3) {
        background-color: transparent;
        color: ${theme.colors.primary};
        text-align: center;
        border: 2px solid ${theme.colors.primary};

        @media (max-width: ${theme.breakpoints.mobile}) {
            position: absolute;
            right: 1rem;
            width: 4rem;
            height: 2rem;
            font-size: 0.8rem;
        }
    }
`;

const Logo = styled.h1`
    display: flex;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;

    > span:nth-of-type(1) {
        color: ${theme.colors.primary}; // "busca"
    }

    > span:nth-of-type(2) {
        color: ${theme.colors.secondary}; // "pet"
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 2.5rem;
    }
`;

export default function Header() {
    return (
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
    );
}
