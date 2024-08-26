import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const getJoke = async function () {
    const response = await fetch(
      "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
    );
    const output = await response.json();
    setJoke(output.joke);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Joke Generator Using React and Joke API</h1>
        <button onClick={getJoke}>Click to generate a joke.</button>
        <h3>{joke}</h3>
      </div>
    </div>
  );
}

export default App;
