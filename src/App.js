import "./App.css";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="shubh" link1="Home" />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze below" />
        <AboutUs />
      </div>
      
    </>
  );
}

export default App;
