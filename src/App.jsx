import { useEffect, useState } from "react"
import AppHeader from "./components/Header"
import { API_URL } from "./constants";
import AnimalsList from "./components/AnimalsList";


function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/animals`)
      .then(res => res.json())
      .then(json => setAnimals(json.data.animals))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <main className="container mx-auto p-4 max-w-3xl border-solid border border-slate-700 m-3 rounded">
        <AppHeader />

        <AnimalsList animals={animals} />
      </main>
    </>
  )
}

export default App
