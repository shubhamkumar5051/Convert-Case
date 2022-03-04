import React, { useState } from "react";
import axios from "axios";
import "./TextForm.css";
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
      props.showAlert("Text Cleared", "danger");
  };
  //copy text
  const CopyText = () => {
    // var text = document.getElementById("myBox");
    //text.select();
    navigator.clipboard.writeText(text); //navigator api
    props.showAlert("Text Copied", "success");
  };

  //handle extra space
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
    const finalSentence = mySentence.replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
    );
    setText(finalSentence);
    props.showAlert("Captialize", "success");
  };

  //sentence case
  const sentenceCase = () => {
    const str = text;
    const capitalized =
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    setText(capitalized);
    props.showAlert(" ", "success");
  };

  //example logic
  const Example = () => {
    const exampleString = `Welcome to String Converter..\n\nTo change the case of your text, paste it here and press the corresponding buttons below`;
    setText(exampleString);
    props.showAlert("Demo Example", "success");
  };
  // random string
  function randomString() {
    let length = 100;
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setText(result);
  }

  //reverse string logic
  function toReverse() {
    const mySentence = text;
    const finalSentence = mySentence.split("").reverse().join("");
    setText(finalSentence);
    props.showAlert("Reversed", "success");
  }
  //truncate string
  const toTruncate = () => {
    const str = text;
    let num = 0;
    var temp = 0;
    num = prompt("Enter the length to Truncate the string");
    if (str.length > num) {
      temp = 1;
      let subStr = str.substring(0, num);
      setText(subStr);
    } else {
      setText(str);
    }
    if (temp === 1) {
      props.showAlert(`String Truncated`, "success");
    } else {
      props.showAlert(`Error: Truncate Size > Length of string `, "danger");
    }
  };

  // remove empty lines
  const emptyLines = () => {
    let string = text;
    string = string.replace(/^\s*\n/gm, "");
    setText(string);
  };

  //remove total whitespaces
  const whiteSpaces = () => {
    let string = text;
    string = string.replace(/\s/g, "");
    setText(string);
  };

  //string to ascii
  const toAscii = () => {
    let str = text;
    let arr = [];
    let j = 0;
    for (let i = 0; i < str.length; i++) {
      arr[j] = str.charCodeAt(i);
      j++;
    }
    setText(arr);
  };

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

  //encrypt
  const Encrypt = () => {
    var str = text;
    var enc = window.btoa(str);
    var res = enc;
    setText(res);
    props.showAlert("String is Encrypetd!", "success");
  };

  //grammer check
  let handleGrammerCheck = () => {
    let data = text.split(/[ ]+/).join("+");
    axios({
      url: `https://api.textgears.com/grammar?text=${data}!&language=en-GB&whitelist=&dictionary_id=&key=BssNrgSeKD9Th2Up`,
    })
      .then(function (response) {
        if (response.data.description) {
          props.showAlert(
            "Plese set your key of api.Get it from https://textgears.com!",
            "error"
          );
        } else {
          let checkedText = text;
          for (let i in response.data.response.errors) {
            checkedText = checkedText.replace(
              response.data.response.errors[i].bad,
              response.data.response.errors[i].better[0]
            );
          }
          setText(checkedText);
          props.showAlert("Grammer Mistakes Fixed!", "success");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3 shadow-lg">
          <textarea
            className="form-control "
            placeholder="Enter the Text"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#0d0e1a",
              color: props.mode === "light" ? "black" : "white",
              border: "4px solid grey",
            }}
          ></textarea>
        </div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <button
                disabled={text.length === 0}
                type="button"
                className="btn btn-primary btn-sm mx-2 my-2"
                onClick={toAscii}
              >
                To Ascii
              </button>
              <button
                // style={{ backgroundColor: "#0a8a7e", borderColor: "#0a8a7e" }}

                type="button"
                className="btn btn-dark mx-2 my-2 btn-sty"
                onClick={Example}
              >
                Example Text
              </button>
              <button
                type="button"
                className="btn btn-dark mx-2 my-2 btn-sty"
                onClick={randomString}
              >
                Random String
              </button>
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
                className="btn btn-success btn-sm mx-2 my-2"
                onClick={sentenceCase}
              >
                Sentence case
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
                className="btn btn-warning btn-sm mx-2 my-2"
                onClick={toReverse}
              >
                <b className="fas fa-history"> Reverse String</b>
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
                className="btn btn-success btn-sm mx-2 my-2"
                onClick={toTruncate}
              >
                Truncate
              </button>
              <button
                disabled={text.length === 0}
                type="button"
                className="btn btn-success btn-sm mx-2 my-2"
                onClick={emptyLines}
              >
                Remove Empty Lines
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
                className="btn btn-danger btn-sm mx-2 my-2"
                onClick={whiteSpaces}
              >
                Remove WhiteSpaces
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
                className="btn btn-primary btn-sm mx-1 my-1"
                onClick={Encrypt}
              >
                Encrypt Data
              </button>
              <button
                disabled={text.length === 0}
                className="btn btn-dark btn-sm mx-1 my-1"
                onClick={handleGrammerCheck}
              >
                Fix Grammer mistakes
              </button>

              <button
                disabled={text.length === 0}
                type="button"
                className="btn btn-success btn-sm mx-2 my-2"
                onClick={download}
              >
                <i className="fas fa-download"></i> Download
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          border: props.mode === "light" ? "1px solid blue" : "1px solid white",
        }}
        n
      >
        <div className="row">
          <div className="column">
            <h2 style={{ paddingTop: "10px" }}>Text Summary 📃</h2>

            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                No. of Words :{" "}
              </strong>{" "}
              {
                //it will split white space with one or more. and white space include new line also
                text.split(/\s+/).filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </p>
            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                No. of Characters :{" "}
              </strong>{" "}
              {text.length}
            </p>
            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Minutes read :{" "}
              </strong>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
            </p>
            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Total No. Of Lines :{" "}
              </strong>
              {text.split(/\r\n|\r|\n/).length}
            </p>
            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                No. Of Non-Empty Lines :{" "}
              </strong>
              {
                text.split("\n").filter((element) => {
                  return element.length !== 0;
                }).length
              }{" "}
            </p>
            <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
              <strong
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                No. Of Empty Lines :{" "}
              </strong>
              {text.split(/\r\n|\r|\n/).length -
                text.split("\n").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
            </p>

            <h2>Preview Text</h2>
            <p style={{ wordWrap: "break-word" }}>
              {text.length > 0 ? text : "Enter something to preview here 👇🏾"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
