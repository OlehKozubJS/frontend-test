import axios from "axios";
import { useState, useEffect } from "react";

const MessageIn = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [request, setRequest] = useState({ text: "" });

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setRequest({ text: request });
  };

  useEffect(() => {
    const saveData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/save", request);
        await onSubmit(response);
        console.log(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    saveData();
  }, [request]);

  return (
    <form onSubmit={handleSubmit}>
      <textarea cols="30" rows="10" onInput={handleInput}></textarea>
      <button type="submit"></button>
    </form>
  );
};

export { MessageIn };
