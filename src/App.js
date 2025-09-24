import React, { useState } from "react";
import OrchidsList from "./components/OrchidsList";
import { Button } from "react-bootstrap";
import "./Orchids.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light 🌞" : "Switch to Dark 🌙"}
        </Button>
      </div>
      <OrchidsList />
    </div>
  );
}

export default App;
