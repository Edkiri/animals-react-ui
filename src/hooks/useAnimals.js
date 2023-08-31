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
        if (json.success) {
          setAnimals(json.data.animals);
        } else {
          throw new Error();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Error cargando los animales");
        setLoading(false);
      });
  }, []);

  const createAnimal = async (payload) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return fetch(`${API_URL}/animals`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setAnimals([json.data.animal, ...animals]);
          return json;
        } else {
          throw new Error("Error creating animal");
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const deleteAnimal = async (id) => {
    return fetch(`${API_URL}/animals/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 204) {
        setAnimals(animals.filter((animal) => animal.id !== id));
      }
    });
  };

  return { loading, error, animals, createAnimal, deleteAnimal };
}
