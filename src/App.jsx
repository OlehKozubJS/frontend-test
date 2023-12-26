import { useState, useEffect } from "react";
import axios from "axios";
import { MessageForm } from "./MessageForm";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newData, setNewData] = useState(0);
  const [number, setNumber] = useState(0);
  const [messageToDeleteId, setMessageToDeleteId] = useState(-1);

  const handleClick = () => {
    setNewData(newData + 1);
    console.log(newData);
  };

  const handleNumberInput = (event) => {
    const number = Number(event.currentTarget.value);
    setNumber(number);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setMessageToDeleteId(number);
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
    const removeMessage = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:3000/remove/:${messageToDeleteId}`
        );
        const data = await response.data;
        console.log(data);
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
    removeMessage();
  }, [messageToDeleteId]);

  return (
    <div>
      <MessageForm />
      <div>
        <button onClick={handleClick}>Reset Messages</button>
        <form onSubmit={handleDelete}>
          <input
            type="number"
            placeholder="Enter id of component to delete"
            onInput={handleNumberInput}
            value={number}
          />
          <button type="submit">Enter</button>
        </form>
        <ul>
          {messages.map((message) => {
            return (
              <li key={message.messageIndex}>
                <h3>{message.name}</h3>
                <p>{message.message}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { App };

/*

*/
