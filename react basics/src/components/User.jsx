import React from "react";
import { useState } from "react";

const User = () => {
  //   const [firstName, setfirstName] = useState("Varad");

  const [user, setUser] = useState({
    firstName: "Varad",
  });

  function updateUser() {
    // setfirstName("Vam");

    setUser({
      firstName: "Vam",
    });
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>{user.firstName}</p>
      <button onClick={() => updateUser()}>Update</button>
    </div>
  );
};

export default User;
