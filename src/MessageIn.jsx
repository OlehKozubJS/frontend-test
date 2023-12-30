import axios from "axios";
import { useState, useEffect } from "react";

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
    const saveData = async () => {
      try {
        const response = text[0];
        const responseString = JSON.stringify(response);
        await onSubmit(responseString);
        console.log(response);
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    saveData();
  }, [request]);
  /*await axios.get("http://localhost:3000/load", request)*/
  return (
    <form onSubmit={handleSubmit}>
      <textarea cols="30" rows="10" onInput={handleInput}></textarea>
      <button type="submit">Enter</button>
    </form>
  );
};

export { MessageIn };
