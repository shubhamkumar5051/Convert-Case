import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //   setText("hemlo");
  const handleOnClick = () => {
    let temp = text.toUpperCase();
    setText(temp);
    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length > 0
    )
      props.showAlert("Converted to UPPERCASE", "success");
  };

  const handleDownClick = () => {
    let temp2 = text.toLowerCase();
    setText(temp2);
    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length > 0
    )
      props.showAlert("Converted to lowercase", "success");
  };

  const handleClearText = () => {
    let temp = "";
    setText(temp);
    if (
      text.split(" ").filter((element) => {
        return element.length !== 0;
      }).length > 0
    )
      props.showAlert("Cleared", "success");
  };

  const CopyText = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text); //navigator api
    props.showAlert("Text Copied", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (text.length > 0) props.showAlert("Extra space Removed", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  //title case funtion
  const toCapitalize = () => {
    const mySentence = text;
    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );
    setText(finalSentence);
    props.showAlert("Captialize", "success");
  };

  //example logic
  const Example = () => {
    const exampleString = `Welcome to string converter\nDeveloper contact : shubham kumar\n\nLets go.................. \nNow you can perform every operation `;
    setText(exampleString);
  };

  //reverse string logic
  function toReverse() {
    const mySentence = text;
    const finalSentence = mySentence.split("").reverse().join("");
    setText(finalSentence);
  }
  // download feature
  function download(filename = "string-converter.txt") {
    const mySentence = text;
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(mySentence)
    );
    element.setAttribute("download", "string-converter");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
    props.showAlert("Downloading...", "success");
  }

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
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleOnClick}
        >
          TO UPPERCASE <i className="fas fa-arrow-up mx-1"></i>
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-sm btn-success mx-2 my-2"
          onClick={handleDownClick}
        >
          to lowercase <i className="fas fa-arrow-down"></i>
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning btn-sm mx-2 my-2"
          onClick={toReverse}
        >
          <b class="fas fa-history"> Reverse String</b>
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-dark btn-sm mx-2 my-2"
          onClick={toCapitalize}
        >
          Title Case
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-danger btn-sm mx-2 my-2"
          onClick={handleClearText}
        >
          Clear Text <i className="far fa-trash-alt mx-1"></i>
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-warning btn-sm mx-2 my-2"
          onClick={CopyText}
        >
          <i className="fas fa-copy"> Copy to Clipboard</i>
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary btn-sm mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra space
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success btn-sm mx-2 my-2"
          onClick={download}
        >
          <i class="fas fa-download"></i> Download
        </button>
        <button
          // disabled={text.length === 0}
          type="button"
          className="btn btn-danger btn-sm mx-2 my-2"
          onClick={Example}
        >
          Example
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          border: props.mode === "light" ? "1px solid blue" : "1px solid white",
        }}
      >
        <h2 style={{ paddingTop: "10px" }}>Text Summary 📃</h2>
        <p>
          <strong>No. of Words</strong> :{" "}
          {
            //it will split white space with one or more. and white space include new line also
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>
          <strong>No. of Characters</strong> : {text.length}
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          :<strong> Minutes Read </strong>
        </p>
        <h2>Preview Text</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here 👇🏾"}</p>
      </div>
    </>
  );
}
