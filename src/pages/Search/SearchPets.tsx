import styled from "styled-components";
import { theme } from "../../styles/theme";
import LostFoundCard from "../../components/LostFoundCard";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import useDataFromDb from "../../hooks/useDataFromDb";
import { IMAGE_URL } from "../../utils/constants";

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
        gap: 2rem;
    }
`;

const Header = styled.header`
    height: 6rem;
    padding: 1rem 0;
    font-weight: 400;
    width: 100%;

    a {
        font-weight: 600;
        cursor: pointer;
        color: ${theme.colors.primary};
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
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
    gap: 2rem;
    padding: 0 1rem;
`;

const FilterContainer = styled.aside`
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: fit-content;
    border-radius: 0.5rem;
    border: 1px solid lightgray;
    padding: 1.5rem;

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
        left: 0.75rem;
        transform: translateY(-50%);
        color: #696969;
    }

    input {
        width: 100%;
        height: 2.5rem;
        border-radius: 0.5rem;
        font-size: 0.9rem;
        border: 1px solid lightgray;
        margin-bottom: 1rem;
        padding-left: 2.5rem;
        cursor: text;
        transition: border 0.2s ease;

        &:focus {
            outline: none;
            border: 2px solid ${theme.colors.primary};
        }
    }
`;

export default function SearchPets() {
    const [searchTerm, setSearchTerm] = useState("");
    const data = useDataFromDb();


    return (
        <PageWrapper>
            <Header>
                <a href="/">Início</a>{' > Pets listados'}
                <h1>Achados e perdidos</h1>
            </Header>
            <span>
                <FilterContainer>
                    <SearchInputWrapper>
                        <IoSearchOutline />
                        <input 
                            placeholder="Buscar por nome ou local"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </SearchInputWrapper>
                </FilterContainer>
                <Main>
                    {data ? data.map((pet:any) => (
                        <LostFoundCard 
                            key={pet.idPost}
                            name={pet.petName}
                            location={`${pet.city}/${pet.state}`}
                            status={pet.status}
                            imageUrl={IMAGE_URL + pet.imageName}
                        />
                    )) : <p>No pets found.</p>}
                </Main>
            </span>
        </PageWrapper>
    );
}
