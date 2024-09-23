import styled from "styled-components";
import { theme } from "../../styles/theme";
import LostFoundCard from "../../components/LostFoundCard";
import ToggleSwitch from "../../components/ui/ToggleSwitch";
import { IoSearchOutline } from "react-icons/io5";

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2rem;
    width: 90rem;
    height: 100vh;
    margin: 0 auto;

    span {
        display: flex;
    }
`;

const Header = styled.header`
    height: 6rem;
    padding: 1rem 0;
    font-weight: 400;

    a {
        font-weight: 600;
        cursor: pointer;
    } 

    h1 {
        color: ${theme.colors.secondary};
        font-size: 2rem;
        font-weight: 600;
        padding-top: 0.5rem;
    }
`;

const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1rem;
`;

const FilterContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 8rem;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    padding: 1rem;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const SearchInputWrapper = styled.div`
    position: relative;
    
    svg {
        position: absolute;
        top: 30%;
        left: 0.75rem;
        transform: translateY(-30%);
        color: #696969;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        border: 1px solid lightgray;
        margin-bottom: 1rem;
        padding-left: 2rem;
        cursor: pointer;
    }

    input:focus {
        border: 2px solid ${theme.colors.primary};
    }
    input:active {
        border: 2px solid ${theme.colors.primary};
    }
`;

const ToggleSwitchContainer = styled.div`
    gap: 1rem;
`;

export default function SearchPets() {
    return (
        <PageWrapper>
            <Header>
                <a href="/">Início</a>{' > Pets listados'}
                <h1>Achados e perdidos</h1>
            </Header>
            <span>
                <FilterContainer>
                    <SearchInputWrapper>
                        <IoSearchOutline /><input placeholder=" Buscar"/>
                    </SearchInputWrapper>
                    <ToggleSwitchContainer>
                        <p>Achados</p><ToggleSwitch/><p>Perdidos</p>
                    </ToggleSwitchContainer>

                    {/* <div>
                        <p>Espécie</p>
                        <select>
                            <option value="1">Cachorros</option>
                            <option value="2">Gatos</option>
                        </select>
                    </div> */}

                </FilterContainer>
                <Main>
                    <LostFoundCard/>
                    <LostFoundCard/>
                    <LostFoundCard/>
                    <LostFoundCard/>
                    <LostFoundCard/>
                    <LostFoundCard/>
                </Main>
            </span>
        </PageWrapper>
    );
}
