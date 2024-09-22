import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const NotFoundContainer = styled.div`
  width: 90rem;
  min-width: 90rem;
  height: 100vh;
  margin: 0 auto;
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ErrorMessage = styled.h1`
  margin-top: calc(100vh - 70vh);
  font-size: 9rem;
  font-weight: 600;
  color: ${theme.colors.secondary};
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #666;
`;

const HomeButton = styled(Link)`
  background-color: ${theme.colors.primary};
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.75rem 2.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1rem;
`;

const CatImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -14rem;
  width: 900px;
  
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