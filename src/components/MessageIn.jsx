import { useState, useEffect } from "react";
import { saveData } from "../controllers";

const MessageIn = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [request, setRequest] = useState({ text: "" });

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRequest({ text: text });
  };

  useEffect(() => {
    saveData(request, onSubmit);
  }, [request]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea cols="30" rows="10" onInput={handleInput}></textarea>
      <button type="submit">Enter</button>
    </form>
  );
};

export { MessageIn };
