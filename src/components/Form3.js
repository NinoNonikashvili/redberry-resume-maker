import React from "react";
import { useState, useEffect } from "react";

function Form3(props) {
  const [inputValue, setInputValue] = useState();
  useEffect(() => {
    setInputValue(sessionStorage.getItem("inputValue"));
  }, []);

  useEffect(() => {
    props.setData(inputValue);
  }, [inputValue]);
  return (
    <input
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}

export default Form3;
