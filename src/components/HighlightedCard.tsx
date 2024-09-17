import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fe5f12;
    color: white;

    width: 350px;
    height: 390px;
    border-radius: 8px;
    padding: 2rem;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;

    height: 60px;
    
    img {
        border-radius: 50%;
        margin-right: 1rem;
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const CardContent = styled.div`
    margin-top:1.5rem;
    
    span {
        display: flex;
        align-items: center;

        h4 {
            font-size: 1.3rem;
            font-weight: 600;
        }

        span {
            margin-left: 0.5rem;
            gap: 0.1rem;
        }
    }

    p {
        font-size: 0.8rem;
        text-align: justify;
        margin-top: 0.5rem;
    }
`;

export default function HighlightedCard() {
    const rated = 5;

    return (
        <CardContainer>
            <CardHeader>
                <img src="https://placehold.co/80x80" alt="avatar" />
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