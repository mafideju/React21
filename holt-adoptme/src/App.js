import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import SearchBar from "./SearchBar";
import DetailsWithError from "./Details";
import ThemeContext from "./ThemeContext";

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
  const themeHook = useState("blue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div className="details">
          <header>
            <Link to="/">AdoptMee</Link>
          </header>
          <Router>
            <SearchBar path="/" />
            <DetailsWithError path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
