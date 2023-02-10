import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ImageInput from "./smallerComponents/ImageInput";

function Form1(props) {
  //declarations
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //handle form submit
  const onSubmit = (data) => {
    console.log("data: " + data);
    // navigate("/form2");
  };

  //handle page reload. is data exists on storage get it.
  useEffect(() => {
    if (sessionStorage.getItem("name"))
      setInputValue(sessionStorage.getItem("name"));
  }, []);

  //on each input change, update central data which will be displayed in cv.
  useEffect(() => {
    props.setData(inputValue);
    sessionStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  return (
    <>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ImageInput
          isSubmitClicked={isSubmitClicked}
          setData={(prev) => props.setData(prev)}
        />
        <button type="submit" onClick={() => setIsSubmitClicked(true)}>
          submit
        </button>
      </form>
    </>
  );
}

export default Form1;
