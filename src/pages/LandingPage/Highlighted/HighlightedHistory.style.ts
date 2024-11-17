import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const PageWrapper = styled.section`
    padding: 2.5rem 11rem;
    width: 95rem;
    height: 40.625rem;

    h2 {
        padding: 3rem 0;
        color: ${theme.colors.secondary};
        font-size: 3rem;
        font-weight: bold;
    }

    article {
        display: flex;
        gap: 1.2rem;
        
    }
`;