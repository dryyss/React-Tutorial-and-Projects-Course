import React, { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("je suis dryyss");
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: `je suis dryyss`,
  });

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello dryyss" });
    setMessage("hello dryyss");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
