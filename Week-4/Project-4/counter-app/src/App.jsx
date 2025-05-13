import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <div className="main">
          <p className="count">Count: {count}</p>
          <button
            className="counterBtn"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Click Me!
          </button>
        </div>
        <div>
          <button className="resetBtn" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
