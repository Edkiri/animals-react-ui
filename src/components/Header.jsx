import { useContext } from "react"
import AppContext from "../contexts/AppContext"

export default function AppHeader() {
  const { isCreating, toggleCreating } = useContext(AppContext);

  const buttonColor = isCreating ? 'bg-red-400' : 'bg-green-400';
  const buttonText = isCreating ? 'Cancelar' : 'Agregar animal';

  return (
    <header className="flex justify-between mb-4">
      <h1 className="text-3xl font-bold">Animales</h1>
      <button onClick={toggleCreating} className={`${buttonColor} p-2 rounded text-md`}>
        {buttonText}
      </button>
    </header>
  )
}