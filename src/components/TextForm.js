import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text");
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
  // const handleCapitalText = () => {
   
  // };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleOnClick}
        >
          TO UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleDownClick}
        >
          to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleClearText}
        >
          Clear Text
        </button>
        {/* <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={handleCapitalText}
        >
          Capitalized Text
        </button> */}
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>No. of Words : {text.split(" ").length}</p>
        <p>No. of Characters : {text.length}</p>
        <p>{0.008 * text.split(" ").length} Minute Read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
