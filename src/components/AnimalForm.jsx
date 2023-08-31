import { useContext, useState } from "react";
import useInputForm from "../hooks/useInputForm";
import AppInput from "./AppInput";
import validators from "../validators";
import AnimalContext from "../contexts/AnimalContext";
import AppSpinner from "./AppSpinner";
import AppContext from "../contexts/AppContext";

export default function AnimalForm() {
  const { createAnimal } = useContext(AnimalContext);
  const { toggleCreating } = useContext(AppContext);
  const name = useInputForm('', validators.minTextLength(4));
  const species = useInputForm('', validators.minTextLength(4));
  const [gender, setGender] = useState('male');

  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (name.error || name.value.trim() === '') return;
    if (species.error || species.value.trim() === '') return;

    setLoading(true);
    await createAnimal({
      name: name.value,
      species: species.value,
      gender
    })
    setLoading(false);
    toggleCreating()
  }

  return (
    <form className="mb-6" onSubmit={handleCreate}>

      <AppInput label="Nombre" {...name} />

      <AppInput label="Especie" {...species} />

      <div className="flex flex-col gap-1 mb-2">
        <label htmlFor="currency" className="text-md">
          Género
        </label>
        <select
          id="currency"
          name="currency"
          className="h-full rounded border bg-transparent p-2 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value='male'>Macho</option>
          <option value='female'>Hembra</option>
        </select>
      </div>
      <button
        disabled={loading}
        className="text-center p-3 bg-slate-800 text-white w-full rounded mt-2 font-bold hover:bg-slate-700"
        type="submit">
        {loading ? <AppSpinner /> : 'Agregar animal'}
      </button>
    </form>
  )
}