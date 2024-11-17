import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0 auto;
    max-width: 85rem;
    min-width: 85rem;
    width: 85rem;
    height: 42rem;

    > h2 {
        color: ${theme.colors.primary};
        font-size: 2.25rem;
        font-weight: 700;
    }

    > p {
        color: #222222;
        font-size: 1rem;
        font-weight: 400;
    }

    /* div: cards */
    div {
        display: flex;
        gap: 1.5rem;
    }

    /* button: ver mais */
    button:last-child {
        margin: 0 auto;
        background-color: ${theme.colors.primary};
        color: white;
        font-size: 1rem;
        font-weight: 600;
        width: 14.25rem;
        height: 3.5rem;
        border-radius: 0.5rem;
    }
`;