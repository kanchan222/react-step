import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 15;
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Decrease value{counter}</button>
      <p></p>
    </>
  );
}

export default App;
