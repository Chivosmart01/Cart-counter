import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
    if (counter > -1) {
      setDisabled(false);
    }
  };

  const decreaseCounter = () => {
    if (counter === 0 ) {
      setDisabled(true);
      return;
    }
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="app">
      <h3>Number of items in Cart : {counter}</h3>
      <div className="btns">
        <button className="add-btn" onClick={increaseCounter}>
          Add Item To Cart
        </button>
        <button
          disable={disabled}
          className={`"remove-btn" ${!disabled ? "valid" : ""}`}
          onClick={decreaseCounter}
        >
          Remove Item From Cart
        </button>
      </div>
    </div>
  );
}

export default App;
