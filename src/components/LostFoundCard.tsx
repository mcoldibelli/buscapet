import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    height: 31rem;
    width: 22rem;
    border-radius: 0.5rem;
    margin-top: 3rem;

    h2 {
        background-color: #7821ce;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
        border-radius: 0.5rem 0.5rem 0 0;
        padding: 1.25rem 0;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    height: 7.5rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
    }

    h3 {
        font-weight: 600;
        color: #424242;
    }

    svg {
        color: #fe5f12;
    }

    p {
        font-size: 1rem;
        color: #424242;
    }
`;

export default function LostFoundCard() {
    return (
        <CardContainer>
            <h2>Perdido</h2>
            <img src="https://placehold.co/348x282" alt="avatar" />
            <CardContent>
                <div>
                    <h3>Nala</h3>
                    <IoStar/>
                </div>
                <p>Bauru, São Paulo</p>
            </CardContent>
        </CardContainer>
    )
}