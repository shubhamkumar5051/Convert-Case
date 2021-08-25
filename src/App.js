import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [usermode, setMode] = useState("light");
  let toggleButton = () => {
    if (usermode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0e1a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Converter"
        link1="Home"
        mode={usermode}
        toggleButton={toggleButton}
      />
      <div className="container my-4">
        <TextForm
          mode={usermode}
          heading="Enter the text 📜 to Analyze below 👇"
        />
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
