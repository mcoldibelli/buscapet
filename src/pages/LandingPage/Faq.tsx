import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { FAQs } from "../../utils/constants";

const SectionWrapper = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 7.5rem 0 11rem;
    gap: 2rem;
    height: auto;
    width: 95rem;
`;

const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    width: 47.5rem;
`;

const FAQTitle = styled.h2`
    color: ${theme.colors.primary};
    font-weight: bold;
    font-size: 5rem;
    padding-top: 12.5rem;

    > span {
        font-size: 1.5rem;
    }
`;

const FAQItem = styled.div`
    width: 100%;
    border-top: 2px solid ${theme.colors.secondary};
    border-bottom: 2px solid ${theme.colors.secondary};
    padding: 0.5625rem 0;
    transition: all 0.3s ease-in-out;

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`;

const FAQHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 3rem;

    h3 {
        flex-grow: 1;
    }

    div {
        width: 2rem;

        svg {
            font-size: 2rem;
        }
    }
`;

const FAQAnswer = styled.p`
    padding: 1rem 4rem 0;
    font-size: 1rem;
    color: #444;
    line-height: 1.5;
`;

const ImageContainer = styled.div`
    width: 22rem;
    margin-top: 2.5rem;

    img {
        width: 25rem;
        height: auto;
    }
`;

const FAQComponent = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <SectionWrapper>
            <FAQContainer>
                <FAQTitle>FAQ <span>(Perguntas frequentes)</span></FAQTitle>
                {FAQs.map((faq, index) => (
                    <FAQItem key={index}>
                        <FAQHeader onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <div>{openFAQ === index ? <FiMinus /> : <LuPlus />}</div>
                        </FAQHeader>
                        {openFAQ === index && (<FAQAnswer>{faq.answer}</FAQAnswer>)}
                    </FAQItem>
                ))}
            </FAQContainer>

            <ImageContainer>
                <img src="faq_cat.png" alt="Curious cat" />
            </ImageContainer>
        </SectionWrapper>
    );
};

export default FAQComponent;