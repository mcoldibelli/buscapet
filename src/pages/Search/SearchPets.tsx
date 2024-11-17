import LostFoundCard from "../../components/cards/LostFound";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import useDataFromDb from "../../hooks/useDataFromDb";
import { IMAGE_URL } from "../../utils/constants";
import { FilterContainer, Header, Main, NotFoundContent, PageWrapper, SearchInputWrapper } from "./SearchPets.style";

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
                    )) : <NotFoundContent>Nenhum pet encontrado no banco de dados.</NotFoundContent>}
                </Main>
            </span>
        </PageWrapper>
    );
}
