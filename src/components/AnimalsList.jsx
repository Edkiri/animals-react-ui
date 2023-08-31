import AnimalCard from "./AnimalCard";

export default function AnimalsList({ animals }) {
  return (
    <ul className="flex flex-col gap-2">
      {animals.map(animal => (
        <AnimalCard key={animal} animal={animal} />
      ))}
    </ul>
  )
}