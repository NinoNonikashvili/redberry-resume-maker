import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ImageInput from "./smallerComponents/ImageInput";
import Input from "./smallerComponents/Input";
import Header from "./layoutComponents/Header";
import Button from "./smallerComponents/Button";
import TextArea from "./smallerComponents/TextArea";

function Form1(props) {
  //declarations
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const btnRef = useRef();
  //get default values from sessionStorage

  const fields = [
    "name",
    "surname",
    "image",
    "about_me",
    "email",
    "phone_number",
  ];
  const defValues = fields.map((element) => {
    if (element === "image") {
      return sessionStorage.getItem(element);
    } else {
      return JSON.parse(sessionStorage.getItem(element));
    }
  });
  let obj = defValues.reduce(
    (obj, elem, i) => ({ ...obj, [fields[i]]: elem ? elem : "" }),
    {}
  );
  // useEffect(() => {
  //   props.setData((prev) => {
  //     return { obj };
  //   });
  // }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: obj });
  //handle form submit
  const onSubmit = (data) => {
    console.log("data: " + data);
    navigate("/form2");
  };

  //set Default values from sessionStorage

  const redberryEmail = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@redberry.ge$/gm; //$
  const georgianChars = /^[ა-ჰ]+$/i;
  return (
    <>
      {/* <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      /> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "58%", marginRight: "0" }}
        encType="multipart/form-data"
      >
        <div
          style={{
            backgroundColor: "#F9F9F9",
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between",
            padding: "48px 150px",
            width: "100%",
          }}
        >
          <Header
            width="100%"
            title="პირადი ინფო"
            hasNumeration={true}
            hasNavIcon={true}
            numeration="1/3"
          />
          <Input
            {...register("name", {
              required: { value: true, message: "this field is required" },
              pattern: { value: georgianChars, message: "only georgian chars" },
              minLength: { value: 2, message: "enter min 2 chars" },
              maxLength: { value: 30, message: "enter max 30 chars" },
            })}
            errors={errors}
            isSubmitClicked={isSubmitClicked}
            label="სახელი"
            helpertext="მინიმუმ 2 ასო, ქართული ასოები"
            width="43%"
            setData={(prev) => props.setData(prev)}
          />
          <Input
            {...register("surname", {
              required: { value: true, message: "this field is required" },
              pattern: { value: georgianChars, message: "only georgian chars" },
              minLength: { value: 2, message: "enter min 2 chars" },
              maxLength: { value: 30, message: "enter max 30 chars" },
            })}
            errors={errors}
            isSubmitClicked={isSubmitClicked}
            label="გვარი"
            helpertext="მინიმუმ 2 ასო, ქართული ასოები"
            width="43%"
            setData={(prev) => props.setData(prev)}
          />
          <ImageInput
            isSubmitClicked={isSubmitClicked}
            setData={(prev) => props.setData(prev)}
          />
          <TextArea
            {...register("about_me")}
            label={"ჩემს შესახებ (არასავალდებულო)"}
            placeholder={"ზოგადი ინფო შენ შესახებ"}
            width="100%"
            isSubmitClicked={isSubmitClicked}
            setData={(prev) => props.setData(prev)}
          />
          <Input
            {...register("email", {
              required: { value: true, message: "this field is required" },
              pattern: { value: redberryEmail, message: "email is not valid" },
            })}
            errors={errors}
            isSubmitClicked={isSubmitClicked}
            label="ელ.ფოსტა"
            helpertext="უნდა მთავრდებოდეს @redberry.ge-ით"
            width="100%"
            setData={(prev) => props.setData(prev)}
          />
          <Input
            {...register("phone_number", {
              required: { value: true, message: "this field is required" },
              minLength: { value: 17, message: "enter 17 chars total" },
              maxLength: { value: 17, message: "enter 17 chars total" },
            })}
            isphone={"true"}
            errors={errors}
            isSubmitClicked={isSubmitClicked}
            label="მობილურის ნომერი"
            helpertext="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
            width="100%"
            setData={(prev) => props.setData(prev)}
          />
          <Button
            text="შემდეგი"
            type="submit"
            ref={btnRef}
            onClick={() => setIsSubmitClicked(true)}
          />
        </div>
      </form>
    </>
  );
}

export default Form1;
