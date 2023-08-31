import { useEffect, useState } from "react";
import { API_URL } from "../constants";

export default function useAnimals() {
  const [animals, setAnimals] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API_URL}/animals`)
      .then((res) => res.json())
      .then((json) => {
        setAnimals(json.data.animals);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Error cargando los animales");
        setLoading(false);
      });
  }, []);

  return { loading, error, animals };
}
