import { useState, useEffect } from "react";
import axios from "axios";
import { MessageForm } from "./MessageForm";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newData, setNewData] = useState(0);

  const handleClick = () => {
    setNewData(newData + 1);
    console.log(newData);
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

  return (
    <div>
      <MessageForm />
      <div>
        <button onClick={handleClick}>Reset Messages</button>
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
