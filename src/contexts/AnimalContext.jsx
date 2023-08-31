import { createContext } from 'react';
import useAnimals from '../hooks/useAnimals';

const AnimalContext = createContext({});

export function AnimalProvider({ children }) {
  const { animals, loading, error, createAnimal, deleteAnimal } = useAnimals();
  return (
    <AnimalContext.Provider value={{ animals, loading, error, createAnimal, deleteAnimal }}>
      {children}
    </AnimalContext.Provider>
  );
}

export default AnimalContext;
