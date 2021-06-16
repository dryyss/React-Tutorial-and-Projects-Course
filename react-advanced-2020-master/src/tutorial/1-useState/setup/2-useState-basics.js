import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  const [text, setText] = useState("random 18");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello dryyss");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className=" btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
