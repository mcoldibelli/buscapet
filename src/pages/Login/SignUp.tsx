import styled from "styled-components";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.div`
    display: flex;
    width: 90rem;
    margin: 10rem calc(50vw - 30rem);
    
    img {
        border-radius: 0.5rem 0 0 0.5rem;
        width: 18.5rem;
        height: 37rem;
        object-fit: cover;
    }

    form {
        border: 1px solid #e6e6e6;
        border-radius: 0 0.5rem 0.5rem 0;
        width: 31rem;
        height: 37rem;
        display: flex;
        flex-direction: column;
        justify-content: center;        
        padding: 0 3rem;

        h1 {
            margin: 0 auto;
            color: ${theme.colors.primary};
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 2rem;
        }

        label {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            font-weight: 600;

            input {
                background-color: #f9f9f9;
                padding: 0.5rem;
                border: 1px solid #e6e6e6;
                border-radius: 0.5rem;
                font-size: 1rem;
                font-weight: 400;
                padding-left: 1rem;
            }
        }
        
        button {
            background-color: ${theme.colors.secondary};
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 0.5rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            margin-top: 1rem;
        }
    }
`;

export default function SignUp() {
    const navigate = useNavigate();

    const handleButtonClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        
        // Adicione aqui a lógica de envio do formulário, se houver
        console.log("Formulário enviado com sucesso!");

        // Redireciona para a rota desejada após o envio
        navigate('/'); // Substitua pela rota de destino
    };

    return (
        <PageWrapper>
            <img src="/register_dog.jpg" alt="Cachorro bege" />
            <form onSubmit={handleButtonClick}>
                <h1>Cadastro</h1>
                <label htmlFor="input-email">
                    Email *
                    <input type="text" placeholder="E-mail" id="input-email" required />
                </label>
                <label htmlFor="input-senha">
                    Senha *
                    <input type="password" placeholder="******" id="input-senha" required />
                </label>
                <label htmlFor="input-nome">
                    Nome *
                    <input type="text" placeholder="Nome" id="input-nome" required />
                </label>
                <label htmlFor="input-telefone">
                    Telefone
                    <input type="text" placeholder="Telefone" id="input-telefone" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </PageWrapper>
    );
}