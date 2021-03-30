import React from "react";
import { render } from "react-dom";

// export default function Pet({ animal, name, color }) {
//   return React.createElement("div", { key: Math.random() }, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h3", {}, color),
//     React.createElement("div", { style: { borderBottom: "1px solid black" } }),
//   ]);
// }

export default function Pet({ animal, name, color }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h3>{color}</h3>
      <div style={{ borderBottom: "1px solid black" }}></div>
    </div>
  );
}
