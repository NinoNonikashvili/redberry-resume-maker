import React from "react";
import Button from "./smallerComponents/Button";
import { useRef } from "react";
import logo from "../assets/logo.svg";
import bg from "../assets/bg.png";
import { Link } from "react-router-dom";

function Main() {
  const btnRef = useRef();
  return (
    <div style={MainStyles.WrapperStyles}>
      <h1 style={MainStyles.HeaderStyles}>
        <img src={logo} />
      </h1>
      <Link to="/form1" style={{ margin: "0 728px" }}>
        <Button
          styles={MainStyles.ButtonStyles}
          type="button"
          ref={btnRef}
          text={"რეზიუმეს დამატება"}
        />
      </Link>
    </div>
  );
}

const MainStyles = {
  WrapperStyles: {
    backgroundImage: `url(${bg})`,
    backgroundSize: "contain",
    width: "100vw",
    height: "100vh",
    padding: "25px 0 0",
  },
  HeaderStyles: {
    width: "1780px",
    borderBottom: "1px solid #1A1A1A",
    margin: "0 auto",
  },
  ButtonStyles: {
    width: "465px",
    height: "60px",
    backgroundColor: "#1A1A1A",
    fontSize: "20px",
    lineHeight: "24px",
    margin: "442px auto",
  },
};
export default Main;
