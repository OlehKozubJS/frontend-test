import { useState } from "react";
import { MessageIn } from "./MessageIn";

const App = () => {
  const [response, setResponse] = useState("");

  const handleSubmit = (data) => {
    setResponse(data);
  };

  return (
    <div>
      <MessageIn onSubmit={handleSubmit} />
      <p>{response}</p>
    </div>
  );
};

export { App };
