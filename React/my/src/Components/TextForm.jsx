import React, { useState } from 'react';

export default function TextForm() {
  const [text, setText] = useState("Enter the text here");

  const handleonChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const setClear = () => {
    setText("");
  };
  const handleExtraSpace = () => {
    let newText=text.split(" ");
      setText(newText);
    };
  //  const handleCopy = () => {
  //   let newText=text.split();
  //     setText(newText);
  //   };
  return (
    <div>
      <textarea
        className="form-control my-3"
        id="floatingTextArea"
        placeholder="Leave a comment here"
        onChange={handleonChange}
        value={text}
        rows={8}
      ></textarea>
      <button className="btn btn-primary " onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>
        Remove space
      </button>
      <button className="btn btn-primary mx-4" onClick={setClear}>
        Clear
      </button>
      {/* <button className="btn btn-primary mx-5" onClick={handleCopy}>
        Copy text
      </button> */}
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and  {text.length} characters</p>
        <p>{0.002*text.split(" ")}</p>
      </div>
    </div>
  );
}
