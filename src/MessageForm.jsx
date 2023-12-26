import axios from "axios";
import { useState, useEffect } from "react";

const MessageForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [newData, setNewData] = useState({ name, message });

  const handleNameInput = (event) => {
    const newName = event.currentTarget.value;
    setName(newName);
  };

  const handleMessageInput = (event) => {
    const newMessage = event.currentTarget.value;
    setMessage(newMessage);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, message });
  };

  useEffect(() => {
    const addNewMessage = async () => {
      try {
        await axios.post("http://localhost:3000/save", newData);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    addNewMessage();
  }, [newData]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        onInput={handleNameInput}
        value={name}
      />
      <textarea
        placeholder="Enter your message"
        onInput={handleMessageInput}
        value={message}
      ></textarea>
      <button type="submit">Enter</button>
    </form>
  );
};

export { MessageForm };
