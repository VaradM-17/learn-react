import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Welcome from "./components/Welcome";
import "./App.css";
import Greetings from "./components/Greetings";
import Employee from "./components/Employee";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        {/* <Welcome name="Varad"></Welcome>
        <Greetings></Greetings> */}
        <Employee></Employee>
      </div>
    </>
  );
}

export default App;
