import AppHeader from "./components/Header";
import AnimalsList from "./components/AnimalsList";


function App() {
  return (
    <main className="container mx-auto p-4 max-w-3xl border-solid border border-slate-700 m-3 rounded">
      <AppHeader />
      <AnimalsList />
    </main>
  )
}

export default App
