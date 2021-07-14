import React from "react";

function Square(props) {
  const style = {
    margin: "10px 10px 10px 10px",

    border: "5px solid green",
    textAlign: "center",
    fontSize: "100px",
    fontWeight: "100",
  };

  return (
    <button className="squareButton" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
