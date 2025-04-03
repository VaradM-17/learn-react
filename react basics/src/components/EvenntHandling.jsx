import React, { useState } from "react";

const EventHandling = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function reset() {
    setCount(0);
  }
  
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h1>Event Handling</h1>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default EventHandling;
