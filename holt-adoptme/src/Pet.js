import React from "react";
import { Link } from "@reach/router";

// export default function Pet({ animal, name, color }) {
//   return React.createElement("div", { key: Math.random() }, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h3", {}, color),
//     React.createElement("div", { style: { borderBottom: "1px solid black" } }),
//   ]);
// }

export default function Pet({ animal, name, breed, media, location, id }) {
  let hero = "http://placecorgi.com/300/300";

  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{animal}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
}
