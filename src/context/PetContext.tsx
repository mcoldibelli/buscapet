import React, { createContext, useContext, useState, useEffect } from 'react';
import useDataFromDb from '../hooks/useDataFromDb';

const PetContext = createContext<any>(null);

export const PetProvider = ({ children }: { children: React.ReactNode }) => {
  const data = useDataFromDb();
  const [pets, setPets] = useState(data);
  const [filteredPets, setFilteredPets] = useState(data);

  useEffect(() => {
    setPets(data);
    setFilteredPets(data);
  }, [data]);

  const filterPets = (filters: {
    searchTerm?: string;
    status?: string;
    city?: string;
    state?: string;
    petType?: string;
  }) => {
    const {
      searchTerm = '',
      status = '',
      city = '',
      state = '',
      petType = '',
    } = filters;

    const lowercasedTerm = searchTerm.toLowerCase();

    const filtered = pets?.filter((pet: any) => {
      const matchesSearchTerm =
        pet.petName?.toLowerCase().includes(lowercasedTerm) ||
        pet.city?.toLowerCase().includes(lowercasedTerm) ||
        pet.neighborhood?.toLowerCase().includes(lowercasedTerm) ||
        pet.status?.toLowerCase().includes(lowercasedTerm);

      const matchesStatus = status
        ? pet.status?.toLowerCase() === status.toLowerCase()
        : true;

      const matchesCity = city
        ? pet.city?.toLowerCase() === city.toLowerCase()
        : true;

      const matchesState = state
        ? pet.state?.toLowerCase() === state.toLowerCase()
        : true;

      const matchesPetType = petType
        ? pet.petType?.toLowerCase() === petType.toLowerCase()
        : true;

      return (
        matchesSearchTerm &&
        matchesStatus &&
        matchesCity &&
        matchesState &&
        matchesPetType
      );
    });

    setFilteredPets(filtered);
  };

  return (
    <PetContext.Provider value={{ filteredPets, filterPets }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
