import React from "react";

function Button(props, ref) {
  return (
    <button
      style={{ ...NavBtnStyles.Default, ...props?.styles }}
      type={props.type}
      ref={ref}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

const NavBtnStyles = {
  Default: {
    width: "151px",
    height: "48px",
    backgroundColor: "#6B40E3",
    color: "#FFFFFF",
    borderRadius: "4px",
    border: "none",
    padding: "9px 35px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.08em",
    margin: "130px 0 25px auto",
    fontVariantCaps: "all-petite-caps",
  },
  Disabled: {
    backgroundColor: "#7949FF",
  },
  Clicked: {
    backgroundColor: "#512FAF",
  },
};
export default React.forwardRef(Button);
