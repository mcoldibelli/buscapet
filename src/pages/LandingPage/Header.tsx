import styled from 'styled-components';
import { theme } from '../../styles/theme';

const StyledHeader = styled.header`
    width: 95rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0 11rem;
`;

const Logo = styled.h1`
    font-size: 3rem;
    font-weight: bold;
    
    span:first-child {
        color: ${theme.colors.primary};
    }

    span:last-child {
        color: ${theme.colors.secondary};
    }

`;

const ButtonGroup = styled.div`
    display: flex;
    width: 30rem;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 0;
    gap: 0.5rem;
    
    button {
        border-radius: 0.5rem;
        width: 10rem;
    }

    button:nth-child(1) {
        background-color: transparent;
        color: black;
        text-decoration: 3px underline ${theme.colors.primary};
        text-underline-offset: 1rem;
        width: 9rem;
    }

    button:nth-child(2) {
        background-color: ${theme.colors.primary};
        color: white;
    }

    button:nth-child(3) {
        background-color: white;
        color:${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
    }

`;

const HeaderButton = styled.button``;

export default function Header() {
    return (
        <StyledHeader>
            <Logo>
                <span>busca</span>
                <span>pet</span>
            </Logo>
            <ButtonGroup>
                <HeaderButton>Busca</HeaderButton>
                <HeaderButton>Anunciar</HeaderButton>
                <HeaderButton>Entrar</HeaderButton>
            </ButtonGroup>
        </StyledHeader>
    );
}
