import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../styles/theme";

const FAQs = [
    { question: "Como crio o anúncio?", answer: "Explicação detalhada de como criar um anúncio." },
    { question: "O que acontece quando crio o anúncio?", answer: "Explicação do que ocorre após criar o anúncio." },
    { question: "O anúncio é gratuito?", answer: "Sim, o anúncio é completamente gratuito." },
    { question: "Vocês garantem que o pet vai ser encontrado?", answer: "Não há garantia, mas maximizamos as chances." },
];

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 2rem;
    height: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        padding: 3rem 1rem;
    }
`;

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem; /* Added more space between FAQ items */
    padding: 3rem;
    width: 100%; /* Take full width for better responsiveness */
    
    @media (min-width: 768px) {
        width: 60%; /* Adjust width on larger screens */
    }
`;

const FAQTitle = styled.h2`
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: 5rem;

    > span {
        font-size: 1.5rem;
        color: ${theme.colors.primary};
    }

    @media (max-width: 768px) {
        font-size: 2.5rem; /* Smaller title on mobile */
        text-align: center;
    }
`;

const FAQItem = styled.div`
    width: 100%;
    border-top: 3px solid ${theme.colors.secondary};
    border-bottom: 3px solid ${theme.colors.secondary};
    padding: 1rem 0;
    transition: all 0.3s ease-in-out;


    div {
        display: flex;
        align-items: right;
        justify-content: right;
        padding-right: 1.5rem;
    }
`;

const FAQHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    
    h3 {
        padding: 0 2rem;
        font-size: 1rem;
        width: 1000px;
    }

    div {
        width: 100px;

        svg {
            display: flex;
            font-size: 1.5rem;
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.1rem;
        }
    }
`;

const FAQAnswer = styled.p`
    padding: 1rem 3rem 0;
    font-size: 1rem;
    color: #444;
    line-height: 1.5;

    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

    img {
        max-width: 400px;
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
        display: none;
    }

    @media (min-width: 768px) {
        width: 40%;
    }
`;

const FAQComponent = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <Section>
            <FAQContainer>
                <FAQTitle>FAQ <span>(Perguntas frequentes)</span></FAQTitle>
                {FAQs.map((faq, index) => (
                    <FAQItem key={index}>
                        <FAQHeader onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <div>{openFAQ === index ? <FaMinus /> : <FaPlus />}</div>
                        </FAQHeader>
                        {openFAQ === index && (<FAQAnswer>{faq.answer}</FAQAnswer>)}
                    </FAQItem>
                ))}
            </FAQContainer>

            <ImageContainer>
                <img src="https://placehold.co/300x500" alt="Curious cat" />
            </ImageContainer>
        </Section>
    );
};

export default FAQComponent;
