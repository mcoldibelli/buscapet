import { useState } from 'react';
import LoginModal from '../../components/modal/Login';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, HeaderButton, Logo, StyledHeader } from './Header.style';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <StyledHeader>
            <Logo>
                <a href="/">
                    <span>busca</span>
                    <span>pet</span>
                </a>
            </Logo>
            <ButtonGroup>
                <HeaderButton onClick={() => navigate('/publish')}>Anunciar</HeaderButton>
                <HeaderButton onClick={toggleModal}>Entrar</HeaderButton>
            </ButtonGroup>

            {isModalOpen && <LoginModal closeModal={toggleModal} />}
        </StyledHeader>
    );
}
