import React, { useState } from "react";

const ConditionRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let message;

  //   if (isLoggedIn) {
  //     message = <p>Welcome,Varad</p>;
  //   } else {
  //     message = <p>Login First!</p>;
  //   }

  function login() {
    setIsLoggedIn(true);
  }

  return (
    <div>
      {
        // isLoggedIn? <p>Welcome,Varad</p>:<p>Login First!</p>
        isLoggedIn && <p>Welcome,Varad</p>
      }
      <h1>{message}</h1>

      <br />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default ConditionRendering;
