import styled from 'styled-components';
import LostFoundCard from '../../components/LostFoundCard';
import HighlightedCard from '../../components/HighlightedCard';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import FAQ from './Faq';
import HowItWorks from './HowItWorks';
import { theme } from '../../styles/theme';

const PageWrapper = styled.div`
    max-width: 95rem;
    margin: 0 auto;
    padding: 2rem 0;
`;

const HighlightedHistory = styled.section`

    
`;

const HighlightedLostFound = styled.section`


`;

export default function LandingPage() {
    return (
        <PageWrapper>
            <Header/>
            <main>
                <Hero/>
                <HowItWorks/>
                {/* <HighlightedHistory>
                    <h2>Histórias em destaque</h2>
                    <article>
                        <HighlightedCard />
                        <HighlightedCard />
                        <HighlightedCard />
                    </article>
                </HighlightedHistory>
                <HighlightedLostFound>
                    <h2>Achados e perdidos</h2>
                    <p>Pets anunciados recentemente.</p>
                    <div>
                        <LostFoundCard/>
                        <LostFoundCard/>
                        <LostFoundCard/>
                    </div>
                    <button>Ver mais</button>
                </HighlightedLostFound> */}
                <FAQ/>
                <Footer/>
            </main>
        </PageWrapper>
    );
}