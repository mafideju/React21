import React from "react";
import Pet from "./Pet";

export default function Results({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>Cadê os Pets?</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            key={pet.id}
            id={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
          />
        ))
      )}
    </div>
  );
}
