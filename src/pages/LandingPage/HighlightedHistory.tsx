import styled from "styled-components";
import HighlightedCard from "../../components/HighlightedCard";
import { theme } from "../../styles/theme";
import highlightedData from "../../utils/sampleHistories.json";
import { useState, useEffect } from "react";

const PageWrapper = styled.section`
    padding: 2.5rem 11rem;
    width: 95rem;
    height: 40.625rem;

    h2 {
        padding: 3rem 0;
        color: ${theme.colors.secondary};
        font-size: 3rem;
        font-weight: bold;
    }

    article {
        display: flex;
        gap: 1.2rem;
        
    }
`;

export default function HighlightedHistory() {
    const [selectedItems, setSelectedItems] = useState<typeof highlightedData>([]);

    useEffect(() => {
        const getRandomItems = () => {
          const arrayCopy = [...highlightedData];
          for (let i = arrayCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
          }
          return arrayCopy.slice(0, 3);
        };
        setSelectedItems(getRandomItems());
      }, []);
      

    return (
        <PageWrapper>
            <h2>Histórias em destaque</h2>
                <article>
                    {selectedItems.map((item, index) => (
                        <HighlightedCard
                            key={index}
                            name={item.name}
                            keeper={item.keeper}
                            history={item.history}
                        />
                    ))}
                </article>
        </PageWrapper>
    );
}