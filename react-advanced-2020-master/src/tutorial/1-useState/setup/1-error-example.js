import React from "react";

const ErrorExample = () => {
  let title = " random title";
  const handleClick = () => {
    title = "hello people ";
  };
  return (
    <>
      <h2>{title}</h2>
      <button typ="buton" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
