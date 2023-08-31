import { SlSymbleFemale, SlSymbolMale } from "react-icons/sl";
import { BsTrash3 } from "react-icons/bs";

export default function AnimalsList({ animals }) {
  return (
    <ul className="flex flex-col gap-2">
      {animals.map(animal => (
        <li key={animal.id} className="animal-card flex justify-between w-full border border-slate-700 rounded p-2">
          <div className="animal-info flex gap-2 items-center">
            <div className="gender flex items-center">
              {animal.gender === 'female' ? <SlSymbleFemale className="text-md" /> : <SlSymbolMale className="text-md" />}
            </div>
            <h4 className="animal-name text-lg">{animal.name} / {animal.species}</h4>
          </div>
          <button><BsTrash3 /></button>
        </li>
      ))}
    </ul>
  )
}