// new data code
// import React, { useState } from "react";
// import axios from "axios";
// export default function TextForm(props) {
//   const [text, setText] = useState("");
//   //   setText("hemlo");
//   const handleOnClick = () => {
//     let temp = text.toUpperCase();
//     setText(temp);
//     if (
//       text.split(" ").filter((element) => {
//         return element.length !== 0;
//       }).length > 0
//     )
//       props.showAlert("Converted to UPPERCASE", "success");
//   };

//   const handleDownClick = () => {
//     let temp2 = text.toLowerCase();
//     setText(temp2);
//     if (
//       text.split(" ").filter((element) => {
//         return element.length !== 0;
//       }).length > 0
//     )
//       props.showAlert("Converted to lowercase", "success");
//   };

//   const handleClearText = () => {
//     let temp = "";
//     setText(temp);
//     if (
//       text.split(" ").filter((element) => {
//         return element.length !== 0;
//       }).length > 0
//     )
//       props.showAlert("Text Cleared", "danger");
//   };

//   const CopyText = () => {
//     // var text = document.getElementById("myBox");
//     // text.select();
//     navigator.clipboard.writeText(text); //navigator api
//     props.showAlert("Text Copied", "success");
//   };

//   const handleExtraSpaces = () => {
//     let newText = text.split(/[ ]+/);
//     setText(newText.join(" "));
//     if (text.length > 0) props.showAlert("Extra space Removed", "success");
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   //title case funtion
//   const toCapitalize = () => {
//     const mySentence = text;
//     const finalSentence = mySentence.replace(
//       /(^\w|\s\w)(\S*)/g,
//       (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
//     );
//     setText(finalSentence);
//     props.showAlert("Captialize", "success");
//   };

//   //sentence case
//   const sentenceCase = () => {
//     const str = text;
//     const capitalized =
//       str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//     setText(capitalized);
//     props.showAlert(" ", "success");
//   };

//   //example logic
//   const Example = () => {
//     const exampleString = `Welcome to String Converter.. To change the case of your text, paste it here and press the corresponding buttons below`;
//     setText(exampleString);
//     props.showAlert("Demo Example", "success");
//   };

//   //reverse string logic
//   function toReverse() {
//     const mySentence = text;
//     const finalSentence = mySentence.split("").reverse().join("");
//     setText(finalSentence);
//     props.showAlert("Reversed", "success");
//   }
//   // download feature
//   function download(filename = "string-converter.txt") {
//     const mySentence = text;
//     var element = document.createElement("a");
//     element.setAttribute(
//       "href",
//       "data:text/plain;charset=utf-8," + encodeURIComponent(mySentence)
//     );
//     element.setAttribute("download", "string-converter");

//     element.style.display = "none";
//     document.body.appendChild(element);

//     element.click();
//     document.body.removeChild(element);
//     props.showAlert("Downloading...", "success");
//   }
//   //encrypt
//   const Encrypt = () => {
//     var str = text;
//     var enc = window.btoa(str);
//     var res = enc;
//     setText(res);
//     props.showAlert("String is Encrypetd!", "success");
//   };

//   //grammer check
//   let handleGrammerCheck = () => {
//     let data = text.split(/[ ]+/).join("+");
//     axios({
//       url: `https://api.textgears.com/grammar?text=${data}!&language=en-GB&whitelist=&dictionary_id=&key=BssNrgSeKD9Th2Up`,
//     })
//       .then(function (response) {
//         if (response.data.description) {
//           props.showAlert(
//             "Plese set your key of api.Get it from https://textgears.com!",
//             "error"
//           );
//         } else {
//           let checkedText = text;
//           for (let i in response.data.response.errors) {
//             checkedText = checkedText.replace(
//               response.data.response.errors[i].bad,
//               response.data.response.errors[i].better[0]
//             );
//           }
//           setText(checkedText);
//           props.showAlert("Grammer Mistakes Fixed!", "success");
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
//   return (
//     <>
//       <div
//         className="container"
//         style={{
//           color: props.mode === "light" ? "black" : "white",
//         }}
//       >
//         <h2>{props.heading}</h2>
//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             placeholder="Enter the Text"
//             id="myBox"
//             rows="6"
//             value={text}
//             onChange={handleOnChange}
//             style={{
//               backgroundColor: props.mode === "light" ? "white" : "#0d0e1a",
//               color: props.mode === "light" ? "black" : "white",
//             }}
//           ></textarea>
//         </div>
//         <button
//           style={{ backgroundColor: "#0a8a7e", borderColor: "#0a8a7e" }}
//           // style={{
//           //   backgroundImage: "linear-gradient(#d72df4 ,#2a0707cf)",
//           //   color: "white",
//           //   border: "none",
//           // }}
//           type="button"
//           className="btn btn-dark mx-2 my-2"
//           onClick={Example}
//         >
//           Example Text
//         </button>
//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-primary btn-sm mx-2 my-2"
//           onClick={handleOnClick}
//         >
//           TO UPPERCASE <i className="fas fa-arrow-up mx-1"></i>
//         </button>
//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-sm btn-success mx-2 my-2"
//           onClick={handleDownClick}
//         >
//           to lowercase <i className="fas fa-arrow-down"></i>
//         </button>

