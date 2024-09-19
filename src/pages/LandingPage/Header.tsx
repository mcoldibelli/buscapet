import styled from 'styled-components';
import { theme } from '../../styles/theme';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 5rem;
    padding: 0.5rem 1rem;

    max-width: 100%;

    @media (min-width: ${theme.breakpoints.mobile}) {
        padding: 0.5rem 2rem;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
        padding: 0.5rem 4rem;
    }

    @media (min-width: ${theme.breakpoints.laptop}) {
        padding: 0.5rem 6rem;
    }
`;

const Logo = styled.h1`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;

    > span:nth-of-type(1) {
        color: ${theme.colors.primary}; /* "busca" */
    }

    > span:nth-of-type(2) {
        color: ${theme.colors.secondary}; /* "pet" */
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
        font-size: 2.5rem;
    }

    @media (min-width: ${theme.breakpoints.laptop}) {
        font-size: 3rem;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        > button:nth-of-type(1),
        > button:nth-of-type(2) {
            display: none;
        }
    }

    @media (max-width: 640px) {
        > button:nth-of-type(2) {
            display: none;
        }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        > button:nth-of-type(1) {
            display: none;
        }
    }
`;

const HeaderButton = styled.button`
    position: relative;
    margin: 0 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    width: 8rem;
    height: 3rem;

    &:nth-of-type(1) {
        color: ${theme.colors.textDark};
        background: transparent;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            height: 3px;
            background-color: ${theme.colors.primary};
        }
    }

    &:nth-of-type(2) {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textLight};
    }

    &:nth-of-type(3) {
        background-color: transparent;
        color: ${theme.colors.primary};
        border: 2px solid ${theme.colors.primary};
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        width: 5rem;
        padding: 0.25rem 0.75rem;
        font-size: 0.9rem;

        &:nth-of-type(1)::after {
            width: 50%;
        }
    }
`;


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
