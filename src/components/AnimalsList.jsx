import { useContext } from "react";
import AnimalCard from "./AnimalCard";
import AnimalContext from "../contexts/AnimalContext";

export default function AnimalsList() {
  const { animals } = useContext(AnimalContext);
  return (
    <ul className="flex flex-col gap-2">
      {animals.map(animal => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </ul>
  )
}