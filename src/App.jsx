import React, { useState } from "react";
import Button from "./Button";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const handle = (e) => {
    e.preventDefault();

    console.log(setNum1);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="number">Numero 1: </label>
          <input
            type="number"
            onChange={(e) => setNum1(e.target.value)}
            value={num1}
          />
        </div>
        <div>
          <label htmlFor="number">Numero 2: </label>
          <input type="number" />
        </div>
        <div>
          <Button text="Calcular" />
        </div>
      </form>
    </div>
  );
};

export default App;
