import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import Greetings from "./components/Greetings";
import Employee from "./components/Employee";
import User from "./components/User";

function App() {
  
  return (
    <div className="App">
      {/* <Welcome name="Varad"></Welcome>
        <Greetings></Greetings> */}
      {/* <Employee></Employee> */}
      <User></User>
    </div>
  );
}

export default App;
