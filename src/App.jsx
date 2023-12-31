import { useState } from "react";
import { MessageIn, NumberIn } from "./components";

const App = () => {
  const [response, setResponse] = useState([]);

  const handleSubmit = (data) => {
    const dataArray = data.split("\n") || [];
    setResponse(dataArray);
  };

  return (
    <div>
      <MessageIn onSubmit={handleSubmit} />
      <NumberIn onSubmit={handleSubmit} />
      <ul>
        {response.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export { App };
