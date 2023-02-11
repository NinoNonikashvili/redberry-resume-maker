import React, { useEffect } from "react";
import { useState } from "react";

function TextArea(props, ref) {
  const [value, setValue] = useState("");
  useEffect(() => {
    const value = JSON.parse(sessionStorage.getItem(props.name));
    setValue(value);

    // console.log("sessionStorage initial: " + text);
  }, []); //without this below function is executed where value is empty string and it is stored in storage

  useEffect(() => {
    sessionStorage.setItem(props.name, JSON.stringify(value));
    props.setData((prev) => {
      return { ...prev, [props.name]: value };
    });
  }, [value]);

  return (
    <div
      style={{
        ...TextAreaStyles.WrapperStyles,
        ...{ width: `${props.width}` },
      }}
    >
      <label style={TextAreaStyles.LabelStyles}>{props.label}</label>
      <textarea
        ref={ref}
        placeholder={props.placeholder}
        style={TextAreaStyles.TextStyles}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...(props.isSubmitClicked &&
          value && {
            style: {
              ...TextAreaStyles.TextStyles,
              ...{ borderColor: "#98E37E" },
            },
          })}
        onBlur={(e) => {
          e.target.style.color = "#00000099";
        }}
        onFocus={(e) => {
          e.target.style.color = "#000000";
        }}
      ></textarea>
    </div>
  );
}

const TextAreaStyles = {
  WrapperStyles: {
    margin: "54px 0 0",
  },
  LabelStyles: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "21px",
  },
  TextStyles: {
    outline: "none",
    margin: "8px 0",
    padding: "13px 16px",
    width: "100%",
    height: "100px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "21px",
    border: "1px solid #BCBCBC",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF",
    caretColor: "#6499FF",
    color: "#000000",
    resize: "none",
  },
};
export default React.forwardRef(TextArea);
