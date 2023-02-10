import React, { useEffect } from "react";

function Cv(props) {
  //gets data from props only. form side ensures that data is always correct either types or from sessionStorage
  return (
    <>
      <div style={{ position: "absolute", top: "0", right: "0" }}>
        <p>this is data updated in form:</p>
        <img src={props.data?.image} style={{ width: "250px" }} />
      </div>
    </>
  );
}

export default Cv;
