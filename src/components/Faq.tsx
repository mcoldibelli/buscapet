import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

const FaqContainer = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 8rem;

    h2 {
        color: #7821ce;
        font-size: 5.5rem;
        font-weight: bold;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-right: 5rem;
    }

    span {
        font-size: 1.5rem;
    }
`;

const FAQItemContainer = styled.div`
    border-top: 3px solid #fe5f12;
    border-bottom: 3px solid #fe5f12;
    padding: 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    svg {
        color: black;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

export default function FAQ() {
    const faqs = [
        {
            question: "Como crio o anúncio?",
            answer: "Para criar um anúncio, clique no botão 'Criar Anúncio' e siga os passos fornecidos.",
        },
        {
            question: "O que acontece quando crio o anúncio?",
            answer: "Quando você cria um anúncio, ele será exibido na plataforma para que outras pessoas possam vê-lo.",
        },
        {
            question: "O anúncio é gratuito?",
            answer: "Sim, a criação do anúncio é totalmente gratuita.",
        },
        {
            question: "Vocês garantem que o pet vai ser encontrado?",
            answer: "Não podemos garantir, mas fornecemos a melhor visibilidade possível para que seu pet seja encontrado.",
        },
    ];

  return (
    <FaqContainer>
        <div>
            <h2>FAQ <span>(Perguntas frequentes)</span></h2>

            {faqs.map((faq, index) => (
                <FAQItemContainer key={index}>
                    <h3>{faq.question}</h3><FaPlus />
                    {/* <p>{faq.answer}</p> */}
                </FAQItemContainer>
            ))}
        </div>
        
        <img src="https://placehold.co/300x500" alt="avatar" />
    </FaqContainer>
  );
};
