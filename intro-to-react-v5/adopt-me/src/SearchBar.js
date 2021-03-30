import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import { BREEDS } from "@frontendmasters/pet";

export default function SearchBar() {
  //   const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  const handleLocation = () => {
    console.log(`location`, location);
    console.log(`location`, animal);
  };

  return (
    <div className="search-params">
      <form onSubmit={handleLocation}>
        <label htmlFor="location">
          Localização
          <input
            id="location"
            value={location}
            placeholder="Localização"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option>Todos</option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Raça
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Pesquisar</button>
      </form>
    </div>
  );
}
