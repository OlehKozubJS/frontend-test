import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [newData, setNewData] = useState("");
  const [messages, setMessages] = useState("");

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
    setNewData(`name: ${name}\nmessage\n${message}`);
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/load");
        const data = await response.data;
        setMessages(data);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    getMessages();
  }, [newData]);

  useEffect(() => {
    const addNewMessage = async () => {
      try {
        const response = await axios.post("http://localhost:3000/save", {
          newData,
        });
        console.log(response);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    addNewMessage();
  }, [newData]);

  return (
    <div>
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
      <div>
        <p>{messages}</p>
      </div>
    </div>
  );
};

export { App };
