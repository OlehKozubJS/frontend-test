import { useState, useEffect } from "react";
import { removeData } from "../controllers";

const NumberIn = ({ onSubmit }) => {
  const [number, setNumber] = useState(-1);
  const [request, setRequest] = useState(-1);

  const handleInput = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRequest(number);
  };

  useEffect(() => {
    removeData(request, onSubmit);
  }, [request]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" onInput={handleInput} />
      <button type="submit">Enter</button>
    </form>
  );
};

export { NumberIn };
