import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const NotFoundContainer = styled.div`
`;

const ErrorMessage = styled.h1`
`;

const Message = styled.p`
`;

const HomeButton = styled(Link)`
`;

const CatImage = styled.img`
  
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <div>
        <ErrorMessage>404</ErrorMessage>
        <Message>Oops! A página que você procura não existe!</Message>
        <HomeButton to="/">Voltar ao Início</HomeButton>
      </div>
      <CatImage src="lost_cat.png" alt="Gato olhando para a esquerda" />
    </NotFoundContainer>
  );
}