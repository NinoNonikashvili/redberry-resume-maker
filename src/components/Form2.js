import React from "react";
import { useState, useEffect } from "react";

function Form2(props) {
  const [inputValue, setInputValue] = useState();

  //handle page reload. is data exists on storage get it.
  useEffect(() => {
    //get all the item including from form1
    setInputValue(sessionStorage.getItem("inputValue"));
  }, []);

  //on each input change, update central data which will be displayed in cv.
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

export default Form2;
