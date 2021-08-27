import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [usermode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  //function to show alert msg
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //toggle function
  const toggleButton = () => {
    if (usermode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0e1a";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Convert-Case Dark-mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Convert-Case Light-mode";
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
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm
          mode={usermode}
          heading="Enter the text 📜 to Analyze below 👇"
          showAlert={showAlert}
        />
        {/* <AboutUs /> */}
      </div>
    </>
  );
}

export default App;
