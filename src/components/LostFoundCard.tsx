import { IoStar } from 'react-icons/io5';
import styled from 'styled-components';

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    width: 350px;
    border-radius: 8px;

    h2 {
        background-color: #7821ce;
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        text-align: center;
        padding: 1rem;
        border-radius: 0.5rem 0.5rem 0 0;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem;
    height: 100px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h3 {
        font-size: 1.7rem;
        font-weight: 600;
        color: #666666;
    }

    svg {
        color: #fe5f12;
        font-size: 1.5rem;
    }
`;

export default function LostFoundCard() {
    return (
        <CardContainer>
            <h2>Perdido</h2>
            <img src="https://placehold.co/140x140" alt="avatar" />
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