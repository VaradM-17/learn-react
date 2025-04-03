import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import Greetings from "./components/Greetings";
import Employee from "./components/Employee";
import User from "./components/User";
import EventHandling from "./components/EventHandling";
import ConditionRendering from "./components/ConditionRendering";

function App() {
  
  return (
    <div className="App">
      {/* <Welcome name="Varad"></Welcome>
        <Greetings></Greetings> */}
      {/* <Employee></Employee> */}
      {/* <User></User> */}
      {/* <EventHandling></EventHandling> */}
      <ConditionRendering></ConditionRendering>
    </div>
  );
}

export default App;
