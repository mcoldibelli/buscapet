import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import usePetImage from '../hooks/usePetImage';
import { HighlightedCardProps } from '../utils/types';

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
        height: 6.625rem;
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
export default function HighlightedCard({ name, keeper, history }: HighlightedCardProps) {
    const dogImage = usePetImage({type: 'Dog'});
    const rated = 5;

    return (
        <CardContainer>
            <CardHeader>
                <img src={dogImage} alt="avatar" />
                <h3>{name}</h3>
            </CardHeader>
            <CardContent>
                <span>
                    <h4>{keeper}</h4>
                    <span>
                        {Array(rated)
                            .fill(null)
                            .map((_, index) => (
                                <IoStar key={index} />
                            ))}
                    </span>
                </span>
                <p>{history}</p>
            </CardContent>
        </CardContainer>
    );
}