//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-success btn-sm mx-2 my-2"
//           onClick={sentenceCase}
//         >
//           Sentence case
//         </button>
//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-dark btn-sm mx-2 my-2"
//           onClick={toCapitalize}
//         >
//           Title Case
//         </button>

//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-warning btn-sm mx-2 my-2"
//           onClick={toReverse}
//         >
//           <b className="fas fa-history"> Reverse String</b>
//         </button>
//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-danger btn-sm mx-2 my-2"
//           onClick={handleClearText}
//         >
//           Clear Text <i className="far fa-trash-alt mx-1"></i>
//         </button>

//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-warning btn-sm mx-2 my-2"
//           onClick={CopyText}
//         >
//           <i className="fas fa-copy"> Copy to Clipboard</i>
//         </button>

//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-primary btn-sm mx-2 my-2"
//           onClick={handleExtraSpaces}
//         >
//           Remove Extra space
//         </button>
//         <button
//           disabled={text.length === 0}
//           className="btn btn-primary btn-sm mx-1 my-1"
//           onClick={Encrypt}
//         >
//           Encrypt Data
//         </button>
//         <button
//           disabled={text.length === 0}
//           className="btn btn-dark btn-sm mx-1 my-1"
//           onClick={handleGrammerCheck}
//         >
//           Fix Grammer mistakes
//         </button>

//         <button
//           disabled={text.length === 0}
//           type="button"
//           className="btn btn-success btn-sm mx-2 my-2"
//           onClick={download}
//         >
//           <i className="fas fa-download"></i> Download
//         </button>
//       </div>
//       <div
//         className="container my-3"
//         style={{
//           color: props.mode === "light" ? "black" : "white",
//           border: props.mode === "light" ? "1px solid blue" : "1px solid white",
//         }}
//         n
//       >
//         <h2 style={{ paddingTop: "10px" }}>Text Summary 📃</h2>
//         <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
//           <strong style={{ color: props.mode === "light" ? "black" : "white" }}>
//             No. of Words :{" "}
//           </strong>{" "}
//           {
//             //it will split white space with one or more. and white space include new line also
//             text.split(/\s+/).filter((element) => {
//               return element.length !== 0;
//             }).length
//           }
//         </p>
//         <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
//           <strong style={{ color: props.mode === "light" ? "black" : "white" }}>
//             No. of Characters :{" "}
//           </strong>{" "}
//           {text.length}
//         </p>
//         <p style={{ color: props.mode === "light" ? "red" : "#f05f2a" }}>
//           <strong style={{ color: props.mode === "light" ? "black" : "white" }}>
//             Minutes read :{" "}
//           </strong>
//           {0.008 *
//             text.split(" ").filter((element) => {
//               return element.length !== 0;
//             }).length}{" "}
//         </p>
//         <h2>Preview Text</h2>
//         <p>{text.length > 0 ? text : "Enter something to preview here 👇🏾"}</p>
//       </div>
//     </>
//   );
// }




//old data


import React, { useState } from "react";
import axios from "axios";
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
    const exampleString = `Welcome to String Converter\nDeveloper Contact : Shubham Kumar\n\nTo change the case of your text, paste it here and press the corresponding buttons below`;
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
          // disabled={text.length === 0}
          type="button"
          className="btn btn-danger btn-sm mx-2 my-2"
          onClick={Example}
        >
          Example Text
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
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
          border: props.mode === "light" ? "1px solid blue" : "1px solid white",
        }}
        n
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
