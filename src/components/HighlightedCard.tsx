import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CardContainer = styled.div`
    color: white;
    background-color: ${theme.colors.secondary};
    
    height: 25rem;
    width: 22rem;
    padding: 1.625rem;
    
    border-radius: 0.5rem;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    height: 6.625rem;
      
    img {
        width: 6.625rem;
        border-radius: 50%;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    } 
`;

const CardContent = styled.div`
    padding: 0 1rem;
    margin-top: 1.625rem;
    
    
    span {
        display: flex;
        align-items: center;

        h4 {
            font-size: 1.25rem;
            font-weight: 600;
        }

        span {
            margin-left: 0.5rem;
            gap: 0.1rem;
        }
    }

    p {
        width: 100%;
        font-weight: 300;
        margin-top: 0.8rem;
        text-align: justify;
        line-height: 0.875rem;
        font-size: 0.875rem;
        letter-spacing: 0.2px;
    }
`;

export default function HighlightedCard() {
    const rated = 5;

    return (
        <CardContainer>
            <CardHeader>
                <img src="https://placehold.co/100x100" alt="avatar" />
                <h3>Estopinha</h3>
            </CardHeader>
            <CardContent>
                <span>
                    <h4>Leonardo</h4>
                    {/* Adding a unique key to each IoStar */}
                    <span>
                        {Array(rated)
                            .fill(null)
                            .map((_, index) => (
                                <IoStar key={index} />
                            ))}
                    </span>
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </CardContent>
        </CardContainer>
    );
}