import { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Enter</button>
      </form>
      <div>
        <button type="button">Update Messages</button>
        <p></p>
      </div>
    </div>
  );
};
