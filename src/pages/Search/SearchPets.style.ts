import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    width: 90rem;
    height: 100vh;
    margin: 0 auto;

    span {
        display: flex;
        gap: 2rem;
    }
`;

export const Header = styled.header`
    height: 6rem;
    padding: 1rem 0;
    font-weight: 400;
    width: 100%;

    a {
        font-weight: 600;
        cursor: pointer;
        color: ${theme.colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    } 

    h1 {
        color: ${theme.colors.secondary};
        font-size: 2rem;
        font-weight: 600;
        padding-top: 0.5rem;
    }
`;

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 1rem;
`;

export const NotFoundContent = styled.p`
    p {
        width: 60rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.background};
        color: ${theme.colors.primary};
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

export const FilterContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: fit-content;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    padding: 1.5rem;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SearchInputWrapper = styled.div`
    position: relative;
    
    svg {
        position: absolute;
        left: 0.75rem;
        transform: translateY(-50%);
        color: #696969;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        border: 1px solid lightgray;
        margin-bottom: 1rem;
        padding-left: 2.5rem;
        cursor: text;
        transition: border 0.2s ease;

        &:focus {
            outline: none;
            border: 2px solid ${theme.colors.primary};
        }
    }
`;