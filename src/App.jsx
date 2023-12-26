import { useState, useEffect } from "react";
import axios from "axios";
import { MessageForm } from "./MessageForm";

const App = () => {
  const [messages, setMessages] = useState([]);

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
  }, []);

  return (
    <div>
      <MessageForm />
      <div>
        <ul>
          {messages.map((message, messageIndex) => {
            return (
              <li key={messageIndex}>
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
