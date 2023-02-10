import React from "react";
import Cv from "./Cv";
import { useEffect } from "react";

function FormsAndCv(props) {
  return <Cv data={props.data} />;
}

export default FormsAndCv;
