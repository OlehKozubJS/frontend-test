import axios from "axios";
import { useState, useEffect } from "react";

const MessageForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

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
    const getMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/load");
        const data = await response.data;
        setMessages(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    getMessages();
  }, [handleSubmit]);

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
