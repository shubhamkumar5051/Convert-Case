import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("hemlo");
  const handleOnClick = () => {
    let temp = text.toUpperCase();
    setText(temp);
  };

  const handleDownClick = () => {
    let temp2 = text.toLowerCase();
    setText(temp2);
  };

  const handleClearText = () => {
    let temp = "";
    setText(temp);
  };

  const CopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const myStyle = {
  //   border: "2px solid blue",
  //   width: "98%",
  // };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter the Text"
            id="myBox"
            rows="6"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0d0e1a",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleOnClick}
        >
          TO UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={handleDownClick}
        >
          to lowercase
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={handleClearText}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-warning mx-2 my-2"
          onClick={CopyText}
        >
          <i class="fas fa-copy"> Copy to Clipboard</i>
        </button>

        <button
          type="button"
          className="btn btn-dark mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          border: props.mode === "light" ? "1px solid blue" : "1px solid white",
        }}
      >
        <h2>Text Summary</h2>
        <p>No. of Words : {text.split(" ").length}</p>
        <p>No. of Characters : {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minute Read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here 👇🏾"}</p>
      </div>
    </>
  );
}
