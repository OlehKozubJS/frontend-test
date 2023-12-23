import { useState, useEffect } from "react";

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

  useEffect(() => {}, []);

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
