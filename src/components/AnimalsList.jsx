import { useContext } from "react";

import AnimalCard from "./AnimalCard";
import AnimalContext from "../contexts/AnimalContext";
import AppSpinner from "./AppSpinner";

export default function AnimalsList() {
  const { loading, error, animals } = useContext(AnimalContext);
  return (
    <>
      {loading && (
        <AppSpinner />
      )}

      {!loading && (
        <ul className="flex flex-col gap-2">
          {animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </ul>

      )}

      {!loading && error && (
        <span className="text-center text-red-400 text-md my-2">{error}</span>
      )}
    </>
  )
}