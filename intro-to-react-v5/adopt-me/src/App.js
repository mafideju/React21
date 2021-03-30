import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchBar from "./SearchBar";

// function App() {
//   return React.createElement(
//     "div",
//     { className: "details" },
//     React.createElement("h1", {}, "***"),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Buzz",
//       color: "Marrom",
//     }),
//     React.createElement(Pet, {
//       animal: "Cat",
//       name: "Catatau",
//       color: "Preto/Branco",
//     }),
//     React.createElement(Pet, {
//       animal: "Dog",
//       name: "Pixote",
//       color: "Preto/Branco/Marrom",
//     }),
//   );
// }

function App() {
  return (
    <div className="details">
      <h1>AdoptMee</h1>
      <SearchBar />
      {/* <Pet name="Buzz" animal="Cão" color="Marrom" />
      <Pet name="Pixote" animal="Cão" color="Preto/Branco/Marrom" />
      <Pet name="Catatau" animal="Gato" color="Preto/Branco" /> */}
    </div>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
