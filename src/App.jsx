import AppHeader from "./components/AppHeader";
import AnimalsList from "./components/AnimalsList";
import { useContext } from "react";
import AppContext from "./contexts/AppContext";
import AnimalForm from "./components/AnimalForm";


function App() {
  const { isCreating } = useContext(AppContext);

  return (
    <main className="container mx-auto p-4 max-w-lg border-solid border border-slate-700 rounded">
      <AppHeader />

      {isCreating && <AnimalForm />}

      <AnimalsList />

    </main>
  )
}

export default App
