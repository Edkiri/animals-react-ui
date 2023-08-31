import { useState } from "react";
import useInputForm from "../hooks/useInputForm";

export default function AnimalForm() {
  const name = useInputForm('');
  const species = useInputForm('');
  const [gender, setGender] = useState('male');

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(name.value, species.value, gender)
  }

  return (
    <form className="mb-6" onSubmit={handleCreate}>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="name">Nombre</label>
        <input type="text" placeholder="Nombre del animal" className="rounded" {...name} />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="species">Especie</label>
        <input type="text" placeholder="Especie del animal" className="rounded" {...species} />
      </div>
      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="currency">
          Género
        </label>
        <select
          id="currency"
          name="currency"
          className="h-full rounded-md border bg-transparent !p-[0.75rem] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value={'male'}>Macho</option>
          <option value={'female'}>Hembra</option>
        </select>
      </div>
      <button className="text-center p-2 bg-slate-800 text-white w-full rounded mt-2 font-bold hover:bg-slate-700" type="submit">Agregar animal</button>
    </form>
  )
}