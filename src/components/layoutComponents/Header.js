import React from "react";
import { useRef } from "react";
import NavIcon from "../smallerComponents/NavIcon";

function Header(props) {
  const NavIconHeaderRef = useRef();
  return (
    <div
      style={{ ...HeaderStyles.WrapperStyles, ...{ width: `${props.width}` } }}
    >
      {props.hasNavIcon && (
        <NavIcon
          ref={NavIconHeaderRef}
          positionStyle={HeaderStyles.NavIconStyles}
        />
      )}

      <h1 style={HeaderStyles.TitleStyles}>{props.title}</h1>
      {props.hasNumeration && (
        <p style={HeaderStyles.NumerationStyles}>{props.numeration}</p>
      )}
    </div>
  );
}
const HeaderStyles = {
  WrapperStyles: {
    margin: "0 auto 35px",
    borderBottom: "1px solid #1A1A1A",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TitleStyles: {
    color: "#1A1A1A",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "29px",
    fontVariantCaps: "all-petite-caps",
  },
  NumerationStyles: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#1A1A1A",
  },
  NavIconStyles: {
    position: "absolute",
    borderRadius: "50%",
    top: "4px",
    left: "-65px",
  },
};

export default Header;
