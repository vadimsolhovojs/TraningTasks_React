import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

export const App = () => {
  const [count, setCount] = useState(0);
  let countString = count === 5 ? "MAX" : count;

  const handleCountIncrease = () =>
    setCount((count) => (count === 5 ? 5 : ++count));

  const hanldeCountDecrease = () =>
    setCount((count) => (count <= 0 ? 0 : --count));

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCountIncrease}>+</button>
        <button className="l-button">Count is {countString}</button>
        <button onClick={hanldeCountDecrease}>-</button>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
