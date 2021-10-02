import "./App.css";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

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
    }, 2000);
  };

  //toggle function
  const toggleButton = () => {
    if (usermode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d0e1a";
      showAlert("Dark mode Enabled", "success");
      document.title = "Convert-Case Dark-mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", "success");
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
      <Footer mode={usermode} />
    </>
  );
}

export default App;
